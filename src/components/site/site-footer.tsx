import { Logo } from "@/components/logo";
import { formatCnpj } from "@/lib/format";
import { businessInfo, formatBrPhoneDisplay } from "@/lib/site-config";
import { Lock } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
];

const LEGAL_LINKS = [
  { href: "/politica-de-privacidade", label: "Política de Privacidade" },
  { href: "/politica-de-mensagens", label: "Política de Mensagens" },
  { href: "/termos-de-uso", label: "Termos de Uso" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/45">
        {title}
      </h3>
      <ul className="mt-3.5 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-foreground/65 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * SiteFooter — rodapé compartilhado: marca, navegação, links legais, contato e
 * a entrada discreta "Área da equipe", que leva ao sistema interno da loja
 * (`businessInfo.teamLoginUrl`, fora deste site). CNPJ + razão social visíveis.
 */
export function SiteFooter() {
  const { address } = businessInfo;

  return (
    <footer className="border-t border-white/8 bg-background/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <Logo className="size-7" />
              <span className="text-base font-semibold tracking-[-0.02em] text-foreground">
                MK Cell Store
              </span>
            </Link>
            <p className="mt-3.5 max-w-xs text-sm leading-relaxed text-foreground/55">
              iPhones, smartphones e acessórios em Jacarepaguá, Rio de Janeiro. Atendimento
              presencial e pelo WhatsApp oficial.
            </p>
            <p className="mt-4 text-xs text-foreground/40">
              {businessInfo.legalName}
              <br />
              CNPJ {formatCnpj(businessInfo.cnpj)}
            </p>
          </div>

          <Column title="Navegação" links={NAV_LINKS} />
          <Column title="Legal" links={LEGAL_LINKS} />

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/45">
              Contato
            </h3>
            <ul className="mt-3.5 space-y-2.5 text-sm text-foreground/65">
              <li>
                {address.street}, {address.number}
                <br />
                {address.neighborhood} — {address.city}/{address.state}
              </li>
              <li>
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="transition-colors hover:text-foreground"
                >
                  {businessInfo.email}
                </a>
              </li>
              <li>WhatsApp {formatBrPhoneDisplay(businessInfo.phones.whatsappOfficial)}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 sm:flex-row">
          <p className="text-xs text-foreground/40">
            © 2026 {businessInfo.legalName}. Todos os direitos reservados.
          </p>
          {businessInfo.teamLoginUrl ? (
            <a
              href={businessInfo.teamLoginUrl}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground/45 transition-colors hover:text-foreground/80"
            >
              <Lock className="size-3.5" />
              Área da equipe
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
