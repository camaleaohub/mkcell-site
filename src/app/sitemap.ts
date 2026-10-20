import { businessInfo } from "@/lib/site-config";
import type { MetadataRoute } from "next";

// Exigido pelo `output: "export"`: o arquivo é gerado uma vez, no build.
export const dynamic = "force-static";

/**
 * sitemap.xml — apenas as 6 URLs públicas do site institucional. URLs no ápice
 * mkcellstore.com.br para consolidar indexação (evita duplicação no host de
 * failover e no www).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = businessInfo.url;
  const lastModified = new Date(businessInfo.legalUpdatedAt);

  const routes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }[] = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/sobre", priority: 0.8, changeFrequency: "yearly" },
    { path: "/contato", priority: 0.9, changeFrequency: "yearly" },
    {
      path: "/politica-de-privacidade",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    {
      path: "/politica-de-mensagens",
      priority: 0.5,
      changeFrequency: "yearly",
    },
    { path: "/termos-de-uso", priority: 0.5, changeFrequency: "yearly" },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
