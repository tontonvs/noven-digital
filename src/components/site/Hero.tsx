import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Hero({
  title,
  primaryCta,
  secondaryCta,
  statValue,
  statLabel,
  noteTitle,
  noteBody,
}: {
  title: ReactNode;
  primaryCta: string;
  secondaryCta: string;
  statValue: string;
  statLabel: string;
  noteTitle: string;
  noteBody: string;
}) {
  return (
    <div className="relative px-2 pb-28 pt-6 sm:px-4 sm:pb-32">
      {/* Frame — the organic blob "best shot" card, no photo yet */}
      <div className="relative mx-auto aspect-[4/5] max-w-3xl overflow-hidden blob-hero bg-primary shadow-[var(--shadow-float)] sm:aspect-[16/11]">
        <div className="absolute inset-0 aura opacity-60" />

        {/* CTA pills inside the frame, top corners */}
        <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3 sm:inset-x-8 sm:top-8">
          <button className="glass-panel-strong blob-pill flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-foreground sm:px-5 sm:py-2.5 sm:text-sm">
            {primaryCta}
          </button>
          <button className="glass-panel-strong blob-pill flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-foreground sm:px-5 sm:py-2.5 sm:text-sm">
            {secondaryCta}
          </button>
        </div>

        {/* Title, bottom-left inside the frame */}
        <div className="absolute inset-x-6 bottom-24 sm:inset-x-10 sm:bottom-28 sm:max-w-md">
          <h1 className="text-glow font-display text-4xl font-bold leading-[0.95] text-primary-foreground sm:text-5xl">
            {title}
          </h1>
        </div>
      </div>

      {/* Logo badge, overlapping the bottom edge of the frame */}
      <div className="absolute bottom-[22%] left-1/2 z-10 grid size-16 -translate-x-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] sm:size-20">
        <span className="font-display text-lg font-bold sm:text-xl">n.</span>
      </div>

      {/* Floating stat badge, bottom-left, overlapping the frame */}
      <div className="absolute bottom-6 left-4 max-w-[13rem] glass-panel-strong blob-b float-slow p-4 sm:left-10 sm:max-w-[15rem] sm:p-5">
        <p className="font-display text-3xl font-bold text-primary sm:text-4xl">{statValue}</p>
        <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{statLabel}</p>
      </div>

      {/* Floating info card, right side, overlapping the frame */}
      <div
        className={cn(
          "absolute -bottom-2 right-4 max-w-[15rem] glass-panel-strong blob-c p-4 sm:right-10 sm:max-w-[17rem] sm:p-5",
        )}
      >
        <h2 className="text-sm font-bold sm:text-base">{noteTitle}</h2>
        <p className="mt-1.5 text-xs text-muted-foreground sm:text-sm">{noteBody}</p>
      </div>
    </div>
  );
}
