import type { Metadata } from "next";
import Link from "next/link";
import { VerticalIntentPage } from "@/components/seo/VerticalIntentPage";
import { coworkingsFaqs } from "@/data/faqs";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Vending para coworkings", path: "/vending-para-coworkings" },
] as const;

export const metadata: Metadata = {
  title: "Vending para coworkings en Medellín",
  description:
    "Vending para coworkings en Medellín: café y snacks como amenidad. Sin personal ni inventario. Nexo opera el punto. Comodato, sin inversión.",
  alternates: { canonical: "/vending-para-coworkings" },
  openGraph: {
    title: "Vending para coworkings en Medellín | Nexo Vending",
    description:
      "Café y snacks en tu coworking, sin operar alimentos. Nexo instala y mantiene el punto.",
    url: absoluteUrl("/vending-para-coworkings"),
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending para coworkings en Medellín | Nexo Vending",
    description:
      "Amenidad de café y snacks. Cero operación para el coworking.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function VendingParaCoworkingsPage() {
  return (
    <VerticalIntentPage
      crumbs={crumbs}
      serviceName="Vending para coworkings en Medellín — Nexo Vending"
      serviceDescription="Máquinas vending de café y snacks para coworkings en Medellín. Amenidad sin operación para el operador: Nexo instala, abastece y mantiene."
      slug="/vending-para-coworkings"
      serviceType="Vending para coworkings"
      faqs={coworkingsFaqs}
      eyebrow="Coworkings · Valle de Aburrá"
      title={
        <>
          Vending para coworkings.
          <br />
          <span className="font-extrabold text-accent">
            Amenidad. Cero operación.
          </span>
        </>
      }
      subtitle="Café y snacks en la kitchenette o la zona común, sin personal de alimentos. El miembro se queda. El operador no monta una cafetería."
      ctaHref="/contacto?linea=coworkings"
      problemTitle={
        <>
          El miembro espera café.
          <br />
          <span className="text-accent">Tú no quieres operarlo.</span>
        </>
      }
      problemBody={
        <>
          <p>
            Un coworking se mide por si la gente se queda. El café mediocre o el
            snack de conveniencia empujan al miembro a la calle. Una cafetería
            propia pide turnos, proveedores y un costo fijo que no siempre
            cubre el flujo.
          </p>
          <p>
            El vending para coworkings de Nexo pone{" "}
            <Link
              href="/cafe"
              className="text-fg underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              Nexo Café
            </Link>{" "}
            y, si hay tráfico todo el día,{" "}
            <Link
              href="/snacks"
              className="text-fg underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              Nexo Snacks
            </Link>{" "}
            en un punto visible. El operador no gestiona inventario ni
            mantenimiento. Nexo opera el punto completo.
          </p>
          <p>
            En{" "}
            <Link
              href="/comodato-maquinas-vending"
              className="text-fg underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              comodato
            </Link>{" "}
            no hay inversión en el equipo. Si el coworking quiere subsidiar el
            café como amenidad incluida, lo configuramos en la propuesta.
            Valle de Aburrá: Medellín, Envigado, Sabaneta, Itagüí, Bello y La
            Estrella.
          </p>
        </>
      }
      pointsEyebrow="Qué encaja"
      pointsTitle={
        <>
          Amenidad que
          <br />
          <span className="text-accent">no abre un segundo negocio.</span>
        </>
      }
      points={[
        {
          title: "Nexo Café",
          fit: "Kitchenette, recepción o zona común",
          text: "La amenidad que el miembro da por hecha. Menú estable, vasos listos, sin barista en nómina del coworking.",
        },
        {
          title: "Nexo Snacks",
          fit: "Espacios con tráfico de día completo",
          text: "Surtido curado junto al café. El operador no arma un mini-market ni negocia con tres proveedores.",
        },
        {
          title: "Operación Nexo",
          fit: "Cero inventario para community",
          text: "Reposición, limpieza y soporte los asume Nexo. Community se dedica a miembros, no a insumos.",
        },
      ]}
      whyTitle={
        <>
          Lo que le importa
          <br />
          <span className="text-accent">al operador.</span>
        </>
      }
      why={[
        "Amenidad de café sin montar cafetería.",
        "Cero personal de alimentos en tu nómina.",
        "Comodato: el coworking no compra la máquina.",
        "Opción de subsidiar el café como beneficio incluido.",
        "Un punto cuidado, no una máquina genérica sucia.",
        "Cobertura en Medellín y el Valle de Aburrá.",
      ]}
      related={[
        {
          href: "/vending-para-oficinas",
          label: "Vending para oficinas",
          description:
            "El caso más cercano: café y snacks para un equipo fijo.",
        },
        {
          href: "/vending-para-gimnasios",
          label: "Vending para gimnasios",
          description:
            "Si el edificio tiene gym: proteína post-entreno y revenue share.",
        },
        {
          href: "/vending-corporativo-medellin",
          label: "Vending corporativo en Medellín",
          description:
            "Café, snacks y proteína bajo una sola operación.",
        },
        {
          href: "/cafe",
          label: "Máquina de café para empresas",
          description:
            "Detalle de Nexo Café: bebidas, instalación y cobertura.",
        },
        {
          href: "/comodato-maquinas-vending",
          label: "Máquina vending sin inversión",
          description:
            "Vending en comodato: el coworking no compra ni opera el equipo.",
        },
      ]}
      ctaEyebrow="Coworkings en Medellín"
      ctaTitle={
        <>
          Lleva Nexo
          <br />
          <span className="text-accent">a tu coworking.</span>
        </>
      }
      ctaNote="Preseleccionamos café y snacks. Te contactamos en menos de 24 horas."
    />
  );
}
