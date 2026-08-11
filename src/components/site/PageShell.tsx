import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 bg-background aura" />

      <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:pl-24">
        <p className="text-xs uppercase tracking-[0.35em] text-primary">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-5xl font-bold leading-[0.95] text-foreground sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-xl text-base text-muted-foreground">{intro}</p>
        ) : null}
        {children}
      </main>
    </div>
  );
}
