import { useEffect, useState } from "react";
import { Home, Layers, FolderOpen, Sparkles, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import profilePhoto from "@/assets/profile.jpg";

const sections = [
  { id: "home", label: "Home", Icon: Home },
  { id: "services", label: "Services", Icon: Layers },
  { id: "work", label: "Work", Icon: FolderOpen },
  { id: "about", label: "About", Icon: Sparkles },
] as const;

const allIds = [...sections.map((s) => s.id), "contact"] as const;

const itemBase =
  "group relative grid size-9 place-items-center rounded-full bouncy hover:-translate-y-0.5 hover:scale-110 active:scale-95";

function Tip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-full bg-card/92 px-3.5 py-1.5 text-xs font-medium text-card-foreground opacity-0 shadow-md backdrop-blur-md transition-opacity group-hover:opacity-100">
      {label}
    </span>
  );
}

function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? "");

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
  }, [ids]);

  return active;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function IconRail() {
  const active = useActiveSection(allIds);

  return (
    <nav
      aria-label="Primary"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1.5 md:flex"
    >
      {/* 4 floating glass buttons — no bar behind them */}
      {sections.map(({ id, label, Icon }) => {
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
              itemBase,
              isActive ? "bg-card text-card-foreground shadow-lg" : "glass-soft text-white/90 hover:bg-white/30",
            )}
          >
            <Icon size={15} fill={isActive ? "currentColor" : "none"} strokeWidth={isActive ? 1.5 : 2} />
            <Tip label={label} />
          </a>
        );
      })}

      {/* Capsule with the 2 remaining icons */}
      <div className="mt-2 flex flex-col items-center gap-1 rounded-full bg-card/92 p-1.5 shadow-md backdrop-blur-md">
        <button
          aria-label="Profile picture"
          className="bouncy grid size-8 place-items-center overflow-hidden rounded-full bg-neutral-800 hover:scale-110"
        >
          <img
            src={profilePhoto}
            alt="Tonton Mensah"
            className="size-full object-cover grayscale"
          />
        </button>
        <a
          href="#contact"
          aria-label="Contact"
          aria-current={active === "contact" ? "true" : undefined}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
          className={cn(
            "bouncy grid size-8 place-items-center rounded-full",
            active === "contact" ? "bg-foreground text-background" : "text-muted-foreground hover:bg-foreground/5",
          )}
        >
          <Send size={14} />
        </a>
      </div>
    </nav>
  );
}
