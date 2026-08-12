import { Link } from "@tanstack/react-router";
import { Home, Layers, FolderOpen, Sparkles, Send } from "lucide-react";

const floating = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/services", label: "Services", Icon: Layers },
  { to: "/work", label: "Work", Icon: FolderOpen },
  { to: "/about", label: "About", Icon: Sparkles },
] as const;

const itemBase =
  "group relative grid size-12 place-items-center rounded-full bouncy hover:-translate-y-0.5 hover:scale-110 active:scale-95";

function Tip({ label }: { label: string }) {
  return (
    <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-full bg-white/92 px-3.5 py-1.5 text-xs font-medium text-slate-800 opacity-0 shadow-md backdrop-blur-md transition-opacity group-hover:opacity-100">
      {label}
    </span>
  );
}

export function IconRail() {
  return (
    <nav
      aria-label="Primary"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
    >
      {/* 4 floating glass buttons — no bar behind them */}
      {floating.map(({ to, label, Icon }) => (
        <Link
          key={to}
          to={to}
          aria-label={label}
          activeOptions={{ exact: to === "/" }}
          activeProps={{ className: "bg-white text-slate-900 shadow-lg" }}
          inactiveProps={{ className: "glass-soft text-white/90 hover:bg-white/30" }}
          className={itemBase}
        >
          {({ isActive }: { isActive: boolean }) => (
            <>
              <Icon size={20} fill={isActive ? "currentColor" : "none"} strokeWidth={isActive ? 1.5 : 2} />
              <Tip label={label} />
            </>
          )}
        </Link>
      ))}

      {/* Capsule with the 2 remaining icons */}
      <div className="mt-2 flex flex-col items-center gap-1 rounded-full bg-white/92 p-2 shadow-md backdrop-blur-md">
        <button
          aria-label="Profile picture"
          className="bouncy grid size-11 place-items-center overflow-hidden rounded-full bg-slate-200 text-[8px] font-medium text-slate-500 hover:scale-110"
        >
          {/* Replace with <img src="/your-photo.jpg" alt="Profile" className="size-full object-cover" /> */}
          PHOTO
        </button>
        <Link
          to="/contact"
          aria-label="Contact"
          activeProps={{ className: "bg-slate-900 text-white" }}
          inactiveProps={{ className: "text-slate-600 hover:bg-black/5" }}
          className="bouncy grid size-11 place-items-center rounded-full"
        >
          <Send size={19} />
        </Link>
      </div>
    </nav>
  );
}
