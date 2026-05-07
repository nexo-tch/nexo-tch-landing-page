"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/cafe", label: "Café" },
  { href: "/proteinas", label: "Proteínas" },
  { href: "/snacks", label: "Snacks" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);

  // Adjust state during render when route changes — React-recommended pattern
  // for syncing state to a prop change without an effect.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    if (isOpen) setIsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        isOpen
          ? "border-b border-border-soft bg-bg"
          : scrolled
            ? "border-b border-border-soft bg-bg/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="relative z-50 mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          aria-label="Nexo, ir al inicio"
          className="group flex items-center gap-2.5 tactile"
        >
          <span
            aria-hidden="true"
            className="font-display text-xl font-semibold leading-none text-fg transition-colors duration-200 group-hover:text-accent"
          >
            Nexo
          </span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-125" />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:block">
          <Button href="/contacto" variant="accent" size="md">
            Quiero mi máquina
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 -mr-2 inline-flex h-11 w-11 items-center justify-center rounded-md text-fg lg:hidden tactile"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-bg lg:hidden transition-opacity duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex min-h-[100dvh] flex-col px-6 pb-12 pt-24">
          <div className="flex flex-1 flex-col">
            {links.map((link, i) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: isOpen ? `${i * 30}ms` : "0ms",
                  }}
                  className={`flex items-center justify-between border-b border-border-soft py-5 font-display text-2xl font-medium transition-[color,opacity,transform] duration-300 ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  } ${isActive ? "text-accent" : "text-fg hover:text-accent"}`}
                >
                  {link.label}
                  <span className="font-mono text-xs text-fg-subtle">
                    0{i + 1}
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="pt-8">
            <Button
              href="/contacto"
              variant="accent"
              size="lg"
              className="w-full"
            >
              Quiero mi máquina
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
