import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Feature flags que afectan los hosts permitidos por el CSP.
// Se activan automáticamente cuando configurás las env vars correspondientes.
const turnstileEnabled = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
const vercelAnalyticsEnabled =
  process.env.NEXT_PUBLIC_VERCEL_ANALYTICS_ENABLED === "true";

// Hosts adicionales para CSP, agrupados por directiva.
const turnstileScript = turnstileEnabled
  ? ["https://challenges.cloudflare.com"]
  : [];
const turnstileFrame = turnstileEnabled
  ? ["https://challenges.cloudflare.com"]
  : [];
const turnstileConnect = turnstileEnabled
  ? ["https://challenges.cloudflare.com"]
  : [];
const vercelAnalyticsScript = vercelAnalyticsEnabled
  ? ["https://va.vercel-scripts.com"]
  : [];
const vercelAnalyticsConnect = vercelAnalyticsEnabled
  ? ["https://vitals.vercel-insights.com", "https://vitals.vercel-analytics.com"]
  : [];

// Security Headers — defense in depth para una landing B2B pública.
// Reference: https://owasp.org/www-project-secure-headers/
//
// CSP notes:
// - En dev, React/Next + Turbopack necesitan 'unsafe-eval' (HMR, callstack
//   reconstruction, source maps). React nunca usa eval() en producción.
// - En dev, Next abre un WebSocket en el mismo origen para HMR overlays;
//   relajamos connect-src en consecuencia.
// - En producción enviamos la política estricta.
// - Hosts externos se agregan dinámicamente según env vars (Turnstile, Analytics).
const csp = [
  "default-src 'self'",
  [
    "script-src",
    "'self'",
    "'unsafe-inline'",
    isDev ? "'unsafe-eval'" : null,
    ...turnstileScript,
    ...vercelAnalyticsScript,
  ]
    .filter(Boolean)
    .join(" "),
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  [
    "connect-src",
    "'self'",
    isDev ? "ws: wss:" : null,
    ...turnstileConnect,
    ...vercelAnalyticsConnect,
  ]
    .filter(Boolean)
    .join(" "),
  ["frame-src", "'self'", ...turnstileFrame].join(" "),
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Forzar HTTPS por 2 años, incluyendo subdominios + elegible para preload list.
  // No habilitar preload hasta que estés 100% seguro de no querer revertir.
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  // Anti-clickjacking. frame-ancestors 'none' del CSP es la versión moderna
  // pero X-Frame-Options aún se respeta por proxies y crawlers viejos.
  { key: "X-Frame-Options", value: "DENY" },
  // Anti MIME sniffing.
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Mínimo posible de info al hacer cross-site navigation.
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Aislar el browsing context para prevenir Spectre + window.opener attacks.
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // Por defecto recursos solo se cargan desde mismo origen.
  // (Comentado: rompe ciertas integraciones tipo embed; activar cuando estés seguro)
  // { key: "Cross-Origin-Resource-Policy", value: "same-site" },
  // DNS prefetch sí (default), explícito por claridad.
  { key: "X-DNS-Prefetch-Control", value: "on" },
  // Apagar features peligrosas del browser que esta landing no necesita.
  {
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "magnetometer=()",
      "accelerometer=()",
      "gyroscope=()",
      "interest-cohort=()",
    ].join(", "),
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  // Disable streaming metadata so all <meta> tags ship in <head> on first paint.
  // Avoids the dev-mode hydration mismatch in Next 16 between server's
  // non-streaming MetadataWrapper and client's streaming Suspense wrapper.
  // See: node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md (#streaming-metadata)
  htmlLimitedBots: /.*/,

  // Opt-in al modo estricto de Server Actions (validación de origen automática).
  // Si en algún momento querés permitir orígenes adicionales explícitos:
  // experimental: { serverActions: { allowedOrigins: ["www.nexotech.io"] } }

  // Desactivar el header X-Powered-By para no exponer versión de Next.
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
