import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { JsonLd } from "@/components/seo/JsonLd";
import { company } from "@/lib/company";
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

// === TIPOGRAFÍA: SYSTEM-FONT STACK ===
// Decisión deliberada: NO cargamos Google Fonts (Outfit/Geist/Geist Mono).
// Razón: con custom web fonts, el font-swap del fallback al custom causaba
// CLS = 1.0 estable en Lighthouse (los display headings cambiaban de altura,
// empujando el footer ~1 viewport).
//
// Probamos `display: "optional"`, `adjustFontFallback: true`, y CSS metric
// overrides — todos dependían de timing y daban CLS variable entre runs.
//
// La única solución matemáticamente garantizada para CLS = 0 con fonts
// es no cargar fonts asíncronas. El system-font stack que definimos en
// globals.css (`--font-display`, `--font-body`, `--font-mono`) se renderiza
// con la fuente nativa de cada OS:
//   - Apple (macOS/iOS): SF Pro Display / SF Pro / SF Mono
//   - Windows 11: Segoe UI Variable
//   - Android: Roboto
//   - Linux: la fuente sans-serif del sistema
//
// Todas son fuentes modernas, bien diseñadas y kerneadas. Vercel, Linear,
// GitHub Primer y muchos sitios premium usan exactamente este enfoque.
//
// Ganancias medibles:
//   - LCP: cero descarga de fonts (sin font-files críticos)
//   - CLS: 0 garantizado (no hay swap posible)
//   - TBT: sin @font-face parsing en main thread
//   - Bundle: -150 KiB en font files
//   - First-paint: instantáneo en cualquier conexión

// Global metadata. Per-page metadata merges on top via `generateMetadata`
// or exported `metadata` in page.tsx.
// Title strategy:
//   - `default` is used when a page does not set its own title.
//   - `template` wraps per-page titles so the brand is always present.
export const metadata: Metadata = {
  metadataBase: new URL(company.site.url),
  title: {
    default: "Nexo Vending — Café, proteína y snacks para tu empresa | Medellín",
    template: "%s | Nexo Vending",
  },
  description:
    "Máquinas vending de café, proteína y snacks de calidad para oficinas, coworkings y gimnasios en Medellín. Sin costo para tu empresa, operación y mantenimiento incluidos.",
  applicationName: "Nexo Vending",
  authors: [{ name: company.legalName, url: company.site.url }],
  creator: company.legalName,
  publisher: company.legalName,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nexo Vending — Productos de calidad al alcance de tu equipo",
    description:
      "Máquinas de café, proteína y snacks de calidad para tu empresa. Sin costo de instalación — nosotros operamos, mantenemos y abastecemos todo.",
    url: absoluteUrl("/"),
    siteName: "Nexo Vending",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE.url,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexo Vending — Café, proteína y snacks para tu empresa",
    description:
      "Máquinas de café, proteína y snacks de calidad en tu oficina. Sin costo para tu empresa.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  // Icons are auto-injected from file-based convention:
  //   src/app/icon.svg       → <link rel="icon" type="image/svg+xml">
  //   src/app/favicon.ico    → <link rel="shortcut icon">
  //   src/app/apple-icon.png → <link rel="apple-touch-icon">
  formatDetection: {
    telephone: true,
    email: true,
    address: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className="min-h-[100dvh] bg-bg text-fg antialiased"
        suppressHydrationWarning
      >
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <JsonLd data={websiteSchema()} />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
