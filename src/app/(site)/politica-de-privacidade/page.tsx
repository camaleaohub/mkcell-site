import { LegalProse } from "@/components/site/legal-prose";
import { Section } from "@/components/site/section";
import { formatCnpj } from "@/lib/format";
import {
  businessInfo,
  formatBrPhoneDisplay,
  formatFullAddress,
  formatLongDatePtBr,
} from "@/lib/site-config";
import { pageMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  pageTitle: "Política de Privacidade",
  description:
    "Como a MK Cell Store coleta, usa, compartilha e protege seus dados pessoais, em conformidade com a LGPD. Inclui o papel do WhatsApp/Meta como operador e seus direitos como titular.",
  path: "/politica-de-privacidade",
});

const updatedAt = formatLongDatePtBr(businessInfo.legalUpdatedAt);
const cnpj = formatCnpj(businessInfo.cnpj);

export default function PoliticaDePrivacidadePage() {
  return (
    <Section width="prose" className="pt-20 pb-20 sm:pt-24">
      <header className="mb-8 border-b border-white/8 pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Política de Privacidade
        </h1>
        <p className="mt-3 text-sm text-foreground/50">Última atualização: {updatedAt}</p>
      </header>

      <LegalProse>
        <p>
          Esta Política de Privacidade explica como a <strong>{businessInfo.legalName}</strong> ("MK
          Cell Store", "nós") coleta, usa, compartilha e protege os seus dados pessoais, em
          conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados Pessoais — LGPD). Ao
          entrar em contato com a gente ou usar nosso site, você concorda com as práticas descritas
          aqui.
        </p>

        <h2>1. Quem é o controlador dos seus dados</h2>
        <p>O controlador responsável pelo tratamento dos seus dados pessoais é:</p>
        <ul>
          <li>
            <strong>Razão social:</strong> {businessInfo.legalName}
          </li>
          <li>
            <strong>CNPJ:</strong> {cnpj}
          </li>
          <li>
            <strong>Endereço:</strong> {formatFullAddress()}
          </li>
          <li>
            <strong>E-mail:</strong>{" "}
            <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
          </li>
        </ul>
        <p>
          <strong>Encarregado pelo Tratamento de Dados (DPO):</strong> você pode falar com o nosso
          encarregado pelo e-mail <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>,
          colocando "LGPD" no assunto.
        </p>

        <h2>2. Quais dados coletamos</h2>
        <p>Coletamos apenas o necessário para atender você bem:</p>
        <ul>
          <li>
            <strong>Dados de contato e identificação:</strong> nome, telefone/WhatsApp e e-mail,
            quando você fala com a gente.
          </li>
          <li>
            <strong>Dados de atendimento e compra:</strong> informações sobre o aparelho ou serviço
            de interesse, histórico da conversa, e, quando há compra, dados de entrega e de
            pagamento processados pelos nossos parceiros.
          </li>
          <li>
            <strong>Dados de navegação mínimos:</strong> este site institucional não usa cookies de
            rastreamento nem ferramentas de publicidade. Eventuais registros técnicos são limitados
            ao funcionamento e à segurança do site.
          </li>
        </ul>
        <p>
          Não coletamos intencionalmente dados pessoais sensíveis (como saúde, biometria ou
          convicções). Pedimos que você não os envie pelos nossos canais.
        </p>

        <h2>3. Para que usamos seus dados e com qual base legal</h2>
        <p>
          Tratamos seus dados para finalidades específicas, sempre amparados em uma base legal da
          LGPD (art. 7º):
        </p>
        <ul>
          <li>
            <strong>Atender e responder você</strong> pelo WhatsApp, e-mail ou presencialmente —
            base legal: execução de procedimentos preliminares e do contrato a seu pedido (art. 7º,
            V) e legítimo interesse (art. 7º, IX).
          </li>
          <li>
            <strong>Concluir vendas, entregas e a assistência</strong> de aparelhos — base legal:
            execução de contrato (art. 7º, V).
          </li>
          <li>
            <strong>Cumprir obrigações legais e fiscais</strong> — base legal: obrigação legal ou
            regulatória (art. 7º, II).
          </li>
          <li>
            <strong>Enviar mensagens promocionais</strong> (ofertas e novidades) — somente com o seu{" "}
            <strong>consentimento</strong> (art. 7º, I), que você pode retirar a qualquer momento.
          </li>
          <li>
            <strong>Prevenir fraudes e garantir a segurança</strong> — base legal: legítimo
            interesse (art. 7º, IX).
          </li>
        </ul>

        <h2>4. WhatsApp e Meta</h2>
        <p>
          Nosso atendimento usa a Plataforma de WhatsApp Business, operada pela{" "}
          <strong>Meta Platforms Ireland Limited</strong> ("Meta"). Quando você conversa com a gente
          pelo WhatsApp, a Meta atua como <strong>operadora</strong> de dados em nosso nome para
          viabilizar a troca de mensagens, e também trata dados conforme as próprias políticas dela.
          Recomendamos a leitura da{" "}
          <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noreferrer">
            Política de Privacidade do WhatsApp
          </a>
          . O uso do canal oficial, os tipos de mensagem e as regras de opt-in e opt-out estão
          detalhados na nossa <Link href="/politica-de-mensagens">Política de Mensagens</Link>.
        </p>

        <h2>5. Consentimento, opt-in e opt-out</h2>
        <p>
          Quando você inicia uma conversa no nosso WhatsApp (tocando no botão do site ou lendo o QR
          code), entendemos isso como uma manifestação para receber as mensagens relativas ao seu
          atendimento (<strong>opt-in</strong>). Mensagens promocionais só são enviadas com um
          consentimento separado e específico.
        </p>
        <p>
          Você pode parar de receber mensagens a qualquer momento respondendo <strong>SAIR</strong>{" "}
          na conversa, ou solicitando pelo e-mail{" "}
          <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>. Detalhes na{" "}
          <Link href="/politica-de-mensagens">Política de Mensagens</Link>.
        </p>

        <h2>6. Com quem compartilhamos seus dados</h2>
        <p>
          Não vendemos os seus dados pessoais. Compartilhamos apenas o necessário, com parceiros que
          atuam sob nossa orientação e com obrigações de segurança e confidencialidade:
        </p>
        <ul>
          <li>
            <strong>Meta (WhatsApp Business Platform):</strong> para viabilizar o atendimento por
            mensagem.
          </li>
          <li>
            <strong>Provedores de pagamento:</strong> para processar transações, quando houver
            compra.
          </li>
          <li>
            <strong>Logística e entrega:</strong> nossa equipe de entrega (motoboy) recebe os dados
            necessários para levar o seu pedido.
          </li>
          <li>
            <strong>Provedor de e-mail (Brevo):</strong> para envio de comunicações transacionais e,
            quando autorizado, informativas.
          </li>
          <li>
            <strong>Autoridades públicas:</strong> quando exigido por lei ou ordem judicial.
          </li>
        </ul>

        <h2>7. Cookies</h2>
        <p>
          Este site institucional{" "}
          <strong>não utiliza cookies de rastreamento, de análise ou de publicidade</strong>. Não há
          perfilamento de visitantes. Caso isso mude no futuro, esta política será atualizada e,
          quando exigido, pediremos o seu consentimento.
        </p>

        <h2>8. Por quanto tempo guardamos seus dados</h2>
        <p>
          Mantemos os seus dados apenas pelo tempo necessário às finalidades acima e ao cumprimento
          de obrigações legais (por exemplo, prazos fiscais e de garantia). Encerradas as
          finalidades, os dados são eliminados ou anonimizados, salvo hipóteses de guarda permitidas
          pela LGPD (art. 16).
        </p>

        <h2>9. Seus direitos como titular</h2>
        <p>A LGPD (art. 18) garante a você, a qualquer momento e gratuitamente, os direitos de:</p>
        <ul>
          <li>confirmar a existência de tratamento e acessar os seus dados;</li>
          <li>corrigir dados incompletos, inexatos ou desatualizados;</li>
          <li>
            solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em
            desconformidade;
          </li>
          <li>solicitar a portabilidade dos dados, nos termos da regulação;</li>
          <li>ser informado sobre com quem compartilhamos seus dados e revogar o consentimento;</li>
          <li>opor-se a tratamentos e solicitar revisão de decisões automatizadas, se houver.</li>
        </ul>
        <p>
          Para exercer qualquer direito, escreva para{" "}
          <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>. Podemos pedir
          informações para confirmar a sua identidade antes de atender ao pedido. Você também pode
          peticionar à Autoridade Nacional de Proteção de Dados (ANPD).
        </p>

        <h2>10. Como protegemos seus dados</h2>
        <p>
          Adotamos medidas técnicas e administrativas para proteger os seus dados contra acessos não
          autorizados, perda ou alteração, como controle de acesso, criptografia em sistemas
          sensíveis e registro de atividades. Nenhum sistema é 100% imune, mas trabalhamos
          continuamente para reduzir riscos e, em caso de incidente relevante, comunicaremos os
          titulares e a ANPD conforme a lei.
        </p>

        <h2>11. Transferência internacional de dados</h2>
        <p>
          Alguns parceiros, como a Meta (WhatsApp), podem tratar dados em servidores fora do Brasil.
          Essas transferências internacionais ocorrem com amparo na LGPD (art. 33), notadamente para
          a execução do atendimento solicitado por você e mediante garantias contratuais de proteção
          adequadas.
        </p>

        <h2>12. Crianças e adolescentes</h2>
        <p>
          Nossos produtos e canais são destinados a maiores de 18 anos. Não coletamos
          intencionalmente dados de menores. Se identificarmos esse tipo de dado sem o consentimento
          adequado dos responsáveis, tomaremos providências para eliminá-lo.
        </p>

        <h2>13. Alterações desta política</h2>
        <p>
          Podemos atualizar esta Política para refletir mudanças legais ou nos nossos processos.
          Quando isso acontecer, alteramos a data de "última atualização" no topo. Mudanças
          relevantes poderão ser comunicadas pelos nossos canais.
        </p>

        <h2>14. Fale com a gente</h2>
        <p>
          Dúvidas sobre privacidade e proteção de dados? Escreva para{" "}
          <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a> ou fale pelo nosso
          WhatsApp oficial {formatBrPhoneDisplay(businessInfo.phones.whatsappOfficial)}.
        </p>
      </LegalProse>
    </Section>
  );
}
