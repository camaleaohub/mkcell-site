import { businessInfo } from "@/lib/site-config";
import type { MetadataRoute } from "next";

// Exigido pelo `output: "export"`: o arquivo é gerado uma vez, no build.
export const dynamic = "force-static";

/**
 * robots.txt — libera o site institucional público e bloqueia o sistema interno
 * (login, dashboards, APIs). Corrobora o override de robots do route group
 * `(site)`. Sitemap aponta para o ápice mkcellstore.com.br.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/login",
          "/forgot-password",
          "/reset-password",
          "/paineldecontrole",
          "/acesso",
          "/motoboy",
          "/api",
        ],
      },
    ],
    sitemap: `${businessInfo.url}/sitemap.xml`,
    host: businessInfo.url,
  };
}
