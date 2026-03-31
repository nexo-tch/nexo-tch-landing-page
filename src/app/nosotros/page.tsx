import type { Metadata } from "next";
import Link from "next/link";
import {
  Lightbulb,
  Minimize2,
  Palette,
  Heart,
  ShieldCheck,
  Rocket,
  Gem,
  Fingerprint,
  Cpu,
  Zap,
  ArrowRight,
  Quote,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Nosotros — Nexo Technologies | Innovación en vending",
  description:
    "Conoce a Nexo Technologies. No vendemos café, vendemos energía. Soluciones de vending premium con tecnología, diseño y calidad para empresas en Medellín.",
};

const values = [
  {
    icon: Lightbulb,
    title: "Innovación responsable",
    description:
      "Adoptamos tecnología con propósito. Cada solución resuelve un problema real, no una tendencia pasajera.",
  },
  {
    icon: Minimize2,
    title: "Simplicidad",
    description:
      "Lo complejo lo hacemos simple. Procesos claros, experiencias sin fricción, resultados inmediatos.",
  },
  {
    icon: Palette,
    title: "Diseño consciente",
    description:
      "Cada detalle importa. Desde el vaso hasta la interfaz, diseñamos para elevar la experiencia.",
  },
  {
    icon: Heart,
    title: "Cercanía y calidez",
    description:
      "La tecnología no reemplaza lo humano — lo potencia. Somos cercanos, accesibles y comprometidos.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad y confiabilidad",
    description:
      "Operamos con estándares premium. Tu equipo merece lo mejor y nosotros lo garantizamos.",
  },
  {
    icon: Rocket,
    title: "Escalabilidad y visión de futuro",
    description:
      "Pensamos en grande. Cada producto está diseñado para crecer con tu empresa.",
  },
];

const differentiators = [
  {
    icon: Gem,
    title: "Producto premium, no genérico",
    description:
      "Café de especialidad, proteína de calidad, snacks curados. Nada de lo que encuentras en una máquina convencional.",
  },
  {
    icon: Fingerprint,
    title: "Diseño e identidad de marca",
    description:
      "Nuestras máquinas son un statement. Elevan la imagen de tu espacio con estética minimalista y materiales premium.",
  },
  {
    icon: Cpu,
    title: "Tecnología como diferenciador",
    description:
      "Monitoreo remoto, abastecimiento inteligente y datos de consumo. No solo vendemos producto — optimizamos la experiencia.",
  },
  {
    icon: Zap,
    title: "Cero complejidad operativa",
    description:
      "Instalamos, operamos, mantenemos y abastecemos. Tu empresa solo disfruta. Sin contratos largos, sin inversión.",
  },
];

