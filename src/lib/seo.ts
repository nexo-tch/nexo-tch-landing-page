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
    url: absoluteUrl("/"),
    logo: absoluteUrl("/og-image.jpg"),
    email: company.contact.email,
    ...(company.contact.whatsapp.display
      ? { telephone: company.contact.whatsapp.display }
      : {}),
    sameAs: [company.social.instagram, company.social.linkedin].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: "Antioquia",
      addressCountry: company.countryCode,
    },
    taxID: company.nit,
  } as const;
}

/**
 * LocalBusiness schema — essential for local SEO in Medellín.
 * Enables appearance in Google Maps local pack and the business Knowledge Panel.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${absoluteUrl("/")}#localbusiness`,
    name: "Nexo Vending",
    image: absoluteUrl("/og-image.jpg"),
    url: absoluteUrl("/"),
    email: company.contact.email,
    ...(company.contact.whatsapp.display
      ? { telephone: company.contact.whatsapp.display }
      : {}),
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressRegion: "Antioquia",
      addressCountry: company.countryCode,
    },
    areaServed: [
      { "@type": "City", name: "Medellín" },
      { "@type": "City", name: "Envigado" },
      { "@type": "City", name: "Sabaneta" },
      { "@type": "City", name: "Itagüí" },
      { "@type": "City", name: "Bello" },
      { "@type": "City", name: "La Estrella" },
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
