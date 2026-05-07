/**
 * Cliente para forwardear leads al endpoint de la app de prospecting en Railway.
 *
 * Diseño:
 *   - Si PROSPECTING_API_URL no está configurada → modo "log only" en server.
 *     Útil en dev y como modo de gracia: el usuario ve éxito, nosotros vemos el lead
 *     en logs de Vercel, no se pierde nada críticamente pero se ve el warning.
 *
 *   - Si está configurada → POST con auth Bearer + request id + timeout + retry corto.
 *
 *   - Toda PII se loggea de forma redactada (nunca el email completo en logs).
 *
 * El contrato con la API de Railway lo defines tú. Acá asumimos:
 *   POST {PROSPECTING_API_URL}/api/v1/leads/inbound
 *   Headers:
 *     Authorization: Bearer <token>
 *     X-Request-ID: <uuid>
 *     X-Source: landing_nexotech_io
 *     Content-Type: application/json
 *   Body: LeadPayload (ver tipo abajo)
 *   Respuesta 2xx: éxito · 4xx/5xx: error (no se reintenta 4xx, sí 5xx una vez)
 */

const API_URL = process.env.PROSPECTING_API_URL;
const API_KEY = process.env.PROSPECTING_API_KEY;
const HAS_API = Boolean(API_URL && API_KEY);

if (process.env.NODE_ENV === "production" && !HAS_API) {
  console.warn(
    "[security/prospecting-api] PROSPECTING_API_URL/PROSPECTING_API_KEY no configurados. " +
      "Los leads se loggean pero NO se persisten en la base de datos. " +
      "Configurá el endpoint para captura real.",
  );
}

export type LeadPayload = {
  companyName: string;
  email: string;
  productsInterested: string[];
  contactName?: string;
  employeesRange?: string;
  spaceType?: string;
  city?: string;
  phone?: string;
  message?: string;
  source: string;
  consentAcceptedAt: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };
  meta?: {
    userAgent?: string;
    referer?: string;
    ipHash?: string;
  };
};

export type ForwardResult =
  | { ok: true; requestId: string; mode: "forwarded" | "logged" }
  | {
      ok: false;
      requestId: string;
      error: "upstream_4xx" | "upstream_5xx" | "timeout" | "network";
      status?: number;
    };

/**
 * Redacta un email para logs: "ana@empresa.com" → "a***@e****.com"
 */
function redactEmail(email: string): string {
  const at = email.indexOf("@");
  if (at < 1) return "***";
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  const dot = domain.indexOf(".");
  const dnamePart = dot > 0 ? domain.slice(0, dot) : domain;
  const tld = dot > 0 ? domain.slice(dot) : "";
  return `${local[0]}***@${dnamePart[0] ?? "*"}***${tld}`;
}

/**
 * Envía el lead al endpoint de prospecting. Si no está configurado, loguea y devuelve ok.
 *
 * @returns ForwardResult — siempre devuelve, nunca tira (errores se loggean adentro)
 */
export async function forwardLead(
  payload: LeadPayload,
): Promise<ForwardResult> {
  const requestId = crypto.randomUUID();

  // Modo log-only: dev sin API o producción mal configurada.
  if (!HAS_API) {
    console.warn(
      `[lead:${requestId}] mode=logged email=${redactEmail(payload.email)} ` +
        `company="${payload.companyName}" products=${payload.productsInterested.join(",")}`,
    );
    return { ok: true, requestId, mode: "logged" };
  }

  const url = `${API_URL!.replace(/\/$/, "")}/api/v1/leads/inbound`;

  // Helper interno para una sola tentativa.
  const attempt = async (): Promise<Response> => {
    return fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "X-Request-ID": requestId,
        "X-Source": payload.source,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
  };

  try {
    let res = await attempt();

    // Retry una sola vez en 5xx (errores transitorios upstream).
    if (res.status >= 500 && res.status < 600) {
      console.warn(
        `[lead:${requestId}] upstream 5xx ${res.status}, reintentando una vez`,
      );
      await new Promise((r) => setTimeout(r, 400));
      res = await attempt();
    }

    if (res.ok) {
      console.info(
        `[lead:${requestId}] mode=forwarded ok email=${redactEmail(payload.email)}`,
      );
      return { ok: true, requestId, mode: "forwarded" };
    }

    const errorClass = res.status >= 500 ? "upstream_5xx" : "upstream_4xx";
    console.error(
      `[lead:${requestId}] upstream error ${res.status} email=${redactEmail(payload.email)}`,
    );
    return { ok: false, requestId, error: errorClass, status: res.status };
  } catch (err) {
    if (err instanceof Error && err.name === "TimeoutError") {
      console.error(`[lead:${requestId}] timeout llamando a prospecting API`);
      return { ok: false, requestId, error: "timeout" };
    }
    console.error(`[lead:${requestId}] network error:`, err);
    return { ok: false, requestId, error: "network" };
  }
}

/**
 * Hash one-way de la IP para guardar en logs sin exponer la dirección real.
 * Ayuda a investigar abuso sin romper Habeas Data.
 */
export async function hashIp(ip: string): Promise<string> {
  if (ip === "unknown") return "unknown";
  const enc = new TextEncoder();
  const salt = process.env.IP_HASH_SALT ?? "nexo-default-salt-change-me";
  const buf = await crypto.subtle.digest(
    "SHA-256",
    enc.encode(`${salt}:${ip}`),
  );
  return Array.from(new Uint8Array(buf))
    .slice(0, 8)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
