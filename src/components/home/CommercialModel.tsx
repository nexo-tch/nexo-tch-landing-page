import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

/**
 * Las 4 modalidades comparten el mismo deliverable (máquina + productos +
 * operación). Lo único que cambia entre ellas es el modelo de pago.
 *
 * Las 2 primarias se presentan como cards principales. Las 2 secundarias
 * se mencionan en el footer para no perder leads atípicos sin ocupar
 * espacio visual ni equiparar visualmente las 4.
 */

type Modality = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  closing: string;
  idealFor: string;
  primary?: boolean;
};

const modalities: ReadonlyArray<Modality> = [
  {
    index: "01",
    name: "Comodato",
    tagline: "Tu espacio, nuestra máquina.",
    description:
      "La opción más común. Nexo invierte en la máquina, la instalación, el abastecimiento y el mantenimiento. Tu empresa no paga por el equipo ni por el servicio técnico — los usuarios pagan por cada consumo a precio accesible.",
    closing:
      "Cero compromiso económico para tu empresa. Solo se paga por lo que tu equipo realmente disfruta.",
    idealFor:
      "Oficinas, coworkings y espacios donde tu equipo es el consumidor final.",
    primary: true,
  },
  {
    index: "02",
    name: "Suministros",
    tagline: "Servicio completo, con compromiso mensual acordado.",
    description:
      "Nexo entrega máquina, productos y operación. Tu empresa acuerda un compromiso mensual que asegura el servicio. Si el consumo supera el compromiso, pagas el consumo real; si no, cubres el diferencial.",
    closing:
      "Estabilidad para tu equipo, sostenibilidad para el servicio.",
    idealFor:
      "Oficinas y coworkings que valoran el compromiso mutuo y prefieren estabilidad sobre lo variable.",
  },
];

export function CommercialModel() {
  return (
    <section
      id="modelo-comercial"
      aria-labelledby="modelo-comercial-title"
      className="relative py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-accent/6 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          index="04"
          eyebrow="Modelo comercial"
          title={
            <>
              Trabajamos como
              <br />
              <span className="text-accent">te conviene.</span>
            </>
          }
          description="Dos formatos cubren la mayoría de los casos. Lo demás lo conversamos en la primera llamada."
          className="mb-16 lg:mb-20"
        />
        {/* Hidden h2 anchor for aria-labelledby (SectionHeader renders its own h2,
            but we want the section label to match our id semantically) */}
        <span id="modelo-comercial-title" className="sr-only">
          Modelo comercial
        </span>

        {/* Two main cards — comodato as primary (subtle accent border),
            suministros as secondary (standard border). Equal width on lg+,
            stacked on mobile. */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {modalities.map((modality, i) => (
            <ScrollReveal key={modality.index} delay={i * 0.08}>
              <article
                className={`group flex h-full flex-col rounded-2xl border bg-bg-elevated p-8 transition-[border-color,transform] duration-300 lg:p-10 ${
                  modality.primary
                    ? "border-accent/30 ring-1 ring-accent/15 hover:border-accent/50"
                    : "border-border-soft hover:border-border"
                }`}
              >
                {/* Index + name */}
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                    {modality.index}
                  </span>
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wider text-fg">
                    {modality.name}
                  </h3>
                </div>

                {/* Tagline — large display weight for visual punch */}
                <p className="font-display mt-6 text-2xl font-light leading-tight text-fg lg:text-[1.65rem]">
                  {modality.tagline}
                </p>

                {/* Description */}
                <p className="mt-6 text-base leading-relaxed text-fg-muted">
                  {modality.description}
                </p>

                {/* Closing — pull-quote feel with hairline divider */}
                <p className="mt-6 border-l-2 border-accent/40 pl-4 text-base leading-relaxed text-fg">
                  {modality.closing}
                </p>

                {/* Spacer to push "Ideal para" to the bottom on equal-height cards */}
                <div className="mt-auto pt-8">
                  <div className="border-t border-border-soft pt-6">
                    <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-fg-subtle">
                      Ideal para
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {modality.idealFor}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Single generic CTA — same vocabulary as the rest of the landing.
            Magnetic effect for tactile feel without competing with hero CTA. */}
        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex justify-center lg:mt-16">
            <Magnetic strength={0.35} maxTravelPx={10}>
              <Button href="/contacto" variant="accent" size="lg" withArrow>
                Quiero mi máquina
              </Button>
            </Magnetic>
          </div>
        </ScrollReveal>

        {/* Discreet footer mention of the other 2 modalities — captures
            long-tail leads without giving them visual weight in the section. */}
        <ScrollReveal delay={0.25}>
          <p className="mx-auto mt-12 max-w-2xl text-center font-mono text-xs uppercase tracking-[0.18em] text-fg-subtle lg:mt-16">
            También trabajamos arrendamiento (renta fija) y revenue sharing
            (% de ventas) para casos específicos.{" "}
            <Link
              href="/contacto"
              className="text-accent transition-colors duration-200 hover:text-accent-bright"
            >
              Lo conversamos en la primera llamada →
            </Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
