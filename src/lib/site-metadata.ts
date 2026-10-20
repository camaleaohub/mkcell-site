/**
 * site-metadata — builder de Metadata para as páginas públicas do route group
 * `(site)`.
 *
 * Retorna um objeto Metadata COMPLETO e auto-contido por página: title absoluto,
 * description, canonical (resolvido contra `metadataBase` = ápice mkcellstore.com.br),
 * robots index:true e openGraph completo. Evita depender do shallow-merge de
 * metadata do Next (onde um openGraph filho substituiria o do pai) e garante que
 * cada página sai indexável mesmo herdando o `noindex` global do layout raiz.
 */
import { businessInfo } from "@/lib/site-config";
import type { Metadata } from "next";

const DEFAULT_TITLE = "MK Cell Store — iPhones, smartphones e acessórios em Jacarepaguá, RJ";
const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "MK Cell Store — iPhones, smartphones e acessórios",
} as const;

interface PageMetaInput {
  /** Título da página sem a marca. Omitido na home (usa o título-marca padrão). */
  pageTitle?: string;
  description: string;
  /** Caminho público, ex.: "/", "/sobre". Resolvido contra o ápice. */
  path: string;
}

export function pageMetadata({ pageTitle, description, path }: PageMetaInput): Metadata {
  const title = pageTitle ? `${pageTitle} · MK Cell Store` : DEFAULT_TITLE;

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: businessInfo.tradeName,
      title,
      description,
      url: path,
      images: [OG_IMAGE],
    },
  };
}
