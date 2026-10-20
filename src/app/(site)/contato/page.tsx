import { BusinessInfo } from "@/components/site/business-info";
import { ConsentCallout } from "@/components/site/consent-callout";
import { ContactCard } from "@/components/site/contact-card";
import { JsonLd } from "@/components/site/json-ld";
import { Reveal } from "@/components/site/reveal";
import { Section } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import { businessInfo, storeJsonLd } from "@/lib/site-config";
import { pageMetadata } from "@/lib/site-metadata";
import { MapPin } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  pageTitle: "Contato",
  description:
    "Endereço, horário de atendimento, e-mail e WhatsApp oficial da MK Cell Store em Jacarepaguá, Rio de Janeiro. Fale com a loja ou venha nos visitar.",
  path: "/contato",
});

function googleMapsUrl(): string {
  const a = businessInfo.address;
  const query = `${a.street}, ${a.number}, ${a.neighborhood}, ${a.city} - ${a.state}, ${a.zip}`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export default function ContatoPage() {
  return (
    <>
      <JsonLd data={storeJsonLd()} />

      <Section width="wide" className="pt-20 pb-8 sm:pt-24 sm:pb-10">
        <Reveal>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">Contato</p>
          <h1 className="mt-3 max-w-2xl text-balance text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Fale com a MK Cell Store
          </h1>
          <p className="mt-4 max-w-xl text-foreground/65">
            Atendemos pelo WhatsApp oficial e presencialmente na loja. Escolha o canal que preferir.
          </p>
        </Reveal>
      </Section>

      <Section width="wide" className="py-8 sm:py-10">
        <Reveal>
          <ContactCard />
        </Reveal>
        <Reveal delay={0.08}>
          <ConsentCallout className="mt-5" />
        </Reveal>
      </Section>

      <Section width="wide" className="py-8 sm:py-10">
        <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <BusinessInfo withHeading />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/8 bg-white/[0.03] p-6 sm:p-8">
              <div>
                <span className="flex size-11 items-center justify-center rounded-xl border border-white/8 bg-white/5 text-primary">
                  <MapPin className="size-5" />
                </span>
                <h2 className="mt-4 text-lg font-semibold text-foreground">Como chegar</h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  Estamos em Jacarepaguá, na Zona Oeste do Rio de Janeiro. Abra a rota no Google
                  Maps para traçar o caminho até a loja.
                </p>
              </div>
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/12 bg-white/5"
                asChild
              >
                <a href={googleMapsUrl()} target="_blank" rel="noopener noreferrer">
                  <MapPin className="size-5" />
                  Abrir no Google Maps
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <div className="pb-16 sm:pb-20" />
    </>
  );
}
