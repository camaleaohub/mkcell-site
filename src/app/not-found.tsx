import { GradientCanvas } from "@/components/gradient-canvas";
import { Section } from "@/components/site/section";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Página não encontrada · MK Cell Store" },
};

/**
 * NotFound — 404 com o visual do site (vira `404.html` no export). Fica fora do
 * route group `(site)`, por isso repete aqui o fundo, o header e o footer.
 */
export default function NotFound() {
  return (
    <>
      <GradientCanvas intensity="subtle" />
      <div className="relative flex min-h-dvh flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Section width="narrow" className="pt-24 pb-20 text-center sm:pt-32 sm:pb-28">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">Erro 404</p>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
              Página não encontrada
            </h1>
            <p className="mx-auto mt-4 max-w-md text-foreground/65">
              O endereço pode ter mudado ou não existe mais.
            </p>
            <Button variant="glow" size="lg" className="mt-8" asChild>
              <Link href="/">Voltar ao início</Link>
            </Button>
          </Section>
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
