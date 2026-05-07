import { safeJsonLd } from "@/lib/seo";

interface JsonLdProps {
  /** Object or array of objects to serialize as JSON-LD. */
  data: unknown;
}

/**
 * Safely injects JSON-LD structured data into the page.
 * Server-only component. Escapes the payload to neutralize any `</script>`
 * injection attempts should the input ever come from user-controlled data.
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: safeJsonLd(data) }}
    />
  );
}
