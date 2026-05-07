"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";
import type { ReactNode } from "react";

interface ProductHeroProps {
  badge: string;
  index?: string;
  headline: ReactNode;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  machineImage: string;
  machineAlt: string;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const },
  },
};

export function ProductHero({
  badge,
  index = "01",
  headline,
  subheadline,
  ctaText,
  ctaHref,
  machineImage,
  machineAlt,
}: ProductHeroProps) {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-12 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-20 lg:px-8 lg:pb-28">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12 md:items-center md:gap-10 lg:gap-12">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="md:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-xs text-accent">({index})</span>
              <span className="h-px w-10 bg-accent/60" />
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                {badge}
              </span>
            </motion.div>

            {/* Font-light base gives the hero a pull-quote feel;
                per-page accent clauses bring the 700/800 drama. */}
            <motion.h1
              variants={fadeUp}
              className="display-xl mt-6 font-light text-fg md:mt-8"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:mt-8 md:text-lg lg:text-xl"
            >
              {subheadline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3 md:mt-10 md:gap-4"
            >
              <Magnetic strength={0.35} maxTravelPx={10}>
                <Button href={ctaHref} variant="accent" size="lg" withArrow>
                  {ctaText}
                </Button>
              </Magnetic>
              <Button href="/contacto" variant="ghost" size="lg">
                Cotiza sin compromiso
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.4,
              ease: [0.19, 1, 0.22, 1],
            }}
            className="relative flex items-center justify-center md:col-span-5"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -inset-x-12 rounded-[40px] bg-gradient-to-tr from-accent/10 via-transparent to-transparent blur-3xl"
            />
            {/* Slot reservado vía inline style con aspect-ratio matching el
                archivo source (577/1024). Aplica antes del CSS chunk de
                Tailwind y previene el slot 308×7869 que Lighthouse detecta
                en wrappers que solo usan clases utilitarias. */}
            <div
              className="relative"
              style={{
                aspectRatio: "577 / 1024",
                width: "clamp(180px, 35vw, 413px)",
              }}
            >
              <Image
                src={machineImage}
                alt={machineAlt}
                fill
                priority
                fetchPriority="high"
                sizes="(min-width: 1024px) 413px, (min-width: 768px) 320px, (min-width: 640px) 293px, 213px"
                className="object-contain drop-shadow-[0_30px_60px_oklch(0_0_0/0.5)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
