import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático: `next build` gera HTML, CSS e JS puros em `out/`, que rodam
  // em qualquer hospedagem, sem servidor Node. Por isso não há `headers()` aqui:
  // os cabeçalhos de segurança ficam em `public/.htaccess` e `public/_headers`.
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
