"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    phase: "Conversación",
    title: "Conversación inicial",
    description:
      "Nos cuentas sobre tu espacio, tu equipo y qué estás buscando. Sin compromiso, sin letra pequeña.",
  },
  {
    number: "02",
    phase: "Viabilidad",
    title: "Viabilidad comercial",
    description:
      "Validamos que podemos instalar la máquina adecuada para tu espacio y tu tipo de consumo.",
  },
  {
    number: "03",
    phase: "Selección",
    title: "Match de productos",
    description:
      "Definimos contigo la línea y el mix según tu espacio: café, proteína, snacks o combinación.",
  },
  {
    number: "04",
    phase: "Acuerdo",
    title: "Propuesta y acuerdo",
    description:
      "Te presentamos una propuesta a tu medida bajo la modalidad que mejor calce: comodato, suministros, arrendamiento o revenue sharing. Acordamos términos con flexibilidad real, sin sorpresas.",
  },
  {
    number: "05",
    phase: "En vivo",
    title: "Instalación y operación",
    description:
      "Coordinamos la instalación según disponibilidad. Desde ese día, nosotros operamos, mantenemos y abastecemos.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          index="05"
          eyebrow="Cómo trabajamos contigo"
          title={
            <>
              De la primera llamada
              <br />
              <span className="text-accent">al día uno. Sin rodeos.</span>
            </>
          }
          description="Un proceso claro, con tiempos honestos. Pensado para espacios que valoran hacer las cosas bien."
          className="mb-16 lg:mb-20"
        />

        {/* Editorial horizontal timeline — desktop: 5 columns on a hairline
            rail that draws in on scroll. Mobile: graceful vertical stack. */}
        <div className="relative">
          {/* Animated horizontal rail — desktop only, sits at the dot's y.
              The dot y is driven by the height of the mono "01" label + its
              bottom margin, so 40px is intentional. */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-[1.4rem] hidden h-px origin-left bg-gradient-to-r from-transparent via-border to-transparent md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="grid grid-cols-1 gap-12 md:grid-cols-5 md:gap-6 lg:gap-8">
            {steps.map((step, i) => (
              <ScrollReveal
                key={step.number}
                delay={0.2 + i * 0.1}
                as="li"
                className="group relative"
              >
                {/* Row 1: mono number on the rail's baseline */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {step.number}
                  </span>
                  {/* Dot that anchors the rail. Animates in after the rail
                      finishes drawing, creating a "nodes lighting up" feel. */}
                  <motion.span
                    aria-hidden="true"
                    className="hidden h-2 w-2 rounded-full bg-accent ring-4 ring-bg md:block"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      delay: 0.8 + i * 0.12,
                      duration: 0.5,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                  />
                </div>

                <div className="mt-8 md:mt-10">
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-fg-subtle">
                    {step.phase}
                  </span>
                  <h3 className="font-display mt-2 text-xl font-light leading-tight text-fg transition-colors duration-300 group-hover:text-accent md:text-[1.35rem] lg:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-fg-muted md:text-[0.925rem]">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
