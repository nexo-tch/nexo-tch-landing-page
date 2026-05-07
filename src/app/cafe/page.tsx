import type { Metadata } from "next";
import { Sparkles, Clock, ShieldCheck, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductHero } from "@/components/product/ProductHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, absoluteUrl, productSchema } from "@/lib/seo";

const PRODUCT_NAME = "Nexo Café";
const PRODUCT_DESCRIPTION =
  "Máquina vending de café de calidad para oficinas y coworkings. Bebidas clásicas al instante, sin costo para tu empresa, operación y mantenimiento incluidos.";

export const metadata: Metadata = {
  title: "Nexo Café — Café de calidad para oficinas",
  description:
    "Café de calidad en tu oficina. Bebidas clásicas al instante, sin costo para tu empresa. Eleva la cultura de tu equipo.",
  alternates: { canonical: "/cafe" },
  openGraph: {
    title: "Nexo Café — Café de calidad en tu oficina",
    description:
      "Bebidas clásicas al instante, calidad en cada taza. Sin costo para tu empresa — nosotros operamos todo.",
    url: absoluteUrl("/cafe"),
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE.url,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: "Nexo Café — máquina de café de calidad para oficinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexo Café — Café de calidad en tu oficina",
    description:
      "Bebidas clásicas al instante. Sin costo para tu empresa — nosotros operamos todo.",
    images: [DEFAULT_OG_IMAGE.url],
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
      <ProductHero
        badge="Nexo Café"
        index="01"
        headline={
          <>
            Café de calidad,{" "}
            <span className="font-extrabold text-accent">
              al alcance de tu equipo.
            </span>
          </>
        }
        subheadline="Bebidas clásicas al instante: espresso, americano, cappuccino y más. Calidad real en cada taza, disponible cuando tu equipo la necesita. Sin obras, sin inversión."
        ctaText="Quiero mi máquina"
        ctaHref="/contacto"
        machineImage="/images/nexo-cafe-machine.webp"
        machineAlt="Máquina Nexo Café"
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

      {/* Final CTA */}
      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <Eyebrow>Lleva Nexo Café a tu oficina</Eyebrow>
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
                    <Button href="/contacto" variant="accent" size="lg" withArrow>
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
