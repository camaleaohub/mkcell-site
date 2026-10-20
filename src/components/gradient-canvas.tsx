"use client";

import { motion } from "motion/react";

type Intensity = "intense" | "subtle";

interface GradientCanvasProps {
  intensity?: Intensity;
}

/**
 * GradientCanvas — fundo full-screen com 3 orbes drift em loop.
 * Renderizado via transform (GPU). Respeita prefers-reduced-motion via MotionConfig pai.
 *
 *  intense — entrada (home, login). Orbs visíveis, drift mais marcado.
 *  subtle  — shell protegido. Opacidade ~0.4, drift mais lento.
 */
export function GradientCanvas({ intensity = "intense" }: GradientCanvasProps) {
  const subtle = intensity === "subtle";
  const opacity = subtle ? 0.4 : 1;
  const speedFactor = subtle ? 1.6 : 1;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{ opacity, backgroundColor: "var(--bg-base)" }}
    >
      <motion.div
        className="absolute"
        style={{
          width: "60vmax",
          height: "60vmax",
          left: "-15vmax",
          top: "-20vmax",
          borderRadius: "50%",
          background: "radial-gradient(circle at 30% 30%, var(--orb-red), transparent 65%)",
          filter: "blur(80px)",
          willChange: "transform",
        }}
        animate={{
          x: [0, 80, -40, 0],
          y: [0, 40, 80, 0],
          rotate: [0, 60, 120, 180],
        }}
        transition={{
          duration: 30 * speedFactor,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: "55vmax",
          height: "55vmax",
          right: "-15vmax",
          bottom: "-15vmax",
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 50%, var(--orb-deep), transparent 60%)",
          filter: "blur(90px)",
          willChange: "transform",
        }}
        animate={{
          x: [0, -60, 60, 0],
          y: [0, -40, -80, 0],
          rotate: [0, -120, -240, -360],
        }}
        transition={{
          duration: 45 * speedFactor,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: "40vmax",
          height: "40vmax",
          left: "30%",
          top: "30%",
          borderRadius: "50%",
          background: "radial-gradient(circle at 50% 50%, var(--orb-red), transparent 70%)",
          filter: "blur(100px)",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.18, 0.92, 1],
          rotate: [0, 90, 180, 360],
        }}
        transition={{
          duration: 60 * speedFactor,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Vinheta sutil pra dar contorno + textura grain leve */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />
    </div>
  );
}
