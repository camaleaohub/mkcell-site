import { AnimatedLogo } from "@/components/animated-logo";
import { BusinessInfo } from "@/components/site/business-info";
import { ConsentCallout } from "@/components/site/consent-callout";
import { ContactCard } from "@/components/site/contact-card";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { WHATSAPP_DEFAULT_MESSAGE, businessInfo, storeJsonLd } from "@/lib/site-config";
import { pageMetadata } from "@/lib/site-metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Smartphone, Store, Wrench } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  description:
    "MK Cell Store: iPhones, smartphones e acessórios em Jacarepaguá, Rio de Janeiro. Atendimento presencial e pelo WhatsApp oficial. Loja física com CNPJ.",
  path: "/",
});

const OFFERINGS = [
  {
    icon: Smartphone,
    title: "iPhones e smartphones",
    description: "Aparelhos novos e seminovos, com procedência e garantia.",
  },
  {
    icon: Store,
    title: "Acessórios",
    description: "Capas, películas, carregadores, fones e o que mais o seu aparelho precisar.",
  },
  {
    icon: Wrench,
    title: "Assistência e manutenção",
    description: "Avaliação, troca de peças e cuidado para o seu aparelho durar mais.",
  },
];

export default function HomePage() {
  const waUrl = buildWhatsAppUrl(businessInfo.phones.whatsappOfficial, WHATSAPP_DEFAULT_MESSAGE);

  return (
    <>
      <JsonLd data={storeJsonLd()} />

      {/* 1. Hero */}
      <Section as="div" width="wide" className="pt-20 pb-10 sm:pt-28 sm:pb-14">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <AnimatedLogo size="lg" />
          </Reveal>
          <Reveal delay={0.06} className="mt-7">
            <h1 className="text-balance text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl">
              MK Cell Store
            </h1>
          </Reveal>
          <Reveal delay={0.12} className="mt-4 max-w-xl">
            <p className="text-balance text-base text-foreground/65 sm:text-lg">
              iPhones, smartphones e acessórios em Jacarepaguá, Rio de Janeiro. Atendimento de gente
              de verdade, presencial e pelo WhatsApp oficial.
            </p>
          </Reveal>
          <Reveal
            delay={0.18}
            className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Button variant="glow" size="xl" className="w-full sm:w-auto" asChild>
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="w-full border-white/12 bg-white/5 sm:w-auto"
              asChild
            >
              <Link href="/contato">Nossa loja</Link>
            </Button>
          </Reveal>
        </div>
      </Section>

      {/* 2. O que vendemos / sobre breve */}
      <Section width="wide" className="py-12 sm:py-16">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
              Uma loja de bairro com atendimento de verdade
            </h2>
            <p className="mt-3 text-balance text-foreground/65">
              A MK Cell Store é uma loja física em Jacarepaguá. Trabalhamos com aparelhos,
              acessórios e assistência, e gostamos de resolver de forma simples e direta, no balcão
              ou pelo WhatsApp.
            </p>
          </div>
        </Reveal>

        <div className="mt-9 grid gap-4 sm:grid-cols-3">
          {OFFERINGS.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-primary">
                  <item.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 3. WhatsApp + consentimento (bloco crítico p/ o Meta) */}
      <Section id="whatsapp" width="wide" className="py-12 sm:py-16">
        <Reveal>
          <div className="mb-7 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
              Fale com a gente no WhatsApp
            </h2>
            <p className="mt-3 text-foreground/65">
              Este é o nosso canal oficial. Aponte a câmera para o QR code ou toque no botão para
              começar uma conversa.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <ContactCard />
        </Reveal>
        <Reveal delay={0.1}>
          <ConsentCallout className="mt-5" />
        </Reveal>
      </Section>

      {/* 4. Identidade do negócio */}
      <Section id="loja" width="wide" className="pt-12 pb-20 sm:pt-16 sm:pb-24">
        <Reveal>
          <div className="mb-7 max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
              Quem somos
            </h2>
            <p className="mt-3 text-foreground/65">
              Dados oficiais da empresa. As informações abaixo conferem com o nosso CNPJ.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <BusinessInfo />
        </Reveal>
      </Section>
    </>
  );
}
