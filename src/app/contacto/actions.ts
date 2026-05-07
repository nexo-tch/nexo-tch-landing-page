"use server";

import { headers } from "next/headers";
import { z } from "zod";
import {
  rateLimit,
  clientIpFromHeaders,
} from "@/lib/security/ratelimit";
import { verifyTurnstileToken } from "@/lib/security/turnstile";
import { isDisposableEmail } from "@/lib/security/disposable-emails";
import { isAllowedOrigin } from "@/lib/security/origin";
import {
  forwardLead,
  hashIp,
  type LeadPayload,
} from "@/lib/security/prospecting-api";

/**
 * Schema server-side. Es independiente del schema del cliente a propósito:
 * NO confiar en validación cliente, repetirla siempre acá.
 *
 * Reglas más estrictas que el cliente para frenar bots:
 * - max length agresivos
 * - rechazo de emails desechables
 * - honeypot debe estar vacío
 * - consentimiento debe ser exactamente "true"
 */
const SubmitLeadSchema = z.object({
  empresa: z
    .string()
    .trim()
    .min(2, "Nombre de empresa muy corto")
    .max(120, "Nombre de empresa muy largo"),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Email inválido")
    .max(160, "Email muy largo")
    .refine(
      (email) => !isDisposableEmail(email),
      "Usá un correo corporativo, no uno desechable",
    ),
  productos: z
    .array(z.enum(["cafe", "protein", "snacks"]))
    .min(1, "Seleccioná al menos un producto")
    .max(3),
  nombre: z.string().trim().max(120).optional(),
  empleados: z
    .enum(["", "1-20", "21-50", "51-100", "100+"])
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  tipoEspacio: z
    .enum(["", "oficina", "coworking", "gimnasio", "universidad", "otro"])
    .optional()
    .transform((v) => (v === "" ? undefined : v)),
  ciudad: z.string().trim().max(60).optional(),
  telefono: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s\-()]{0,30}$/, "Teléfono inválido")
    .optional()
    .or(z.literal("")),
  mensaje: z.string().trim().max(2000).optional(),
  consentimiento: z.literal("true", {
    message: "Debes aceptar la política de tratamiento de datos",
  }),
  // Honeypot: si trae cualquier valor, es bot.
  website: z.string().max(0).optional().or(z.literal("")),
  // Token de Turnstile (puede no venir si no está configurado).
  turnstileToken: z.string().optional().or(z.literal("")),
});

export type SubmitLeadResult =
  | { ok: true; requestId: string }
  | {
      ok: false;
      error:
        | "invalid_origin"
        | "rate_limited"
        | "validation_failed"
        | "bot_detected"
        | "turnstile_failed"
        | "upstream_failed";
      message: string;
      fieldErrors?: Record<string, string[]>;
      retryAfterSeconds?: number;
    };

/**
 * Server action que recibe el FormData del form de contacto, aplica todas
 * las defensas en cascada y forwardea el lead a la API de prospecting.
 *
 * Orden de defensas (cada una corta el flujo si falla):
 *   1. Origin/Referer check (defensa 0 — bloquea CSRF de origen distinto)
 *   2. Rate limit por IP (3 envíos / 10 min)
 *   3. Honeypot (si está lleno → simula éxito, no avisa al bot)
 *   4. Validación Zod (formato + dominios desechables)
 *   5. Turnstile verify (si está configurado)
 *   6. Forward al endpoint de Railway (con request id, IP hasheada)
 *
 * NUNCA loguea PII en claro. NUNCA tira excepciones — siempre devuelve
 * SubmitLeadResult discriminado.
 */
export async function submitLead(
  formData: FormData,
): Promise<SubmitLeadResult> {
  const headersList = await headers();

  // 1. Origin check
  if (!isAllowedOrigin(headersList)) {
    return {
      ok: false,
      error: "invalid_origin",
      message: "Origen no autorizado.",
    };
  }

  // 2. Rate limit por IP
  const ip = clientIpFromHeaders(headersList);
  const rl = await rateLimit({
    identifier: ip,
    limit: 3,
    windowSeconds: 600,
    prefix: "form:lead",
  });

  if (!rl.success) {
    const retryAfter = Math.max(1, Math.ceil((rl.resetAt - Date.now()) / 1000));
    return {
      ok: false,
      error: "rate_limited",
      message: "Demasiados envíos en poco tiempo. Intentá de nuevo en unos minutos.",
      retryAfterSeconds: retryAfter,
    };
  }

  // 3. Parseo crudo del FormData → objeto
  const raw = {
    empresa: String(formData.get("empresa") ?? ""),
    email: String(formData.get("email") ?? ""),
    productos: formData.getAll("productos").map(String),
    nombre: String(formData.get("nombre") ?? "") || undefined,
    empleados: String(formData.get("empleados") ?? ""),
    tipoEspacio: String(formData.get("tipoEspacio") ?? ""),
    ciudad: String(formData.get("ciudad") ?? "") || undefined,
    telefono: String(formData.get("telefono") ?? ""),
    mensaje: String(formData.get("mensaje") ?? "") || undefined,
    consentimiento: formData.get("consentimiento") === "true" ? "true" : "",
    website: String(formData.get("website") ?? ""),
    turnstileToken: String(formData.get("turnstileToken") ?? ""),
  };

  // 4. Honeypot — si hay valor, simulamos éxito y descartamos.
  if (raw.website) {
    // Misma respuesta visible que un éxito legítimo: el bot no aprende.
    return { ok: true, requestId: "hp" };
  }

  // 5. Validación Zod
  const parsed = SubmitLeadSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path.join(".") || "_root";
      (fieldErrors[path] ??= []).push(issue.message);
    }
    return {
      ok: false,
      error: "validation_failed",
      message: "Algunos campos no son válidos.",
      fieldErrors,
    };
  }

  const data = parsed.data;

  // 6. Turnstile verify
  const turnstile = await verifyTurnstileToken(data.turnstileToken, ip);
  if (!turnstile.success) {
    return {
      ok: false,
      error: "turnstile_failed",
      message: "Verificación anti-bot fallida. Recargá e intentá de nuevo.",
    };
  }

  // 7. Forward al API de prospecting
  const ipHash = await hashIp(ip);
  const userAgent = headersList.get("user-agent") ?? undefined;
  const referer = headersList.get("referer") ?? undefined;

  const payload: LeadPayload = {
    companyName: data.empresa,
    email: data.email,
    productsInterested: data.productos,
    contactName: data.nombre,
    employeesRange: data.empleados,
    spaceType: data.tipoEspacio,
    city: data.ciudad,
    phone: data.telefono || undefined,
    message: data.mensaje,
    source: "landing_nexotech_io",
    consentAcceptedAt: new Date().toISOString(),
    meta: {
      userAgent: userAgent?.slice(0, 256),
      referer: referer?.slice(0, 256),
      ipHash,
    },
  };

  const result = await forwardLead(payload);

  if (!result.ok) {
    // No exponemos detalle del upstream al cliente.
    return {
      ok: false,
      error: "upstream_failed",
      message:
        "Tuvimos un problema procesando tu solicitud. Intentá de nuevo o escribinos por WhatsApp.",
    };
  }

  return { ok: true, requestId: result.requestId };
}

/**
 * Helper para que el cliente sepa si Turnstile está activo y debe renderizar el widget.
 * Se llama desde un server component o server action.
 */
export async function getTurnstileSiteKey(): Promise<string | null> {
  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? null;
}
