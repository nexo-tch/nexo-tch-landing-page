import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Clock, ShieldCheck, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductHero } from "@/components/product/ProductHero";

export const metadata: Metadata = {
  title: "Nexo Café — Máquina de café de especialidad para oficinas | Medellín",
  description:
    "Café de especialidad colombiano en tu oficina. 8 bebidas premium, instalación en 48h, sin costo. Eleva la cultura de tu empresa.",
  openGraph: {
    title: "Nexo Café — Café de especialidad en tu oficina",
    description:
      "8 bebidas premium, granos colombianos de especialidad. Instalación en 48h sin costo para tu empresa.",
  },
};

const beverages = [
  { emoji: "☕", name: "Espresso", description: "Intenso y concentrado, la base de todo gran café" },
  { emoji: "🫗", name: "Americano", description: "Suave y equilibrado, perfecto para todo el día" },
  { emoji: "🥛", name: "Cappuccino", description: "Espuma cremosa sobre un espresso robusto" },
  { emoji: "☁️", name: "Latte", description: "Suavidad láctea con un toque de café premium" },
  { emoji: "🍫", name: "Chocolate Caliente", description: "Cacao intenso, ideal para las tardes" },
  { emoji: "🧋", name: "Mocaccino", description: "La fusión perfecta entre café y chocolate" },
  { emoji: "🥤", name: "Café con Leche", description: "Clásico colombiano, cremoso y reconfortante" },
  { emoji: "🔥", name: "Tinto Premium", description: "Negro, puro, de grano de especialidad" },
];

const features = [
  {
    icon: Award,
    title: "Café de especialidad colombiano",
    description:
      "Granos seleccionados de las mejores fincas colombianas. Tostión controlada para cada bebida. No es café comercial — es café que tus colaboradores van a agradecer.",
    gradient: "from-nexo-gold/20 via-amber-900/10 to-transparent",
  },
  {
    icon: Sparkles,
    title: "Vasos premium 7oz",
    description:
      "Diseño minimalista con logo metálico en relieve. Cada vaso es un statement de que tu empresa cuida los detalles. La experiencia empieza desde lo visual.",
    gradient: "from-nexo-gold-bright/15 via-yellow-900/10 to-transparent",
  },
  {
    icon: Clock,
    title: "8 bebidas al instante",
    description:
      "Desde un espresso intenso hasta un chocolate caliente reconfortante. Tu equipo elige lo que quiere, cuando quiere. Listo en segundos, sin salir del edificio.",
    gradient: "from-nexo-teal/15 via-emerald-900/10 to-transparent",
  },
  {
    icon: ShieldCheck,
    title: "Cero preocupaciones",
    description:
      "Nexo instala, opera, abastece y mantiene la máquina. Si algo falla, lo resolvemos en horas. Tu empresa solo disfruta — nosotros nos encargamos de todo.",
    gradient: "from-green-500/15 via-emerald-900/10 to-transparent",
  },
];

export default function CafePage() {
  return (
    <>
      <ProductHero
        badge="Nexo Café"
        headline={
          <>
            Café de especialidad para tu equipo,{" "}
            <span className="text-gradient-gold">instalado en 48h</span>
          </>
        }
        subheadline="8 bebidas premium con granos colombianos de especialidad. Sin inversión, sin obras, sin complicaciones. Tu equipo merece mejor café."
        ctaText="Quiero mi máquina →"
        ctaHref="/contacto"
        machineImage="/images/nexo-cafe-machine.png"
        machineAlt="Máquina Nexo Café de especialidad"
      />

      {/* Beverages Grid */}
      <section className="py-24 lg:py-32 bg-nexo-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-nexo-teal border border-nexo-teal/30 rounded-full mb-4">
                Menú completo
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                8 bebidas <span className="text-gradient-gold">premium</span>
              </h2>
              <p className="text-nexo-gray text-lg max-w-2xl mx-auto">
                Cada bebida preparada al instante con granos de especialidad colombiana. Tu equipo elige, la máquina hace el resto.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {beverages.map((beverage, i) => (
              <ScrollReveal key={beverage.name} delay={i * 0.06}>
                <div className="group bg-nexo-gray-dark rounded-xl p-5 lg:p-6 border border-white/5 hover:border-nexo-gold/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-nexo-gold/5 h-full">
                  <span className="text-3xl lg:text-4xl block mb-3">{beverage.emoji}</span>
                  <h3 className="font-display font-semibold text-base lg:text-lg mb-1">
                    {beverage.name}
                  </h3>
                  <p className="text-nexo-gray text-sm leading-relaxed">
                    {beverage.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-mesh-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                ¿Por qué <span className="text-gradient-gold">Nexo Café</span>?
              </h2>
              <p className="text-nexo-gray text-lg max-w-2xl mx-auto">
                No es solo una máquina de café. Es una declaración de que tu empresa valora a su equipo.
              </p>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-20 lg:gap-28">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const isReversed = i % 2 !== 0;

              return (
                <ScrollReveal key={feature.title} direction={isReversed ? "right" : "left"}>
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                      isReversed ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-full lg:w-1/2">
                      <div
                        className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${feature.gradient} bg-nexo-gray-dark border border-white/5`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 rounded-2xl bg-nexo-black/50 border border-nexo-gold/20 flex items-center justify-center">
                            <Icon className="w-10 h-10 text-nexo-gold" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-nexo-gold/10 blur-2xl" />
                        <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-nexo-gold/5 blur-2xl" />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-nexo-gold/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-nexo-gold" strokeWidth={2} />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-nexo-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-nexo-gray text-lg leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-nexo-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-nexo-gold/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Lleva Nexo Café{" "}
              <span className="text-gradient-gold">a tu oficina</span>
            </h2>
            <p className="text-nexo-gray text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Tu equipo merece café de especialidad. Instalamos en 48 horas, sin costo de instalación, sin contrato a largo plazo. Solo buenos cafés.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-nexo-teal hover:bg-nexo-teal-hover text-nexo-black font-semibold rounded-xl px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-nexo-teal/20 hover:-translate-y-0.5 text-lg"
            >
              Quiero mi máquina
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-sm text-nexo-gray/60">
              Sin costo de instalación · Sin compromiso a largo plazo · Mantenimiento incluido
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: "48h", label: "Instalación express" },
                { value: "$0", label: "Costo de instalación" },
                { value: "24/7", label: "Soporte y mantenimiento" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-nexo-gray-dark/50 rounded-xl p-6 border border-white/5"
                >
                  <div className="font-display text-2xl lg:text-3xl font-bold text-nexo-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-nexo-gray text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