export default function NosotrosPage() {
  return (
    <div className="bg-nexo-black">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-24 lg:pb-32">
        <div className="bg-noise pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-nexo-gold/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-nexo-gold/40 bg-nexo-gold/10 px-4 py-1.5 text-sm font-medium text-nexo-gold">
              Nexo Technologies
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.08] tracking-tight text-nexo-white lg:text-6xl">
              No vendemos café.{" "}
              <span className="text-gradient-gold">Vendemos energía.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-nexo-gray md:text-xl">
              Somos el nexo entre tu empresa y la experiencia premium que tu
              equipo merece.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal delay={0.1}>
              <div className="group h-full rounded-2xl border border-nexo-gold/10 bg-nexo-gray-dark p-8 transition-all duration-500 hover:border-nexo-gold/30 lg:p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-nexo-gold/10">
                  <span className="font-display text-xl font-bold text-nexo-gold">
                    M
                  </span>
                </div>
                <h2 className="mb-4 font-display text-2xl font-bold text-nexo-white">
                  Misión
                </h2>
                <p className="text-base leading-relaxed text-nexo-gray">
                  Creamos soluciones tecnológicas inteligentes que simplifican la
                  vida de las personas y optimizan procesos, combinando
                  innovación, diseño y funcionalidad.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="group h-full rounded-2xl border border-nexo-teal/10 bg-nexo-gray-dark p-8 transition-all duration-500 hover:border-nexo-teal/30 lg:p-10">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-nexo-teal/10">
                  <span className="font-display text-xl font-bold text-nexo-teal">
                    V
                  </span>
                </div>
                <h2 className="mb-4 font-display text-2xl font-bold text-nexo-white">
                  Visión
                </h2>
                <p className="text-base leading-relaxed text-nexo-gray">
                  Convertirnos en el nexo entre las personas y el futuro
                  tecnológico, creando soluciones que redefinan la manera en que
                  interactuamos con el mundo.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="relative py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-mesh-gradient" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-3xl border border-nexo-gold/10 bg-nexo-black/60 p-10 backdrop-blur-sm lg:p-16">
              <Quote className="mb-8 h-12 w-12 text-nexo-gold/30" />
              <blockquote className="font-display text-xl font-medium leading-relaxed text-nexo-white md:text-2xl lg:text-3xl lg:leading-snug">
                No creemos en la tecnología como fin. La vemos como herramienta:
                para simplificar, para optimizar, para conectar.
                <br />
                <br />
                <span className="text-nexo-gray">
                  El mundo está lleno de procesos innecesariamente complejos.
                  Nosotros trabajamos para que funcionen mejor.
                </span>
                <br />
                <br />
                No buscamos hacer más. Buscamos hacerlo{" "}
                <span className="text-gradient-gold">mejor</span>.
                <br />
                <br />
                <span className="text-nexo-gray">
                  Somos el nexo entre una necesidad concreta y una solución
                  inteligente.
                </span>
              </blockquote>
              <div className="absolute -bottom-px -right-px h-24 w-24 rounded-br-3xl border-b-2 border-r-2 border-nexo-gold/20" />
              <div className="absolute -left-px -top-px h-24 w-24 rounded-tl-3xl border-l-2 border-t-2 border-nexo-gold/20" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 max-w-2xl">
              <span className="mb-4 inline-block font-display text-sm font-semibold uppercase tracking-wider text-nexo-gold">
                Nuestros valores
              </span>
              <h2 className="font-display text-3xl font-bold text-nexo-white md:text-4xl">
                Lo que nos define
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-white/5 bg-nexo-gray-dark p-8 transition-all duration-500 hover:border-nexo-gold/20 hover:shadow-[0_0_30px_rgba(194,139,83,0.06)]">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-nexo-gold/10 text-nexo-gold transition-colors duration-300 group-hover:bg-nexo-gold/20">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold text-nexo-white">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-nexo-gray/80">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative py-24 lg:py-32">
        <div className="bg-noise pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-nexo-teal/5 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-block font-display text-sm font-semibold uppercase tracking-wider text-nexo-teal">
                Diferenciadores
              </span>
              <h2 className="font-display text-3xl font-bold text-nexo-white md:text-4xl lg:text-5xl">
                ¿Por qué Nexo?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((diff, i) => (
              <ScrollReveal key={diff.title} delay={i * 0.1}>
                <div className="group flex h-full gap-5 rounded-2xl border border-white/5 bg-nexo-gray-dark p-8 transition-all duration-500 hover:border-nexo-teal/20">
                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-nexo-teal/10 text-nexo-teal transition-colors duration-300 group-hover:bg-nexo-teal/20">
                      <diff.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-display text-lg font-bold text-nexo-white">
                      {diff.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-nexo-gray/80">
                      {diff.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-nexo-gold/10 bg-nexo-gray-dark p-12 text-center lg:p-20">
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-nexo-gold/10 blur-[80px]" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-nexo-teal/10 blur-[80px]" />

              <div className="relative z-10">
                <h2 className="font-display text-3xl font-bold text-nexo-white md:text-4xl lg:text-5xl">
                  ¿Listo para la experiencia{" "}
                  <span className="text-gradient-gold">Nexo</span>?
                </h2>
                <p className="mx-auto mt-5 max-w-lg text-lg text-nexo-gray">
                  Instala una máquina premium en tu empresa. Sin costo, sin
                  obras, sin complicaciones.
                </p>
                <Link
                  href="/contacto"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-nexo-teal px-8 py-4 text-base font-semibold text-nexo-black transition-all duration-300 hover:bg-nexo-teal-hover hover:shadow-[0_0_30px_rgba(0,194,160,0.3)]"
                >
                  Agenda tu instalación
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-4 text-sm text-nexo-gray/60">
                  Sin costo de instalación · Sin compromiso a largo plazo
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
