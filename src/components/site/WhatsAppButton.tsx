import whatsappIcon from "@/assets/whatsapp.svg";
import { whatsappLink } from "@/lib/contact";
import { cn } from "@/lib/utils";

const DEFAULT_MESSAGE = "Hi! I found Noven online and I'd like to talk about a project.";

/**
 * WhatsApp chat link. "icon" is the small circular floating button used
 * next to the mobile bottom nav; "pill" is a labelled rounded-full button
 * for inline use (e.g. in the hero copy).
 */
export function WhatsAppButton({
  variant = "icon",
  message = DEFAULT_MESSAGE,
  className,
}: {
  variant?: "icon" | "pill";
  message?: string;
  className?: string;
}) {
  if (variant === "pill") {
    return (
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "bouncy inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-[13px] font-semibold text-[#06210f] hover:-translate-y-0.5 hover:scale-105 active:scale-95",
          className,
        )}
      >
        <img src={whatsappIcon} alt="" className="size-4" />
        WhatsApp
      </a>
    );
  }

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={cn(
        "bouncy grid size-12 shrink-0 place-items-center rounded-full border border-white/10 bg-[#0b1220]/85 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl hover:scale-110 active:scale-95",
        className,
      )}
    >
      <img src={whatsappIcon} alt="" className="size-6" />
    </a>
  );
}
