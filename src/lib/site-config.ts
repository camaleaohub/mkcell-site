/**
 * site-config — fonte única de dados institucionais da MK Cell Store.
 *
 * Lido por todas as páginas públicas do route group `(site)`, pela metadata e
 * pelo JSON-LD. A identidade jurídica renderiza estática e precisa bater 1:1
 * com o cartão CNPJ na verificação da Business Manager do Meta.
 *
 * Formatação de exibição: usar `formatCnpj`/`formatPhone` (src/lib/format.ts) e
 * `buildWhatsAppUrl` (src/lib/whatsapp.ts). Números ficam em E.164 (com DDI 55).
 */

import { formatCnpj, formatPhone } from "@/lib/format";

export const businessInfo = {
  legalName: "MK CELL STORE LTDA",
  tradeName: "MK Cell Store",
  cnpj: "59147778000170", // dígitos crus -> formatar com formatCnpj()
  email: "contato@mkcellstore.com.br",
  address: {
    street: "Av. Tenente Coronel Muniz de Aragão",
    number: "1568",
    complement: "Lote 22 Pal 18125, Loja E",
    neighborhood: "Jacarepaguá",
    city: "Rio de Janeiro",
    state: "RJ",
    zip: "22765008",
    country: "BR",
  },
  phones: {
    whatsappOfficial: "5521998623110", // OFICIAL — conectado à API, botões e QR
    whatsappSecondary: "5521960168053", // contato adicional
  },
  hours: [
    { days: "Segunda a sexta", open: "09:00", close: "18:00" },
    { days: "Sábado", open: "09:00", close: "13:00" },
  ],
  // Lidas no build (export estático). `||` porque variável vazia quebraria o
  // `new URL()` do metadataBase.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://mkcellstore.com.br").replace(/\/+$/, ""),
  // Sistema interno da loja, fora deste site. Vazio esconde o link do rodapé.
  teamLoginUrl: process.env.NEXT_PUBLIC_TEAM_LOGIN_URL ?? "https://mkcellstore.com.br/login",
  legalUpdatedAt: "2026-06-03",
} as const;

/** Texto pré-preenchido padrão ao abrir uma conversa pelo site (opt-in). */
export const WHATSAPP_DEFAULT_MESSAGE = "Olá! Vim pelo site da MK Cell Store.";

/** Caminho do QR estático (asset commitado, CSP-safe — servido de `self`). */
export const WHATSAPP_QR_SRC = "/whatsapp-qr.svg";

/**
 * Formata um número E.164 brasileiro (`55DDXXXXXXXXX`) para exibição nacional
 * `(DD) XXXXX-XXXX`. Reusa `formatPhone`, que espera 10-11 dígitos sem DDI.
 */
export function formatBrPhoneDisplay(e164: string): string {
  const national = e164.replace(/^55/, "");
  return formatPhone(national);
}

/** Linha de endereço completa em uma string (NAP consistente p/ Meta/Google). */
export function formatFullAddress(): string {
  const a = businessInfo.address;
  return `${a.street}, ${a.number} — ${a.complement} — ${a.neighborhood}, ${a.city}/${a.state} — CEP ${formatZip(a.zip)}`;
}

const MONTHS_PT = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
] as const;

/** Formata data ISO `YYYY-MM-DD` -> "3 de junho de 2026" (determinístico, sem timezone). */
export function formatLongDatePtBr(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return `${day} de ${MONTHS_PT[(month ?? 1) - 1]} de ${year}`;
}

/** Formata CEP `XXXXXXXX` -> `XXXXX-XXX`. */
export function formatZip(zip: string): string {
  const digits = zip.replace(/\D/g, "");
  if (digits.length !== 8) return zip;
  return digits.replace(/^(\d{5})(\d{3})$/, "$1-$2");
}

const WEEKDAYS_LONG = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const;

/**
 * storeJsonLd — dados estruturados schema.org `Store` (LocalBusiness). NAP +
 * CNPJ (taxID) consistentes reforçam legitimidade para Meta e Google. Usado na
 * home e em /contato. URLs absolutas a partir do ápice.
 */
export function storeJsonLd(): Record<string, unknown> {
  const a = businessInfo.address;
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: businessInfo.tradeName,
    legalName: businessInfo.legalName,
    url: businessInfo.url,
    image: `${businessInfo.url}/og.png`,
    logo: `${businessInfo.url}/icons/icon.svg`,
    telephone: `+${businessInfo.phones.whatsappOfficial}`,
    email: businessInfo.email,
    taxID: formatCnpj(businessInfo.cnpj),
    priceRange: "$$",
    currenciesAccepted: "BRL",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${a.street}, ${a.number} — ${a.complement}`,
      addressLocality: a.city,
      addressRegion: a.state,
      postalCode: formatZip(a.zip),
      addressCountry: a.country,
    },
    areaServed: {
      "@type": "City",
      name: a.city,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...WEEKDAYS_LONG],
        opens: businessInfo.hours[0].open,
        closes: businessInfo.hours[0].close,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: businessInfo.hours[1].open,
        closes: businessInfo.hours[1].close,
      },
    ],
  };
}
