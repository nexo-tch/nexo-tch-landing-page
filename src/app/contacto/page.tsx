import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/ContactForm";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contacto — Solicita tu máquina Nexo",
  description:
    "Solicita tu máquina Nexo. Completa el formulario y te contactamos en menos de 24 horas. Modelo comercial flexible para empresas en Medellín.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto — Solicita tu máquina Nexo",
    description:
      "Completa el formulario y te contactamos en menos de 24 horas. Modelo comercial flexible.",
    url: absoluteUrl("/contacto"),
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE.url,
        width: DEFAULT_OG_IMAGE.width,
        height: DEFAULT_OG_IMAGE.height,
        alt: DEFAULT_OG_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto — Solicita tu máquina Nexo",
    description:
      "Te contactamos en menos de 24 horas. Modelo comercial flexible.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 lg:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-12 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 lg:px-8 lg:pb-24">
          <ScrollReveal>
            <Eyebrow>Empresas en Medellín</Eyebrow>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1 className="display-xl mt-8 max-w-3xl font-light text-fg">
              Empieza la{" "}
              <span className="font-extrabold text-accent">conversación.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg-muted md:text-xl">
              Completa el formulario y te contactamos en menos de 24 horas. Sin
              compromiso, sin letra pequeña.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form Section */}
      <section
        aria-labelledby="solicita-tu-maquina"
        className="border-t border-border-soft pb-24 pt-16 lg:pb-32"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 max-w-2xl lg:mb-16">
              <Eyebrow index="A">Solicita tu máquina</Eyebrow>
              <h2
                id="solicita-tu-maquina"
                className="display-md mt-6 text-fg"
              >
                Cuéntanos de tu empresa y{" "}
                <span className="text-accent">te contactamos en 24h.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-fg-muted lg:text-lg">
                Tres datos bastan para empezar. Lo demás lo resolvemos en una
                llamada corta.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Cómo trabajamos — H2 secundario para jerarquía y SEO */}
      <section
        aria-labelledby="como-trabajamos"
        className="border-t border-border-soft bg-bg-sunken py-24 lg:py-32"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <ScrollReveal>
            <Eyebrow index="B">Cómo trabajamos contigo</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h2
              id="como-trabajamos"
              className="display-md mt-6 max-w-3xl text-fg"
            >
              Del formulario a tu{" "}
              <span className="text-accent">primer café. Sin rodeos.</span>
            </h2>
          </ScrollReveal>

          <ul className="mt-16 divide-y divide-border-soft border-y border-border-soft">
            {[
              {
                n: "01",
                title: "Recibimos tu solicitud",
                description:
                  "Te contactamos en menos de 24 horas para entender tu espacio, flujo de personas y producto ideal.",
              },
              {
                n: "02",
                title: "Viabilidad y propuesta",
                description:
                  "Validamos que podemos instalar la máquina adecuada para tu espacio y te enviamos una propuesta con la línea Nexo recomendada: café, proteína o snacks.",
              },
              {
                n: "03",
                title: "Coordinación e instalación",
                description:
                  "Acordamos la modalidad comercial que mejor calce — comodato, suministros, arrendamiento o revenue sharing — y coordinamos la instalación según disponibilidad. Llegamos, instalamos, abastecemos y dejamos a tu equipo disfrutando.",
              },
            ].map((step, i) => (
              <ScrollReveal key={step.n} delay={0.1 + i * 0.05}>
                <li className="grid grid-cols-1 items-start gap-4 py-8 lg:grid-cols-12 lg:gap-10 lg:py-10">
                  <div className="flex items-baseline gap-4 lg:col-span-4">
                    <span className="font-mono text-xs text-accent">
                      {step.n}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-fg lg:text-2xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="max-w-2xl text-base leading-relaxed text-fg-muted lg:col-span-8">
                    {step.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
