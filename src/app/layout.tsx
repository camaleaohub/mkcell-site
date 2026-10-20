import { MotionConfig } from "@/components/motion-config";
import { businessInfo } from "@/lib/site-config";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// O sistema interno da loja, que divide o domínio com o site, já registrou um
// service worker em navegadores da equipe. Este script remove qualquer service
// worker e cache que encontrar e recarrega uma única vez por sessão.
const SW_CLEANUP_SCRIPT = `
(function(){
  if (!('serviceWorker' in navigator)) return;
  navigator.serviceWorker.getRegistrations().then(function(regs){
    if (regs.length === 0) return;
    Promise.all(regs.map(function(r){ return r.unregister(); })).then(function(){
      if ('caches' in window) {
        caches.keys().then(function(keys){
          return Promise.all(keys.map(function(k){ return caches.delete(k); }));
        });
      }
      try {
        if (!sessionStorage.getItem('mkcell_sw_cleaned')) {
          sessionStorage.setItem('mkcell_sw_cleaned', '1');
          location.reload();
        }
      } catch (e) {}
    });
  }).catch(function(){});
})();
`;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(businessInfo.url),
  title: {
    default: "MKCELL",
    template: "%s · MKCELL",
  },
  description:
    "MK Cell Store: iPhones, smartphones e acessórios em Jacarepaguá, Rio de Janeiro. Atendimento presencial e pelo WhatsApp oficial.",
  applicationName: "MKCELL",
  icons: {
    icon: [{ url: "/icons/icon.svg", type: "image/svg+xml" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Padrão noindex. As páginas do route group `(site)` sobrescrevem para index.
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#0a0a10",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-dvh bg-background font-sans text-foreground antialiased">
        <Script id="mkcell-sw-cleanup" strategy="beforeInteractive">
          {SW_CLEANUP_SCRIPT}
        </Script>
        <MotionConfig>{children}</MotionConfig>
      </body>
    </html>
  );
}
