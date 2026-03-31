"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === "/contacto";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isContactPage) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Link
        href="/contacto"
        className="hidden md:inline-flex items-center gap-2 px-5 py-3 bg-nexo-teal hover:bg-nexo-teal-hover text-nexo-black font-semibold text-sm rounded-full shadow-xl shadow-nexo-teal/20 transition-all duration-300 hover:-translate-y-0.5"
      >
        Quiero mi máquina
      </Link>
      <a
        href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20una%20m%C3%A1quina%20Nexo"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl shadow-green-500/30 transition-all duration-300 hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} className="text-white" />
      </a>
    </div>
  );
}
