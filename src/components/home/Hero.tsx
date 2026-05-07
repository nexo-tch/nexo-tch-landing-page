"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Magnetic } from "@/components/ui/Magnetic";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] as const },
  },
};

const lines = [
  { label: "Café", href: "/cafe" },
  { label: "Proteína", href: "/proteinas" },
  { label: "Snacks", href: "/snacks" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 lg:pt-28">
      {/* Ambient warm glow — stationary, no animation */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-12 h-[640px] w-[640px] rounded-full bg-accent/8 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-accent-dim/6 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 pb-16 md:grid-cols-12 md:items-center md:gap-10 lg:gap-8 lg:px-8 lg:pb-24">
        {/* Asymmetric: text takes 7/12, image 5/12 */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="md:col-span-7"
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Nexo Vending · Medellín
            </span>
          </motion.div>

          {/* Typographic drama:
              - base weight 300 (airy, editorial) for the setup
              - 800 on the accent clause for a single punchy moment */}
          <motion.h1
            variants={item}
            className="display-xl font-light text-fg"
          >
            Productos de calidad,{" "}
            <span className="font-extrabold text-accent">
              al alcance de tu equipo.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:mt-8 md:text-lg lg:text-xl"
          >
            Café, proteína y snacks de calidad, disponibles cuando tu equipo
            los necesita, en su propio espacio. Nosotros operamos, mantenemos
            y abastecemos todo. Tu empresa solo disfruta.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-3 md:mt-10"
          >
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <Magnetic strength={0.35} maxTravelPx={10}>
                <Button href="/contacto" variant="accent" size="lg" withArrow>
                  Quiero mi máquina
                </Button>
              </Magnetic>
              <Button href="#productos" variant="ghost" size="lg">
                Ver productos
              </Button>
            </div>
            {/* Honest expectation-setter — no artificial scarcity, just a
                clear commitment on response time. */}
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-fg-subtle">
              Te contactamos en menos de 24 horas
            </p>
          </motion.div>

          {/* Trust signals — single line, hairline divided */}
          <motion.dl
            variants={item}
            className="mt-10 grid max-w-xl grid-cols-3 divide-x divide-border-soft border-t border-border-soft pt-6 md:mt-12"
          >
            {[
              { value: "$0", label: "Inversión" },
              { value: "24/7", label: "Operación" },
              { value: "Medellín", label: "Cobertura" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-1 ${i === 0 ? "pr-4" : "px-4"}`}
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-fg-subtle">
                  {stat.label}
                </dt>
                {/* Stats use weight 800 for a single dramatic moment
                    against the 300-weight H1 above. */}
                <dd className="font-display text-xl font-extrabold tracking-tight text-fg sm:text-2xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Single hero machine — Café as flagship */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.5,
            ease: [0.19, 1, 0.22, 1],
          }}
          className="relative md:col-span-5"
        >
          <div className="relative mx-auto flex max-w-md items-center justify-center md:mx-0 md:max-w-none">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -inset-x-12 rounded-[40px] bg-gradient-to-tr from-accent/10 via-transparent to-transparent blur-3xl"
            />
            <Image
              src="/images/nexo-cafe-machine.png"
              alt="Máquina Nexo Café para oficinas"
              width={520}
              height={780}
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 40vw, (min-width: 768px) 35vw, 70vw"
              className="relative h-[320px] w-auto object-contain drop-shadow-[0_30px_60px_oklch(0_0_0/0.5)] sm:h-[440px] md:h-[480px] lg:h-[620px]"
            />
          </div>

          {/* Product line links — bottom of image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-6 flex items-center justify-center gap-6 md:mt-8 lg:justify-start lg:pl-4"
          >
            {lines.map((line, i) => (
              <Link
                key={line.label}
                href={line.href}
                className="group flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-fg-subtle transition-colors duration-200 hover:text-accent"
              >
                <span className="text-accent/60 group-hover:text-accent">
                  0{i + 1}
                </span>
                {line.label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
