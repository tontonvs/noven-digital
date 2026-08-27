export const WHATSAPP_NUMBER = "233548456600";
export const GMAIL_ADDRESS = "mensahkbiz@gmail.com";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function openGmailCompose(subject: string, body: string) {
  const url = new URL("https://mail.google.com/mail/?view=cm&fs=1");
  url.searchParams.set("to", GMAIL_ADDRESS);
  url.searchParams.set("su", subject);
  url.searchParams.set("body", body);
  window.open(url.toString(), "_blank", "noopener,noreferrer");
}
