import { Link } from "@tanstack/react-router";

export function TopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 flex items-center justify-between px-6 pt-6 sm:px-10">
      <Link
        to="/"
        className="font-display text-sm font-bold tracking-[0.15em] text-foreground/80 sm:text-base"
      >
        NOV<span className="text-primary">EN</span>
      </Link>
      <span className="hidden text-xs font-medium uppercase tracking-[0.35em] text-foreground/60 sm:block">
        Studio &amp; Build
      </span>
    </header>
  );
}
