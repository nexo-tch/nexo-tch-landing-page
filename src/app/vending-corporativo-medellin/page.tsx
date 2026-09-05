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
import { vendingCorporativoFaqs } from "@/data/faqs";
import {
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  breadcrumbSchema,
  faqPageSchema,
  serviceSchema,
} from "@/lib/seo";

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Máquinas expendedoras Medellín", path: "/vending-corporativo-medellin" },
] as const;

export const metadata: Metadata = {
  title: "Máquinas expendedoras en Medellín",
  description:
    "Máquinas expendedoras en Medellín para empresas: café, snacks y proteína. Vending corporativo sin inversión. Nexo instala, opera y abastece en el Valle de Aburrá.",
  alternates: { canonical: "/vending-corporativo-medellin" },
  openGraph: {
    title: "Máquinas expendedoras en Medellín | Nexo Vending",
    description:
      "Vending corporativo: café, proteína y snacks en tu empresa. Operación incluida. Valle de Aburrá.",
    url: absoluteUrl("/vending-corporativo-medellin"),
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending corporativo en Medellín | Nexo Vending",
    description:
      "Máquinas vending para empresas. Sin inversión. Nexo opera todo.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const lines = [
  {
    href: "/cafe",
    name: "Nexo Café",
    for: "Oficinas, coworkings y universidades",
    text: "Máquina de café para oficina: espresso, americano, cappuccino y más. Calidad en cada taza, sin cafetería interna.",
  },
  {
    href: "/snacks",
    name: "Nexo Snacks",
    for: "Oficinas y espacios corporativos",
    text: "Máquina vending de snacks y bebidas con portafolio curado y rotación según el consumo real.",
  },
  {
    href: "/proteinas",
    name: "Nexo Protein",
    for: "Gimnasios de alto flujo",
    text: "Batidos y barras al instante. Post-entreno sin barra ni espera; el gym no opera el servicio.",
  },
];

const steps = [
  {
    title: "Conversación",
    text: "Nos cuentas el espacio, el flujo y qué quieres ofrecer. Sin compromiso.",
  },
  {
    title: "Viabilidad y mix",
    text: "Validamos el punto, la línea (café, snacks, proteína) y la modalidad comercial.",
  },
  {
    title: "Instalación y operación",
    text: "Instalamos, activamos el punto y nos quedamos: abastecimiento, soporte y monitoreo.",
  },
];

export default function VendingCorporativoPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Máquinas expendedoras en Medellín — Nexo Vending",
          description:
            "Máquinas expendedoras (vending corporativo) en Medellín y el Valle de Aburrá: café, snacks y proteína, con instalación, operación y abastecimiento incluidos.",
          slug: "/vending-corporativo-medellin",
          serviceType: "Máquinas expendedoras para empresas",
        })}
      />
      <JsonLd data={faqPageSchema(vendingCorporativoFaqs)} />

      <Breadcrumb items={crumbs} />
      <IntentHero
        eyebrow="Nexo Vending · Valle de Aburrá"
        title={
          <>
            Máquinas expendedoras en{" "}
            <span className="font-extrabold text-accent">Medellín.</span>
          </>
        }
        subtitle="Vending corporativo de café, proteína y snacks para empresas. Sin obras y sin comprar el equipo: Nexo instala, opera y abastece."
      />

      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="01"
            eyebrow="El servicio"
            title={
              <>
                No es una máquina sola.
                <br />
                <span className="text-accent">Es la operación completa.</span>
              </>
            }
            className="mb-12 lg:mb-16"
          />
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-fg-muted lg:text-lg">
            <p>
              Las máquinas expendedoras de Nexo (vending corporativo) ponen
              café, snacks o proteína donde tu equipo ya está: la oficina, el
              coworking o el gimnasio. Deja de depender del horario de una
              cafetería o de que alguien salga del edificio.
            </p>
            <p>
              Nexo opera en Medellín y el Valle de Aburrá (Envigado, Sabaneta,
              Itagüí, Bello, La Estrella). La modalidad más común es el{" "}
              <Link
                href="/comodato-maquinas-vending"
                className="text-fg underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
              >
                comodato de máquinas vending
              </Link>
              : tu empresa no invierte en el equipo. También trabajamos
              suministros, arrendamiento y revenue sharing cuando el caso lo
              pide.
            </p>
            <p>
              Facilities y RRHH no tienen que gestionar proveedores, pedidos ni
              mantenimiento. Un solo interlocutor, respuesta en menos de 24
              horas, monitoreo del punto.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bg-sunken py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="02"
            eyebrow="Tres líneas"
            title={
              <>
                Elige según el
                <br />
                <span className="text-accent">tipo de espacio.</span>
              </>
            }
            className="mb-12 lg:mb-16"
          />
          <ul className="divide-y divide-border-soft border-y border-border-soft">
            {lines.map((line, i) => (
              <li key={line.href}>
                <Link
                  href={line.href}
                  className="group grid grid-cols-1 gap-4 py-8 lg:grid-cols-12 lg:items-baseline lg:gap-8"
                >
                  <span className="font-mono text-xs text-accent lg:col-span-1">
                    0{i + 1}
                  </span>
                  <div className="lg:col-span-4">
                    <h3 className="font-display text-xl font-medium text-fg transition-colors group-hover:text-accent">
                      {line.name}
                    </h3>
                    <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-subtle">
                      {line.for}
                    </p>
                  </div>
                  <p className="text-base leading-relaxed text-fg-muted lg:col-span-7">
                    {line.text}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="03"
            eyebrow="Cómo empezamos"
            title={
              <>
                De la conversación
                <br />
                <span className="text-accent">a la máquina en sitio.</span>
              </>
            }
            className="mb-12 lg:mb-16"
          />
          <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <li key={step.title}>
                <span className="font-mono text-xs text-accent">
                  0{i + 1}
                </span>
                <h3 className="font-display mt-4 text-xl font-medium text-fg">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-fg-muted lg:text-base">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FAQ items={vendingCorporativoFaqs} index="04" />

      <RelatedLinks
        index="05"
        links={[
          {
            href: "/vending-para-oficinas",
            label: "Vending para oficinas",
            description:
              "Café y snacks en la oficina. El equipo no sale del edificio.",
          },
          {
            href: "/vending-para-gimnasios",
            label: "Vending para gimnasios",
            description:
              "Proteína post-entreno. Comodato o revenue sharing.",
          },
          {
            href: "/vending-para-coworkings",
            label: "Vending para coworkings",
            description:
              "Amenidad de café y snacks. Cero operación para el operador.",
          },
          {
            href: "/comodato-maquinas-vending",
            label: "Máquina vending sin inversión",
            description:
              "Vending en comodato: no compras el equipo. Nexo opera el punto.",
          },
        ]}
      />

      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <Eyebrow>Medellín y Valle de Aburrá</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="display-lg mt-6 text-fg">
              Lleva vending Nexo
              <br />
              <span className="text-accent">a tu empresa.</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-10">
              <Magnetic strength={0.35} maxTravelPx={10}>
                <Button href="/contacto" variant="accent" size="lg" withArrow>
                  Quiero mi máquina
                </Button>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
