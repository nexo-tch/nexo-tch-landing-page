import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Clock, ShieldCheck, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductHero } from "@/components/product/ProductHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { ProductSeo } from "@/components/product/ProductSeo";
import { FAQ } from "@/components/home/FAQ";
import { RelatedLinks } from "@/components/seo/RelatedLinks";
import { cafeFaqs } from "@/data/faqs";
import {
  PAGE_OG_IMAGES,
  absoluteUrl,
  breadcrumbSchema,
  faqPageSchema,
  productSchema,
  serviceSchema,
} from "@/lib/seo";

const PRODUCT_NAME = "Nexo Café";
const PRODUCT_DESCRIPTION =
  "Máquina de café para empresas en Medellín: oficinas, coworkings y universidades. Bebidas clásicas al instante, sin inversión. Nexo instala, opera y abastece.";

const cafeCrumbs = [
  { name: "Inicio", path: "/" },
  { name: "Nexo Café", path: "/cafe" },
] as const;

export const metadata: Metadata = {
  title: "Máquina de café para empresas en Medellín",
  description:
    "Máquina de café para empresas en Medellín. Espresso, americano, cappuccino y más. Sin inversión: Nexo instala, opera y abastece en oficinas y coworkings.",
  alternates: { canonical: "/cafe" },
  openGraph: {
    title: "Máquina de café para empresas en Medellín | Nexo Café",
    description:
      "Café para empresas: bebidas clásicas al instante, cero obras, operación incluida.",
    url: absoluteUrl("/cafe"),
    type: "website",
    images: [PAGE_OG_IMAGES.cafe],
  },
  twitter: {
    card: "summary_large_image",
    title: "Máquina de café para empresas en Medellín | Nexo Café",
    description:
      "Café de calidad en tu empresa. Sin inversión. Nexo opera todo.",
    images: [PAGE_OG_IMAGES.cafe.url],
  },
};

const beverages = [
  {
    name: "Espresso",
    description: "Intenso y concentrado, la base de todo gran café.",
  },
  {
    name: "Americano",
    description: "Suave y equilibrado, perfecto para todo el día.",
  },
  {
    name: "Cappuccino",
    description: "Espuma cremosa sobre un espresso robusto.",
  },
  {
    name: "Latte",
    description: "Suavidad láctea con el carácter del café.",
  },
  {
    name: "Chocolate Caliente",
    description: "Cacao intenso, ideal para las tardes.",
  },
  {
    name: "Mocaccino",
    description: "La fusión perfecta entre café y chocolate.",
  },
  {
    name: "Café con Leche",
    description: "Clásico cremoso, ideal para empezar el día.",
  },
  {
    name: "Tinto Clásico",
    description: "Negro, puro, intenso. El café de siempre, mejor hecho.",
  },
];

const features = [
  {
    icon: Award,
    title: "Café que se siente café",
    description:
      "Calidad real en cada taza, del primer sorbo al último. Un café pensado para tomarse en serio, no solo para llenar una taza.",
  },
  {
    icon: Sparkles,
    title: "Cuidado en los detalles",
    description:
      "Vasos y detalles pensados para un espacio que se toma en serio. Cada taza refuerza el mensaje de que tu empresa cuida los detalles — incluso los que parecen pequeños.",
  },
  {
    icon: Clock,
    title: "Bebidas clásicas al instante",
    description:
      "Desde un espresso intenso hasta un chocolate caliente reconfortante. Tu equipo elige lo que quiere, cuando quiere. Listo en segundos, sin salir del edificio.",
  },
  {
    icon: ShieldCheck,
    title: "Cero preocupaciones",
    description:
      "Nexo instala, opera, abastece y mantiene la máquina. Respondemos en menos de 24 horas si algo se presenta. Tu empresa solo disfruta.",
  },
];

