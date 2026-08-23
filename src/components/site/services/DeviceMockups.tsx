import type { ReactNode } from "react";

/**
 * Minimal, Apple-style device frames. Pass a screenshot as children — it fills the
 * screen area with object-cover.
 */

export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative aspect-[9/19] rounded-[1.6rem] border-[5px] border-neutral-900 bg-neutral-900 shadow-xl ${className}`}>
      <div className="absolute inset-0 overflow-hidden rounded-[1.25rem] bg-white">{children}</div>
      <div className="absolute left-1/2 top-0 h-3 w-14 -translate-x-1/2 rounded-b-lg bg-neutral-900" />
    </div>
  );
}

export function TabletFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative aspect-[4/5] rounded-[1.4rem] border-[7px] border-neutral-900 bg-neutral-900 shadow-xl ${className}`}>
      <div className="absolute inset-0 overflow-hidden rounded-[0.8rem] bg-white">{children}</div>
      <div className="absolute left-1/2 top-1 size-1 -translate-x-1/2 rounded-full bg-neutral-700" />
    </div>
  );
}

export function LaptopFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      <div className="relative aspect-[16/10] w-full rounded-t-lg border-[8px] border-b-0 border-neutral-900 bg-neutral-900">
        <div className="absolute inset-0 overflow-hidden rounded-t-[0.3rem] bg-white">{children}</div>
      </div>
      <div className="relative h-2.5 w-full rounded-b bg-gradient-to-b from-neutral-800 to-neutral-950">
        <div className="absolute left-1/2 top-0 h-1 w-12 -translate-x-1/2 rounded-b bg-neutral-950" />
      </div>
    </div>
  );
}

/**
 * Same screenshot across laptop, tablet and phone, sized realistically — the laptop is
 * clearly the largest, phone and tablet are close in visual size, arranged side by side
 * the way Apple's own product lineup shots do it.
 */
export function ThreeUpMockup({ screenshot, alt }: { screenshot: string; alt: string }) {
  return (
    <div className="flex items-end justify-center gap-4 sm:gap-6">
      <LaptopFrame className="w-[52%] sm:w-[54%]">
        <img src={screenshot} alt={alt} className="size-full object-cover object-top" />
      </LaptopFrame>
      <TabletFrame className="w-[21%] sm:w-[20%]">
        <img src={screenshot} alt={alt} className="size-full object-cover object-top" />
      </TabletFrame>
      <PhoneFrame className="w-[16%] sm:w-[15%]">
        <img src={screenshot} alt={alt} className="size-full object-cover object-top" />
      </PhoneFrame>
    </div>
  );
}
