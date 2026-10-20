import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface LegalProseProps {
  children: ReactNode;
  className?: string;
}

/**
 * LegalProse — wrapper tipográfico para páginas legais (server, crawlable).
 * Substitui @tailwindcss/typography com seletores de filho. max-w-2xl para
 * leitura confortável. Tokens CSS, sem hex.
 */
export function LegalProse({ children, className }: LegalProseProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-2xl text-[15px] leading-relaxed text-foreground/80",
        // Títulos de seção
        "[&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:scroll-mt-24 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:tracking-[-0.01em] [&_h2]:text-foreground",
        "[&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground",
        // Parágrafos
        "[&_p]:my-3.5",
        // Listas
        "[&_ul]:my-3.5 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5",
        "[&_ol]:my-3.5 [&_ol]:list-decimal [&_ol]:space-y-1.5 [&_ol]:pl-5",
        "[&_li]:pl-1 [&_li]:marker:text-foreground/40",
        // Ênfase e links
        "[&_strong]:font-semibold [&_strong]:text-foreground",
        "[&_a]:font-medium [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary/80",
        // Divisórias e citações de definição
        "[&_dt]:mt-4 [&_dt]:font-semibold [&_dt]:text-foreground [&_dd]:text-foreground/75",
        className,
      )}
    >
      {children}
    </div>
  );
}