export default function CafePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(cafeCrumbs)} />
      <JsonLd
        data={serviceSchema({
          name: "Nexo Café — máquina de café para empresas",
          description: PRODUCT_DESCRIPTION,
          slug: "/cafe",
          serviceType: "Vending de café corporativo",
        })}
      />
      <JsonLd data={faqPageSchema(cafeFaqs)} />
      <JsonLd
        data={productSchema({
          name: PRODUCT_NAME,
          description: PRODUCT_DESCRIPTION,
          slug: "/cafe",
          image: "/images/nexo-cafe-machine.webp",
          category: "Coffee vending machine",
          audience: "Oficinas, coworkings y universidades",
        })}
      />
      <Breadcrumb items={cafeCrumbs} />
      <ProductHero
        badge="Nexo Café"
        index="01"
        compactTop
        headline={
          <>
            Máquina de café para empresas,{" "}
            <span className="font-extrabold text-accent">
              al instante.
            </span>
          </>
        }
        subheadline="Para oficinas, coworkings y universidades en Medellín. Espresso, americano, cappuccino y más. Sin obras y sin invertir en el equipo: Nexo opera, mantiene y abastece."
        ctaText="Quiero mi máquina"
        ctaHref="/contacto?linea=oficinas"
        machineImage="/images/nexo-cafe-machine.webp"
        machineAlt="Máquina vending Nexo Café para oficinas en Medellín"
      />

      {/* Beverages — editorial divide-y instead of card grid */}
      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="A"
            eyebrow="Menú completo"
            title={
              <>
                Las bebidas clásicas,
                <br />
                <span className="text-accent">una sola máquina.</span>
              </>
            }
            description="Cada bebida preparada al instante. Tu equipo elige, la máquina hace el resto."
            className="mb-16 lg:mb-20"
          />

          <ul className="grid grid-cols-1 divide-y divide-border-soft border-y border-border-soft lg:grid-cols-2 lg:divide-x lg:divide-y-0">
            {/* Render in 2 columns on desktop with proper dividers */}
            <li className="contents">
              <div className="divide-y divide-border-soft">
                {beverages.slice(0, 4).map((beverage, i) => (
                  <ScrollReveal key={beverage.name} delay={i * 0.05}>
                    <div className="grid grid-cols-[auto_1fr] gap-6 py-6 lg:gap-8 lg:py-8 lg:pr-12">
                      <span className="font-mono text-xs text-accent">
                        0{i + 1}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-medium text-fg">
                          {beverage.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                          {beverage.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </li>
            <li className="contents">
              <div className="divide-y divide-border-soft border-t border-border-soft lg:border-t-0">
                {beverages.slice(4).map((beverage, i) => (
                  <ScrollReveal
                    key={beverage.name}
                    delay={(i + 4) * 0.05}
                  >
                    <div className="grid grid-cols-[auto_1fr] gap-6 py-6 lg:gap-8 lg:py-8 lg:pl-12">
                      <span className="font-mono text-xs text-accent">
                        0{i + 5}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-medium text-fg">
                          {beverage.name}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                          {beverage.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Features — alternating zig-zag */}
      <section className="bg-bg-sunken py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="B"
            eyebrow="Por qué Nexo Café"
            title={
              <>
                No es solo café,
                <br />
                <span className="text-accent">es una declaración.</span>
              </>
            }
            description="Cuando una empresa instala Nexo Café, su equipo lo nota desde el primer día. La calidad se siente."
            className="mb-20 lg:mb-28"
          />

          <div className="space-y-20 lg:space-y-28">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const reversed = i % 2 !== 0;
              return (
                <ScrollReveal
                  key={feature.title}
                  direction={reversed ? "right" : "left"}
                >
                  <article
                    className={`grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12 ${
                      reversed ? "lg:[direction:rtl]" : ""
                    }`}
                  >
                    <div className="lg:col-span-4 lg:[direction:ltr]">
                      <div className="flex items-baseline gap-4">
                        <span className="font-mono text-xs text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="h-px flex-1 bg-border-soft" />
                      </div>
                      <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-xl border border-border bg-bg">
                        <Icon
                          className="h-6 w-6 text-accent"
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>
                    <div className="lg:col-span-8 lg:[direction:ltr]">
                      <h3 className="font-display text-2xl font-semibold text-fg lg:text-3xl">
                        {feature.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted lg:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <ProductSeo
        index="C"
        eyebrow="Café vending en Medellín"
        title={
          <>
            Café de oficina sin
            <br />
            <span className="text-accent">comprar la máquina.</span>
          </>
        }
      >
        <p>
          Nexo Café es una máquina de café para empresas en Medellín y el Valle
          de Aburrá: oficinas, coworkings y universidades. No vendemos el
          equipo: lo instalamos, lo operamos y lo abastecemos. Tu empresa no
          asume la compra ni la logística diaria.
        </p>
        <p>
          El menú se configura contigo: tinto, espresso, americano, cappuccino,
          latte, chocolate y más. Los colaboradores pagan en la máquina — o
          puedes subsidiar bebidas por horario o de forma permanente. Mezcladores,
          vasos y azúcar van incluidos en el servicio.
        </p>
        <p>
          La modalidad más usada es el{" "}
          <Link
            href="/comodato-maquinas-vending"
            className="text-fg underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            comodato
          </Link>
          : cero capex en la máquina. Forma parte del{" "}
          <Link
            href="/vending-corporativo-medellin"
            className="text-fg underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            vending corporativo
          </Link>{" "}
          de Nexo en Medellín, Envigado, Sabaneta, Itagüí, Bello y La Estrella.
          Te contactamos en menos de 24 horas para validar el punto.
        </p>
      </ProductSeo>

      <FAQ items={cafeFaqs} index="D" />

      <RelatedLinks
        index="E"
        links={[
          {
            href: "/vending-para-oficinas",
            label: "Vending para oficinas",
            description:
              "El caso completo: café y snacks, sin que facilities opere nada.",
          },
          {
            href: "/vending-corporativo-medellin",
            label: "Vending corporativo en Medellín",
            description:
              "Café, snacks y proteína para empresas. Una sola operación.",
          },
          {
            href: "/comodato-maquinas-vending",
            label: "Máquina vending sin inversión",
            description:
              "Vending en comodato: por qué no hace falta comprar el equipo.",
          },
          {
            href: "/vending-para-coworkings",
            label: "Vending para coworkings",
            description:
              "Café como amenidad. El operador no monta una cafetería.",
          },
          {
            href: "/snacks",
            label: "Máquina de snacks para oficinas",
            description:
              "Complementa el café con un portafolio curado en el mismo espacio.",
          },
        ]}
      />

      {/* Final CTA */}
      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <Eyebrow>Lleva Nexo Café a tu empresa</Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h2 className="display-lg mt-6 text-fg">
                  Tu próximo café
                  <br />
                  <span className="text-accent">empieza la conversación.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
                  Sin costo para tu empresa, modelo comercial flexible.
                  Te contactamos en menos de 24 horas. Solo buenos cafés.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="mt-10">
                  <Magnetic strength={0.35} maxTravelPx={10}>
                    <Button href="/contacto?linea=oficinas" variant="accent" size="lg" withArrow>
                      Quiero mi máquina
                    </Button>
                  </Magnetic>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="lg:col-span-5">
              <ul className="divide-y divide-border-soft border-y border-border-soft">
                {[
                  "Respuesta en menos de 24 horas",
                  "Costo de instalación: $0",
                  "Operación y soporte 24/7",
                ].map((signal, i) => (
                  <li
                    key={signal}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span className="text-base text-fg-muted">{signal}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
