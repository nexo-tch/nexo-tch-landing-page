import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Users,
  Zap,
  Award,
  Settings,
  Clock,
} from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Retención de talento",
    description:
      "Un café premium en la oficina eleva la cultura laboral. Tu equipo se siente valorado y eso se nota en la retención.",
  },
  {
    icon: Zap,
    title: "Productividad",
    description:
      "Energía de calidad sin salir del edificio. Menos tiempo perdido, más momentos de enfoque y creatividad.",
  },
  {
    icon: Award,
    title: "Imagen corporativa",
    description:
      "La máquina Nexo es un statement de diseño y modernidad. Tus clientes y visitantes lo notan al instante.",
  },
  {
    icon: Settings,
    title: "Cero complejidad",
    description:
      "Nexo opera, mantiene y abastece todo. Tu empresa solo disfruta. Sin logística, sin preocupaciones.",
  },
  {
    icon: Clock,
    title: "Instalación express",
    description:
      "En 48 horas tu máquina está lista. Sin obras, sin inversión, sin interrumpir tu operación.",
  },
];

export function Benefits() {
  return (
    <section className="relative bg-mesh-gradient py-24 lg:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-nexo-gold">
            ¿Por qué Nexo?
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold leading-tight text-nexo-white sm:text-4xl lg:text-5xl">
            Todo lo que tu empresa gana con Nexo
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-6 grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <ScrollReveal
              key={benefit.title}
              delay={0.15 + i * 0.08}
            >
              <div className="group flex h-full flex-col rounded-2xl border border-nexo-gray/10 bg-nexo-black-light/70 p-6 backdrop-blur-sm transition-all duration-300 hover:border-nexo-gold/20 hover:bg-nexo-black-light sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-nexo-gold/10 transition-colors duration-300 group-hover:bg-nexo-gold/15">
                  <benefit.icon className="h-6 w-6 text-nexo-gold" />
                </div>
                <h3 className="mb-2 font-display text-lg font-semibold text-nexo-white sm:text-xl">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-nexo-gray/70 sm:text-base">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
