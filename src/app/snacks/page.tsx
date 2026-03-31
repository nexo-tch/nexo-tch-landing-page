import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, X, Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductHero } from "@/components/product/ProductHero";

export const metadata: Metadata = {
  title: "Nexo Snacks — Snacks premium seleccionados para oficinas | Medellín",
  description:
    "Snacks curados y de calidad consistente para tu oficina. Granola, frutos secos, galletas artesanales y más. Instalación en 48h, sin costo.",
  openGraph: {
    title: "Nexo Snacks — Snacks que tu equipo realmente quiere",
    description:
      "Adiós al vending genérico. Snacks premium seleccionados para oficinas y coworkings en Medellín.",
  },
};

const snacks = [
  { emoji: "🥣", name: "Granola Premium", description: "Hojuelas crujientes con miel y frutos rojos" },
  { emoji: "🥜", name: "Mix de Frutos Secos", description: "Almendras, nueces y arándanos seleccionados" },
  { emoji: "🍪", name: "Galletas Artesanales", description: "Horneadas con mantequilla real y chips de chocolate" },
  { emoji: "🍌", name: "Chips de Plátano", description: "Plátano maduro crocante, sin aceite añadido" },
  { emoji: "🌾", name: "Barras de Cereal", description: "Avena, miel y semillas para energía sostenida" },
  { emoji: "🍫", name: "Chocolate Premium", description: "Cacao colombiano de origen, mínimo 65% cacao" },
  { emoji: "🥛", name: "Yogurt Griego", description: "Alta proteína, bajo en azúcar, sabor natural" },
  { emoji: "🍎", name: "Fruta Deshidratada", description: "Mango, piña y fresa sin azúcar añadida" },
];

const genericProblems = [
  "Productos genéricos y repetitivos",
  "Calidad inconsistente entre recargas",
  "Snacks ultraprocesados que nadie quiere",
  "Máquinas descuidadas y sin mantenimiento",
  "Cero variedad ni rotación de productos",
];

const nexoAdvantages = [
  "Selección curada por expertos en nutrición",
  "Calidad premium y consistente siempre",
  "Snacks que tu equipo realmente quiere comer",
  "Máquina impecable con mantenimiento continuo",
  "Rotación inteligente según preferencias",
];

export default function SnacksPage() {
  return (
    <>
      <ProductHero
        badge="Nexo Snacks"
        headline={
          <>
            Snacks que tu equipo{" "}
            <span className="text-gradient-gold">realmente quiere</span>
          </>
        }
        subheadline="Olvídate del vending genérico. Snacks curados, de calidad consistente, que tu equipo agradece todos los días. Productos que sí quieres tener en tu oficina."
        ctaText="Quiero Nexo Snacks →"
        ctaHref="/contacto"
        machineImage="/images/nexo-snacks-machine.png"
        machineAlt="Máquina Nexo Snacks premium"
      />

      {/* Products Grid */}
      <section className="py-24 lg:py-32 bg-nexo-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-nexo-teal border border-nexo-teal/30 rounded-full mb-4">
                Selección curada
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Snacks curados{" "}
                <span className="text-gradient-gold">para tu equipo</span>
              </h2>
              <p className="text-nexo-gray text-lg max-w-2xl mx-auto">
                Cada producto seleccionado por calidad, sabor y valor nutricional. Rotamos según las preferencias de tu equipo.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {snacks.map((snack, i) => (
              <ScrollReveal key={snack.name} delay={i * 0.06}>
                <div className="group bg-nexo-gray-dark rounded-xl p-5 lg:p-6 border border-white/5 hover:border-orange-400/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-400/5 h-full">
                  <span className="text-3xl lg:text-4xl block mb-3">{snack.emoji}</span>
                  <h3 className="font-display font-semibold text-base lg:text-lg mb-1">
                    {snack.name}
                  </h3>
                  <p className="text-nexo-gray text-sm leading-relaxed">
                    {snack.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Not Generic */}
      <section className="py-24 lg:py-32 bg-mesh-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                No todos los vending{" "}
                <span className="text-gradient-gold">son iguales</span>
              </h2>
              <p className="text-nexo-gray text-lg max-w-2xl mx-auto">
                El vending tradicional llena una máquina con lo que sea. Nexo Snacks cura cada producto pensando en tu equipo.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <ScrollReveal direction="left">
              <div className="bg-nexo-gray-dark/50 rounded-2xl p-8 lg:p-10 border border-red-500/10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-red-400">
                    Vending tradicional
                  </h3>
                </div>
                <ul className="flex flex-col gap-4">
                  {genericProblems.map((problem) => (
                    <li key={problem} className="flex items-start gap-3">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                        <X className="w-3.5 h-3.5 text-red-400" />
                      </div>
                      <span className="text-nexo-gray">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="bg-nexo-gray-dark/50 rounded-2xl p-8 lg:p-10 border border-nexo-teal/20 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-nexo-teal/5 rounded-full blur-3xl" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-lg bg-nexo-teal/10 flex items-center justify-center">
                      <Check className="w-5 h-5 text-nexo-teal" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-nexo-teal">
                      Nexo Snacks
                    </h3>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {nexoAdvantages.map((advantage) => (
                      <li key={advantage} className="flex items-start gap-3">
                        <div className="shrink-0 w-6 h-6 rounded-full bg-nexo-teal/10 flex items-center justify-center mt-0.5">
                          <Check className="w-3.5 h-3.5 text-nexo-teal" />
                        </div>
                        <span className="text-nexo-white">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-nexo-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Snacks premium{" "}
              <span className="text-gradient-gold">en tu oficina</span>
            </h2>
            <p className="text-nexo-gray text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Tu equipo merece snacks de calidad. Curados, consistentes, y siempre disponibles. Instalamos en 48 horas, sin costo, sin compromiso.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-nexo-teal hover:bg-nexo-teal-hover text-nexo-black font-semibold rounded-xl px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-nexo-teal/20 hover:-translate-y-0.5 text-lg"
            >
              Quiero Nexo Snacks
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-sm text-nexo-gray/60">
              Sin costo de instalación · Rotación según preferencias · Mantenimiento incluido
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: "48h", label: "Instalación express" },
                { value: "8+", label: "Productos curados" },
                { value: "100%", label: "Operado por Nexo" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-nexo-gray-dark/50 rounded-xl p-6 border border-white/5"
                >
                  <div className="font-display text-2xl lg:text-3xl font-bold text-orange-400 mb-1">
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
