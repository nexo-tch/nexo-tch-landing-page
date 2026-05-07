import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "La página que buscas no existe o fue movida. Vuelve al inicio o explora nuestras líneas de producto.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/4 h-[520px] w-[520px] rounded-full bg-accent/[0.08] blur-[160px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-[420px] w-[420px] rounded-full bg-accent/[0.05] blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 md:grid-cols-12 md:gap-10 lg:px-8 lg:gap-16">
        <div className="md:col-span-7">
          <Eyebrow index="404">Callejón sin café</Eyebrow>

          {/* Drama weight: font-weight 800 on a single glyph makes the
              404 the visual anchor without adding layout noise. */}
          <p
            aria-hidden="true"
            className="mt-10 font-display text-[clamp(7rem,20vw,18rem)] font-extrabold leading-[0.85] tracking-[-0.05em] text-accent/90"
          >
            404
          </p>

          <h1
            id="not-found-heading"
            className="display-lg mt-6 max-w-xl font-light text-fg"
          >
            Esta página{" "}
            <span className="font-semibold text-accent">no existe</span>
            <span aria-hidden="true">.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted md:text-lg">
            La ruta que buscas fue movida o nunca estuvo aquí. Vuelve al inicio
            o pasa directo a nuestras tres líneas.
          </p>

          <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Magnetic strength={0.35} maxTravelPx={10}>
              <Button href="/" variant="accent" size="lg" withArrow>
                Volver al inicio
              </Button>
            </Magnetic>
            <Link
              href="/contacto"
              className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted transition-colors hover:text-accent sm:ml-4"
            >
              O agenda tu instalación →
            </Link>
          </div>
        </div>

        <nav
          aria-label="Líneas de producto"
          className="md:col-span-5 md:self-end"
        >
          <ul className="divide-y divide-border-soft border-y border-border-soft">
            {[
              { href: "/cafe", index: "01", label: "Nexo Café" },
              { href: "/proteinas", index: "02", label: "Nexo Protein" },
              { href: "/snacks", index: "03", label: "Nexo Snacks" },
              { href: "/nosotros", index: "04", label: "Nosotros" },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-baseline gap-5 py-5 transition-colors hover:text-accent"
                >
                  <span className="font-mono text-xs text-fg-subtle transition-colors group-hover:text-accent">
                    {item.index}
                  </span>
                  <span className="font-display text-lg font-medium text-fg transition-colors group-hover:text-accent lg:text-xl">
                    {item.label}
                  </span>
                  <span
                    aria-hidden="true"
                    className="ml-auto font-mono text-xs text-fg-subtle transition-transform group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
