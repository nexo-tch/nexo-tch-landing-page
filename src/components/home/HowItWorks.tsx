import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MessageSquare, Wrench, PartyPopper } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Solicita",
    description:
      "Cuéntanos sobre tu espacio y elige tu máquina ideal. Sin compromiso, sin letra pequeña.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Instalamos en 48h",
    description:
      "Nuestro equipo llega, instala y configura todo. Sin obras, sin interrupciones en tu operación.",
  },
  {
    number: "03",
    icon: PartyPopper,
    title: "Disfruta",
    description:
      "Tu equipo disfruta café de especialidad desde el primer día. Nexo opera, mantiene y abastece.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative bg-nexo-black py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-nexo-gold">
            Así de simple
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold leading-tight text-nexo-white sm:text-4xl lg:text-5xl">
            Tu máquina Nexo en 3 pasos
          </h2>
        </ScrollReveal>

        <div className="relative mt-16">
          {/* Connecting line — desktop only */}
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-nexo-gold/30 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={0.15 + i * 0.12}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-nexo-gold/40 bg-nexo-black">
                    <span className="font-display text-lg font-bold text-nexo-gold">
                      {step.number}
                    </span>
                  </div>

                  {/* Mobile connecting line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-1/2 top-16 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-nexo-gold/30 to-transparent lg:hidden" />
                  )}

                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-nexo-gold/10">
                    <step.icon className="h-6 w-6 text-nexo-gold" />
                  </div>

                  <h3 className="mb-3 font-display text-xl font-bold text-nexo-white sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="max-w-xs text-base leading-relaxed text-nexo-gray/70">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
