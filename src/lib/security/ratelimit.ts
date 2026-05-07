/**
 * Rate limiter con dos backends:
 *
 * 1. Upstash Redis vía REST API si UPSTASH_REDIS_REST_URL + TOKEN están configurados.
 *    Recomendado en producción con Vercel (multi-instance, sin estado local).
 *
 * 2. In-memory LRU fallback. Solo válido en dev o single-instance.
 *    En Vercel multi-instance, cada función serverless tiene su propio Map → no es
 *    confiable como defensa real. Por eso si NODE_ENV=production y no hay Upstash,
 *    emitimos warning en cold start.
 *
 * Algoritmo: sliding window aproximado con incremento atómico + TTL.
 */

const UPSTASH_URL = process.env.UPSTASH_REDIS_REST_URL;
const UPSTASH_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;
const HAS_UPSTASH = Boolean(UPSTASH_URL && UPSTASH_TOKEN);

if (process.env.NODE_ENV === "production" && !HAS_UPSTASH) {
  console.warn(
    "[security/ratelimit] UPSTASH_REDIS_REST_URL no configurado. " +
      "El rate limit corre en memoria por instancia y NO es confiable en serverless multi-instance. " +
      "Configurá Upstash Redis para defensa real en producción.",
  );
}

export type RateLimitResult = {
  /** True si la request está permitida; false si debe rechazarse. */
  success: boolean;
  /** Cuántos hits restantes en la ventana actual. */
  remaining: number;
  /** Timestamp en ms cuando se reinicia la ventana. */
  resetAt: number;
  /** Total permitido en la ventana. */
  limit: number;
};

export type RateLimitOptions = {
  /** Identificador único del cliente (típicamente IP, o IP+endpoint). */
  identifier: string;
  /** Máximo de requests permitidos en la ventana. */
  limit: number;
  /** Ventana de tiempo en segundos. */
  windowSeconds: number;
  /** Prefijo opcional para namespacear distintos endpoints. */
  prefix?: string;
};

// ─────────────────────────────────────────────────────────────────────────────
// Upstash backend (REST API, sin SDK)
// ─────────────────────────────────────────────────────────────────────────────

async function upstashRateLimit(opts: RateLimitOptions): Promise<RateLimitResult> {
  const key = `${opts.prefix ?? "rl"}:${opts.identifier}`;

  // Pipeline atómico: INCR + EXPIRE (solo si es la primera vez en la ventana).
  const res = await fetch(`${UPSTASH_URL}/pipeline`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${UPSTASH_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      ["INCR", key],
      ["EXPIRE", key, opts.windowSeconds, "NX"],
      ["TTL", key],
    ]),
    cache: "no-store",
  });

  if (!res.ok) {
    // Si Upstash falla, fail-open con warning. Es mejor permitir que bloquear todo.
    console.error(
      `[security/ratelimit] Upstash error ${res.status}. Fail-open por defecto.`,
    );
    return {
      success: true,
      remaining: opts.limit,
      resetAt: Date.now() + opts.windowSeconds * 1000,
      limit: opts.limit,
    };
  }

  const data = (await res.json()) as Array<{ result: number }>;
  const count = data[0]?.result ?? 1;
  const ttl = data[2]?.result ?? opts.windowSeconds;

  const remaining = Math.max(0, opts.limit - count);
  const resetAt = Date.now() + Math.max(0, ttl) * 1000;

  return {
    success: count <= opts.limit,
    remaining,
    resetAt,
    limit: opts.limit,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// In-memory fallback (dev only / degradación single-instance)
// ─────────────────────────────────────────────────────────────────────────────

type Bucket = { count: number; resetAt: number };

// Usamos `globalThis` para sobrevivir HMR en dev. En producción se reinicia
// con cada cold start, lo cual es aceptable (el rate limit se "olvida" y eso
// es lo esperado en serverless sin estado compartido).
const memoryStore = (globalThis as unknown as { __nexoRateLimit?: Map<string, Bucket> })
  .__nexoRateLimit ??
  new Map<string, Bucket>();
(globalThis as unknown as { __nexoRateLimit?: Map<string, Bucket> }).__nexoRateLimit =
  memoryStore;

function memoryRateLimit(opts: RateLimitOptions): RateLimitResult {
  const key = `${opts.prefix ?? "rl"}:${opts.identifier}`;
  const now = Date.now();
  const bucket = memoryStore.get(key);

  if (!bucket || bucket.resetAt < now) {
    memoryStore.set(key, {
      count: 1,
      resetAt: now + opts.windowSeconds * 1000,
    });
    return {
      success: true,
      remaining: opts.limit - 1,
      resetAt: now + opts.windowSeconds * 1000,
      limit: opts.limit,
    };
  }

  bucket.count += 1;
  return {
    success: bucket.count <= opts.limit,
    remaining: Math.max(0, opts.limit - bucket.count),
    resetAt: bucket.resetAt,
    limit: opts.limit,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// API pública
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Aplica rate limit a un identificador (típicamente IP).
 * Devuelve `success: false` si excedió el límite en la ventana.
 *
 * @example
 *   const ip = headersList.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
 *   const rl = await rateLimit({ identifier: ip, limit: 3, windowSeconds: 600, prefix: "form:lead" });
 *   if (!rl.success) return { ok: false, error: "rate_limited" };
 */
export async function rateLimit(opts: RateLimitOptions): Promise<RateLimitResult> {
  if (HAS_UPSTASH) {
    try {
      return await upstashRateLimit(opts);
    } catch (err) {
      console.error("[security/ratelimit] Upstash exception:", err);
      return memoryRateLimit(opts);
    }
  }
  return memoryRateLimit(opts);
}

/**
 * Helper: extrae la IP del cliente desde los headers de Vercel/Cloudflare.
 * Vercel inyecta `x-forwarded-for` con la IP real del cliente al frente.
 */
export function clientIpFromHeaders(headers: Headers): string {
  const xff = headers.get("x-forwarded-for");
  if (xff) {
    const first = xff.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = headers.get("x-real-ip");
  if (real) return real.trim();
  return "unknown";
}
