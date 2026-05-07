import type { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "accent" | "primary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium tactile select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const variantClasses: Record<Variant, string> = {
  accent:
    "bg-accent text-bg hover:bg-accent-bright transition-[background-color,box-shadow,transform] duration-200 hover:accent-glow",
  primary:
    "bg-fg text-bg hover:bg-fg/90 transition-[background-color,transform] duration-200",
  ghost:
    "text-fg-muted hover:text-fg border border-border hover:border-accent/40 transition-[color,border-color,transform] duration-200",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-sm rounded-lg",
  lg: "h-14 px-7 text-base rounded-xl",
};

interface LinkButtonProps
  extends BaseProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> {
  href: string;
}

interface NativeButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> {
  href?: never;
}

type ButtonProps = LinkButtonProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const {
    variant = "accent",
    size = "md",
    withArrow = false,
    className = "",
    children,
    ...rest
  } = props;

  const composed = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as Omit<LinkButtonProps, keyof BaseProps>;
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return (
        <a {...anchorRest} href={href} className={`group ${composed}`}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${composed}`}>
        {inner}
      </Link>
    );
  }

  const buttonRest = rest as Omit<NativeButtonProps, keyof BaseProps>;
  return (
    <button {...buttonRest} className={`group ${composed}`}>
      {inner}
    </button>
  );
}
