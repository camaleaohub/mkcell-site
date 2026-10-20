import { GradientCanvas } from "@/components/gradient-canvas";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import type { Metadata } from "next";
import type { ReactNode } from "react";

/**
 * SiteLayout — shell do site institucional público.
 *
 * Sobrescreve o `robots: { index:false }` global do layout raiz para este
 * subtree: o Next mescla top-down e o segmento mais profundo vence. Resultado:
 * `/`, `/sobre`, etc. saem `index,follow`; o que ficar fora do grupo segue noindex.
 * GradientCanvas de fundo, com header + footer.
 */
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GradientCanvas intensity="subtle" />
      <div className="relative flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </div>
    </>
  );
}
