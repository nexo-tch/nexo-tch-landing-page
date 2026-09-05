import type { Metadata } from "next";
import Link from "next/link";
import { VerticalIntentPage } from "@/components/seo/VerticalIntentPage";
import { gimnasiosFaqs } from "@/data/faqs";
import { DEFAULT_OG_IMAGE, absoluteUrl } from "@/lib/seo";

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Vending para gimnasios", path: "/vending-para-gimnasios" },
] as const;

export const metadata: Metadata = {
  title: "Vending para gimnasios en Medellín",
  description:
    "Vending de proteína para gimnasios en Medellín. Batidos post-entreno al instante. Comodato o revenue sharing. El gym no opera el servicio.",
  alternates: { canonical: "/vending-para-gimnasios" },
  openGraph: {
    title: "Vending para gimnasios en Medellín | Nexo Vending",
    description:
      "Nexo Protein: batidos y barras al instante. El gym no opera. Comodato o revenue sharing.",
    url: absoluteUrl("/vending-para-gimnasios"),
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vending para gimnasios en Medellín | Nexo Vending",
    description:
      "Proteína post-entreno. El gym no opera. Comodato o revenue sharing.",
    images: [DEFAULT_OG_IMAGE.url],
  },
};

export default function VendingParaGimnasiosPage() {
  return (
    <VerticalIntentPage
      crumbs={crumbs}
      serviceName="Vending para gimnasios en Medellín — Nexo Vending"
      serviceDescription="Máquinas vending de proteína para gimnasios en Medellín y el Valle de Aburrá. Post-entreno inmediato, sin barra. Comodato o revenue sharing."
      slug="/vending-para-gimnasios"
      serviceType="Vending de proteína para gimnasios"
      faqs={gimnasiosFaqs}
      eyebrow="Gimnasios · Valle de Aburrá"
      title={
        <>
          Vending para gimnasios.
          <br />
          <span className="font-extrabold text-accent">
            Proteína. El gym no opera.
          </span>
        </>
      }
      subtitle="Batidos y barras en la ventana post-entreno, sin barra ni espera. Nexo instala y opera. En sedes de alto flujo, el gym puede participar de las ventas."
      ctaHref="/contacto?linea=gimnasios"
      problemTitle={
        <>
          El socio ya entrenó.
          <br />
          <span className="text-accent">No va a hacer fila.</span>
        </>
      }
      problemBody={
        <>
          <p>
            La ventana post-entreno es corta. Si la proteína está en una barra
            con cola, o el socio tiene que salir a comprar, el gym pierde esa
            venta y parte de la experiencia. Montar un juice bar pide personal,
            inventario y un horario que no cubre todas las clases.
          </p>
          <p>
            <Link
              href="/proteinas"
              className="text-fg underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              Nexo Protein
            </Link>{" "}
            es vending de proteína para gimnasios: batidos y barras al instante
            en el punto de mayor flujo. El gym no opera el servicio. Nexo
            abastece, limpia y da soporte.
          </p>
          <p>
            En comodato no hay inversión en el equipo. En sedes de alto tráfico
            evaluamos revenue sharing: un porcentaje de las ventas del punto
            para el gimnasio. Cobertura en Medellín y el Valle de Aburrá.
          </p>
        </>
      }
      pointsEyebrow="El modelo"
      pointsTitle={
        <>
          Proteína que
          <br />
          <span className="text-accent">no carga al staff.</span>
        </>
      }
      points={[
        {
          title: "Nexo Protein",
          fit: "Sedes con rotación constante",
          text: "Whey y barras funcionales, mix acordado con cada gym. El socio paga y se va. Sin licuadora, sin turno de barra.",
        },
        {
          title: "Comodato",
          fit: "Cero capex en la máquina",
          text: "Nexo entrega e instala el equipo. El gym aporta espacio interior, punto eléctrico y acceso para reposición. Sin obras.",
        },
        {
          title: "Revenue sharing",
          fit: "Alto flujo, participación en ventas",
          text: "Cuando el tráfico lo sostiene, el gimnasio recibe un porcentaje de las ventas del punto. Lo definimos con números de la sede, no con una tarifa genérica.",
        },
      ]}
      whyTitle={
        <>
          Lo que mira
          <br />
          <span className="text-accent">un dueño de gym.</span>
        </>
      }
      why={[
        "Post-entreno inmediato, sin fila de barra.",
        "El staff no se vuelve operador de alimentos.",
        "Comodato: el gym no compra la máquina.",
        "Revenue sharing en sedes de alto flujo.",
        "Reposición programada según el consumo real.",
        "Un interlocutor. Respuesta en menos de 24 horas.",
      ]}
      related={[
        {
          href: "/proteinas",
          label: "Nexo Protein",
          description:
            "La línea: batidos, barras y cómo se configura el mix.",
        },
        {
          href: "/vending-para-oficinas",
          label: "Vending para oficinas",
          description:
            "Café y snacks para equipos que no salen del edificio.",
        },
        {
          href: "/vending-para-coworkings",
          label: "Vending para coworkings",
          description:
            "Amenidad de café y snacks, sin operación para el operador.",
        },
        {
          href: "/vending-corporativo-medellin",
          label: "Vending corporativo en Medellín",
          description:
            "Café, snacks y proteína bajo una sola operación.",
        },
        {
          href: "/comodato-maquinas-vending",
          label: "Máquina vending sin inversión",
          description:
            "Vending en comodato. En gyms de alto flujo también hay revenue sharing.",
        },
      ]}
      ctaEyebrow="Gimnasios en Medellín"
      ctaTitle={
        <>
          Lleva proteína Nexo
          <br />
          <span className="text-accent">a tu sede.</span>
        </>
      }
      ctaNote="Preseleccionamos Nexo Protein. Hablamos comodato o revenue sharing según el flujo."
    />
  );
}
