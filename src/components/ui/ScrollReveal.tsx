"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ScrollRevealTag = "div" | "li";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
  /**
   * Render as a valid HTML element. Use `as="li"` whenever the parent is a
   * `<ul>`/`<ol>` to avoid invalid markup like `<ul> > <div> > <li>` which
   * Lighthouse a11y flags and screen readers misread.
   */
  as?: ScrollRevealTag;
}

const directionOffset = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  as = "div",
}: ScrollRevealProps) {
  const offset = directionOffset[direction];
  const transition = {
    duration: 0.7,
    delay,
    ease: [0.19, 1, 0.22, 1] as const,
  };
  const initial = { opacity: 0, ...offset };
  const whileInView = { opacity: 1, x: 0, y: 0 };
  const viewport = { once, margin: "-80px" };

  if (as === "li") {
    return (
      <motion.li
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={transition}
        className={className}
      >
        {children}
      </motion.li>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}
