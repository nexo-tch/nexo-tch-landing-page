import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Desde que instalamos Nexo, el equipo no para de agradecer. El cappuccino es increíble y la máquina se ve espectacular en nuestra oficina. Lo mejor: no tuvimos que hacer nada.",
    name: "Carolina Mejía",
    title: "Directora de RRHH",
    company: "Grupo Sinergia",
  },
  {
    quote:
      "Buscábamos algo que elevara la experiencia de nuestro coworking. Nexo lo logró en 48 horas. Nuestros miembros lo mencionan como uno de los mejores beneficios del espacio.",
    name: "Andrés Restrepo",
    title: "Fundador",
    company: "Hub Cowork Medellín",
  },
  {
    quote:
      "La máquina de proteína fue un game-changer para nuestro gym. Los usuarios la aman porque el batido está listo en segundos después de entrenar. Cero complicaciones para nosotros.",
    name: "Valentina Ochoa",
    title: "Gerente de Operaciones",
    company: "Fitness Lab",
  },
];

function Stars() {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-nexo-gold text-nexo-gold"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="relative bg-nexo-black py-24 lg:py-32">
      <div className="bg-noise pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-nexo-gold">
            Lo que dicen nuestros clientes
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold leading-tight text-nexo-white sm:text-4xl lg:text-5xl">
            Empresas que ya viven la experiencia Nexo
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={0.15 + i * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-nexo-gray/10 bg-nexo-black-light p-8 transition-all duration-300 hover:border-nexo-gold/20">
                {/* Gold accent bar */}
                <div className="mb-6 h-1 w-12 rounded-full bg-gradient-to-r from-nexo-gold to-nexo-gold-bright" />

                <Stars />

                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-nexo-gray">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="mt-6 flex items-center gap-3 border-t border-nexo-gray/10 pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-nexo-gold/10">
                    <span className="font-display text-sm font-bold text-nexo-gold">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-nexo-white">
                      {t.name}
                    </p>
                    <p className="text-xs text-nexo-gray/60">
                      {t.title}, {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
