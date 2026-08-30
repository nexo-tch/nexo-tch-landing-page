import type { ReactNode } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface ProductSeoProps {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}

/** Indexable commercial copy for product URLs — matches section rhythm. */
export function ProductSeo({
  index = "C",
  eyebrow,
  title,
  children,
}: ProductSeoProps) {
  return (
    <section className="border-t border-border-soft py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          index={index}
          eyebrow={eyebrow}
          title={title}
          className="mb-12 lg:mb-16"
        />
        <div className="max-w-3xl space-y-5 text-base leading-relaxed text-fg-muted lg:text-lg">
          {children}
        </div>
      </div>
    </section>
  );
}
