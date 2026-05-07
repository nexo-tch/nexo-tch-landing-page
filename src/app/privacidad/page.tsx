import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { company, mailtoUrl } from "@/lib/company";

export const metadata: Metadata = {
  title: "Política de privacidad y tratamiento de datos",
  description: `Política de tratamiento de datos personales de ${company.legalName} conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013 de Colombia.`,
  alternates: { canonical: "/privacidad" },
  robots: { index: true, follow: true },
};

const lastUpdated = "1 de abril de 2026";

const sections: Array<{ id: string; title: string; body: React.ReactNode }> = [
  {
    id: "responsable",
    title: "Responsable del tratamiento",
    body: (
      <>
        <p>
          {company.legalName} (en adelante &quot;{company.brandName}&quot;), con NIT{" "}
          {company.nit}, con domicilio principal en {company.city},{" "}
          {company.country}, es la responsable del tratamiento de los datos
          personales recolectados a través de este sitio web.
        </p>
        <p>
          Atención al titular de datos:{" "}
          <a href={mailtoUrl()} className="text-accent hover:underline">
            {company.contact.email}
          </a>
          . Operamos como una compañía 100% digital, por lo que toda
          comunicación con el responsable se atiende por este canal.
        </p>
      </>
    ),
  },
  {
    id: "datos",
    title: "Datos personales que recolectamos",
    body: (
      <>
        <p>A través del formulario de contacto recopilamos:</p>
        <ul>
          <li>Nombre de la empresa.</li>
          <li>Correo electrónico corporativo.</li>
          <li>Producto(s) de interés (Café, Protein, Snacks).</li>
          <li>
            Opcionales: nombre de la persona de contacto, número aproximado de
            empleados, tipo de espacio, ciudad, teléfono o WhatsApp y mensaje
            adicional.
          </li>
        </ul>
        <p>
          No recolectamos datos sensibles, datos de menores de edad ni
          información financiera a través de este sitio.
        </p>
      </>
    ),
  },
  {
    id: "finalidad",
    title: "Finalidad del tratamiento",
    body: (
      <>
        <p>Tus datos serán tratados única y exclusivamente para:</p>
        <ul>
          <li>
            Contactarte para evaluar la viabilidad, cotizar y, cuando
            corresponda, coordinar la instalación o demostración de las
            soluciones de {company.brandName}.
          </li>
          <li>
            Enviarte información comercial sobre productos, novedades y
            beneficios relacionados con tu caso de uso.
          </li>
          <li>
            Generar estadísticas internas agregadas para mejorar nuestra
            propuesta de valor.
          </li>
          <li>
            Cumplir obligaciones legales, contractuales y precontractuales
            cuando aplique.
          </li>
        </ul>
        <p>
          No vendemos, alquilamos ni compartimos tu información con terceros
          para fines distintos a los aquí descritos.
        </p>
      </>
    ),
  },
  {
    id: "derechos",
    title: "Derechos del titular",
    body: (
      <>
        <p>
          Conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013, como
          titular de los datos puedes en cualquier momento:
        </p>
        <ul>
          <li>
            Conocer, actualizar y rectificar tus datos personales frente a{" "}
            {company.brandName}.
          </li>
          <li>
            Solicitar prueba de la autorización otorgada para el tratamiento.
          </li>
          <li>
            Ser informado sobre el uso que se le ha dado a tus datos
            personales.
          </li>
          <li>
            Presentar peticiones, quejas y reclamos (PQR) ante {company.brandName}{" "}
            o ante la Superintendencia de Industria y Comercio (SIC) por
            infracciones a la normativa vigente.
          </li>
          <li>Revocar la autorización y/o solicitar la supresión del dato.</li>
          <li>Acceder de forma gratuita a tus datos personales tratados.</li>
        </ul>
      </>
    ),
  },
  {
    id: "procedimiento",
    title: "Cómo ejercer tus derechos",
    body: (
      <>
        <p>
          Para ejercer cualquiera de tus derechos, envía una solicitud al
          correo{" "}
          <a href={mailtoUrl()} className="text-accent hover:underline">
            {company.contact.email}
          </a>{" "}
          indicando:
        </p>
        <ul>
          <li>Nombre completo y empresa.</li>
          <li>Correo electrónico de contacto.</li>
          <li>Descripción clara y detallada del derecho que deseas ejercer.</li>
          <li>Documentos que soporten la solicitud, si aplica.</li>
        </ul>
        <p>
          Daremos trámite a tu solicitud dentro de los plazos legales: hasta
          diez (10) días hábiles para consultas y hasta quince (15) días hábiles
          para reclamos, prorrogables conforme lo permite la ley.
        </p>
      </>
    ),
  },
  {
    id: "seguridad",
    title: "Medidas de seguridad",
    body: (
      <>
        <p>
          {company.brandName} implementa medidas técnicas, humanas y
          administrativas razonables para proteger los datos personales de
          accesos no autorizados, pérdida, alteración o uso indebido. Entre
          ellas: cifrado en tránsito (HTTPS/TLS), control de acceso a los
          sistemas que almacenan los datos, y revisiones periódicas de
          seguridad.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    title: "Encargados y terceros",
    body: (
      <>
        <p>
          Para operar el sitio web y gestionar las solicitudes podemos apoyarnos
          en proveedores tecnológicos (hosting, correo transaccional,
          analítica), quienes actúan como encargados del tratamiento bajo
          contratos que los obligan a cumplir esta política y la ley aplicable.
        </p>
        <p>
          No realizamos transferencias internacionales de datos sin autorización
          previa del titular o causal legal habilitante.
        </p>
      </>
    ),
  },
  {
    id: "vigencia",
    title: "Vigencia y modificaciones",
    body: (
      <>
        <p>
          Esta política entra en vigencia el {lastUpdated} y permanecerá vigente
          mientras {company.brandName} desarrolle su objeto social. Los datos
          personales serán conservados por el tiempo necesario para cumplir las
          finalidades aquí descritas y las obligaciones legales aplicables.
        </p>
        <p>
          Cualquier cambio sustancial será comunicado a través de este mismo
          sitio web con al menos diez (10) días de anticipación a su entrada en
          vigor.
        </p>
      </>
    ),
  },
];

export default function PrivacidadPage() {
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
            <Eyebrow>Legal · Habeas Data</Eyebrow>
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <h1 className="display-xl mt-8 max-w-3xl text-fg">
              Política de privacidad y{" "}
              <span className="text-accent">tratamiento de datos.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fg-muted md:text-xl">
              Tus datos son tuyos. Esta política explica qué recolectamos, para
              qué lo usamos y cómo puedes ejercer tus derechos en cualquier
              momento, conforme a la Ley 1581 de 2012 de Colombia.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-8 font-mono text-xs uppercase tracking-wider text-fg-subtle">
              Última actualización · {lastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Body */}
      <section className="border-t border-border-soft py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* TOC — collapsible on mobile, sticky sidebar on desktop */}
            <aside className="lg:col-span-4">
              {/* Mobile: collapsible details */}
              <details className="group rounded-lg border border-border-soft bg-bg-elevated open:bg-bg-elevated lg:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 tactile">
                  <span className="font-mono text-xs uppercase tracking-wider text-accent">
                    Contenido · {sections.length} secciones
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-fg-muted transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <ol className="space-y-3 border-t border-border-soft px-4 py-4">
                  {sections.map((s, i) => (
                    <li key={s.id} className="text-sm">
                      <Link
                        href={`#${s.id}`}
                        className="group/link inline-flex items-baseline gap-3 text-fg-muted transition-colors duration-150 hover:text-fg"
                      >
                        <span className="font-mono text-xs text-fg-subtle">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </details>

              {/* Desktop: sticky sidebar */}
              <div className="hidden lg:sticky lg:top-32 lg:block">
                <h2 className="font-mono text-xs uppercase tracking-wider text-accent">
                  Contenido
                </h2>
                <ol className="mt-6 space-y-3 border-l border-border-soft pl-5">
                  {sections.map((s, i) => (
                    <li key={s.id} className="text-sm">
                      <Link
                        href={`#${s.id}`}
                        className="group inline-flex items-baseline gap-3 text-fg-muted transition-colors duration-150 hover:text-fg"
                      >
                        <span className="font-mono text-xs text-fg-subtle">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            {/* Content */}
            <article className="prose-nexo lg:col-span-8">
              {sections.map((s, i) => (
                <section
                  key={s.id}
                  id={s.id}
                  className="border-t border-border-soft pt-12 first:border-0 first:pt-0 [&+section]:mt-12"
                >
                  <Eyebrow index={String(i + 1).padStart(2, "0")}>
                    {s.title}
                  </Eyebrow>
                  <h2 className="display-md mt-6 text-fg">{s.title}</h2>
                  <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-muted [&_a]:text-accent [&_a]:hover:underline [&_li]:py-1 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6">
                    {s.body}
                  </div>
                </section>
              ))}

              {/* Closing block */}
              <div className="mt-16 border-t border-border-soft pt-12">
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  Información de contacto
                </p>
                <ul className="mt-6 divide-y divide-border-soft border-y border-border-soft text-sm text-fg-muted">
                  <li className="flex justify-between gap-6 py-4">
                    <span>Razón social</span>
                    <span className="text-fg">{company.legalName}</span>
                  </li>
                  <li className="flex justify-between gap-6 py-4">
                    <span>NIT</span>
                    <span className="text-fg">{company.nit}</span>
                  </li>
                  <li className="flex justify-between gap-6 py-4">
                    <span>Atención al titular</span>
                    <a
                      href={mailtoUrl()}
                      className="text-accent hover:underline"
                    >
                      {company.contact.email}
                    </a>
                  </li>
                  <li className="flex justify-between gap-6 py-4">
                    <span>Domicilio</span>
                    <span className="text-fg">
                      {company.city}, {company.country}
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
