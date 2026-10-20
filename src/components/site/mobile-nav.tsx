"use client";

import { Button } from "@/components/ui/button";
import { WHATSAPP_DEFAULT_MESSAGE, businessInfo } from "@/lib/site-config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  items: NavItem[];
}

/**
 * MobileNav — único trecho client do header. Toggle do menu mobile com estado
 * local; fecha ao trocar de rota. Desktop usa nav estático no SiteHeader.
 */
export function MobileNav({ items }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Fecha o menu ao navegar (re-executa a cada mudança de rota).
  // biome-ignore lint/correctness/useExhaustiveDependencies: pathname é o gatilho intencional, mesmo sem ser lido no corpo
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const waUrl = buildWhatsAppUrl(businessInfo.phones.whatsappOfficial, WHATSAPP_DEFAULT_MESSAGE);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        className="flex size-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-foreground/80 transition-colors hover:text-foreground"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute inset-x-3 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-white/10 bg-background/95 p-2 shadow-2xl backdrop-blur-xl"
          >
            <nav className="flex flex-col">
              {items.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-white/5 text-foreground"
                        : "text-foreground/70 hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="mt-2 px-1 pb-1">
              <Button variant="glow" size="lg" className="w-full" asChild>
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-5" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
