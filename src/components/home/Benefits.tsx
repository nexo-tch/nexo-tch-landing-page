import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Users, Zap, Settings, Sparkles } from "lucide-react";

// Four benefits, two cultural + two operational pillars.
const benefits = [
  {
    icon: Users,
    title: "Cultura y talento",
    description:
      "Ofrecer productos de calidad a diario cambia cómo tu equipo vive la oficina. Un detalle que se convierte en cultura.",
  },
  {
    icon: Zap,
    title: "Acceso inmediato",
    description:
      "Lo que tu equipo necesita, disponible cuando lo necesita. Menos salidas del espacio, menos fricción, más momentos de enfoque.",
  },
  {
    icon: Settings,
    title: "Cero logística",
    description:
      "Nosotros operamos, mantenemos y abastecemos. Tu empresa solo disfruta. Sin proveedores adicionales, sin logística interna.",
  },
  {
    icon: Sparkles,
    title: "Invisible por diseño",
    description:
      "Tecnología, operación y mantenimiento trabajando de fondo. Tu equipo solo ve lo bueno; el resto lo resolvemos nosotros.",
  },
];

export function Benefits() {
  return (
    <section className="relative bg-bg-sunken py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          index="03"
          eyebrow="¿Por qué Nexo?"
          title={
            <>
              Cuatro ganancias inmediatas
              <br />
              <span className="text-accent">para tu empresa.</span>
            </>
          }
          className="mb-16 lg:mb-20"
        />

        <ul className="divide-y divide-border-soft border-y border-border-soft">
          {benefits.map((benefit, i) => (
            <ScrollReveal
              key={benefit.title}
              delay={i * 0.06}
              className="block"
            >
              <li className="group grid grid-cols-1 items-start gap-6 py-8 transition-[background-color] duration-300 hover:bg-bg-elevated/40 lg:grid-cols-12 lg:gap-10 lg:py-10">
                <div className="flex items-center gap-4 lg:col-span-4">
                  <span className="font-mono text-xs text-fg-subtle">
                    0{i + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg transition-[border-color,background-color] duration-300 group-hover:border-accent/30">
                    <benefit.icon
                      className="h-4 w-4 text-accent"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-fg lg:text-2xl">
                    {benefit.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-fg-muted lg:col-span-8">
                  {benefit.description}
                </p>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
