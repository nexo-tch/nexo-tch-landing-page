import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Three claims, each with a citable scientific source.
// Wording is deliberately conservative: state what the science says,
// let the reader connect the dots to Nexo.
const claims = [
  {
    label: "Enfoque",
    title: "La cafeína mejora la atención sostenida.",
    description:
      "Es una de las sustancias más estudiadas en psicofarmacología. Mejora el tiempo de reacción, la vigilancia y la ejecución en tareas cognitivas. No es opinión de café shop — es ciencia aplicada desde hace décadas.",
    source: "Meta-análisis en Nutrition Reviews · Psychopharmacology",
  },
  {
    label: "Recuperación",
    title: "La proteína, dentro de las dos horas post-entreno.",
    description:
      "Las sociedades internacionales de ciencias del deporte coinciden: consumir proteína dentro de esa ventana optimiza la recuperación y la síntesis muscular. No es marketing fitness; es consenso.",
    source: "Posición oficial ISSN · ACSM",
  },
  {
    label: "Continuidad",
    title: "Cada interrupción cuesta ~23 minutos.",
    description:
      "Ese es el tiempo promedio que toma recuperar la concentración después de cortar una tarea. Salir a buscar algo no es neutral — es un corte que el cerebro paga.",
    source: "Gloria Mark, UC Irvine — The Cost of Interrupted Work",
  },
];

export function Evidence() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          index="06"
          eyebrow="La evidencia"
          title={
            <>
              No es una intuición.
              <br />
              <span className="text-accent">Es cómo funciona el cuerpo.</span>
            </>
          }
          className="mb-16 lg:mb-20"
        />

        {/* Editorial composition: one row per claim, with source citation
            separated by a hairline from the body copy. */}
        <div className="space-y-px overflow-hidden rounded-2xl border border-border-soft bg-bg-elevated/30">
          {claims.map((claim, i) => (
            <ScrollReveal
              key={claim.title}
              delay={i * 0.08}
              className="block"
            >
              <article className="grid grid-cols-1 gap-6 bg-bg p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-accent">
                      0{i + 1}
                    </span>
                    <span className="h-px w-8 bg-accent/40" />
                  </div>
                  <p className="mt-3 font-mono text-xs uppercase tracking-wider text-fg-subtle">
                    {claim.label}
                  </p>
                </div>
                <div className="lg:col-span-9">
                  <h3 className="font-display text-2xl font-semibold leading-tight text-fg lg:text-3xl">
                    {claim.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted lg:text-lg">
                    {claim.description}
                  </p>
                  <div className="mt-6 flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-[0.55em] h-px w-6 shrink-0 bg-border"
                    />
                    <cite className="block font-mono text-[0.7rem] not-italic uppercase leading-relaxed tracking-[0.18em] text-fg-subtle">
                      {claim.source}
                    </cite>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Editorial closer — reframes the three claims into a single idea. */}
        <ScrollReveal delay={0.35}>
          <div className="mt-16 border-t border-border-soft pt-12 lg:mt-20 lg:pt-16">
            <p className="mx-auto max-w-2xl text-center font-display text-xl font-light leading-relaxed text-fg lg:text-2xl">
              Por eso las cosas importantes deberían estar donde estás.
              <br />
              <span className="text-accent">Al alcance, en el momento correcto.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
