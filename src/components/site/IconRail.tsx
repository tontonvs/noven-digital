import { Link } from "@tanstack/react-router";
import { Home, Layers, FolderOpen, Sparkles, Send } from "lucide-react";
import profilePhoto from "@/assets/profile.jpg";

const floating = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/services", label: "Services", Icon: Layers },
  { to: "/work", label: "Work", Icon: FolderOpen },
  { to: "/about", label: "About", Icon: Sparkles },
] as const;

const itemBase =
  "group relative grid size-9 place-items-center rounded-full bouncy hover:-translate-y-0.5 hover:scale-110 active:scale-95";

function Tip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-full bg-card/92 px-3.5 py-1.5 text-xs font-medium text-card-foreground opacity-0 shadow-md backdrop-blur-md transition-opacity group-hover:opacity-100">
      {label}
    </span>
  );
}

export function IconRail() {
  return (
    <nav
      aria-label="Primary"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1.5 md:flex"
    >
      {/* 4 floating glass buttons — no bar behind them */}
      {floating.map(({ to, label, Icon }) => (
        <Link
          key={to}
          to={to}
          aria-label={label}
          activeOptions={{ exact: to === "/" }}
          activeProps={{ className: "bg-card text-card-foreground shadow-lg" }}
          inactiveProps={{ className: "glass-soft text-white/90 hover:bg-white/30" }}
          className={itemBase}
        >
          {({ isActive }: { isActive: boolean }) => (
            <>
              <Icon size={15} fill={isActive ? "currentColor" : "none"} strokeWidth={isActive ? 1.5 : 2} />
              <Tip label={label} />
            </>
          )}
        </Link>
      ))}

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
        <Link
          to="/contact"
          aria-label="Contact"
          activeProps={{ className: "bg-foreground text-background" }}
          inactiveProps={{ className: "text-muted-foreground hover:bg-foreground/5" }}
          className="bouncy grid size-8 place-items-center rounded-full"
        >
          <Send size={14} />
        </Link>
      </div>
    </nav>
  );
}
