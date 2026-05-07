"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Route transition template. Next.js remounts this on every navigation
 * (unlike layout.tsx which persists), which is exactly what we need so
 * the enter animation plays cleanly between routes.
 *
 * Animation: subtle "page rises into place" — 16px lift + fade, 420ms
 * with the same ease curve used globally. Keeps the UI calm; never
 * feels like a transition you have to wait for.
 *
 * Reduced motion: we still do a 1-frame opacity swap so the route
 * change feels intentional, but skip the lift entirely.
 */
export default function Template({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  const initial = prefersReducedMotion
    ? { opacity: 0 }
    : { opacity: 0, y: 16 };
  const animate = prefersReducedMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={{
        duration: prefersReducedMotion ? 0.12 : 0.42,
        ease: [0.19, 1, 0.22, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
