import { Link } from "@tanstack/react-router";
import { Home, Layers, FolderOpen, Sparkles, Send } from "lucide-react";

const items = [
  { to: "/", label: "Home", Icon: Home },
  { to: "/services", label: "Services", Icon: Layers },
  { to: "/work", label: "Work", Icon: FolderOpen },
  { to: "/about", label: "About", Icon: Sparkles },
  { to: "/contact", label: "Contact", Icon: Send },
] as const;

export function IconRail() {
  return (
    <nav
      aria-label="Primary"
      className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 rounded-[2rem] bg-white/92 p-2.5 shadow-md backdrop-blur-md md:flex"
    >
      {items.map(({ to, label, Icon }) => (
        <Link
          key={to}
          to={to}
          aria-label={label}
          activeOptions={{ exact: to === "/" }}
          activeProps={{
            className: "bg-slate-900 text-white",
          }}
          inactiveProps={{ className: "text-slate-500 hover:bg-black/5 hover:text-slate-900" }}
          className="group relative grid size-12 place-items-center rounded-3xl transition-colors"
        >
          <Icon size={21} />
          <span className="pointer-events-none absolute left-16 whitespace-nowrap rounded-full bg-white/92 px-3.5 py-1.5 text-xs font-medium text-slate-800 opacity-0 shadow-md backdrop-blur-md transition-opacity group-hover:opacity-100">
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
}

