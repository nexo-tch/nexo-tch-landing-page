"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: string;
}) {
  return (
    <div className="border-b border-border-soft">
      <button
        type="button"
        onClick={onToggle}
        className="group flex w-full items-baseline gap-6 py-6 text-left tactile"
        aria-expanded={isOpen}
      >
        <span className="font-mono text-xs text-fg-subtle">{index}</span>
        <span className="flex-1 font-display text-lg font-medium text-fg transition-colors duration-200 group-hover:text-accent lg:text-xl">
          {question}
        </span>
        <Plus
          className={`h-5 w-5 shrink-0 text-fg-muted transition-transform duration-300 ${
            isOpen ? "rotate-45 text-accent" : ""
          }`}
          strokeWidth={1.75}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="ml-12 max-w-2xl pb-6 text-base leading-relaxed text-fg-muted">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeader
                index="07"
                eyebrow="Preguntas frecuentes"
                title={
                  <>
                    Todo lo que necesitas
                    <br />
                    <span className="text-accent">saber.</span>
                  </>
                }
                description="Si tu pregunta no está aquí, escríbenos por WhatsApp y te respondemos en minutos."
              />
            </div>
          </div>

          <ScrollReveal className="lg:col-span-7">
            <div className="border-t border-border-soft">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={faq.question}
                  index={String(i + 1).padStart(2, "0")}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
