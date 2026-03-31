import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Clock, Wrench, BadgeDollarSign } from "lucide-react";
import Link from "next/link";

const trustSignals = [
  { icon: Clock, text: "Instalación en 48h" },
  { icon: Wrench, text: "Mantenimiento incluido" },
  { icon: BadgeDollarSign, text: "Sin inversión" },
];

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-nexo-black py-24 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 bg-mesh-gradient" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nexo-gold/5 blur-[120px]" />
      <div className="bg-noise pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 sm:px-8 lg:px-12 text-center">
        <ScrollReveal>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-nexo-gold">
            Da el siguiente paso
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl font-bold leading-tight text-nexo-white sm:text-4xl lg:text-5xl xl:text-6xl">
            Agenda tu instalación{" "}
            <span className="text-gradient-gold">esta semana</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-nexo-gray md:text-xl">
            Sin costo de instalación. Sin compromiso a largo plazo.
            Tu equipo merece energía de verdad.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contacto"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-nexo-teal px-10 py-4 text-base font-semibold text-nexo-black transition-all duration-300 hover:bg-nexo-teal-hover hover:shadow-[0_0_40px_rgba(0,194,160,0.25)]"
            >
              Quiero mi máquina
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-sm text-nexo-gray/50">
              o escríbenos directo por{" "}
              <a
                href="https://wa.me/573001234567"
                className="font-medium text-nexo-teal underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {trustSignals.map((signal) => (
              <div
                key={signal.text}
                className="flex items-center gap-2 text-sm text-nexo-gray/60"
              >
                <signal.icon className="h-4 w-4 text-nexo-gold/70" />
                <span>{signal.text}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
