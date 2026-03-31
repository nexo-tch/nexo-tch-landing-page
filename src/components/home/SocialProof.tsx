import { ScrollReveal } from "@/components/ui/ScrollReveal";

const companies = [
  "WeWork",
  "Rappi",
  "Colpatria",
  "Bancolombia",
  "Nutresa",
  "Sura",
];

export function SocialProof() {
  return (
    <section className="relative border-y border-nexo-gray/10 bg-nexo-black py-12 lg:py-16">
      <ScrollReveal>
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-widest text-nexo-gray/50">
          Confían en Nexo
        </p>
      </ScrollReveal>

      {/* Desktop grid */}
      <div className="mx-auto hidden max-w-5xl grid-cols-6 gap-6 px-8 md:grid">
        {companies.map((name, i) => (
          <ScrollReveal key={name} delay={i * 0.06}>
            <div className="flex items-center justify-center rounded-xl border border-nexo-gray/10 bg-nexo-black-light/50 px-4 py-5 transition-colors duration-300 hover:border-nexo-gold/20">
              <span className="text-sm font-semibold tracking-wide text-nexo-gray/40 transition-colors duration-300 hover:text-nexo-gray/70">
                {name}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Mobile infinite scroll */}
      <div className="relative overflow-hidden md:hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-nexo-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-nexo-black to-transparent" />

        <div className="flex animate-marquee gap-4">
          {[...companies, ...companies].map((name, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center justify-center rounded-xl border border-nexo-gray/10 bg-nexo-black-light/50 px-6 py-4"
            >
              <span className="whitespace-nowrap text-sm font-semibold tracking-wide text-nexo-gray/40">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
