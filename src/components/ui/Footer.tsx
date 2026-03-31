import Link from "next/link";
import { Coffee, Dumbbell, Cookie, Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const productLinks = [
  { href: "/cafe", label: "Nexo Café", icon: Coffee },
  { href: "/proteinas", label: "Nexo Protein", icon: Dumbbell },
  { href: "/snacks", label: "Nexo Snacks", icon: Cookie },
];

const companyLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-nexo-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nexo-gold to-nexo-gold-bright flex items-center justify-center font-display font-extrabold text-nexo-black text-lg">
                N
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Nexo<span className="text-nexo-gold">.</span>
              </span>
            </Link>
            <p className="text-nexo-gray/70 text-sm leading-relaxed mb-6 max-w-xs">
              Energía en cada taza. Máquinas vending de café premium, proteína y
              snacks para empresas en Medellín.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/nexovending"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-nexo-gray-dark flex items-center justify-center text-nexo-gray hover:text-nexo-gold hover:bg-nexo-gold/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/company/nexovending"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-nexo-gray-dark flex items-center justify-center text-nexo-gray hover:text-nexo-gold hover:bg-nexo-gold/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-nexo-gold mb-6">
              Productos
            </h3>
            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-nexo-gray/70 hover:text-nexo-white transition-colors text-sm"
                  >
                    <link.icon size={16} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-nexo-gold mb-6">
              Empresa
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-nexo-gray/70 hover:text-nexo-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-nexo-gold mb-6">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hola@nexovending.com"
                  className="flex items-center gap-3 text-nexo-gray/70 hover:text-nexo-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  hola@nexovending.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-nexo-gray/70 hover:text-nexo-white transition-colors text-sm"
                >
                  <Phone size={16} />
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-start gap-3 text-nexo-gray/70 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Medellín, Colombia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-nexo-gray/40 text-xs">
            © {new Date().getFullYear()} Nexo Technologies. Todos los derechos
            reservados.
          </p>
          <p className="text-nexo-gray/40 text-xs">
            Hecho con ☕ en Medellín, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
