/**
 * Cliente PostgreSQL serverless para Neon.
 *
 * - Una conexión HTTP por request (no pool) — ideal para Vercel Server Actions
 *   y edge runtime, sin sockets persistentes.
 * - DATABASE_URL es inyectado por la integración Vercel/Neon. NUNCA debe
 *   loggearse ni exponerse al cliente.
 * - Inicialización LAZY: el módulo no falla al importarse aunque DATABASE_URL
 *   no esté seteada (importante para `next build` en CI antes de que la DB
 *   esté conectada). Falla en la primera query si falta.
 *
 * Usage:
 *   import { getSql } from "@/lib/db";
 *   const sql = getSql();
 *   const rows = await sql`SELECT 1 AS x`;
 */

import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let cached: NeonQueryFunction<false, false> | null = null;

export function getSql(): NeonQueryFunction<false, false> {
  if (cached) return cached;

  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      "[db] DATABASE_URL no está configurada. " +
        "En Vercel: Project → Storage → Connect Neon database. " +
        "En local: copiá el connection string a .env.local.",
    );
  }

  cached = neon(url);
  return cached;
}
