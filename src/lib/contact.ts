export const WHATSAPP_NUMBER = "233548456600";
export const GMAIL_ADDRESS = "mensahkbiz@gmail.com";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openGmailCompose(subject: string, body: string) {
  const params = new URLSearchParams({ subject, body });
  window.location.href = `mailto:${GMAIL_ADDRESS}?${params.toString()}`;
}
