/**
 * Single source of truth for Nexo company data.
 * If something here changes, it propagates to footer, forms, CTAs, schemas, etc.
 */

export const company = {
  legalName: "Nexo Technologies S.A.S.",
  brandName: "Nexo",
  nit: "902.041.808-1",
  city: "Medellín",
  country: "Colombia",
  countryCode: "CO",
  // Operación 100% digital — no hay punto físico de atención al cliente.
  // Esta es la dirección registrada en Cámara de Comercio.
  // TODO(operations): reemplazar por la dirección real registrada en Cámara de Comercio.
  registeredAddress: "Medellín, Antioquia",
  digitalOperation: true,
  contact: {
    // Canal único de atención al cliente y PQR.
    email: "contacto@nexotech.io",
    // Si se deja como null, los CTAs de WhatsApp se ocultan automáticamente.
    whatsapp: {
      // formato E.164 sin "+" para wa.me
      number: "573019307252" as string | null,
      // formato visible al usuario
      display: "+57 301 930 7252" as string | null,
    },
  },
  social: {
    instagram: "https://www.instagram.com/nexo.vending",
    linkedin: "https://www.linkedin.com/company/nexo-technologies",
  },
  site: {
    // TODO(deploy): poner el dominio definitivo cuando se publique.
    url: "https://www.nexotech.io",
  },
} as const;

/**
 * Helper: link de WhatsApp prearmado con mensaje, o null si no hay número configurado.
 */
export function whatsappUrl(message?: string): string | null {
  const wa = company.contact.whatsapp.number;
  if (!wa) return null;
  const base = `https://wa.me/${wa}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * Helper: link mailto prearmado con asunto y cuerpo opcional.
 */
export function mailtoUrl(opts?: { subject?: string; body?: string }): string {
  const params = new URLSearchParams();
  if (opts?.subject) params.set("subject", opts.subject);
  if (opts?.body) params.set("body", opts.body);
  const qs = params.toString();
  return `mailto:${company.contact.email}${qs ? `?${qs}` : ""}`;
}
