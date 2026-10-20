import { GlassPanel } from "@/components/glass-panel";
import { formatCnpj } from "@/lib/format";
import { businessInfo, formatBrPhoneDisplay, formatZip } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";

interface BusinessInfoProps {
  className?: string;
  /** Quando true, mostra também o título "Identidade do negócio". */
  withHeading?: boolean;
}

function Row({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3.5">
      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/8 bg-white/5 text-foreground/70">
        {icon}
      </span>
      <div className="min-w-0">
        <dt className="text-xs font-medium uppercase tracking-[0.12em] text-foreground/45">
          {label}
        </dt>
        <dd className="mt-0.5 text-sm text-foreground/85">{children}</dd>
      </div>
    </div>
  );
}

/**
 * BusinessInfo — identidade jurídica renderizada como TEXTO (crawlable), batendo
 * 1:1 com o cartão CNPJ que a verificação de Business Manager cruza. NAP + CNPJ.
 */
export function BusinessInfo({ className, withHeading = false }: BusinessInfoProps) {
  const { address } = businessInfo;

  return (
    <GlassPanel intensity="subtle" className={cn("p-6 sm:p-8", className)}>
      {withHeading ? (
        <h2 className="mb-6 text-lg font-semibold tracking-[-0.01em] text-foreground">
          Identidade do negócio
        </h2>
      ) : null}

      <dl className="grid gap-5 sm:grid-cols-2">
        <Row icon={<Building2 className="size-[18px]" />} label="Razão social">
          <span className="font-medium text-foreground">{businessInfo.legalName}</span>
          <br />
          CNPJ {formatCnpj(businessInfo.cnpj)}
        </Row>

        <Row icon={<MapPin className="size-[18px]" />} label="Endereço">
          {address.street}, {address.number}
          <br />
          {address.complement}
          <br />
          {address.neighborhood} — {address.city}/{address.state}
          <br />
          CEP {formatZip(address.zip)}
        </Row>

        <Row icon={<Clock className="size-[18px]" />} label="Horário de atendimento">
          {businessInfo.hours.map((h) => (
            <span key={h.days} className="block">
              {h.days}: {h.open} às {h.close}
            </span>
          ))}
        </Row>

        <Row icon={<Phone className="size-[18px]" />} label="Contato">
          <a
            href={`mailto:${businessInfo.email}`}
            className="inline-flex items-center gap-1.5 text-foreground/85 hover:text-foreground"
          >
            <Mail className="size-3.5" />
            {businessInfo.email}
          </a>
          <br />
          WhatsApp {formatBrPhoneDisplay(businessInfo.phones.whatsappOfficial)}
          <br />
          <span className="text-foreground/60">
            Adicional {formatBrPhoneDisplay(businessInfo.phones.whatsappSecondary)}
          </span>
        </Row>
      </dl>
    </GlassPanel>
  );
}
