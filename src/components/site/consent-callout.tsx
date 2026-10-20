import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";
import Link from "next/link";

interface ConsentCalloutProps {
  className?: string;
}

/**
 * ConsentCallout — bloco de opt-in destacado (artefato crítico para o Meta).
 * Texto de consentimento em linguagem clara + links para as políticas. Garante
 * que o visitante entende o que acontece ao iniciar conversa no WhatsApp.
 */
export function ConsentCallout({ className }: ConsentCalloutProps) {
  return (
    <div
      className={cn("rounded-2xl border border-primary/25 bg-primary/[0.07] p-5 sm:p-6", className)}
    >
      <div className="flex gap-3.5">
        <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
          <ShieldCheck className="size-[18px]" />
        </span>
        <div className="space-y-2 text-sm leading-relaxed text-foreground/75">
          <p>
            Ao iniciar uma conversa no WhatsApp, você concorda em receber mensagens da MK Cell Store
            sobre o seu atendimento. Não enviamos spam. Para parar de receber, responda{" "}
            <strong className="font-semibold text-foreground">SAIR</strong> a qualquer momento.
          </p>
          <p className="text-foreground/60">
            Saiba mais na{" "}
            <Link
              href="/politica-de-mensagens"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Política de Mensagens
            </Link>{" "}
            e na{" "}
            <Link
              href="/politica-de-privacidade"
              className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
