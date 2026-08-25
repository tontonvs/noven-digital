import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = { src: string; label: string };

/**
 * Carousel used in the "Mobile apps" service block. The source photos
 * already have a real phone frame baked in (not a CSS mockup), so they're
 * rendered as-is here, uncropped, with no extra device frame on top.
 */
export function MobileCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const current = slides[index]!;

  const advance = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative mx-auto w-full max-w-[158px]">
      <button
        onClick={advance}
        aria-label={`Currently showing ${current.label}. Tap for next screen.`}
        className="bouncy block w-full cursor-pointer hover:-translate-y-1"
      >
        <img
          src={current.src}
          alt={current.label}
          className="w-full object-contain drop-shadow-[0_25px_50px_rgba(11,18,32,0.35)]"
        />
      </button>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-semibold ink">{current.label}</p>
        <button
          onClick={advance}
          aria-label="Next screen"
          className="bouncy grid size-9 shrink-0 place-items-center rounded-full bg-foreground text-background hover:scale-110"
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
              i === index ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25",
            )}
          />
        ))}
      </div>
    </div>
  );
}
