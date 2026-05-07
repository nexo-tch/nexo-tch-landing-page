/**
 * Utilidades para manejar PII (datos personales identificables) de forma segura
 * en logs y persistencia. Habeas Data (Ley 1581 de 2012, Colombia) exige que
 * NUNCA registremos email/IP en claro en logs operativos.
 *
 * Reglas:
 *   - hashIp(): one-way SHA-256 con sal, devuelve los primeros 8 bytes en hex.
 *     Suficiente para correlacionar abuso sin exponer la IP real.
 *   - redactEmail(): muestra solo la primera letra del local-part y del dominio,
 *     suficiente para debug ("a***@e***.com") sin filtrar al dueño del email.
 */

/**
 * Hash one-way de la IP para guardar en logs/DB sin exponer la dirección real.
 *
 * @example
 *   await hashIp("190.0.0.1") // → "a3f81c2e9d04b1f2"
 *   await hashIp("unknown")   // → "unknown"
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

/**
 * Redacta un email para logs.
 *
 * @example
 *   redactEmail("ana@empresa.com") // → "a***@e***.com"
 *   redactEmail("malo")            // → "***"
 */
export function redactEmail(email: string): string {
  const at = email.indexOf("@");
  if (at < 1) return "***";
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  const dot = domain.indexOf(".");
  const dnamePart = dot > 0 ? domain.slice(0, dot) : domain;
  const tld = dot > 0 ? domain.slice(dot) : "";
  return `${local[0]}***@${dnamePart[0] ?? "*"}***${tld}`;
}
