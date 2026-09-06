/**
 * Centralized SEO helpers: canonical builder, absolute URLs, and structured
 * data (JSON-LD) schemas for Organization, LocalBusiness and Service.
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

export type OgImage = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

/** Default OG image shipped in /public. Replace with real photography when available. */
export const DEFAULT_OG_IMAGE: OgImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Nexo Vending — máquinas de café, proteína y snacks para empresas en Medellín",
};

/** Per-page OG images so each URL has a distinct social preview. */
export const PAGE_OG_IMAGES = {
  home: DEFAULT_OG_IMAGE,
  cafe: {
    url: "/images/nexo-cafe-machine.webp",
    width: 577,
    height: 1024,
    alt: "Máquina vending Nexo Café para oficinas en Medellín",
  },
  snacks: {
    url: "/images/nexo-snacks-machine.webp",
    width: 577,
    height: 1024,
    alt: "Máquina vending Nexo Snacks para oficinas en Medellín",
  },
  protein: {
    url: "/images/nexo-protein-machine.webp",
    width: 577,
    height: 1024,
    alt: "Máquina vending Nexo Protein para gimnasios en Medellín",
  },
} as const satisfies Record<string, OgImage>;

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
      "Nexo Technologies S.A.S. opera máquinas expendedoras (vending corporativo) de café, proteína y snacks para empresas en Medellín y el Valle de Aburrá.",
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
      "Máquinas expendedoras B2B en Medellín: café, proteína y snacks para oficinas, coworkings y gimnasios. Operación, mantenimiento y abastecimiento incluidos.",
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

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** BreadcrumbList — visible trail + rich result support. */
export function breadcrumbSchema(items: readonly BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  } as const;
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
}

/**
 * Service schema — B2B vending is a service (comodato / operación),
 * not a priced retail SKU. Do not emit Product: Google Product snippets
 * require offers, review or aggregateRating, which Nexo cannot publish
 * (quote-based, no reviews yet).
 */
export function serviceSchema(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(input.slug)}#service`,
    name: input.name,
    description: input.description,
    serviceType: input.serviceType,
    url: absoluteUrl(input.slug),
    provider: { "@id": `${absoluteUrl("/")}#organization` },
    areaServed: [
      { "@type": "City", name: "Medellín" },
      { "@type": "City", name: "Envigado" },
      { "@type": "City", name: "Sabaneta" },
      { "@type": "City", name: "Itagüí" },
      { "@type": "City", name: "Bello" },
      { "@type": "City", name: "La Estrella" },
    ],
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Empresas, oficinas, coworkings y gimnasios",
    },
  } as const;
}

export interface FaqItem {
  question: string;
  answer: string;
}

/** FAQPage schema — reuse on home and product URLs. */
export function faqPageSchema(faqs: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } as const;
}
