/**
 * Links `wa.me` do site: abrem o WhatsApp com texto pré-preenchido.
 *
 * Aceita números BR sem DDI (10-11 dígitos) e prepende 55. Aceita formato
 * internacional já normalizado (12-13 dígitos).
 */

export function normalizeBrazilianPhone(phone: string | null | undefined): string {
  const digits = (phone ?? "").replace(/\D/g, "");
  if (digits.length === 10 || digits.length === 11) return `55${digits}`;
  return digits;
}

export function buildWhatsAppUrl(phone: string | null | undefined, text: string): string {
  const e164 = normalizeBrazilianPhone(phone);
  const encoded = encodeURIComponent(text);
  if (!e164) {
    return `https://wa.me/?text=${encoded}`;
  }
  return `https://wa.me/${e164}?text=${encoded}`;
}
