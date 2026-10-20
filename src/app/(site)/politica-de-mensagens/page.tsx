import { LegalProse } from "@/components/site/legal-prose";
import { Section } from "@/components/site/section";
import { formatCnpj } from "@/lib/format";
import { businessInfo, formatBrPhoneDisplay, formatLongDatePtBr } from "@/lib/site-config";
import { pageMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  pageTitle: "Política de Mensagens (WhatsApp)",
  description:
    "Como funciona o atendimento da MK Cell Store pelo WhatsApp oficial: canal verificado, opt-in, tipos de mensagem, frequência e como parar de receber a qualquer momento.",
  path: "/politica-de-mensagens",
});

const updatedAt = formatLongDatePtBr(businessInfo.legalUpdatedAt);
const officialPhone = formatBrPhoneDisplay(businessInfo.phones.whatsappOfficial);

export default function PoliticaDeMensagensPage() {
  return (
    <Section width="prose" className="pt-20 pb-20 sm:pt-24">
      <header className="mb-8 border-b border-white/8 pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Política de Mensagens (WhatsApp)
        </h1>
        <p className="mt-3 text-sm text-foreground/50">Última atualização: {updatedAt}</p>
      </header>

      <LegalProse>
        <p>
          A <strong>{businessInfo.legalName}</strong> ("MK Cell Store") atende seus clientes pela
          Plataforma de WhatsApp Business. Esta página explica como usamos esse canal, como você
          opta por receber mensagens e como pode parar a qualquer momento. Ela complementa a nossa{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>.
        </p>

        <h2>1. Nosso canal oficial</h2>
        <p>
          O nosso único número oficial de WhatsApp é o <strong>{officialPhone}</strong>. É por ele
          que prestamos atendimento, enviamos confirmações e tiramos dúvidas.
        </p>
        <p>
          <strong>Atenção a golpes:</strong> nunca pedimos senhas, códigos de verificação ou
          pagamentos por outros números se passando pela loja. Desconfie de contatos fora do número
          oficial e, na dúvida, confirme conosco pelos canais publicados neste site.
        </p>

        <h2>2. Como você opta por receber mensagens (opt-in)</h2>
        <p>Você passa a receber mensagens nossas quando:</p>
        <ul>
          <li>inicia uma conversa com a gente tocando no botão de WhatsApp do site;</li>
          <li>lê o nosso QR code e começa a conversa;</li>
          <li>
            informa o seu número e autoriza o contato durante um atendimento presencial ou online.
          </li>
        </ul>
        <p>
          Esse primeiro contato é o seu <strong>opt-in</strong> para as mensagens relacionadas ao
          seu atendimento. Para receber <strong>ofertas e novidades</strong> (mensagens
          promocionais), pedimos um consentimento separado e específico.
        </p>

        <h2>3. Tipos de mensagem que enviamos</h2>
        <ul>
          <li>
            <strong>Mensagens de atendimento e transacionais:</strong> respostas às suas dúvidas,
            orçamentos, confirmação de pedido, status de entrega e da assistência. Estão ligadas a
            uma solicitação sua.
          </li>
          <li>
            <strong>Mensagens promocionais:</strong> ofertas, lançamentos e campanhas. Só são
            enviadas se você consentir separadamente, e você pode cancelar quando quiser.
          </li>
        </ul>

        <h2>4. Frequência e horário</h2>
        <p>
          Enviamos mensagens na medida do necessário para o seu atendimento. Mensagens promocionais,
          quando autorizadas, têm frequência limitada e são enviadas, preferencialmente, em horário
          comercial, das 9h às 18h, de segunda a sábado.
        </p>

        <h2>5. Como parar de receber mensagens (opt-out)</h2>
        <p>A qualquer momento, você pode parar de receber mensagens:</p>
        <ul>
          <li>
            respondendo <strong>SAIR</strong> na própria conversa do WhatsApp; ou
          </li>
          <li>
            escrevendo para <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>.
          </li>
        </ul>
        <p>
          O cancelamento de mensagens promocionais não interrompe as mensagens essenciais de um
          atendimento ou compra em andamento que você tenha solicitado.
        </p>

        <h2>6. Quais dados usamos e o papel da Meta</h2>
        <p>
          Para conversar com você, usamos o seu número de WhatsApp, o seu nome (como aparece no app)
          e o conteúdo da conversa. O serviço é operado pela{" "}
          <strong>Meta Platforms Ireland Limited</strong>, que atua como operadora e pode tratar
          dados fora do Brasil. O tratamento dos seus dados segue a nossa{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link> e a{" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">
            Política de Privacidade do WhatsApp
          </a>
          .
        </p>

        <h2>7. Custos</h2>
        <p>
          A MK Cell Store não cobra nada para você falar com a gente no WhatsApp. Podem incidir
          custos de dados/internet da sua operadora, conforme o seu plano.
        </p>

        <h2>8. Responsável</h2>
        <p>
          O responsável por este canal é a {businessInfo.legalName}, CNPJ{" "}
          {formatCnpj(businessInfo.cnpj)}. Dúvidas ou solicitações:{" "}
          <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>.
        </p>
      </LegalProse>
    </Section>
  );
}
