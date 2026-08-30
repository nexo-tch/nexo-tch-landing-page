import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";

export type RelatedLink = {
  href: string;
  label: string;
  description: string;
};

export function RelatedLinks({
  index = "E",
  links,
}: {
  index?: string;
  links: readonly RelatedLink[];
}) {
  return (
    <section className="border-t border-border-soft py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          index={index}
          eyebrow="Sigue explorando"
          title={
            <>
              Otras páginas
              <br />
              <span className="text-accent">que te sirven.</span>
            </>
          }
          className="mb-12 lg:mb-16"
        />
        <ul className="divide-y divide-border-soft border-y border-border-soft">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group grid grid-cols-1 gap-2 py-6 lg:grid-cols-12 lg:items-baseline lg:gap-8 lg:py-8"
              >
                <span className="font-display text-lg font-medium text-fg transition-colors duration-200 group-hover:text-accent lg:col-span-5">
                  {link.label}
                </span>
                <span className="text-sm leading-relaxed text-fg-muted lg:col-span-7">
                  {link.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
