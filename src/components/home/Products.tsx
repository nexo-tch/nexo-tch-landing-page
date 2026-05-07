import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const products = [
  {
    number: "01",
    name: "Nexo Café",
    tagline: "Café que se siente café",
    description:
      "Espresso, americano, cappuccino y más. Calidad en cada taza — del primer sorbo al último. Máquinas pensadas para el ritmo real de una oficina.",
    bullets: [
      "Café de calidad",
      "Bebidas clásicas al instante",
      "Para oficinas y coworkings",
    ],
    href: "/cafe",
    image: "/images/nexo-cafe-machine.png",
    imageAlt: "Máquina Nexo Café",
  },
  {
    number: "02",
    name: "Nexo Protein",
    tagline: "Proteína lista cuando la necesitan",
    description:
      "Batidos listos al instante, para antes y después de entrenar. Proteína de marcas confiables, servida en segundos. Sin filas, sin espera.",
    bullets: [
      "Proteína de calidad",
      "Lista en segundos",
      "Cero operación para el gym",
      "Para gimnasios de alto flujo",
    ],
    href: "/proteinas",
    image: "/images/nexo-protein-machine.png",
    imageAlt: "Máquina Nexo Protein",
  },
  {
    number: "03",
    name: "Nexo Snacks",
    tagline: "Snacks seleccionados con criterio",
    description:
      "Una selección de snacks pensada para tu espacio. Opciones saludables y antojos de calidad, rotando según lo que tu equipo consume.",
    bullets: [
      "Selección propia",
      "Opciones saludables y antojos",
      "Rotación según consumo",
      "Para oficinas y espacios corporativos",
    ],
    href: "/snacks",
    image: "/images/nexo-snacks-machine.png",
    imageAlt: "Máquina Nexo Snacks",
  },
];

export function Products() {
  return (
    <section id="productos" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          index="02"
          eyebrow="Tres líneas, una operación"
          title={
            <>
              Una solución para cada
              <br />
              <span className="text-accent">tipo de espacio.</span>
            </>
          }
          description="Cada máquina Nexo se adapta al ritmo de tu empresa. Tú eliges la línea, nosotros operamos todo el resto."
          className="mb-20 lg:mb-28"
        />

        {/* Zig-zag full-width sections */}
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-36">
          {products.map((product, i) => {
            const reversed = i % 2 !== 0;
            // First card shares its image with the Hero LCP asset. Marking it
            // eager prevents Next.js from flagging it as "LCP without priority"
            // when the browser picks this (already cached) instance over the
            // Hero in certain first-paint measurements.
            const isFirst = i === 0;
            return (
              <article
                key={product.number}
                className={`grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12 lg:gap-16 ${
                  reversed ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Image side */}
                <ScrollReveal
                  direction={reversed ? "left" : "right"}
                  className="md:col-span-5 md:[direction:ltr]"
                >
                  <div className="relative flex items-center justify-center">
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-border to-transparent"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 -inset-x-8 rounded-[40px] bg-accent/5 blur-3xl"
                    />
                    {/* Aspect-ratio reservado vía wrapper para CLS = 0.
                        Source PNG: 577×1024 → ratio 577/1024.
                        sizes ajustado a los breakpoints reales para que
                        next/image sirva 256w/384w en vez de 640w/750w. */}
                    <div className="relative aspect-[577/1024] h-[320px] sm:h-[420px] md:h-[440px] lg:h-[520px]">
                      <Image
                        src={product.image}
                        alt={product.imageAlt}
                        fill
                        loading={isFirst ? "eager" : "lazy"}
                        fetchPriority={isFirst ? "high" : "auto"}
                        sizes="(min-width: 1024px) 296px, (min-width: 640px) 240px, 184px"
                        className="object-contain drop-shadow-[0_25px_45px_oklch(0_0_0/0.45)]"
                      />
                    </div>
                  </div>
                </ScrollReveal>

                {/* Content side */}
                <ScrollReveal
                  direction={reversed ? "right" : "left"}
                  className="md:col-span-7 md:[direction:ltr]"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-accent">
                      {product.number}
                    </span>
                    <span className="h-px flex-1 bg-border-soft" />
                  </div>

                  <h3 className="display-md mt-6 text-fg">{product.name}</h3>
                  <p className="mt-3 font-medium text-accent">
                    {product.tagline}
                  </p>

                  <p className="mt-6 max-w-lg text-base leading-relaxed text-fg-muted">
                    {product.description}
                  </p>

                  <ul className="mt-8 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {product.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-center gap-3 text-sm text-fg-muted"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={product.href}
                    className="group mt-10 inline-flex items-center gap-2 font-medium text-fg transition-colors duration-200 hover:text-accent tactile"
                  >
                    Conocer {product.name}
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </Link>
                </ScrollReveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
