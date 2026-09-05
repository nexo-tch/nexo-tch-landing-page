import type { Metadata } from "next";
import Link from "next/link";
import { VerticalIntentPage } from "@/components/seo/VerticalIntentPage";
import { oficinasFaqs } from "@/data/faqs";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Vending para oficinas", path: "/vending-para-oficinas" },
] as const;

export const metadata: Metadata = {
  title: "Vending para oficinas en Medellín",
  description:
    "Máquinas vending para oficinas en Medellín: café y snacks sin inversión. Nexo instala, opera y abastece. Sin obras. Tu equipo no sale del edificio.",
  alternates: { canonical: "/vending-para-oficinas" },
  openGraph: {
    title: "Vending para oficinas en Medellín | Nexo Vending",
    description:
      "Café y snacks en la oficina, sin comprar el equipo. Nexo opera el punto en el Valle de Aburrá.",
    url: absoluteUrl("/vending-para-oficinas"),
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending para oficinas en Medellín | Nexo Vending",
    description:
      "Café y snacks en tu oficina. Sin inversión. Nexo opera todo.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function VendingParaOficinasPage() {
  return (
    <VerticalIntentPage
      crumbs={crumbs}
      serviceName="Vending para oficinas en Medellín — Nexo Vending"
      serviceDescription="Máquinas vending de café y snacks para oficinas en Medellín y el Valle de Aburrá. Sin inversión en el equipo: Nexo instala, opera y abastece."
      slug="/vending-para-oficinas"
      serviceType="Vending para oficinas"
      faqs={oficinasFaqs}
      eyebrow="Oficinas · Valle de Aburrá"
      title={
        <>
          Vending para oficinas.
          <br />
          <span className="font-extrabold text-accent">
            Café sin salir del edificio.
          </span>
        </>
      }
      subtitle="Máquinas de café y snacks para equipos que no deberían perder media hora en la calle. Nexo instala, opera y abastece. La oficina no compra el equipo."
      ctaHref="/contacto?linea=oficinas"
      problemTitle={
        <>
          El café de oficina no
          <br />
          <span className="text-accent">debería ser un trámite.</span>
        </>
      }
      problemBody={
        <>
          <p>
            Cada vez que alguien baja por un café decente, la oficina pierde
            foco. El instantáneo en la kitchenette no eleva a nadie. Montar una
            cafetería interna pide personal, proveedores y un horario que nunca
            cubre el turno largo.
          </p>
          <p>
            El vending para oficinas de Nexo pone{" "}
            <Link
              href="/cafe"
              className="text-fg underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              café de calidad
            </Link>{" "}
            y, si el flujo lo pide,{" "}
            <Link
              href="/snacks"
              className="text-fg underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              snacks curados
            </Link>{" "}
            donde el equipo ya está. Facilities no gestiona insumos ni
            mantenimiento. Un interlocutor, respuesta en menos de 24 horas.
          </p>
          <p>
            La modalidad más común es el{" "}
            <Link
              href="/comodato-maquinas-vending"
              className="text-fg underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              comodato
            </Link>
            : sin capex en la máquina, sin obras. Cobertura en Medellín,
            Envigado, Sabaneta, Itagüí, Bello y La Estrella.
          </p>
        </>
      }
      pointsEyebrow="Qué instalamos"
      pointsTitle={
        <>
          Dos líneas que
          <br />
          <span className="text-accent">calzan en una oficina.</span>
        </>
      }
      points={[
        {
          title: "Nexo Café",
          fit: "La pieza base de cualquier oficina",
          text: "Espresso, americano, cappuccino y el mix que acordemos. Vasos listos, menú estable, cero barista interno. Es la búsqueda que más se parece a un sí: café en la oficina, hoy.",
        },
        {
          title: "Nexo Snacks",
          fit: "Cuando el break room ya no alcanza",
          text: "Portafolio curado, no genérico. Rotamos según el consumo real. Complementa el café sin que RRHH arme un mini-market.",
        },
        {
          title: "Operación incluida",
          fit: "Facilities no se vuelve operador",
          text: "Instalación, reposición, limpieza y soporte los asume Nexo. La oficina aporta espacio interior y un punto eléctrico estable.",
        },
      ]}
      whyTitle={
        <>
          Lo que decide
          <br />
          <span className="text-accent">un gerente de oficina.</span>
        </>
      }
      why={[
        "Cero inversión en el equipo en comodato.",
        "El equipo deja de salir del edificio por un café decente.",
        "Imagen de espacio cuidado, no de kitchenette abandonada.",
        "Un solo proveedor para máquina, producto y soporte.",
        "Sin obras. Activación según disponibilidad del mes.",
        "Modelo flexible: comodato, suministros o subsidio corporativo.",
      ]}
      related={[
        {
          href: "/vending-para-gimnasios",
          label: "Vending para gimnasios",
          description:
            "Proteína post-entreno. El gym no opera. Comodato o revenue sharing.",
        },
        {
          href: "/vending-para-coworkings",
          label: "Vending para coworkings",
          description:
            "Café y snacks como amenidad. Cero operación para el operador.",
        },
        {
          href: "/vending-corporativo-medellin",
          label: "Vending corporativo en Medellín",
          description:
            "Las tres líneas, una operación, Valle de Aburrá.",
        },
        {
          href: "/cafe",
          label: "Máquina de café para empresas",
          description:
            "Nexo Café: bebidas, menú y cómo se instala en comodato.",
        },
        {
          href: "/comodato-maquinas-vending",
          label: "Máquina vending sin inversión",
          description:
            "Vending en comodato: no compras el equipo. Nexo opera el punto.",
        },
      ]}
      ctaEyebrow="Oficinas en Medellín"
      ctaTitle={
        <>
          Lleva Nexo
          <br />
          <span className="text-accent">a tu oficina.</span>
        </>
      }
      ctaNote="Preseleccionamos café y snacks. Te contactamos en menos de 24 horas."
    />
  );
}
