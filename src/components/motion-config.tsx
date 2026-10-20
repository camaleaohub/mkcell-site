"use client";

import { MotionConfig as FramerMotionConfig } from "motion/react";
import type { ReactNode } from "react";

/**
 * MotionConfig — provider Framer Motion respeitando prefers-reduced-motion.
 * `reducedMotion="user"` zera durações/distancias quando o usuário pedir.
 */
export function MotionConfig({ children }: { children: ReactNode }) {
  return (
    <FramerMotionConfig reducedMotion="user" transition={{ ease: "easeOut" }}>
      {children}
    </FramerMotionConfig>
  );
}
