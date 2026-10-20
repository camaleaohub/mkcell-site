import { GlassPanel } from "@/components/glass-panel";
import { Button } from "@/components/ui/button";
import { formatCnpj } from "@/lib/format";
import {
  WHATSAPP_DEFAULT_MESSAGE,
  WHATSAPP_QR_SRC,
  businessInfo,
  formatBrPhoneDisplay,
} from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, QrCode } from "lucide-react";

interface ContactCardProps {
  className?: string;
}

/**
 * ContactCard — número oficial do WhatsApp + QR code (método de opt-in
 * recomendado pelo Meta). QR servido como asset estático (CSP-safe), em card
 * branco para máxima leitura pela câmera.
 */
export function ContactCard({ className }: ContactCardProps) {
  const official = businessInfo.phones.whatsappOfficial;
  const waUrl = buildWhatsAppUrl(official, WHATSAPP_DEFAULT_MESSAGE);

  return (
    <GlassPanel glow intensity="normal" className={cn("p-6 sm:p-8", className)}>
      <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:gap-8">
        {/* QR em card branco — dark-on-light escaneia melhor */}
        <div className="shrink-0 rounded-2xl bg-white p-3 shadow-lg">
          {/* QR estático servido de `self` (CSP-safe); next/image traria pouco para um SVG fixo. */}
          <img
            src={WHATSAPP_QR_SRC}
            alt="QR code do WhatsApp oficial da MK Cell Store"
            width={150}
            height={150}
            className="size-[150px]"
          />
        </div>

        <div className="flex w-full flex-col items-center gap-3 text-center sm:items-start sm:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/70">
            <QrCode className="size-3.5" />
            Aponte a câmera para conversar
          </span>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/45">
              WhatsApp oficial
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-[-0.02em] text-foreground tabular-nums">
              {formatBrPhoneDisplay(official)}
            </p>
          </div>

          <Button variant="glow" size="lg" className="w-full sm:w-auto" asChild>
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" />
              Falar no WhatsApp
            </a>
          </Button>

          <p className="text-xs text-foreground/45">
            Atendimento oficial. CNPJ {formatCnpj(businessInfo.cnpj)}.
          </p>
        </div>
      </div>
    </GlassPanel>
  );
}
