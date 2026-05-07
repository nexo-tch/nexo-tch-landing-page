import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Magnetic } from "@/components/ui/Magnetic";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/company";

const trustSignals = [
  "Sin costo de instalación",
  "Operación incluida 24/7",
  "Modelo comercial flexible",
  "Respuesta en menos de 24 horas",
];

export function CTAFinal() {
  const wa = whatsappUrl("Hola, me interesa una máquina Nexo");
  return (
    <section className="relative overflow-hidden border-t border-border-soft bg-bg-sunken py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:col-span-7">
            <ScrollReveal>
              <Eyebrow index="08">Da el siguiente paso</Eyebrow>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h2 className="display-lg mt-6 font-light text-fg">
                Lleva Nexo
                <br />
                <span className="font-extrabold text-accent">
                  a tu espacio.
                </span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
                Cuéntanos cómo es tu espacio y qué busca tu equipo. Te
                contactamos en menos de 24 horas para iniciar la conversación.
                Sin compromiso.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Magnetic strength={0.35} maxTravelPx={10}>
                  <Button href="/contacto" variant="accent" size="lg" withArrow>
                    Quiero mi máquina
                  </Button>
                </Magnetic>
                {wa && (
                  <Link
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors duration-200 hover:text-fg tactile"
                  >
                    <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                    o escríbenos por WhatsApp
                  </Link>
                )}
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-5">
            <ScrollReveal delay={0.2}>
              <ul className="divide-y divide-border-soft border-y border-border-soft">
                {trustSignals.map((signal, i) => (
                  <li
                    key={signal}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span className="text-base text-fg-muted">{signal}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
