import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/seo";

interface BreadcrumbProps {
  items: readonly BreadcrumbItem[];
}

/**
 * Visible breadcrumb trail. Schema is injected separately via breadcrumbSchema.
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Migas de pan" className="pt-24 md:pt-28">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-2 px-6 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-fg-subtle lg:px-8">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {isLast ? (
                <span className="text-fg-muted">{item.name}</span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors duration-200 hover:text-accent"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
