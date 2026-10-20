import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/site/mobile-nav";
import { Button } from "@/components/ui/button";
import { WHATSAPP_DEFAULT_MESSAGE, businessInfo } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

export const SITE_NAV = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/contato", label: "Contato" },
] as const;

/**
 * SiteHeader — barra sticky glass do site público. Server component; apenas o
 * menu mobile (MobileNav) é client. Logo -> /, nav, e CTA de WhatsApp.
 */
export function SiteHeader() {
  const waUrl = buildWhatsAppUrl(businessInfo.phones.whatsappOfficial, WHATSAPP_DEFAULT_MESSAGE);

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-background/70 backdrop-blur-xl">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          <Logo className="size-8" />
          <span className="text-lg font-semibold tracking-[-0.02em] text-foreground">
            MK Cell Store
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {SITE_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="glow" size="default" className="hidden md:inline-flex" asChild>
            <a href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </Button>
          <MobileNav items={[...SITE_NAV]} />
        </div>
      </div>
    </header>
  );
}
