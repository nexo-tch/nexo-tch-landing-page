import type { ReactNode } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { IntentHero } from "@/components/seo/IntentHero";
import { RelatedLinks, type RelatedLink } from "@/components/seo/RelatedLinks";
import { FAQ } from "@/components/home/FAQ";
import type { Faq } from "@/data/faqs";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/seo";

export type VerticalPoint = {
  title: string;
  fit: string;
  text: string;
};

export type VerticalIntentPageProps = {
  crumbs: readonly { name: string; path: string }[];
  serviceName: string;
  serviceDescription: string;
  slug: string;
  serviceType: string;
  faqs: readonly Faq[];
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  ctaHref: string;
  problemTitle: ReactNode;
  problemBody: ReactNode;
  pointsEyebrow: string;
  pointsTitle: ReactNode;
  points: readonly VerticalPoint[];
  whyTitle: ReactNode;
  why: readonly string[];
  related: readonly RelatedLink[];
  ctaEyebrow: string;
  ctaTitle: ReactNode;
  ctaNote?: string;
};

export function VerticalIntentPage({
  crumbs,
  serviceName,
  serviceDescription,
  slug,
  serviceType,
  faqs,
  eyebrow,
  title,
  subtitle,
  ctaHref,
  problemTitle,
  problemBody,
  pointsEyebrow,
  pointsTitle,
  points,
  whyTitle,
  why,
  related,
  ctaEyebrow,
  ctaTitle,
  ctaNote,
}: VerticalIntentPageProps) {
  return (
    <>
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <JsonLd
        data={serviceSchema({
          name: serviceName,
          description: serviceDescription,
          slug,
          serviceType,
        })}
      />
      <JsonLd data={faqPageSchema(faqs)} />

      <Breadcrumb items={crumbs} />
      <IntentHero
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        ctaHref={ctaHref}
      />

      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="01"
            eyebrow="El espacio"
            title={problemTitle}
            className="mb-12 lg:mb-16"
          />
          <div className="max-w-3xl space-y-5 text-base leading-relaxed text-fg-muted lg:text-lg">
            {problemBody}
          </div>
        </div>
      </section>

      <section className="bg-bg-sunken py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="02"
            eyebrow={pointsEyebrow}
            title={pointsTitle}
            className="mb-12 lg:mb-16"
          />
          <ul className="divide-y divide-border-soft border-y border-border-soft">
            {points.map((row, i) => (
              <li
                key={row.title}
                className="grid grid-cols-1 gap-3 py-8 lg:grid-cols-12 lg:items-baseline lg:gap-8"
              >
                <span className="font-mono text-xs text-accent lg:col-span-1">
                  0{i + 1}
                </span>
                <div className="lg:col-span-4">
                  <h3 className="font-display text-xl font-medium text-fg">
                    {row.title}
                  </h3>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-subtle">
                    {row.fit}
                  </p>
                </div>
                <p className="text-base leading-relaxed text-fg-muted lg:col-span-7">
                  {row.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeader
            index="03"
            eyebrow="Por qué Nexo"
            title={whyTitle}
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 gap-x-12 border-y border-border-soft md:grid-cols-2">
            <ul className="divide-y divide-border-soft md:border-r md:border-border-soft md:pr-12">
              {why.slice(0, 3).map((item, i) => (
                <li key={item} className="flex gap-4 py-5">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <span className="text-base text-fg-muted">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="divide-y divide-border-soft md:pl-12">
              {why.slice(3).map((item, i) => (
                <li key={item} className="flex gap-4 py-5">
                  <span className="font-mono text-xs text-accent">0{i + 4}</span>
                  <span className="text-base text-fg-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-fg-muted">
            Cobertura: Medellín, Envigado, Sabaneta, Itagüí, Bello y La
            Estrella. Modalidad más común:{" "}
            <Link
              href="/comodato-maquinas-vending"
              className="text-fg underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              comodato
            </Link>
            , sin comprar el equipo.
          </p>
        </div>
      </section>

      <FAQ items={faqs} index="04" />

      <RelatedLinks index="05" links={related} />

      <section className="border-t border-border-soft py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <ScrollReveal>
            <Eyebrow>{ctaEyebrow}</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2 className="display-lg mt-6 text-fg">{ctaTitle}</h2>
          </ScrollReveal>
          {ctaNote ? (
            <ScrollReveal delay={0.1}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
                {ctaNote}
              </p>
            </ScrollReveal>
          ) : null}
          <ScrollReveal delay={0.15}>
            <div className="mt-10">
              <Magnetic strength={0.35} maxTravelPx={10}>
                <Button href={ctaHref} variant="accent" size="lg" withArrow>
                  Quiero mi máquina
                </Button>
              </Magnetic>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
