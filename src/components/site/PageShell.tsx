import type { ReactNode } from "react";

export function PageShell({
  id,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <div id={id} className="relative min-h-screen">

      <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:pl-28">
        <p className="pop-in text-xs uppercase tracking-[0.35em] text-white/70">{eyebrow}</p>
        <h1 className="pop-in mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="pop-in mt-6 max-w-xl text-[14px] leading-[1.7] text-white/90">{intro}</p>
        ) : null}
        {children}
      </main>
    </div>
  );
}
