/**
 * Centralized SEO helpers: canonical builder, absolute URLs, and structured
 * data (JSON-LD) schemas for Organization, LocalBusiness and Product.
 *
 * Keeping schemas here guarantees a single source of truth for NAP
 * (Name / Address / Phone) and brand metadata across pages.
 */

import { company } from "@/lib/company";

/**
 * Build an absolute URL for a given path using the configured site origin.
 * Always pass a path starting with "/" (e.g. "/cafe").
 */
export function absoluteUrl(path: string): string {
  const base = company.site.url.replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

/** Default OG image shipped in /public. Replace with real photography when available. */
export const DEFAULT_OG_IMAGE = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Nexo Vending — máquina de café para oficinas en Medellín",
} as const;

/**
 * Escapes JSON for safe embedding inside a <script> tag.
 * Prevents `</script>` injection even if any input ever becomes CMS/user-driven.
 */
export function safeJsonLd(payload: unknown): string {
  return JSON.stringify(payload)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/**
 * Organization schema — describes the company behind the website.
 * Feeds Google's Knowledge Graph and brand recognition in SERPs.
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: company.legalName,
    alternateName: "Nexo Vending",
    description:
      "Nexo Technologies S.A.S. opera máquinas vending corporativas de café, proteína y snacks de calidad para empresas en Medellín y el Valle de Aburrá.",
    url: absoluteUrl("/"),
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/og-image.jpg"),
      width: 1200,
      height: 630,
    },
    image: absoluteUrl("/og-image.jpg"),
    email: company.contact.email,
    ...(company.contact.whatsapp.display
      ? { telephone: company.contact.whatsapp.display }
      : {}),
    sameAs: [company.social.instagram, company.social.linkedin].filter(Boolean),
    // Sin `address` PostalAddress: Nexo opera 100% digital, sin punto físico
    // de atención. Mantener un PostalAddress vacío o parcial generaría
    // warnings ("Missing field postalCode/streetAddress") y, peor, la señal
    // de un brick-and-mortar inexistente. Usamos LocalBusiness service-area
    // (areaServed + geo) para indicar cobertura sin punto físico.
    taxID: company.nit,
  } as const;
}

/**
 * LocalBusiness schema — service-area business (sin punto físico de atención).
 * Para SEO local en Medellín usamos `areaServed` + `geo` en lugar de
 * `address`, indicando a Google que servimos un área pero no atendemos
 * en una dirección publicable. Google soporta este patrón vía
 * https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl("/")}#localbusiness`,
    name: "Nexo Vending",
    description:
      "Soluciones vending B2B en Medellín: máquinas de café, proteína y snacks de calidad para oficinas, coworkings y gimnasios. Operación, mantenimiento y abastecimiento incluidos.",
    image: {
      "@type": "ImageObject",
      url: absoluteUrl("/og-image.jpg"),
      width: 1200,
      height: 630,
    },
    logo: absoluteUrl("/og-image.jpg"),
    url: absoluteUrl("/"),
    email: company.contact.email,
    ...(company.contact.whatsapp.display
      ? { telephone: company.contact.whatsapp.display }
      : {}),
    priceRange: "$$",
    // Centro geográfico aproximado de Medellín. Sirve para el local pack;
    // si en el futuro tenés oficina física, reemplazá por las coords reales
    // y agregá un PostalAddress completo.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 6.2476,
      longitude: -75.5658,
    },
    areaServed: [
      { "@type": "City", name: "Medellín" },
      { "@type": "City", name: "Envigado" },
      { "@type": "City", name: "Sabaneta" },
      { "@type": "City", name: "Itagüí" },
      { "@type": "City", name: "Bello" },
      { "@type": "City", name: "La Estrella" },
    ],
    // Operación 100% digital, atención remota en horario corporativo.
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    parentOrganization: {
      "@id": `${absoluteUrl("/")}#organization`,
    },
  } as const;
}

/**
 * WebSite schema — enables sitelinks search box and tells Google the site's name.
 */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: "Nexo Vending",
    inLanguage: "es-CO",
    publisher: { "@id": `${absoluteUrl("/")}#organization` },
  } as const;
}

export interface ProductSchemaInput {
  name: string;
  description: string;
  slug: string; // e.g. "/cafe"
  image: string; // absolute URL or /public path
  category: string;
  audience: string;
}

/**
 * Product schema — enables rich results on product pages.
 * Omitting price/offer on purpose: pricing is quote-based (B2B commodato).
 */
export function productSchema(input: ProductSchemaInput) {
  const image = input.image.startsWith("http")
    ? input.image
    : absoluteUrl(input.image);

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: input.name,
    description: input.description,
    image,
    url: absoluteUrl(input.slug),
    brand: { "@type": "Brand", name: "Nexo" },
    category: input.category,
    audience: {
      "@type": "BusinessAudience",
      audienceType: input.audience,
    },
    manufacturer: { "@id": `${absoluteUrl("/")}#organization` },
  } as const;
}
