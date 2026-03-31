"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

interface ProductHeroProps {
  badge: string;
  headline: ReactNode;
  subheadline: string;
  ctaText: string;
  ctaHref: string;
  machineImage: string;
  machineAlt: string;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  },
};

export function ProductHero({
  badge,
  headline,
  subheadline,
  ctaText,
  ctaHref,
  machineImage,
  machineAlt,
}: ProductHeroProps) {
  return (
    <section className="relative pt-28 pb-20 lg:pb-32 overflow-hidden bg-noise">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block self-start px-4 py-1.5 text-xs font-semibold tracking-wider uppercase text-nexo-gold border border-nexo-gold/30 rounded-full mb-6"
            >
              {badge}
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight mb-6"
            >
              {headline}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg lg:text-xl text-nexo-gray max-w-lg mb-8 leading-relaxed"
            >
              {subheadline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 bg-nexo-teal hover:bg-nexo-teal-hover text-nexo-black font-semibold rounded-xl px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-nexo-teal/20 hover:-translate-y-0.5 text-center"
              >
                {ctaText}
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-nexo-gray hover:text-nexo-white border border-nexo-gray/20 hover:border-nexo-gold/30 rounded-xl transition-all duration-300 text-center"
              >
                Cotiza sin compromiso
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative flex items-center justify-center"
          >
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-nexo-gold/5 via-transparent to-transparent rounded-3xl blur-2xl" />
            <Image
              src={machineImage}
              alt={machineAlt}
              width={450}
              height={650}
              className="relative h-[350px] sm:h-[420px] lg:h-[500px] xl:h-[550px] w-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
