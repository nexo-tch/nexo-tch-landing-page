import type { Metadata } from "next";
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
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Nosotros — No vendemos café, vendemos energía",
  description:
    "Conoce a Nexo Technologies. Soluciones de vending con tecnología, diseño y calidad para empresas en Medellín.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros — Nexo Technologies",
    description:
      "No vendemos café, vendemos energía. Tecnología, diseño y operación impecable para empresas en Medellín.",
    url: absoluteUrl("/nosotros"),
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE.url,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros — Nexo Technologies",
    description:
      "No vendemos café, vendemos energía. Tecnología, diseño y operación impecable.",
    images: [DEFAULT_OG_IMAGE.url],
  },
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
      "La tecnología no reemplaza lo humano. Lo potencia. Somos cercanos, accesibles y comprometidos.",
  },
  {
    icon: ShieldCheck,
    title: "Calidad y confiabilidad",
    description:
      "Operamos con estándares altos, de principio a fin. Tu equipo merece lo mejor y nosotros lo garantizamos.",
  },
  {
    icon: Rocket,
    title: "Escalabilidad y futuro",
    description:
      "Pensamos en grande. Cada producto está diseñado para crecer con tu empresa.",
  },
];

const differentiators = [
  {
    icon: Gem,
    title: "Producto con criterio",
    description:
      "Café de calidad, proteína confiable, snacks seleccionados. Cada producto elegido para acompañar el día a día de tu equipo, no para llenar una máquina.",
  },
  {
    icon: Fingerprint,
    title: "Diseño e identidad",
    description:
      "Nuestras máquinas son parte del lenguaje visual de tu espacio. Estética minimalista, materiales cuidados, detalles que se notan.",
  },
  {
    icon: Cpu,
    title: "Tecnología como diferencia",
    description:
      "Monitoreo remoto, abastecimiento inteligente, datos de consumo. No solo entregamos producto, optimizamos la experiencia completa.",
  },
  {
    icon: Zap,
    title: "Cero complejidad operativa",
    description:
      "Instalamos, operamos, mantenemos y abastecemos. Tu empresa solo disfruta. Modelo comercial flexible, sin inversión.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 lg:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-12 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
          <ScrollReveal>
            <Eyebrow>Nexo Technologies</Eyebrow>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1 className="display-xl mt-8 max-w-4xl font-light text-fg">
              No vendemos café.{" "}
              <span className="font-extrabold text-accent">
                Vendemos energía.
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted md:text-xl">
              Somos el nexo entre tu empresa y la experiencia que tu equipo
              merece. Tecnología, diseño y operación impecable, en un solo
              servicio.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="01"
            eyebrow="Por qué existimos"
            title={
              <>
                Misión clara,
                <br />
                <span className="text-accent">visión a largo plazo.</span>
              </>
            }
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <article className="border-l border-border pl-8">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  Misión
                </span>
                <h3 className="display-md mt-4 text-fg">
                  Simplificar lo complejo con tecnología.
                </h3>
                <p className="mt-6 text-base leading-relaxed text-fg-muted lg:text-lg">
                  Creamos soluciones tecnológicas inteligentes que simplifican
                  la vida de las personas y optimizan procesos, combinando
                  innovación, diseño y funcionalidad.
                </p>
              </article>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <article className="border-l border-border pl-8">
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  Visión
                </span>
                <h3 className="display-md mt-4 text-fg">
                  Ser el nexo entre las personas y el futuro.
                </h3>
                <p className="mt-6 text-base leading-relaxed text-fg-muted lg:text-lg">
                  Convertirnos en el nexo entre las personas y el futuro
                  tecnológico, creando soluciones que redefinan la manera en
                  que interactuamos con el mundo.
                </p>
              </article>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="bg-bg-sunken py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <ScrollReveal>
            <Eyebrow index="02">Manifiesto</Eyebrow>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <blockquote className="mt-10 font-display text-2xl font-medium leading-relaxed text-fg md:text-3xl lg:text-4xl lg:leading-snug">
              No creemos en la tecnología como fin. La vemos como herramienta:
              para simplificar, para optimizar, para conectar.
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted">
              El mundo está lleno de procesos innecesariamente complejos.
              Nosotros trabajamos para que funcionen mejor.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted">
              No buscamos hacer más. Buscamos hacerlo{" "}
              <span className="font-medium text-accent">mejor</span>. Somos el
              nexo entre una necesidad concreta y una solución inteligente.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Values — divide-y editorial */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="03"
            eyebrow="Nuestros valores"
            title={
              <>
                Seis principios
                <br />
                <span className="text-accent">que nos definen.</span>
              </>
            }
            className="mb-16 lg:mb-20"
          />

          <ul className="divide-y divide-border-soft border-y border-border-soft">
            {values.map((value, i) => (
              <ScrollReveal
                key={value.title}
                delay={i * 0.06}
                className="block"
              >
                <li className="grid grid-cols-1 items-start gap-6 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                  <div className="flex items-center gap-4 lg:col-span-4">
                    <span className="font-mono text-xs text-fg-subtle">
                      0{i + 1}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-elevated">
                      <value.icon
                        className="h-4 w-4 text-accent"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-fg lg:text-2xl">
                      {value.title}
                    </h3>
                  </div>
                  <p className="max-w-2xl text-base leading-relaxed text-fg-muted lg:col-span-8">
                    {value.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Differentiators — 2 col grid pero más editorial, sin cards */}
      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="04"
            eyebrow="Diferenciadores"
            title={
              <>
                Por qué Nexo,
                <br />
                <span className="text-accent">no otro vending.</span>
              </>
            }
            className="mb-16 lg:mb-20"
          />

          <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:gap-x-16">
            {differentiators.map((diff, i) => (
              <ScrollReveal
                key={diff.title}
                delay={i * 0.08}
              >
                <article className="border-t border-border-soft pt-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-xs text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-border-soft" />
                  </div>
                  <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-bg">
                    <diff.icon
                      className="h-5 w-5 text-accent"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-fg">
                    {diff.title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-fg-muted">
                    {diff.description}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border-soft bg-bg-sunken py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <Eyebrow>Trabajemos juntos</Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h2 className="display-lg mt-6 text-fg">
                  ¿Listo para la
                  <br />
                  <span className="text-accent">experiencia Nexo?</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
                  Instala una máquina Nexo en tu empresa. Sin costo, sin
                  obras, sin complicaciones.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className="mt-10">
                  <Magnetic strength={0.35} maxTravelPx={10}>
                    <Button href="/contacto" variant="accent" size="lg" withArrow>
                      Agenda tu instalación
                    </Button>
                  </Magnetic>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
