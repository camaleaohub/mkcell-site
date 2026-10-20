import { BusinessInfo } from "@/components/site/business-info";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { WHATSAPP_DEFAULT_MESSAGE, businessInfo } from "@/lib/site-config";
import { pageMetadata } from "@/lib/site-metadata";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { BadgeCheck, HandHeart, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  pageTitle: "Sobre a loja",
  description:
    "Conheça a MK Cell Store, loja física de iPhones, smartphones e acessórios em Jacarepaguá, Rio de Janeiro. Atendimento humano, procedência e WhatsApp oficial.",
  path: "/sobre",
});

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Procedência",
    description: "Aparelhos e acessórios com origem verificável e garantia.",
  },
  {
    icon: HandHeart,
    title: "Atendimento humano",
    description: "Você fala com pessoas de verdade, sem robô e sem enrolação.",
  },
  {
    icon: MapPin,
    title: "Loja física com CNPJ",
    description: "Endereço fixo em Jacarepaguá e empresa formalmente constituída.",
  },
  {
    icon: BadgeCheck,
    title: "WhatsApp oficial",
    description: "Um único número oficial para tirar dúvidas e ser atendido com segurança.",
  },
];

export default function SobrePage() {
  const waUrl = buildWhatsAppUrl(businessInfo.phones.whatsappOfficial, WHATSAPP_DEFAULT_MESSAGE);

  return (
    <>
      <Section width="wide" className="pt-20 pb-10 sm:pt-24 sm:pb-12">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">Sobre nós</p>
          <h1 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Tecnologia com atendimento de bairro
          </h1>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="mt-6 max-w-2xl space-y-4 text-foreground/70">
            <p>
              A <strong className="font-semibold text-foreground">MK Cell Store</strong> é uma loja
              física em Jacarepaguá, na Zona Oeste do Rio de Janeiro. Nascemos para resolver o que o
              cliente precisa no dia a dia: um aparelho bom, um acessório certo e uma assistência de
              confiança, sempre com conversa clara.
            </p>
            <p>
              Trabalhamos com iPhones e smartphones novos e seminovos, acessórios e manutenção de
              aparelhos. Você pode vir até a loja ou falar com a gente pelo nosso WhatsApp oficial.
              O objetivo é simples: atendimento honesto e sem complicação.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section width="wide" className="py-10 sm:py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => (
            <Reveal key={value.title} delay={0.05 * i}>
              <div className="h-full rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-primary">
                  <value.icon className="size-5" />
                </span>
                <h2 className="mt-4 text-base font-semibold text-foreground">{value.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-foreground/60">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section width="wide" className="py-10 sm:py-14">
        <Reveal>
          <h2 className="mb-7 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
            Dados da empresa
          </h2>
        </Reveal>
        <Reveal delay={0.06}>
          <BusinessInfo />
        </Reveal>
      </Section>

      <Section width="wide" className="pb-20 pt-6 sm:pb-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/8 bg-white/[0.03] p-7 sm:flex-row sm:items-center sm:p-9">
            <div>
              <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground sm:text-2xl">
                Quer tirar uma dúvida?
              </h2>
              <p className="mt-1.5 text-foreground/60">
                Fale com a gente agora pelo WhatsApp oficial da loja.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button variant="glow" size="lg" className="w-full sm:w-auto" asChild>
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/12 bg-white/5 sm:w-auto"
                asChild
              >
                <Link href="/contato">Ver contato e endereço</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
