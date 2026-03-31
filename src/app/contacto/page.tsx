import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Solicita tu máquina Nexo | Medellín",
  description:
    "Solicita tu máquina Nexo gratis. Completa el formulario y te contactamos en menos de 24 horas. Instalación en 48h, sin costo, sin compromiso.",
};

export default function ContactoPage() {
  return (
    <div className="bg-nexo-black">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pb-20">
        <div className="bg-noise pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-nexo-teal/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-nexo-teal/40 bg-nexo-teal/10 px-4 py-1.5 text-sm font-medium text-nexo-teal">
              Cupos limitados este mes en Medellín
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="mt-6 max-w-2xl font-display text-5xl font-bold leading-[1.08] tracking-tight text-nexo-white lg:text-6xl">
              Agenda tu{" "}
              <span className="text-gradient-gold">instalación</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-nexo-gray md:text-xl">
              Completa el formulario y te contactamos en menos de 24 horas. Sin
              compromiso.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
