import whatsappIcon from "@/assets/whatsapp.svg";

const WHATSAPP_NUMBER = "233548456600";
const WHATSAPP_MESSAGE = "Hi! I found Noven online and I'd like to talk about a project.";

/**
 * Floating WhatsApp chat button. Used next to the mobile bottom nav.
 */
export function WhatsAppButton({ className }: { className?: string }) {
  return (
    <a
      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={`bouncy grid size-12 shrink-0 place-items-center rounded-full border border-white/10 bg-[#0b1220]/85 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-110 active:scale-95 ${className ?? ""}`}
    >
      <img src={whatsappIcon} alt="" className="size-6" />
    </a>
  );
}
