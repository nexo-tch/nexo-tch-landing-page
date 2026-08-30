import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { SocialProof } from "@/components/home/SocialProof";
import { Problem } from "@/components/home/Problem";
import { Products } from "@/components/home/Products";
import { Benefits } from "@/components/home/Benefits";
import { CommercialModel } from "@/components/home/CommercialModel";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Evidence } from "@/components/home/Evidence";
import { FAQ } from "@/components/home/FAQ";
import { FAQSchema } from "@/components/home/FAQSchema";
import { CTAFinal } from "@/components/home/CTAFinal";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  DEFAULT_OG_IMAGE,
  absoluteUrl,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/seo";

export const metadata: Metadata = {
  title: {
    absolute:
      "Nexo Vending — Máquinas de café, proteína y snacks para empresas | Medellín",
  },
  description:
    "Máquinas vending de café, proteína y snacks para oficinas y gimnasios en Medellín. Sin inversión: Nexo instala, opera y abastece. Solicita tu máquina.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nexo Vending — Máquinas vending para empresas en Medellín",
    description:
      "Café, proteína y snacks en tu espacio. Sin costo de instalación. Operación y mantenimiento incluidos.",
    url: absoluteUrl("/"),
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Inicio", path: "/" }])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Vending corporativo Nexo",
          description:
            "Máquinas vending de café, proteína y snacks para empresas en Medellín y el Valle de Aburrá. Instalación, operación, abastecimiento y mantenimiento incluidos.",
          slug: "/",
          serviceType: "Vending corporativo B2B",
        })}
      />
      <FAQSchema />
      <Hero />
      <SocialProof />
      <Problem />
      <Products />
      <Benefits />
      <CommercialModel />
      <HowItWorks />
      <Evidence />
      <FAQ />
      <CTAFinal />
    </>
  );
}
