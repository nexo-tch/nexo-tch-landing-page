import type { Metadata } from "next";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductHero } from "@/components/product/ProductHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, absoluteUrl, productSchema } from "@/lib/seo";

const PRODUCT_NAME = "Nexo Snacks";
const PRODUCT_DESCRIPTION =
  "Máquina vending de snacks seleccionados para oficinas y coworkings. Opciones saludables y antojos de calidad, con rotación según el consumo real de tu equipo. Sin costo para tu empresa.";

export const metadata: Metadata = {
  title: "Nexo Snacks — Snacks seleccionados para oficinas",
  description:
    "Snacks seleccionados con criterio para tu oficina. Opciones saludables y antojos de calidad. Sin costo para tu empresa — nosotros operamos todo.",
  alternates: { canonical: "/snacks" },
  openGraph: {
    title: "Nexo Snacks — Snacks que tu equipo realmente quiere",
    description:
      "Snacks seleccionados con criterio, pensados para oficinas y coworkings en Medellín.",
    url: absoluteUrl("/snacks"),
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE.url,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: "Nexo Snacks — máquina vending de snacks para oficinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexo Snacks — Snacks seleccionados para oficinas",
    description:
      "Snacks seleccionados con criterio. Sin costo para tu empresa.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

const snacks = [
  { name: "Granola artesanal", description: "Hojuelas crujientes con miel y frutos rojos." },
  { name: "Mix de frutos secos", description: "Almendras, nueces y arándanos seleccionados." },
  { name: "Galletas artesanales", description: "Horneadas con mantequilla real y chips de chocolate." },
  { name: "Chips de plátano", description: "Plátano maduro crocante, sin aceite añadido." },
  { name: "Barras de cereal", description: "Avena, miel y semillas para energía sostenida." },
  { name: "Chocolate oscuro", description: "Cacao de calidad con sabor intenso, no industrial." },
  { name: "Yogurt griego", description: "Más proteína, menos azúcar, sabor limpio." },
  { name: "Fruta deshidratada", description: "Frutas seleccionadas, sin azúcar añadida." },
];

const nexoAdvantages = [
  "Selección propia con criterio",
  "Opciones saludables y antojos de calidad",
  "Snacks que tu equipo realmente come",
  "Mantenimiento continuo y monitoreo",
  "Rotación según el consumo real",
];

export default function SnacksPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: PRODUCT_NAME,
          description: PRODUCT_DESCRIPTION,
          slug: "/snacks",
          image: "/images/nexo-snacks-machine.webp",
          category: "Snack vending machine",
          audience: "Oficinas, coworkings y espacios corporativos",
        })}
      />
      <ProductHero
        badge="Nexo Snacks"
        index="03"
        headline={
          <>
            Snacks seleccionados,{" "}
            <span className="font-extrabold text-accent">
              al alcance del día a día.
            </span>
          </>
        }
        subheadline="Una selección propia con opciones saludables y antojos de calidad, que rota según lo que tu equipo realmente consume. Todo al alcance en tu propio espacio."
        ctaText="Quiero Nexo Snacks"
        ctaHref="/contacto"
        machineImage="/images/nexo-snacks-machine.webp"
        machineAlt="Máquina Nexo Snacks"
      />

      {/* Snacks — divide-y editorial */}
      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="A"
            eyebrow="Selección propia"
            title={
              <>
                Productos seleccionados
                <br />
                <span className="text-accent">por calidad y sabor.</span>
              </>
            }
            description="Cada producto seleccionado con criterio — saludables y antojos. Rotamos según lo que tu equipo realmente consume."
            className="mb-16 lg:mb-20"
          />

          <ul className="grid grid-cols-1 gap-x-12 gap-y-0 divide-y divide-border-soft border-y border-border-soft lg:grid-cols-2 lg:divide-y-0">
            {snacks.map((snack, i) => (
              <ScrollReveal key={snack.name} delay={i * 0.04}>
                <li
                  className={`grid grid-cols-[auto_1fr] items-baseline gap-6 py-6 lg:py-8 ${
                    i >= 4 ? "lg:border-t lg:border-border-soft" : ""
                  } ${i % 2 === 1 ? "lg:border-l lg:border-border-soft lg:pl-12" : "lg:pr-12"}`}
                >
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-medium text-fg">
                      {snack.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {snack.description}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* What Nexo Snacks includes — positive-only list, no confrontation */}
      <section className="bg-bg-sunken py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionHeader
            index="B"
            eyebrow="Qué incluye Nexo Snacks"
            title={
              <>
                Todo pensado para
                <br />
                <span className="text-accent">tu espacio.</span>
              </>
            }
            description="Cada detalle está diseñado para que tu equipo encuentre lo que busca — y tu empresa no tenga que preocuparse por nada."
            className="mb-16 lg:mb-20"
          />

          <ScrollReveal>
            <ul className="divide-y divide-border-soft border-y border-border-soft">
              {nexoAdvantages.map((advantage, i) => (
                <li
                  key={advantage}
                  className="flex items-center gap-5 py-6 lg:py-7"
                >
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <Check className="h-4 w-4" strokeWidth={2} />
                  </div>
                  <span className="text-base text-fg lg:text-lg">
                    {advantage}
                  </span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <Eyebrow>Lleva Nexo Snacks a tu oficina</Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h2 className="display-lg mt-6 text-fg">
                  Snacks seleccionados,
                  <br />
                  <span className="text-accent">curados para tu equipo.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
                  Calidad consistente, rotación según el consumo real,
                  mantenimiento continuo. Te contactamos en menos de 24 horas.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="mt-10">
                  <Magnetic strength={0.35} maxTravelPx={10}>
                    <Button href="/contacto" variant="accent" size="lg" withArrow>
                      Quiero Nexo Snacks
                    </Button>
                  </Magnetic>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="lg:col-span-5">
              <ul className="divide-y divide-border-soft border-y border-border-soft">
                {[
                  "Respuesta en menos de 24 horas",
                  "Selección propia con criterio",
                  "Rotación según consumo real",
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
