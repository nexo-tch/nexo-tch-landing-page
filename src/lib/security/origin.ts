/**
 * Validación de origen para Server Actions.
 *
 * Por defecto Next.js valida origin/host para server actions automáticamente,
 * pero acá agregamos una capa adicional explícita por defensa en profundidad
 * y para tener allowlist concreta de dominios permitidos.
 *
 * Configuración:
 *   - NEXT_PUBLIC_SITE_URL: URL canónica del sitio (ej: https://www.nexotech.io)
 *   - ALLOWED_ORIGINS: lista coma-separada opcional de orígenes adicionales
 *     (ej: previews de Vercel, otros subdominios)
 */

import { company } from "@/lib/company";

function buildAllowedOrigins(): Set<string> {
  const origins = new Set<string>();

  // 1. Site URL canónica desde NEXT_PUBLIC_SITE_URL o desde lib/company.
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? company.site.url;
  try {
    const url = new URL(siteUrl);
    origins.add(url.origin);
    // Variante con/sin "www".
    if (url.hostname.startsWith("www.")) {
      origins.add(`${url.protocol}//${url.hostname.slice(4)}`);
    } else {
      origins.add(`${url.protocol}//www.${url.hostname}`);
    }
  } catch {
    // siteUrl mal configurado, lo ignoramos en silencio.
  }

  // 2. Orígenes adicionales explícitos (separados por coma).
  const extra = process.env.ALLOWED_ORIGINS;
  if (extra) {
    for (const o of extra.split(",").map((s) => s.trim()).filter(Boolean)) {
      try {
        origins.add(new URL(o).origin);
      } catch {
        // Origen mal formado, lo ignoramos.
      }
    }
  }

  // 3. En dev, permitir localhost en cualquier puerto.
  if (process.env.NODE_ENV !== "production") {
    origins.add("http://localhost:3000");
    origins.add("http://localhost:3001");
    origins.add("http://127.0.0.1:3000");
  }

  return origins;
}

const ALLOWED_ORIGINS = buildAllowedOrigins();

/**
 * Verifica que el header Origin (o Referer como fallback) pertenezca a un
 * dominio permitido. Devuelve true si el request es válido o si no hay headers
 * (Server Actions internos no siempre los traen — Next.js ya los validó antes).
 */
export function isAllowedOrigin(headers: Headers): boolean {
  const origin = headers.get("origin");
  if (origin) {
    return ALLOWED_ORIGINS.has(origin);
  }

  // Fallback: usar Referer si no vino Origin.
  const referer = headers.get("referer");
  if (referer) {
    try {
      const refOrigin = new URL(referer).origin;
      return ALLOWED_ORIGINS.has(refOrigin);
    } catch {
      return false;
    }
  }

  // Sin Origin ni Referer: probablemente request interno de Next o
  // server action via RSC. Confiamos en la validación nativa de Next.
  return true;
}

/**
 * Lista plana de orígenes permitidos. Útil para debugging o exposición a CSP dinámico.
 */
export function getAllowedOrigins(): string[] {
  return Array.from(ALLOWED_ORIGINS);
}
