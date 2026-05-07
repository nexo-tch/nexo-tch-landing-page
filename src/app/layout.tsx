import type { Metadata } from "next";
import { Outfit, Geist, Geist_Mono } from "next/font/google";
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

// Outfit weights:
//   300 → airy subheads (hero pull-quotes, emphasized body)
//   400 → body default
//   500/600 → display headings (most H1/H2)
//   700 → strong accent moments
//   800 → drama (big stats, break-out numbers, 404)
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

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
      className={`${outfit.variable} ${geist.variable} ${geistMono.variable}`}
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
      </body>
    </html>
  );
}
