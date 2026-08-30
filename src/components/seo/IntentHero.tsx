import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

interface IntentHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  ctaText?: string;
  ctaHref?: string;
}

export function IntentHero({
  eyebrow,
  title,
  subtitle,
  ctaText = "Quiero mi máquina",
  ctaHref = "/contacto",
}: IntentHeroProps) {
  return (
    <section className="relative overflow-hidden pt-6 md:pt-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-12 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
        <ScrollReveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </ScrollReveal>
        <ScrollReveal delay={0.05}>
          <h1 className="display-xl mt-8 max-w-4xl font-light text-fg">
            {title}
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
            {subtitle}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mt-10">
            <Magnetic strength={0.35} maxTravelPx={10}>
              <Button href={ctaHref} variant="accent" size="lg" withArrow>
                {ctaText}
              </Button>
            </Magnetic>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
