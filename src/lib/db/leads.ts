/**
 * Inserción de leads en la tabla `leads` de Neon.
 *
 * Diseño:
 *   - Tipo `LeadRecord` espejo del FormData ya validado por Zod en actions.ts.
 *   - `insertLead` NUNCA tira: siempre devuelve `InsertLeadResult` discriminado.
 *   - Logs: solo PII redactada, nunca el email completo.
 *   - Schema en inglés snake_case (ver migrations/0001_init_leads.sql).
 */

import { getSql } from "./index";
import { redactEmail } from "@/lib/security/pii";

export type LeadRecord = {
  // Required
  companyName: string;
  email: string;
  productsInterested: string[]; // ["cafe" | "protein" | "snacks"]

  // Optional qualification
  contactName?: string;
  employeesRange?: string; // "1-20" | "21-50" | "51-100" | "100+"
  spaceType?: string;      // "oficina" | "coworking" | "gimnasio" | "universidad" | "otro"
  city?: string;
  phone?: string;
  message?: string;

  // Habeas Data
  consentAcceptedAt: string; // ISO-8601 timestamp

  // Source tracking
  source: string; // "landing_nexotech_io"
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    term?: string;
    content?: string;
  };

  // Forensic metadata (ya hasheada / redactada antes de llegar acá)
  meta?: {
    userAgent?: string;
    referer?: string;
    ipHash?: string;
  };
};

export type InsertLeadResult =
  | { ok: true; id: string; createdAt: string }
  | { ok: false; error: "db_error"; message: string };

type InsertedRow = {
  id: string;
  created_at: string;
};

/**
 * Inserta un lead en la base de datos.
 *
 * Errores: la función captura todo (constraint violation, network, timeout)
 * y devuelve `{ ok: false, error: "db_error" }`. La server action es la que
 * decide qué mensaje mostrarle al usuario.
 */
export async function insertLead(lead: LeadRecord): Promise<InsertLeadResult> {
  try {
    const sql = getSql();
    const rows = (await sql`
      INSERT INTO leads (
        company_name,
        email,
        products_interested,
        contact_name,
        employees_range,
        space_type,
        city,
        phone,
        message,
        consent_accepted_at,
        source,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_term,
        utm_content,
        user_agent,
        referer,
        ip_hash
      )
      VALUES (
        ${lead.companyName},
        ${lead.email},
        ${lead.productsInterested},
        ${lead.contactName ?? null},
        ${lead.employeesRange ?? null},
        ${lead.spaceType ?? null},
        ${lead.city ?? null},
        ${lead.phone ?? null},
        ${lead.message ?? null},
        ${lead.consentAcceptedAt},
        ${lead.source},
        ${lead.utm?.source ?? null},
        ${lead.utm?.medium ?? null},
        ${lead.utm?.campaign ?? null},
        ${lead.utm?.term ?? null},
        ${lead.utm?.content ?? null},
        ${lead.meta?.userAgent ?? null},
        ${lead.meta?.referer ?? null},
        ${lead.meta?.ipHash ?? null}
      )
      RETURNING id, created_at;
    `) as InsertedRow[];

    const row = rows[0];
    if (!row) {
      console.error(
        `[db/leads] INSERT no devolvió filas. email=${redactEmail(lead.email)}`,
      );
      return {
        ok: false,
        error: "db_error",
        message: "No se pudo persistir el lead.",
      };
    }

    console.info(
      `[db/leads] inserted id=${row.id} email=${redactEmail(lead.email)} ` +
        `company="${lead.companyName}" products=${lead.productsInterested.join(",")}`,
    );

    return {
      ok: true,
      id: row.id,
      createdAt: row.created_at,
    };
  } catch (err) {
    console.error(
      `[db/leads] error guardando lead email=${redactEmail(lead.email)}:`,
      err,
    );
    return {
      ok: false,
      error: "db_error",
      message: "Error guardando el lead en la base de datos.",
    };
  }
}
