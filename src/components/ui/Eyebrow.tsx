import type { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  index?: string;
  className?: string;
}

export function Eyebrow({ children, index, className = "" }: EyebrowProps) {
  return (
    <span className={`eyebrow inline-flex items-center gap-2 ${className}`}>
      {index && <span className="text-fg-subtle">({index})</span>}
      <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
      {children}
    </span>
  );
}
