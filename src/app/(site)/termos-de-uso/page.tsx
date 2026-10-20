import { LegalProse } from "@/components/site/legal-prose";
import { Section } from "@/components/site/section";
import { formatCnpj } from "@/lib/format";
import { businessInfo, formatLongDatePtBr } from "@/lib/site-config";
import { pageMetadata } from "@/lib/site-metadata";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  pageTitle: "Termos de Uso",
  description:
    "Termos de Uso do site institucional da MK Cell Store: objeto, usos permitidos e vedados, atendimento por WhatsApp, limitação de responsabilidade e foro.",
  path: "/termos-de-uso",
});

const updatedAt = formatLongDatePtBr(businessInfo.legalUpdatedAt);
const cnpj = formatCnpj(businessInfo.cnpj);

export default function TermosDeUsoPage() {
  return (
    <Section width="prose" className="pt-20 pb-20 sm:pt-24">
      <header className="mb-8 border-b border-white/8 pb-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-primary">Legal</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-4xl">
          Termos de Uso
        </h1>
        <p className="mt-3 text-sm text-foreground/50">Última atualização: {updatedAt}</p>
      </header>

      <LegalProse>
        <p>
          Estes Termos de Uso regulam o acesso e a utilização do site institucional da{" "}
          <strong>{businessInfo.legalName}</strong> ("MK Cell Store"), disponível em{" "}
          {businessInfo.url.replace("https://", "")}. Ao navegar pelo site, você concorda com estes
          Termos. Se não concordar, por favor não utilize o site.
        </p>

        <h2>1. Quem somos</h2>
        <ul>
          <li>
            <strong>Razão social:</strong> {businessInfo.legalName}
          </li>
          <li>
            <strong>CNPJ:</strong> {cnpj}
          </li>
          <li>
            <strong>E-mail:</strong>{" "}
            <a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a>
          </li>
        </ul>

        <h2>2. Objeto do site</h2>
        <p>
          Este é um site <strong>institucional e de contato</strong>. Ele apresenta a loja,
          informações sobre os nossos produtos e serviços e os canais oficiais de atendimento.{" "}
          <strong>
            O site não é uma loja virtual: não há carrinho, checkout, cadastro de pagamento nem
            finalização de compra por aqui.
          </strong>{" "}
          As compras, orçamentos e a assistência são tratados presencialmente na loja ou pelo nosso
          WhatsApp oficial.
        </p>

        <h2>3. Uso permitido</h2>
        <p>
          Você pode acessar e usar o site para conhecer a loja, obter informações e entrar em
          contato com a gente. Você se compromete a usar o site de forma lícita, de boa-fé e
          conforme estes Termos.
        </p>

        <h2>4. Usos vedados</h2>
        <p>É proibido, entre outras condutas:</p>
        <ul>
          <li>usar o site para fins ilícitos, fraudulentos ou que violem direitos de terceiros;</li>
          <li>
            tentar acessar áreas restritas, sistemas internos ou dados de outros usuários sem
            autorização;
          </li>
          <li>
            introduzir vírus, códigos maliciosos ou realizar ataques que comprometam o funcionamento
            do site;
          </li>
          <li>
            copiar, reproduzir ou explorar comercialmente o conteúdo do site sem a nossa
            autorização;
          </li>
          <li>se passar pela MK Cell Store ou por seus representantes.</li>
        </ul>

        <h2>5. Propriedade intelectual</h2>
        <p>
          A marca, o logotipo, os textos, as imagens e o layout do site pertencem à MK Cell Store ou
          a seus licenciadores e são protegidos por lei. O acesso ao site não transfere a você
          nenhum direito sobre esses elementos, salvo autorização expressa e por escrito.
        </p>

        <h2>6. Atendimento e WhatsApp</h2>
        <p>
          O atendimento oficial acontece pelo nosso WhatsApp e canais publicados neste site. O uso
          do WhatsApp está sujeito também aos termos da Meta e à nossa{" "}
          <Link href="/politica-de-mensagens">Política de Mensagens</Link>. Desconfie de contatos
          que se passem pela loja fora dos números oficiais.
        </p>

        <h2>7. Preços, estoque e disponibilidade</h2>
        <p>
          As informações deste site têm caráter informativo e podem ser alteradas sem aviso prévio.{" "}
          <strong>
            Preços, condições, disponibilidade de estoque e garantia devem sempre ser confirmados
            diretamente com a loja ou pelo WhatsApp oficial
          </strong>{" "}
          antes de qualquer compra. Não nos responsabilizamos por decisões tomadas exclusivamente
          com base em informações genéricas do site.
        </p>

        <h2>8. Limitação de responsabilidade</h2>
        <p>
          Empenhamo-nos para manter o site disponível, correto e atualizado, mas não garantimos
          ausência de erros ou interrupções. Na medida permitida pela lei, a MK Cell Store não se
          responsabiliza por danos decorrentes de indisponibilidade do site, de informações
          desatualizadas ou do uso de sites de terceiros eventualmente vinculados. Nada nestes
          Termos afasta os direitos garantidos ao consumidor pela legislação aplicável.
        </p>

        <h2>9. Privacidade</h2>
        <p>
          O tratamento de dados pessoais relacionado ao site e ao atendimento é descrito na nossa{" "}
          <Link href="/politica-de-privacidade">Política de Privacidade</Link>, que integra estes
          Termos.
        </p>

        <h2>10. Alterações destes Termos</h2>
        <p>
          Podemos atualizar estes Termos a qualquer momento. A versão vigente é sempre a publicada
          nesta página, com a data de "última atualização" no topo. O uso continuado do site após
          mudanças significa que você concorda com a versão atualizada.
        </p>

        <h2>11. Lei aplicável e foro</h2>
        <p>
          Estes Termos são regidos pela legislação brasileira, incluindo o Código de Defesa do
          Consumidor (Lei nº 8.078/1990). Fica eleito o foro da Comarca do Rio de Janeiro/RJ para
          dirimir questões decorrentes destes Termos, sem prejuízo do direito do consumidor de
          recorrer ao foro do seu domicílio, nos termos da lei.
        </p>
      </LegalProse>
    </Section>
  );
}
