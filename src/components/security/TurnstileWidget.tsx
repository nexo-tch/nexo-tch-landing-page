"use client";

import Script from "next/script";
import { useEffect, useId, useRef, useState } from "react";

/**
 * Widget de Cloudflare Turnstile — wrapper minimalista sin dependencia externa.
 *
 * - Carga el script de Cloudflare on-demand (solo cuando el componente monta).
 * - Renderiza el widget en modo invisible (no requiere interacción del usuario).
 * - Reporta el token vía callback `onToken`.
 * - Si SITE_KEY no está configurado, NO renderiza nada (degradación silenciosa).
 *
 * Docs: https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/
 */

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement | string,
        opts: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
          "timeout-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "compact" | "invisible" | "flexible";
          appearance?: "always" | "execute" | "interaction-only";
          action?: string;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
      execute: (widgetId?: string) => void;
    };
  }
}

type Props = {
  siteKey: string;
  onToken: (token: string | null) => void;
  /** Acción para distinguir distintos flujos en analytics de Cloudflare. */
  action?: string;
};

export function TurnstileWidget({ siteKey, onToken, action }: Props) {
  const containerId = useId();
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);

  useEffect(() => {
    if (!scriptReady || !siteKey) return;
    if (typeof window === "undefined" || !window.turnstile) return;

    const id = window.turnstile.render(`#${CSS.escape(containerId)}`, {
      sitekey: siteKey,
      theme: "dark",
      size: "invisible",
      appearance: "interaction-only",
      action,
      callback: (token: string) => onToken(token),
      "error-callback": () => onToken(null),
      "expired-callback": () => onToken(null),
      "timeout-callback": () => onToken(null),
    });
    widgetIdRef.current = id;

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // Ignorar: el widget ya pudo haberse limpiado por navegación.
        }
        widgetIdRef.current = null;
      }
    };
    // siteKey/action no cambian en runtime; onToken es estable desde el padre.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scriptReady, siteKey]);

  if (!siteKey) return null;

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onReady={() => setScriptReady(true)}
        onLoad={() => setScriptReady(true)}
      />
      <div
        id={containerId}
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 right-0 h-0 w-0 overflow-hidden opacity-0"
      />
    </>
  );
}
