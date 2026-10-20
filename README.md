# MK Cell Store: site institucional

Site institucional público da MK Cell Store, hoje no ar em https://mkcellstore.com.br.

São 6 páginas (início, sobre, contato, política de privacidade, política de mensagens e termos de uso), mais `robots.txt`, `sitemap.xml` e uma página de erro 404.

Feito em Next.js 16, React 19 e Tailwind CSS 4, com **export estático**: o build gera HTML, CSS e JavaScript prontos na pasta `out/`. Não precisa de servidor Node, banco de dados nem senha ou chave de API. Qualquer hospedagem de site estático serve.

## Requisitos

- Node.js 20.9 ou mais novo (testado com Node 24)
- npm, que já vem com o Node

## Rodar localmente

```bash
npm ci
npm run dev
```

Abre em http://localhost:3000.

## Gerar os arquivos para publicar

```bash
npm ci
npm run build
```

O site pronto fica em `out/`. Publique o **conteúdo** dessa pasta na **raiz** do domínio. Numa subpasta (`dominio.com.br/site/`) não funciona, porque os arquivos são referenciados a partir de `/`.

Para conferir o resultado antes de publicar: `npx serve out` e abrir o endereço que aparecer.

## Onde publicar

| Hospedagem | Como |
|---|---|
| Vercel | Importar o repositório. O Next.js é detectado sozinho, não há nada para configurar. |
| Netlify ou Cloudflare Pages | Comando de build `npm run build` e pasta de publicação `out`. O arquivo `_headers` já aplica os cabeçalhos de segurança. |
| Apache (cPanel, Hostinger, HostGator) | Rodar o build e enviar o conteúdo de `out/` para `public_html/`. O `.htaccess` incluído faz `/sobre` abrir `sobre.html`, define a página 404 e aplica os cabeçalhos de segurança. |
| nginx | Usar o bloco abaixo. |

No Apache, confira se o `.htaccess` subiu junto: arquivos que começam com ponto ficam ocultos em alguns gerenciadores de arquivos. Se o site der erro 500 depois do upload, a hospedagem bloqueia alguma diretiva do `.htaccess`. Nesse caso, fale com o suporte da hospedagem.

O build gera, para cada página, um `sobre.html` e uma pasta `sobre/` com arquivos de pré-carregamento do Next. Por isso a hospedagem precisa servir `sobre.html` quando alguém abre `/sobre`. Vercel, Netlify e Cloudflare Pages fazem isso sozinhos. No Apache, quem resolve é o `.htaccess`. No nginx, é o `try_files` abaixo.

```nginx
server {
  # listen, server_name e certificado conforme a sua hospedagem
  root /caminho/para/out;
  error_page 404 /404.html;
  absolute_redirect off;

  # /sobre/ vira /sobre
  rewrite ^/(.+)/$ /$1 permanent;

  location / {
    # /sobre serve sobre.html; / serve index.html
    try_files $uri $uri.html $uri/index.html =404;
  }

  add_header X-Frame-Options "DENY" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
  add_header Permissions-Policy "camera=(), geolocation=(), microphone=()" always;
  add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;
}
```

As configurações de Apache (`.htaccess`) e nginx acima foram testadas com o build deste repositório.

## Configuração (opcional)

O site funciona sem nenhuma variável. As duas abaixo só existem para casos específicos e são lidas **no build**: se mudar, rode `npm run build` de novo. Modelo em `.env.example`.

| Variável | Para que serve | Padrão |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Endereço público do site, sem barra no final. Vai no canonical, no Open Graph, no JSON-LD e no sitemap. | `https://mkcellstore.com.br` |
| `NEXT_PUBLIC_TEAM_LOGIN_URL` | Link "Área da equipe", no rodapé, que leva ao sistema interno da loja (não faz parte deste site). Vazio esconde o link. | `https://mkcellstore.com.br/login` |

## Onde mudar o conteúdo

- `src/lib/site-config.ts`: dados da empresa (razão social, CNPJ, endereço, telefones, horário e e-mail). As páginas, o rodapé e os dados estruturados (JSON-LD) leem daqui.
- `src/app/(site)/`: as páginas. `(site)` é só um agrupamento do Next e não aparece no endereço.
- `public/whatsapp-qr.svg`: QR code que abre o WhatsApp oficial. Se o número mudar, é preciso gerar um QR novo.
- `public/og.png`: imagem que aparece quando o link é compartilhado (1200 x 630).

## Antes de mudar a hospedagem do domínio

1. **O domínio mkcellstore.com.br também atende o sistema interno da loja** (vendas, estoque e entregas). Hoje site e sistema rodam juntos, no mesmo servidor. Apontar o DNS do domínio para outra hospedagem tira o sistema do ar. Combine com a Camaleao Hub antes de mexer no DNS.
2. **Mantenha os endereços e os dados.** As páginas de política e o WhatsApp oficial foram usados na verificação da Meta (Business Manager e API do WhatsApp). `/politica-de-privacidade`, `/politica-de-mensagens` e `/termos-de-uso` precisam continuar nos mesmos endereços, com os mesmos dados da empresa e o mesmo número.
3. Mudanças nos textos legais devem passar pelo jurídico da loja.

## O que mudou em relação ao site no ar

Este repositório é o site extraído do sistema da loja. Textos, visual e endereços são os mesmos: cada página foi comparada com o site no ar, em desktop e em celular. Mudou só o necessário para ele rodar sozinho:

- Saiu tudo que é do sistema: login, banco de dados, aplicativo instalável (PWA) e notificações.
- O link "Área da equipe" aponta para o endereço completo do sistema e pode ser trocado pela variável `NEXT_PUBLIC_TEAM_LOGIN_URL`.
- Página 404 própria, em português.
- O ícone da aba usa `public/icons/icon.svg`.
- Os cabeçalhos de segurança, que antes vinham do servidor, estão em `public/.htaccess` e `public/_headers`.

## Comandos

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor local de desenvolvimento |
| `npm run build` | Gera o site em `out/` |
| `npm run typecheck` | Checagem de tipos (TypeScript) |
| `npm run lint` | Lint e formatação (Biome) |
| `npm run format` | Formata o código |
