import { Clock, BadgeDollarSign, Wrench, Shield, MapPin } from "lucide-react";

const valueProps = [
  { icon: Clock, text: "Respuesta en 24h" },
  { icon: BadgeDollarSign, text: "Cero inversión" },
  { icon: Wrench, text: "Operación incluida" },
  { icon: Shield, text: "Modelo comercial flexible" },
  { icon: MapPin, text: "Medellín y Valle de Aburrá" },
];

export function SocialProof() {
  return (
    <section
      aria-label="Garantías Nexo"
      className="border-y border-border-soft bg-bg-sunken"
    >
      <div className="mx-auto hidden max-w-7xl items-center justify-between gap-6 px-8 py-6 md:flex">
        {valueProps.map((prop) => (
          <div
            key={prop.text}
            className="flex items-center gap-2.5 text-fg-muted"
          >
            <prop.icon
              className="h-4 w-4 shrink-0 text-accent/70"
              strokeWidth={1.75}
            />
            <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wider">
              {prop.text}
            </span>
          </div>
        ))}
      </div>

      {/* Mobile marquee */}
      <div className="relative overflow-hidden py-5 md:hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-bg-sunken to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-bg-sunken to-transparent" />

        <div className="flex animate-marquee gap-10 will-change-transform">
          {[...valueProps, ...valueProps].map((prop, i) => (
            <div
              key={`${prop.text}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-fg-muted"
            >
              <prop.icon
                className="h-4 w-4 shrink-0 text-accent/70"
                strokeWidth={1.75}
              />
              <span className="whitespace-nowrap text-xs font-medium uppercase tracking-wider">
                {prop.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
