import type { Metadata } from "next";
import { Dumbbell, Zap, Users, Settings } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductHero } from "@/components/product/ProductHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE, absoluteUrl, productSchema } from "@/lib/seo";

const PRODUCT_NAME = "Nexo Protein";
const PRODUCT_DESCRIPTION =
  "Máquina vending de batidos de proteína y barras funcionales para gimnasios. Whey y opciones pensadas para el post-entrenamiento. Sin costo para tu gimnasio, operación incluida.";

export const metadata: Metadata = {
  title: "Nexo Protein — Proteína al instante en tu gym",
  description:
    "Batidos de proteína listos al instante en tu gimnasio. Whey y barras proteicas. Sin costo para tu gimnasio, operación incluida.",
  alternates: { canonical: "/proteinas" },
  openGraph: {
    title: "Nexo Protein — Proteína al instante en tu gimnasio",
    description:
      "Batidos de whey y barras proteicas listas al instante. Post-entrenamiento inmediato, cero operación, experiencia completa para tus socios.",
    url: absoluteUrl("/proteinas"),
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE.url,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: "Nexo Protein — máquina de batidos de proteína para gimnasios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexo Protein — Proteína al instante en tu gimnasio",
    description:
      "Máquina vending de batidos de proteína y barras. Sin costo para tu gimnasio.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

// Representa el tipo de productos que típicamente opera Nexo Protein. El
// mix final se acuerda con cada gimnasio según el perfil de sus socios, por
// eso evitamos comprometer sabores o formatos específicos como SKU cerrado.
const products = [
  { name: "Batido Whey Chocolate", description: "Proteína de calidad, sabor clásico y familiar." },
  { name: "Batido Whey Vainilla", description: "Suavidad en cada sorbo, sin aromas artificiales agresivos." },
  { name: "Batido Whey Fresa", description: "Frescura frutal para el post-entrenamiento." },
  { name: "Barra Proteica Chocolate", description: "Snack denso y completo, ideal entre clases." },
  { name: "Barra Proteica Maní", description: "Crujiente, saciante y con proteína real." },
];

const benefits = [
  {
    icon: Dumbbell,
    title: "Coherencia con el entrenamiento",
    description:
      "Lo que tus instructores recomiendan al terminar la rutina — proteína en los primeros minutos — pasa de ser un consejo a ser una opción disponible en el mismo espacio. Lo que se enseña, ahora también se tiene a la mano.",
  },
  {
    icon: Zap,
    title: "Post-entrenamiento inmediato",
    description:
      "Tus socios toman su proteína en los primeros 30 minutos después de entrenar. Sin espera, sin licuadora, sin llevar shaker de la casa. Listo al instante.",
  },
  {
    icon: Users,
    title: "Retención de socios",
    description:
      "Un gimnasio con proteína al instante es un gimnasio completo. Tus socios valoran la conveniencia y no buscan alternativas. Más valor, más permanencia.",
  },
  {
    icon: Settings,
    title: "Cero operación",
    description:
      "Nexo instala, abastece, mantiene y opera la máquina. Tu equipo se enfoca en lo que sabe hacer, entrenar personas. Nosotros hacemos el resto.",
  },
];

export default function ProteinPage() {
  return (
    <>
      <JsonLd
        data={productSchema({
          name: PRODUCT_NAME,
          description: PRODUCT_DESCRIPTION,
          slug: "/proteinas",
          image: "/images/nexo-protein-machine.png",
          category: "Protein shake vending machine",
          audience: "Gimnasios y centros deportivos",
        })}
      />
      <ProductHero
        badge="Nexo Protein"
        index="02"
        headline={
          <>
            Proteína para tus socios,{" "}
            <span className="font-extrabold text-accent">
              lista cuando la necesitan.
            </span>
          </>
        }
        subheadline="Batidos de whey y barras proteicas directo en tu gimnasio. Tus socios entrenan, toman su proteína y se van. Sin espera, sin licuadora, sin excusas."
        ctaText="Quiero Nexo Protein"
        ctaHref="/contacto"
        machineImage="/images/nexo-protein-machine.png"
        machineAlt="Máquina Nexo Protein para gimnasios"
      />

      {/* Productos — divide-y editorial */}
      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="A"
            eyebrow="Mix típico"
            title={
              <>
                Whey y barras,
                <br />
                <span className="text-accent">lo que tus socios usan.</span>
              </>
            }
            description="Proteína de calidad lista al instante. El mix final lo definimos contigo según el perfil de tus socios."
            className="mb-16 lg:mb-20"
          />

          <ul className="divide-y divide-border-soft border-y border-border-soft">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.05}>
                <li className="grid grid-cols-1 items-baseline gap-4 py-6 lg:grid-cols-12 lg:gap-8 lg:py-8">
                  <div className="flex items-baseline gap-4 lg:col-span-5">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-xl font-medium text-fg lg:text-2xl">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-base leading-relaxed text-fg-muted lg:col-span-7">
                    {product.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits — alternating zig-zag */}
      <section className="bg-bg-sunken py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="B"
            eyebrow="Por qué Nexo Protein"
            title={
              <>
                Tu gimnasio,
                <br />
                <span className="text-accent">al siguiente nivel.</span>
              </>
            }
            description="Nexo Protein no solo beneficia a tus socios. Transforma tu gimnasio en un espacio completo."
            className="mb-20 lg:mb-28"
          />

          <div className="space-y-20 lg:space-y-28">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              const reversed = i % 2 !== 0;
              return (
                <ScrollReveal
                  key={benefit.title}
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
                        {benefit.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted lg:text-lg">
                        {benefit.description}
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
                <Eyebrow>Lleva Nexo Protein a tu gimnasio</Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h2 className="display-lg mt-6 text-fg">
                  Un gimnasio más completo,
                  <br />
                  <span className="text-accent">desde el primer día.</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
                  Proteína al instante para tus socios. Sin inversión, sin
                  operación, sin complicaciones. Te contactamos en menos de 24
                  horas.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="mt-10">
                  <Magnetic strength={0.35} maxTravelPx={10}>
                    <Button href="/contacto" variant="accent" size="lg" withArrow>
                      Quiero Nexo Protein
                    </Button>
                  </Magnetic>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={0.2} className="lg:col-span-5">
              <ul className="divide-y divide-border-soft border-y border-border-soft">
                {[
                  "Respuesta en menos de 24 horas",
                  "Proteína disponible desde el día uno",
                  "Operación y soporte incluidos 24/7",
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
