/**
 * JsonLd — injeta dados estruturados schema.org como <script type="application/ld+json">.
 *
 * Inline script passa no CSP atual (`script-src 'self' 'unsafe-inline'`). NAP +
 * CNPJ consistentes reforçam legitimidade para Meta e Google.
 */
interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD exige innerHTML; conteúdo estático e controlado (site-config), sem entrada de usuário
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
