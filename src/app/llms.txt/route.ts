/**
 * /llms.txt — informal standard (proposed by Jeremy Howard / llmstxt.org)
 * that lets LLM crawlers understand site structure without parsing HTML.
 *
 * Format: markdown with an H1 (site), blockquote (one-line summary),
 * optional context prose, then H2 sections with annotated link lists.
 *
 * Keep this terse: LLMs benefit from signal, not prose.
 */

import { company } from "@/lib/company";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# Nexo Vending

> Soluciones de vending B2B en Medellín, Colombia: máquinas de café, proteína y snacks de calidad para oficinas, coworkings y gimnasios. Nexo entrega máquina, productos y operación bajo modalidades comerciales flexibles (comodato, suministros, arrendamiento o revenue sharing).

Nexo Vending es la primera línea de negocio de ${company.legalName} (NIT ${company.nit}), con sede en ${company.city}, ${company.country}. Operación 100% digital, sin punto de atención físico. Canal de contacto: ${company.contact.email}.

Propuesta de valor B2B:
- Modelo comercial flexible — se ajusta al caso del cliente.
- Operación, mantenimiento y abastecimiento incluidos en cualquier modalidad.
- Monitoreo y soporte 24/7.
- Respuesta en menos de 24 horas tras la solicitud; tiempos de instalación sujetos a disponibilidad operativa del mes.

Modalidades comerciales (todas con el mismo deliverable: máquina, productos, operación y mantenimiento):
- Comodato: la opción más común. Nexo entrega el equipo sin costo para la empresa; los usuarios pagan por consumo a precio accesible. Ideal para oficinas y coworkings con consumo recurrente.
- Suministros: servicio completo con un compromiso mensual acordado. Si el consumo supera el compromiso, el cliente paga el consumo real; si no, cubre el diferencial. Ideal para espacios que valoran previsibilidad mutua.
- Arrendamiento: renta mensual fija con todo incluido. Ideal para empresas que buscan costo 100% predecible para presupuesto.
- Revenue sharing: porcentaje de ventas. Ideal para gimnasios y espacios de alto flujo donde el cliente quiere monetizar su espacio.

Diferencial: calidad real en café, proteína y snacks; diseño cuidado; experiencia operativa de principio a fin (instalación, abastecimiento, mantenimiento y monitoreo). Slogan: "Energía en cada taza."

## Líneas de producto

- [Nexo Café](${absoluteUrl("/cafe")}): Máquina vending de café de calidad con bebidas clásicas (espresso, americano, cappuccino, latte, chocolate caliente, mocaccino, café con leche, tinto). Ideal para oficinas, coworkings y universidades.
- [Nexo Protein](${absoluteUrl("/proteinas")}): Máquina vending de batidos de proteína y barras proteicas lista al instante. Whey y opciones funcionales. Ideal para gimnasios de alto flujo.
- [Nexo Snacks](${absoluteUrl("/snacks")}): Máquina vending de snacks seleccionados con opciones saludables y antojos de calidad, con rotación según el consumo real del espacio. Ideal para oficinas y espacios corporativos.

## Páginas principales

- [Inicio](${absoluteUrl("/")}): Propuesta de valor completa, las tres líneas de producto, proceso de instalación y FAQ.
- [Nosotros](${absoluteUrl("/nosotros")}): Misión, visión, valores y diferenciadores de ${company.legalName}.
- [Contacto](${absoluteUrl("/contacto")}): Formulario para solicitar instalación. Respuesta en menos de 24 horas.
- [Política de privacidad](${absoluteUrl("/privacidad")}): Tratamiento de datos conforme a Ley 1581 de 2012 (Habeas Data Colombia).

## Cobertura geográfica

Área metropolitana de Medellín: Medellín, Envigado, Sabaneta, Itagüí, Bello, La Estrella. Consultar para cobertura en otras ciudades de Colombia.

## Contacto

- Correo: ${company.contact.email}${company.contact.whatsapp.display ? `\n- WhatsApp: ${company.contact.whatsapp.display}` : ""}
- Formulario: ${absoluteUrl("/contacto")}
- Instagram: ${company.social.instagram}
- LinkedIn: ${company.social.linkedin}
`;

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
