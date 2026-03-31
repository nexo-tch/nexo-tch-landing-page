"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-nexo-black/90 backdrop-blur-xl border-b border-nexo-gold/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="relative z-10 flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nexo-gold to-nexo-gold-bright flex items-center justify-center font-display font-extrabold text-nexo-black text-lg transition-transform duration-300 group-hover:scale-110">
              N
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Nexo<span className="text-nexo-gold">.</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-lg ${
                    isActive
                      ? "text-nexo-gold"
                      : "text-nexo-gray hover:text-nexo-white"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-nexo-gold transition-all duration-300 ${
                      isActive
                        ? "opacity-100 scale-x-100"
                        : "opacity-0 scale-x-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-nexo-teal hover:bg-nexo-teal-hover text-nexo-black font-semibold text-sm rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-nexo-teal/20 hover:-translate-y-0.5"
            >
              Quiero mi máquina
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 p-2 text-nexo-white"
            aria-label="Menú"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — CSS-only transitions */}
      <div
        className={`fixed inset-0 z-40 bg-nexo-black/98 backdrop-blur-xl lg:hidden transition-all duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 px-6">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-display font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-nexo-gold"
                    : "text-nexo-white hover:text-nexo-gold"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-6">
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-nexo-teal text-nexo-black font-bold text-lg rounded-xl"
            >
              Quiero mi máquina
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
