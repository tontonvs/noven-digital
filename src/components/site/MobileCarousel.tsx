import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DeviceFrame } from "./DeviceFrame";

type Slide = { src: string; label: string };

/**
 * Phone-framed carousel used in the "Mobile apps" service block.
 * Shows the active screen large, with a sliver of the next screen peeking
 * out from behind a white fade, plus a button to advance manually.
 */
export function MobileCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const current = slides[index]!;
  const next = slides[(index + 1) % slides.length]!;

  const advance = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative mx-auto w-full max-w-[225px]">
      <div className="relative">
        {/* peeking next screen */}
        <div className="pointer-events-none absolute inset-y-6 -right-7 z-0 w-16 overflow-hidden rounded-[1.4rem]">
          <img
            src={next.src}
            alt=""
            className="h-full w-[225px] max-w-none object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/60 to-white" />
        </div>

        {/* active screen */}
        <button
          onClick={advance}
          aria-label={`Currently showing ${current.label}. Tap for next screen.`}
          className="bouncy relative z-10 block w-full cursor-pointer hover:-translate-y-1"
        >
          <DeviceFrame type="phone" image={current.src} alt={current.label} />
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-semibold ink">{current.label}</p>
        <button
          onClick={advance}
          aria-label="Next screen"
          className="bouncy grid size-9 shrink-0 place-items-center rounded-full bg-[#0b1220] text-white hover:scale-110"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-3 flex gap-1.5">
        {slides.map((slide, i) => (
          <button
            key={slide.label}
            onClick={() => setIndex(i)}
            aria-label={`Show ${slide.label}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-6 bg-[#0b1220]" : "w-1.5 bg-[#0b1220]/25",
            )}
          />
        ))}
      </div>
    </div>
  );
}
