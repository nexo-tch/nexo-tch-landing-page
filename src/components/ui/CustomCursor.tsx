"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * Desktop-only dot-follower cursor.
 *
 * Intentionally subtle:
 *  - 8px resting dot, expands to 36px ring over interactive elements.
 *  - Never hides the native cursor (so UX degrades gracefully if JS fails).
 *  - Skipped entirely on coarse pointers (touch) and when reduced-motion is on.
 */
export function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hoveringInteractive, setHoveringInteractive] = useState(false);
  const [visible, setVisible] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  const x = useSpring(rawX, { stiffness: 600, damping: 40, mass: 0.25 });
  const y = useSpring(rawY, { stiffness: 600, damping: 40, mass: 0.25 });

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setIsFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const active = mounted && isFinePointer && !prefersReducedMotion;

  useEffect(() => {
    if (!active) return;

    // Elements that should trigger the ring state. The check is closest()
    // because targets are often deep text/icon nodes inside anchors/buttons.
    const interactiveSelector = 'a, button, [role="button"], input, textarea, summary, label';

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement | null;
      const isInteractive = !!target?.closest?.(interactiveSelector);
      setHoveringInteractive(isInteractive);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [active, rawX, rawY, visible]);

  if (!active) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] hidden lg:block"
      style={{
        x,
        y,
        // Translate by -50% so the dot is centered on the actual cursor tip.
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
      }}
      transition={{ opacity: { duration: 0.15 } }}
    >
      {/* Container animates size only. Two stacked layers cross-fade to
          swap between "dot" and "ring" without ever animating
          backgroundColor between a color and "transparent" (which Framer
          Motion cannot interpolate — the non-animatable value warning). */}
      <motion.div
        animate={{
          width: hoveringInteractive ? 36 : 8,
          height: hoveringInteractive ? 36 : 8,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28 }}
        style={{ mixBlendMode: "difference" }}
        className="relative"
      >
        {/* Fill layer (dot state) */}
        <motion.span
          aria-hidden="true"
          animate={{ opacity: hoveringInteractive ? 0 : 1 }}
          transition={{ duration: 0.18 }}
          style={{ backgroundColor: "var(--color-accent)" }}
          className="absolute inset-0 rounded-full"
        />
        {/* Ring layer (hover state) */}
        <motion.span
          aria-hidden="true"
          animate={{ opacity: hoveringInteractive ? 1 : 0 }}
          transition={{ duration: 0.18 }}
          style={{
            borderColor: "var(--color-accent)",
            borderWidth: 1.5,
            borderStyle: "solid",
          }}
          className="absolute inset-0 rounded-full"
        />
      </motion.div>
    </motion.div>
  );
}
