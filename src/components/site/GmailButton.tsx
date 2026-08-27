import { openGmailCompose } from "@/lib/contact";
import { cn } from "@/lib/utils";

const DEFAULT_SUBJECT = "Project inquiry";
const DEFAULT_BODY = "Hi Tonton,\n\nI'd like to talk about a project.\n\n";

/**
 * Opens a Gmail compose window addressed to us. Styled to match
 * WhatsAppButton's "pill" variant — rounded square, 3px border — but
 * filled with Google's brand gradient instead of a flat colour.
 */
export function GmailButton({
  subject = DEFAULT_SUBJECT,
  body = DEFAULT_BODY,
  className,
}: {
  subject?: string;
  body?: string;
  className?: string;
}) {
  return (
    <button
      onClick={() => openGmailCompose(subject, body)}
      className={cn(
        "bouncy inline-flex items-center justify-center gap-2 rounded-md border-[3px] border-foreground bg-white px-4 py-2 text-[13px] font-semibold text-[#0b1220] hover:-translate-y-0.5 hover:scale-105 active:scale-95 dark:bg-black dark:text-white",
        className,
      )}
    >
      Email us
    </button>
  );
}
