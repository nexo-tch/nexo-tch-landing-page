"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Building2 } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

const machines = [
  { src: "/images/nexo-cafe-machine.png", alt: "Máquina Nexo Café", label: "Café", href: "/cafe" },
  { src: "/images/nexo-protein-machine.png", alt: "Máquina Nexo Protein", label: "Proteína", href: "/proteinas" },
  { src: "/images/nexo-snacks-machine.png", alt: "Máquina Nexo Snacks", label: "Snacks", href: "/snacks" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-nexo-black pt-20">
      <div className="bg-noise pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col items-start"
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-nexo-gold/40 bg-nexo-gold/10 px-4 py-1.5 text-sm font-medium text-nexo-gold">
                <Building2 className="h-3.5 w-3.5" />
                Ya en empresas de Medellín
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-nexo-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Máquinas vending premium{" "}
              <span className="text-gradient-gold">sin invertir un peso</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-lg text-lg leading-relaxed text-nexo-gray md:text-xl"
            >
              Café de especialidad, batidos de proteína y snacks curados.
              Instalamos en tu empresa en 48 horas, sin costo, sin obras.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-nexo-teal px-8 py-4 text-base font-semibold text-nexo-black transition-all duration-300 hover:bg-nexo-teal-hover hover:shadow-[0_0_30px_rgba(0,194,160,0.3)]"
              >
                Quiero mi máquina
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#como-funciona"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-nexo-gray/20 px-8 py-4 text-base font-medium text-nexo-gray transition-all duration-300 hover:border-nexo-gold/40 hover:text-nexo-white"
              >
                Ver cómo funciona
                <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-8 flex items-center gap-2 text-sm text-nexo-gray/70"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-nexo-teal" />
              <span>
                <strong className="text-nexo-white">50+ empresas</strong> en
                Medellín confían en Nexo
              </span>
            </motion.p>
          </motion.div>

          {/* 3 machines visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative flex items-end justify-center gap-3 sm:gap-5 lg:gap-4 xl:gap-6">
              <div className="pointer-events-none absolute inset-0 -inset-x-8 bg-gradient-to-t from-nexo-gold/8 via-nexo-gold/3 to-transparent rounded-3xl blur-2xl" />

              {machines.map((machine, i) => (
                <motion.div
                  key={machine.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + i * 0.15, duration: 0.6, ease: "easeOut" }}
                  className={`relative flex flex-col items-center ${
                    i === 0 ? "z-10" : "z-0"
                  }`}
                >
                  <Link href={machine.href} className="group relative flex flex-col items-center">
                    <div className={`relative ${
                      i === 0
                        ? "h-[340px] sm:h-[400px] lg:h-[450px] xl:h-[500px]"
                        : "h-[300px] sm:h-[360px] lg:h-[410px] xl:h-[460px]"
                    } w-auto`}>
                      <Image
                        src={machine.src}
                        alt={machine.alt}
                        width={400}
                        height={600}
                        className="h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out group-hover:scale-[1.06] group-hover:-translate-y-3 group-hover:drop-shadow-[0_30px_50px_rgba(194,139,83,0.2)]"
                        priority={i === 0}
                      />
                    </div>
                    <span className="mt-3 text-xs font-semibold tracking-wider uppercase text-nexo-gray/50 transition-colors duration-300 group-hover:text-nexo-gold">
                      {machine.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-nexo-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-nexo-teal/5 blur-[100px]" />
    </section>
  );
}
