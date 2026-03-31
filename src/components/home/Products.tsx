"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Nexo Café",
    tagline: "Café de especialidad al alcance de tu equipo",
    description:
      "8 bebidas premium — espresso, americano, cappuccino, chocolate y más. Vasos de 7oz con diseño exclusivo, granos de especialidad seleccionados.",
    benefit: "El café que tu equipo merece, sin salir de la oficina",
    href: "/cafe",
    image: "/images/nexo-cafe-machine.png",
    imageAlt: "Máquina Nexo Café",
    accentBorder: "hover:border-nexo-gold/30",
    accentGlow: "hover:shadow-[0_0_40px_rgba(194,139,83,0.08)]",
  },
  {
    name: "Nexo Protein",
    tagline: "Post-entrenamiento inmediato, sin espera",
    description:
      "Batidos de proteína listos al instante. Ideal para gimnasios de alto flujo donde cada minuto cuenta.",
    benefit: "Recuperación instantánea para los atletas de tu gym",
    href: "/proteinas",
    image: "/images/nexo-protein-machine.png",
    imageAlt: "Máquina Nexo Protein",
    accentBorder: "hover:border-nexo-teal/30",
    accentGlow: "hover:shadow-[0_0_40px_rgba(0,194,160,0.08)]",
  },
  {
    name: "Nexo Snacks",
    tagline: "Snacks curados, no genéricos",
    description:
      "Selección consistente de snacks premium para tu oficina. Productos curados que elevan la experiencia del break.",
    benefit: "Adiós a la máquina triste con productos vencidos",
    href: "/snacks",
    image: "/images/nexo-snacks-machine.png",
    imageAlt: "Máquina Nexo Snacks",
    accentBorder: "hover:border-nexo-gold-bright/30",
    accentGlow: "hover:shadow-[0_0_40px_rgba(255,215,0,0.06)]",
  },
];

export function Products() {
  return (
    <section className="relative bg-nexo-black py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-nexo-gold">
            Nuestras soluciones
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold leading-tight text-nexo-white sm:text-4xl lg:text-5xl">
            Tres formas de energizar tu espacio
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-xl text-center text-lg text-nexo-gray/70">
            Cada máquina Nexo se adapta a las necesidades de tu empresa. Tú
            eliges, nosotros operamos.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {products.map((product, i) => (
            <ScrollReveal key={product.name} delay={0.2 + i * 0.1}>
              <Link href={product.href} className="group block h-full">
                <div
                  className={`relative flex h-full flex-col rounded-2xl border border-nexo-gray/10 bg-nexo-black-light p-8 transition-all duration-500 ${product.accentBorder} ${product.accentGlow}`}
                >
                  <div className="relative mx-auto mb-6 h-[200px] w-full">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      width={250}
                      height={350}
                      className="mx-auto h-full w-auto object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.4)] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-nexo-white">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-nexo-gold">
                    {product.tagline}
                  </p>

                  <p className="mt-4 flex-1 text-base leading-relaxed text-nexo-gray/70">
                    {product.description}
                  </p>

                  <div className="mt-6 rounded-xl bg-nexo-black/50 p-4">
                    <p className="text-sm font-medium text-nexo-white">
                      ✦ {product.benefit}
                    </p>
                  </div>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-nexo-teal transition-colors group-hover:text-nexo-teal-hover">
                    Me interesa
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
