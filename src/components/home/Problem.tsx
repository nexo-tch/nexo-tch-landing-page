import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Ban, Clock, ImageOff } from "lucide-react";

const painPoints = [
  {
    icon: Ban,
    title: "Productos que nadie quiere",
    description:
      "Café instantáneo, snacks genéricos y cero opciones saludables. El vending tradicional llena máquinas con lo que sea — no con lo que tu equipo merece.",
  },
  {
    icon: Clock,
    title: "Tiempo y energía perdidos",
    description:
      "Tu equipo sale 20 minutos a buscar un buen café o un snack decente. Los atletas de tu gym se van sin proteína. Son horas y oportunidades que no vuelven.",
  },
  {
    icon: ImageOff,
    title: "Una imagen que no te representa",
    description:
      "Máquinas descuidadas, productos vencidos, experiencia cero. Ese vending dice más de tu empresa que cualquier brochure corporativo.",
  },
];

export function Problem() {
  return (
    <section className="relative bg-nexo-black py-24 lg:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-nexo-gold">
            El problema
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold leading-tight text-nexo-white sm:text-4xl lg:text-5xl">
            ¿Tu espacio todavía tiene vending genérico?
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={0.15 + i * 0.1}>
              <div className="group rounded-2xl border border-nexo-gray/10 bg-nexo-black-light/50 p-8 transition-all duration-300 hover:border-red-500/20 hover:bg-nexo-black-light h-full">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                  <point.icon className="h-6 w-6 text-red-400" />
                </div>
                <h3 className="mb-3 font-display text-xl font-semibold text-nexo-white">
                  {point.title}
                </h3>
                <p className="text-base leading-relaxed text-nexo-gray/70">
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 text-center">
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-nexo-gray md:text-2xl">
              Cada experiencia mediocre es una{" "}
              <span className="font-semibold text-nexo-white">
                oportunidad perdida
              </span>{" "}
              de energizar, nutrir y cuidar a tu equipo. Mientras tanto, otros ya
              ofrecen algo mejor.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <div className="mt-12 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-nexo-gold/50" />
            <p className="font-display text-lg font-semibold text-nexo-gold">
              Existe una mejor forma...
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-nexo-gold/50" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
