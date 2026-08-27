import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Floating "back to top" button. Appears once the page is scrolled down a
 * bit. Sits clear of the mobile bottom nav (and the WhatsApp button next
 * to it) rather than right at the screen edge, on both mobile and desktop.
 */
export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={cn(
        "fixed right-4 bottom-28 z-40 grid size-11 place-items-center rounded-full border border-white/10 bg-[#0b1220]/85 text-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 md:bottom-8 md:right-8",
        "bouncy hover:-translate-y-1 hover:scale-110 active:scale-95",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ArrowUp size={18} />
    </button>
  );
}
