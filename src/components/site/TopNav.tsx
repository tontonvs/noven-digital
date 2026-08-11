import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex justify-center px-4 pt-4">
      <div className="flex w-full max-w-5xl items-center justify-between gap-4 glass-panel blob-pill px-5 py-3">
        <Link to="/" className="font-display text-sm font-bold tracking-tight sm:text-base">
          nov<span className="text-primary">en</span>
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 overflow-x-auto">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "bg-glass-strong text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-[1rem_0.5rem_1rem_0.5rem] px-3 py-1.5 text-xs font-medium transition-colors hover:text-foreground sm:text-sm"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
