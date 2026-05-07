import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  const alignmentClass = align === "center" ? "items-center text-center" : "items-start";
  const descriptionMaxWidth = align === "center" ? "max-w-2xl" : "max-w-xl";

  return (
    <header className={`flex flex-col gap-6 ${alignmentClass} ${className}`}>
      <ScrollReveal>
        <Eyebrow index={index}>{eyebrow}</Eyebrow>
      </ScrollReveal>
      <ScrollReveal delay={0.05}>
        <h2 className="display-lg text-fg">{title}</h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.1}>
          <p className={`text-base leading-relaxed text-fg-muted md:text-lg ${descriptionMaxWidth}`}>
            {description}
          </p>
        </ScrollReveal>
      )}
    </header>
  );
}
