import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp, Zap, Users, Settings } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProductHero } from "@/components/product/ProductHero";

export const metadata: Metadata = {
  title: "Nexo Protein — Batidos de proteína para gimnasios | Medellín",
  description:
    "Batidos de proteína listos al instante en tu gimnasio. Whey protein, barras y mass gainer. Instalación en 48h, sin costo. Revenue adicional para tu gym.",
  openGraph: {
    title: "Nexo Protein — Proteína al instante en tu gimnasio",
    description:
      "Máquina vending de batidos de proteína. Post-entrenamiento inmediato, nuevo revenue para tu gym, cero operación.",
  },
};

const products = [
  {
    emoji: "🥤",
    name: "Whey Chocolate",
    description: "30g de proteína, sabor intenso a chocolate belga",
  },
  {
    emoji: "🍦",
    name: "Whey Vainilla",
    description: "30g de proteína, suave y cremoso al paladar",
  },
  {
    emoji: "🍓",
    name: "Whey Fresa",
    description: "30g de proteína, frescura frutal en cada sorbo",
  },
  {
    emoji: "🍫",
    name: "Barra Proteica Chocolate",
    description: "20g de proteína, snack perfecto post-entrenamiento",
  },
  {
    emoji: "🥜",
    name: "Barra Proteica Maní",
    description: "20g de proteína con maní real, crujiente y saciante",
  },
  {
    emoji: "💪",
    name: "Batido Mass Gainer",
    description: "50g de proteína + carbohidratos para fase de volumen",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue sin esfuerzo",
    description:
      "Tu gimnasio genera ingresos adicionales con cada venta. Sin inversión, sin personal extra, sin complicaciones operativas. Es revenue pasivo real.",
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
      "Nexo instala, abastece, mantiene y opera la máquina. Tu equipo se enfoca en lo que sabe hacer — entrenar personas. Nosotros hacemos el resto.",
  },
];

export default function ProteinPage() {
  return (
    <>
      <ProductHero
        badge="Nexo Protein"
        headline={
          <>
            El batido post-entrenamiento,{" "}
            <span className="text-gradient-gold">listo al instante</span>
          </>
        }
        subheadline="Batidos de whey protein y barras proteicas directo en tu gimnasio. Tus socios entrenan, toman su proteína y se van. Sin espera, sin licuadora, sin excusas."
        ctaText="Quiero Nexo Protein →"
        ctaHref="/contacto"
        machineImage="/images/nexo-protein-machine.png"
        machineAlt="Máquina Nexo Protein para gimnasios"
      />

      {/* Products Grid */}
      <section className="py-24 lg:py-32 bg-nexo-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-nexo-teal border border-nexo-teal/30 rounded-full mb-4">
                Productos disponibles
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Batidos y barras de{" "}
                <span className="text-gradient-gold">proteína</span>
              </h2>
              <p className="text-nexo-gray text-lg max-w-2xl mx-auto">
                Proteína de alta calidad lista al instante. Cada producto seleccionado para el rendimiento de tus socios.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.07}>
                <div className="group bg-nexo-gray-dark rounded-xl p-5 lg:p-6 border border-white/5 hover:border-nexo-teal/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-nexo-teal/5 h-full">
                  <span className="text-3xl lg:text-4xl block mb-3">{product.emoji}</span>
                  <h3 className="font-display font-semibold text-base lg:text-lg mb-1">
                    {product.name}
                  </h3>
                  <p className="text-nexo-gray text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Gyms */}
      <section className="py-24 lg:py-32 bg-mesh-gradient">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                Tu gimnasio,{" "}
                <span className="text-gradient-gold">al siguiente nivel</span>
              </h2>
              <p className="text-nexo-gray text-lg max-w-2xl mx-auto">
                Nexo Protein no solo beneficia a tus socios — transforma tu gimnasio en un espacio completo.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={benefit.title} delay={i * 0.1}>
                  <div className="group bg-nexo-gray-dark/50 rounded-2xl p-8 lg:p-10 border border-white/5 hover:border-nexo-teal/20 transition-all duration-300 h-full">
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-nexo-teal/10 flex items-center justify-center group-hover:bg-nexo-teal/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-nexo-teal" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-display text-xl lg:text-2xl font-bold mb-3">
                          {benefit.title}
                        </h3>
                        <p className="text-nexo-gray leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-nexo-teal/5 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Instala Nexo Protein{" "}
              <span className="text-gradient-gold">en tu gimnasio</span>
            </h2>
            <p className="text-nexo-gray text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Proteína al instante para tus socios, revenue adicional para tu gimnasio. Sin inversión, sin operación, sin complicaciones.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-nexo-teal hover:bg-nexo-teal-hover text-nexo-black font-semibold rounded-xl px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-nexo-teal/20 hover:-translate-y-0.5 text-lg"
            >
              Quiero Nexo Protein
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="mt-4 text-sm text-nexo-gray/60">
              Sin costo de instalación · Revenue desde el día 1 · Mantenimiento incluido
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { value: "48h", label: "Instalación express" },
                { value: "30g+", label: "Proteína por batido" },
                { value: "24/7", label: "Soporte y abastecimiento" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-nexo-gray-dark/50 rounded-xl p-6 border border-white/5"
                >
                  <div className="font-display text-2xl lg:text-3xl font-bold text-nexo-teal mb-1">
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
