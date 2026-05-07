"use client";

import { useRef, useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

interface MagneticProps {
  children: ReactNode;
  /** How much of the cursor delta is applied as translate (0..1). Subtle by default. */
  strength?: number;
  /** Max distance in px the element will travel on any axis. Hard-caps the effect. */
  maxTravelPx?: number;
  className?: string;
}

/**
 * Magnetic hover wrapper: children track the cursor with springed translate
 * while the pointer is within bounds, and snap back to origin on leave.
 *
 * Hard guards (all must be true to engage):
 *  - Input device is a fine pointer (desktop mouse/trackpad). Touch devices
 *    never trigger this, protecting iOS/Android from ghost movement.
 *  - User has not requested reduced motion.
 */
export function Magnetic({
  children,
  strength = 0.28,
  maxTravelPx = 8,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setIsFinePointer(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Low mass + high stiffness → responsive feel without rubber-band overshoot.
  const springConfig = { stiffness: 180, damping: 18, mass: 0.35 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const active = isFinePointer && !prefersReducedMotion;

  const onMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (event.clientX - cx) * strength;
    const dy = (event.clientY - cy) * strength;
    // Hard clamp so the effect is felt, never distracting.
    x.set(Math.max(-maxTravelPx, Math.min(maxTravelPx, dx)));
    y.set(Math.max(-maxTravelPx, Math.min(maxTravelPx, dy)));
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (!active) {
    return <div className={`inline-block ${className}`}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={reset}
      onBlur={reset}
      style={{ x: springX, y: springY }}
      className={`inline-block will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}
