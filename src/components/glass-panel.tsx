import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type Intensity = "subtle" | "normal" | "strong";

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  intensity?: Intensity;
}

const INTENSITY_CLASS: Record<Intensity, string> = {
  subtle: "glass-surface bg-white/[0.04]",
  normal: "glass-surface",
  strong: "glass-surface-strong",
};

/**
 * GlassPanel — superfície fosca com border luminoso (mask trick) e sombra.
 * Substitui Card nos contextos premium. Card original permanece para tabelas.
 */
export function GlassPanel({
  className,
  glow = false,
  intensity = "normal",
  ...props
}: GlassPanelProps) {
  return (
    <div
      data-slot="glass-panel"
      className={cn(
        "relative rounded-2xl border border-white/8 text-foreground",
        "glass-border",
        INTENSITY_CLASS[intensity],
        glow ? "glow-accent" : "glow-soft",
        className,
      )}
      {...props}
    />
  );
}
