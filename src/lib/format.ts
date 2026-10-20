/**
 * Helpers de formatação compartilhados.
 */

/** Formata CNPJ com máscara `XX.XXX.XXX/XXXX-XX`. Aceita 14 dígitos sem máscara. */
export function formatCnpj(cnpj: string | null | undefined): string {
  if (!cnpj) return "";
  const digits = cnpj.replace(/[^\d]/g, "");
  if (digits.length !== 14) return cnpj;
  return digits.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, "$1.$2.$3/$4-$5");
}

/** Formata telefone brasileiro com máscara. Aceita 10 ou 11 dígitos. */
export function formatPhone(phone: string | null | undefined): string {
  if (!phone) return "";
  const digits = phone.replace(/[^\d]/g, "");
  if (digits.length === 11) {
    return digits.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  }
  if (digits.length === 10) {
    return digits.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  }
  return phone;
}
