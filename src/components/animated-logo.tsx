"use client";

import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type Size = "md" | "lg" | "xl";

interface AnimatedLogoProps {
  size?: Size;
  withHalo?: boolean;
  className?: string;
}

const SIZE_CLASS: Record<Size, string> = {
  md: "size-12",
  lg: "size-20",
  xl: "size-28",
};

const HALO_SIZE: Record<Size, string> = {
  md: "size-24",
  lg: "size-40",
  xl: "size-56",
};

/**
 * AnimatedLogo — Logo MKCELL com halo radial vermelho e breath subtle.
 * Halo + scale 6s loop. Sem dependência de currentColor para o halo (vermelho fixo).
 */
export function AnimatedLogo({ size = "xl", withHalo = true, className }: AnimatedLogoProps) {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {withHalo ? (
        <motion.div
          aria-hidden="true"
          className={cn("absolute rounded-full", HALO_SIZE[size])}
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklab, var(--primary) 60%, transparent) 0%, transparent 70%)",
            filter: "blur(28px)",
            willChange: "opacity, transform",
          }}
          animate={{
            opacity: [0.35, 0.65, 0.35],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ) : null}

      <motion.div
        className={cn("relative", SIZE_CLASS[size])}
        animate={{ scale: [1, 1.03, 1] }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      >
        <Logo
          variant="brand"
          className={cn(
            "drop-shadow-[0_4px_24px_color-mix(in_oklab,var(--primary)_45%,transparent)]",
            SIZE_CLASS[size],
          )}
        />
      </motion.div>
    </div>
  );
}
