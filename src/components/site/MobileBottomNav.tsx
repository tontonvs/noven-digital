import { useEffect, useState } from "react";
import { Home, Layers, FolderOpen, Sparkles, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "./WhatsAppButton";

const items = [
  { id: "home", label: "Home", Icon: Home },
  { id: "services", label: "Services", Icon: Layers },
  { id: "work", label: "Work", Icon: FolderOpen },
  { id: "about", label: "About", Icon: Sparkles },
  { id: "contact", label: "Contact", Icon: Send },
] as const;

const ids = items.map((i) => i.id);
const firstId: string = ids[0] ?? "home";

function useActiveSection() {
  const [active, setActive] = useState<string>(firstId);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length === 0) return;
        const topmost = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        );
        setActive(topmost.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return active;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Mobile-only bottom tab bar. Replaces the desktop side IconRail on small
 * screens — a single dark-tinted glass pill so it stays readable whether
 * it's floating over the busy hero image or the white Services section.
 */
export function MobileBottomNav() {
  const active = useActiveSection();

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-4 z-40 flex items-center justify-center gap-3 px-4 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-[#0b1220]/85 p-1.5 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        {items.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id);
              }}
              className={cn(
                "bouncy grid size-11 place-items-center rounded-full active:scale-95",
                isActive ? "bg-white text-[#0b1220]" : "text-white/80",
              )}
            >
              <Icon
                size={17}
                fill={isActive ? "currentColor" : "none"}
                strokeWidth={isActive ? 1.5 : 2}
              />
            </a>
          );
        })}
      </div>

      <WhatsAppButton />
    </nav>
  );
}
