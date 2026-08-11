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
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-2 glass-panel blob-pill p-2 md:flex"
    >
      {items.map(({ to, label, Icon }) => (
        <Link
          key={to}
          to={to}
          aria-label={label}
          activeOptions={{ exact: to === "/" }}
          activeProps={{
            className: "bg-primary/25 text-primary",
          }}
          inactiveProps={{ className: "text-muted-foreground" }}
          className="group relative grid size-11 place-items-center rounded-[1.25rem_0.6rem_1.25rem_0.6rem] transition-colors hover:bg-glass-strong hover:text-foreground"
        >
          <Icon size={19} />
          <span className="pointer-events-none absolute left-14 whitespace-nowrap rounded-[0.9rem_0.4rem_0.9rem_0.4rem] glass-panel px-3 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
            {label}
          </span>
        </Link>
      ))}
    </nav>
  );
}
