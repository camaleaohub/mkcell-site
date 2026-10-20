import { cn } from "@/lib/utils";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/**
 * Reveal — entrada sutil on-load via CSS (tw-animate-css), Server Component.
 *
 * O conteúdo é VISÍVEL por padrão (opacity base 1): a animação é apenas
 * decorativa e roda no carregamento, sem depender de scroll, IntersectionObserver
 * ou JavaScript. Se a animação não rodar (reduced-motion, sem CSS de animação,
 * crawler), o conteúdo permanece visível. Isso garante que identidade jurídica,
 * consentimento e textos legais sempre apareçam — inclusive para crawlers e
 * revisores do Meta que não rolam a página.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  return (
    <div
      className={cn(
        "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:fill-mode-both motion-safe:duration-500 motion-safe:ease-out",
        className,
      )}
      style={
        delay
          ? ({
              animationDelay: `${Math.round(delay * 1000)}ms`,
            } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
