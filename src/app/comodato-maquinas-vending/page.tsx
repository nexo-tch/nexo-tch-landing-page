import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { IntentHero } from "@/components/seo/IntentHero";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { FAQ } from "@/components/home/FAQ";
import { comodatoFaqs } from "@/data/faqs";
import {
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/seo";

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Comodato de máquinas vending", path: "/comodato-maquinas-vending" },
] as const;

export const metadata: Metadata = {
  title: "Comodato de máquinas vending",
  description:
    "Comodato de máquinas vending en Medellín: Nexo instala el equipo sin que tu empresa lo compre. Operación, abastecimiento y mantenimiento incluidos.",
  alternates: { canonical: "/comodato-maquinas-vending" },
  openGraph: {
    title: "Comodato de máquinas vending | Nexo",
    description:
      "No compres la máquina. Comodato: instalación, operación y abastecimiento a cargo de Nexo.",
    url: absoluteUrl("/comodato-maquinas-vending"),
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comodato de máquinas vending | Nexo",
    description:
      "Máquina en tu espacio sin invertir en el equipo. Nexo opera todo.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const included = [
  "Máquina e instalación en el punto acordado",
  "Activación y acompañamiento de arranque",
  "Abastecimiento y rotación de productos",
  "Limpieza, soporte preventivo y correctivo",
  "Monitoreo del equipo y del sistema de pago",
  "Efectivo, datáfono y/o QR según el punto",
];

const comparison = [
  {
    name: "Comodato",
    fit: "La más común",
    text: "La empresa no compra ni renta el equipo. Nexo se sostiene con el consumo del punto. Hay un mínimo mensual acordado según la máquina.",
  },
  {
    name: "Suministros",
    fit: "Previsibilidad mutua",
    text: "Mismo deliverable (máquina + operación). La empresa acuerda un compromiso mensual. Si el consumo lo supera, paga el real; si no, cubre el diferencial.",
  },
  {
    name: "Arrendamiento",
    fit: "Renta fija",
    text: "Canon mensual predecible, todo incluido. Útil cuando el presupuesto exige un costo fijo, no variable por consumo.",
  },
  {
    name: "Compra del equipo",
    fit: "No es el modelo Nexo",
    text: "Tú asumes capex, mantenimiento, insumos y riesgo de obsolescencia. Nexo no vende la máquina: opera el servicio.",
  },
];

export default function ComodatoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Comodato de máquinas vending",
          description:
            "Modalidad comodato: Nexo entrega e instala la máquina vending sin costo de equipo para la empresa, con operación y abastecimiento incluidos en Medellín.",
          slug: "/comodato-maquinas-vending",
          serviceType: "Comodato de máquinas vending",
        })}
      />
      <JsonLd data={faqPageSchema(comodatoFaqs)} />

      <Breadcrumb items={crumbs} />
      <IntentHero
        eyebrow="Modelo comercial"
        title={
          <>
            Comodato de máquinas vending:{" "}
            <span className="font-extrabold text-accent">
              sin comprar el equipo.
            </span>
          </>
        }
        subtitle="Nexo instala café, snacks o proteína en tu espacio. La máquina es nuestra. Tú pones el lugar; nosotros la operación."
      />

      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="01"
            eyebrow="Qué significa"
            title={
              <>
                Tu espacio,
                <br />
                <span className="text-accent">nuestra máquina.</span>
              </>
            }
            className="mb-12 lg:mb-16"
          />
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-fg-muted lg:text-lg">
            <p>
              El comodato es la forma más frecuente de{" "}
              <Link
                href="/vending-corporativo-medellin"
                className="text-fg underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              >
                vending corporativo
              </Link>{" "}
              con Nexo. No es un préstamo informal: hay contrato, mínimos de
              consumo y un servicio completo detrás del equipo.
            </p>
            <p>
              La empresa no paga la máquina ni la instalación. Los colaboradores
              compran en el punto (o la empresa subsidia). Nexo cubre
              abastecimiento, mantenimiento y soporte. Por eso el punto necesita
              un flujo real: cada máquina tiene un mínimo de compra mensual
              según su tamaño y línea.
            </p>
            <p>
              Aplica a{" "}
              <Link
                href="/cafe"
                className="text-fg underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              >
                máquina de café para oficina
              </Link>
              , snacks y proteína. La modalidad se confirma en la conversación
              inicial; si el caso pide suministros o renta fija, lo decimos
              claro.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-sunken py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="02"
            eyebrow="Comparar opciones"
            title={
              <>
                Comodato, renta
                <br />
                <span className="text-accent">o comprar.</span>
              </>
            }
            className="mb-12 lg:mb-16"
          />
          <ul className="divide-y divide-border-soft border-y border-border-soft">
            {comparison.map((row, i) => (
              <li
                key={row.name}
                className="grid grid-cols-1 gap-3 py-8 lg:grid-cols-12 lg:items-baseline lg:gap-8"
              >
                <span className="font-mono text-xs text-accent lg:col-span-1">
                  0{i + 1}
                </span>
                <div className="lg:col-span-4">
                  <h3 className="font-display text-xl font-medium text-fg">
                    {row.name}
                  </h3>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-subtle">
                    {row.fit}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-fg-muted lg:col-span-7">
                  {row.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="03"
            eyebrow="Incluido"
            title={
              <>
                Lo que Nexo
                <br />
                <span className="text-accent">pone en el punto.</span>
              </>
            }
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 gap-x-12 border-y border-border-soft md:grid-cols-2">
            <ul className="divide-y divide-border-soft md:border-r md:border-border-soft md:pr-12">
              {included.slice(0, 3).map((item, i) => (
                <li key={item} className="flex gap-4 py-5">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <span className="text-base text-fg-muted">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="divide-y divide-border-soft md:pl-12">
              {included.slice(3).map((item, i) => (
                <li key={item} className="flex gap-4 py-5">
                  <span className="font-mono text-xs text-accent">0{i + 4}</span>
                  <span className="text-base text-fg-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-fg-muted">
            La empresa aporta un área interior, punto eléctrico estable y acceso
            para abastecer. Sin obras. Cobertura: Medellín y el Valle de Aburrá.
          </p>
        </div>
      </section>

      <FAQ items={comodatoFaqs} index="04" />

      <RelatedLinks
        index="05"
        links={[
          {
            href: "/vending-corporativo-medellin",
            label: "Vending corporativo en Medellín",
            description:
              "Visión del servicio completo: café, snacks y proteína para empresas.",
          },
          {
            href: "/cafe",
            label: "Máquina de café para oficinas",
            description:
              "La línea más pedida en oficinas y coworkings.",
          },
          {
            href: "/contacto",
            label: "Cotiza sin compromiso",
            description:
              "Definimos modalidad y viabilidad en la primera llamada.",
          },
        ]}
      />

      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <Eyebrow>Sin capex en el equipo</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="display-lg mt-6 text-fg">
              ¿Comodato calza
              <br />
              <span className="text-accent">con tu espacio?</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
              Te contactamos en menos de 24 horas. Revisamos flujo, línea y
              mínimos con honestidad.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="mt-10">
              <Magnetic strength={0.35} maxTravelPx={10}>
                <Button href="/contacto" variant="accent" size="lg" withArrow>
                  Quiero conversar
                </Button>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
