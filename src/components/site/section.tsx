import { cn } from "@/lib/utils";
import type { ElementType, ReactNode } from "react";

type Width = "default" | "narrow" | "prose" | "wide";

const MAX_W: Record<Width, string> = {
  default: "max-w-5xl",
  narrow: "max-w-3xl",
  prose: "max-w-2xl",
  wide: "max-w-6xl",
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  width?: Width;
  as?: ElementType;
  id?: string;
}

/**
 * Section — primitivo de layout do site público. Largura máxima + ritmo
 * vertical consistente. Mantém o conteúdo legível e centralizado.
 */
export function Section({
  children,
  className,
  innerClassName,
  width = "default",
  as: Tag = "section",
  id,
}: SectionProps) {
  return (
    <Tag id={id} className={cn("w-full px-5 py-16 sm:px-6 sm:py-20", className)}>
      <div className={cn("mx-auto w-full", MAX_W[width], innerClassName)}>{children}</div>
    </Tag>
  );
}
