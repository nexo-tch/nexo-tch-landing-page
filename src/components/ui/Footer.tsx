import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { company, whatsappUrl, mailtoUrl } from "@/lib/company";

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const productLinks = [
  { href: "/cafe", label: "Nexo Café" },
  { href: "/proteinas", label: "Nexo Protein" },
  { href: "/snacks", label: "Nexo Snacks" },
];

const companyLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/privacidad", label: "Privacidad y datos" },
];

export function Footer() {
  const wa = whatsappUrl("Hola, me interesa una máquina Nexo");
  const waDisplay = company.contact.whatsapp.display;

  return (
    <footer className="border-t border-border-soft bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        {/* Top — oversized brand statement */}
        <div className="border-b border-border-soft pb-16">
          <p className="font-display text-3xl font-medium leading-tight text-fg sm:text-4xl lg:text-5xl">
            Energía en cada taza,
            <br />
            <span className="text-accent">para cada espacio.</span>
          </p>
          <p className="mt-6 max-w-md text-base text-fg-muted">
            Máquinas vending de café, proteína y snacks para empresas en
            Medellín. Operación y mantenimiento incluidos.
          </p>
        </div>

        {/* Middle — links grid */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 tactile"
            >
              <span className="font-display text-xl font-semibold leading-none text-fg">
                {company.brandName}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-200 group-hover:scale-125" />
            </Link>
            <div className="mt-6 flex gap-3">
              <a
                href={company.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft text-fg-muted transition-[color,border-color] duration-200 hover:border-accent/40 hover:text-accent tactile"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border-soft text-fg-muted transition-[color,border-color] duration-200 hover:border-accent/40 hover:text-accent tactile"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              Productos
            </h3>
            <ul className="mt-6 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              Empresa
            </h3>
            <ul className="mt-6 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-accent">
              Contacto
            </h3>
            <ul className="mt-6 space-y-3">
              <li>
                <a
                  href={mailtoUrl()}
                  className="group flex items-center gap-3 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                >
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                  {company.contact.email}
                </a>
              </li>
              {wa && waDisplay && (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                  >
                    <Phone className="h-4 w-4" strokeWidth={1.5} />
                    {waDisplay}
                  </a>
                </li>
              )}
              <li className="flex items-start gap-3 text-sm text-fg-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" strokeWidth={1.5} />
                {company.city}, {company.country}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom — legal */}
        <div className="space-y-4 border-t border-border-soft pt-8">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
              © {new Date().getFullYear()} {company.legalName}. Todos los
              derechos reservados.
            </p>
            <p className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
              Hecho en {company.city}, {company.country}
            </p>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-fg-subtle">
            NIT {company.nit} · Operación 100% digital
          </p>
        </div>
      </div>
    </footer>
  );
}
