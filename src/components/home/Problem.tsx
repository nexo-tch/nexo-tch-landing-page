import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";

const painPoints = [
  {
    number: "01",
    title: "El horario de alguien más.",
    description:
      "La cafetería abre a las 8, el entrenamiento es a las 6, la reunión se estira hasta las 10. La gente no necesita las cosas cuando alguien decide abrir la puerta — las necesita cuando las necesita.",
  },
  {
    number: "02",
    title: "Salir del espacio es salir del momento.",
    description:
      "El hambre aparece, la energía pide café, la proteína espera al terminar de entrenar. Cuando conseguirlo implica salir y volver, el momento ya no es el mismo.",
  },
  {
    number: "03",
    title: "Parece simple. Nunca lo es.",
    description:
      "Proveedores, pedidos, mantenimiento, rotación, calidad. Cada cosa por separado es menor; todas juntas, son un trabajo aparte que tu equipo no debería estar haciendo.",
  },
];

export function Problem() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Sticky title column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <Eyebrow index="01">El problema</Eyebrow>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <h2 className="display-lg mt-6 text-fg">
                  Lo que necesitas, donde estás, cuando lo necesitas.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
                  Suena básico — y aún así, casi ningún espacio lo resuelve
                  bien. En oficinas, gimnasios, coworkings o universidades, la
                  gente termina saliendo a buscar, esperando horarios ajenos o
                  dependiendo de alguien más. O simplemente, decide no hacerlo.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Editorial divide-y list */}
          <ol className="divide-y divide-border-soft border-t border-border-soft lg:col-span-7">
            {painPoints.map((point, i) => (
              <ScrollReveal
                key={point.number}
                delay={0.1 + i * 0.08}
                className="block"
              >
                <li className="grid grid-cols-[auto_1fr] gap-6 py-8 lg:gap-10 lg:py-10">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl font-semibold leading-tight text-fg lg:text-3xl">
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-base leading-relaxed text-fg-muted">
                      {point.description}
                    </p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-20 flex items-center justify-center gap-4">
            <span className="h-px w-16 bg-border" />
            <p className="font-mono text-xs uppercase tracking-widest text-accent">
              Nexo cierra esa brecha
            </p>
            <span className="h-px w-16 bg-border" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
