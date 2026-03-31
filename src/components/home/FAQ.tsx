"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "¿Cuánto cuesta instalar una máquina Nexo?",
    answer:
      "Cero. La instalación, la máquina y el mantenimiento no tienen costo para tu empresa. Nexo opera bajo un modelo de comodato donde nosotros invertimos en el equipo y tú solo disfrutas del servicio.",
  },
  {
    question: "¿Qué incluye el mantenimiento?",
    answer:
      "Todo. Nexo se encarga del abastecimiento de insumos, limpieza técnica, mantenimiento preventivo y correctivo, y monitoreo remoto de la máquina. Si algo falla, nuestro equipo responde en menos de 24 horas.",
  },
  {
    question: "¿Hay algún compromiso o contrato a largo plazo?",
    answer:
      "No exigimos contratos extensos ni cláusulas de permanencia complicadas. Creemos que si el servicio es bueno, te quedas porque quieres, no porque debes. Hablemos de los términos que funcionen para tu empresa.",
  },
  {
    question: "¿Cuánto tarda la instalación?",
    answer:
      "48 horas desde que confirmamos. No necesitamos obras ni infraestructura especial. Solo un espacio con toma eléctrica y acceso a agua (para las máquinas de café). Llegamos, instalamos y configuramos todo.",
  },
  {
    question: "¿Qué productos ofrecen las máquinas?",
    answer:
      "Depende de la línea: Nexo Café ofrece 8 bebidas calientes de especialidad (espresso, americano, cappuccino, chocolate y más). Nexo Protein tiene batidos de proteína post-entrenamiento. Nexo Snacks ofrece una selección curada de snacks premium.",
  },
  {
    question: "¿En qué zonas de Medellín tienen cobertura?",
    answer:
      "Actualmente operamos en todo el Área Metropolitana del Valle de Aburrá: Medellín, Envigado, Sabaneta, Itagüí, Bello y La Estrella. Si estás en otra zona, contáctanos — estamos en expansión.",
  },
  {
    question: "¿Cómo funciona el modelo de comodato?",
    answer:
      "Es simple: Nexo entrega la máquina en comodato (préstamo de uso) a tu empresa. Nosotros cubrimos la inversión del equipo, la instalación, el abastecimiento y el mantenimiento. Tu empresa no paga por la máquina ni por el servicio técnico. Los usuarios pagan por cada consumo a un precio accesible.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-nexo-gray/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-nexo-gold"
        aria-expanded={isOpen}
      >
        <span className="font-display text-base font-semibold text-nexo-white sm:text-lg">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-nexo-gold transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-base leading-relaxed text-nexo-gray/70">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="relative bg-mesh-gradient py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal>
          <p className="mb-4 text-center text-sm font-medium uppercase tracking-widest text-nexo-gold">
            Preguntas frecuentes
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="mx-auto max-w-2xl text-center font-display text-3xl font-bold leading-tight text-nexo-white sm:text-4xl lg:text-5xl">
            Todo lo que necesitas saber
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-12">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
