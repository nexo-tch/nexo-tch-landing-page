/**
 * Cloudflare Turnstile — verificación server-side de tokens.
 *
 * Turnstile es la alternativa gratuita y privacy-friendly a reCAPTCHA.
 * Setup:
 *   1. Crear cuenta gratis en https://dash.cloudflare.com → Turnstile
 *   2. Crear un site → te da SITE_KEY (cliente) y SECRET_KEY (servidor)
 *   3. Configurar TURNSTILE_SECRET_KEY (server) y NEXT_PUBLIC_TURNSTILE_SITE_KEY (cliente)
 *
 * Si no hay TURNSTILE_SECRET_KEY configurado, `verifyTurnstileToken`
 * devuelve `success: true` (no bloquea), permitiendo dev/preview sin
 * configurar Turnstile. En producción, deberías configurarlo.
 *
 * Docs: https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
 */

const SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;
const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export const TURNSTILE_ENABLED = Boolean(SECRET_KEY);

if (process.env.NODE_ENV === "production" && !TURNSTILE_ENABLED) {
  console.warn(
    "[security/turnstile] TURNSTILE_SECRET_KEY no configurado. " +
      "El form acepta cualquier submit sin verificación de bot. " +
      "Configurá Turnstile para defensa real en producción.",
  );
}

export type TurnstileVerifyResult = {
  success: boolean;
  /** Códigos de error de Cloudflare cuando success=false. */
  errorCodes?: string[];
  /** Action declarada por el cliente (si la setearon). */
  action?: string;
  /** Hostname del cliente que originó el challenge. */
  hostname?: string;
  /** Timestamp del challenge. */
  challengeTs?: string;
};

/**
 * Verifica un token de Turnstile contra el endpoint de Cloudflare.
 *
 * @param token Token recibido del widget en el cliente
 * @param remoteIp IP del cliente (opcional pero recomendado para anti-replay)
 * @returns success: true si el token es válido o si Turnstile no está configurado
 */
export async function verifyTurnstileToken(
  token: string | null | undefined,
  remoteIp?: string,
): Promise<TurnstileVerifyResult> {
  if (!TURNSTILE_ENABLED) {
    // Modo "permissive": Turnstile no configurado, no bloqueamos.
    return { success: true };
  }

  if (!token) {
    return { success: false, errorCodes: ["missing-input-response"] };
  }

  try {
    const formData = new FormData();
    formData.append("secret", SECRET_KEY!);
    formData.append("response", token);
    if (remoteIp && remoteIp !== "unknown") {
      formData.append("remoteip", remoteIp);
    }

    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body: formData,
      // Anti-stale: nunca cachear la verificación de un challenge.
      cache: "no-store",
      // Hard timeout para no quedarnos colgados si Cloudflare está lento.
      signal: AbortSignal.timeout(5000),
    });

    if (!res.ok) {
      console.error(
        `[security/turnstile] Cloudflare respondió ${res.status}. Fail-closed.`,
      );
      return { success: false, errorCodes: ["upstream-error"] };
    }

    const data = (await res.json()) as {
      success: boolean;
      "error-codes"?: string[];
      action?: string;
      hostname?: string;
      challenge_ts?: string;
    };

    return {
      success: data.success,
      errorCodes: data["error-codes"],
      action: data.action,
      hostname: data.hostname,
      challengeTs: data.challenge_ts,
    };
  } catch (err) {
    console.error("[security/turnstile] Excepción al verificar:", err);
    // Fail-closed: si no podemos verificar, rechazamos.
    return { success: false, errorCodes: ["verification-failed"] };
  }
}
