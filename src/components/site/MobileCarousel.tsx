import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = { src: string; label: string };

/**
 * Carousel used in the "Mobile apps" service block. The source photos
 * already have a real phone frame baked in (not a CSS mockup), so the
 * corners are just clipped round here rather than re-framed. Slides
 * auto-advance slowly and crossfade smoothly instead of cutting instantly.
 */
export function MobileCarousel({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const current = slides[index]!;
  const next = slides[(index + 1) % slides.length]!;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const advance = () => setIndex((i) => (i + 1) % slides.length);

  return (
    <div className="relative mx-auto w-full max-w-[158px]">
      <div className="relative">
        {/* peeking next screen */}
        <div className="pointer-events-none absolute inset-y-4 -right-5 z-0 w-12 overflow-hidden rounded-[1.1rem]">
          <img
            src={next.src}
            alt=""
            className="h-full w-[158px] max-w-none object-cover object-top transition-opacity duration-1000 ease-in-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-card/5 via-card/60 to-card" />
        </div>

        {/* active screen — all slides stacked, crossfading between them */}
        <button
          onClick={advance}
          aria-label={`Currently showing ${current.label}. Tap for next screen.`}
          className="bouncy relative z-10 block aspect-[9/19.2] w-full cursor-pointer overflow-hidden rounded-[1.4rem] shadow-[0_25px_50px_-20px_rgba(11,18,32,0.45)] hover:-translate-y-1"
        >
          {slides.map((slide, i) => (
            <img
              key={slide.label}
              src={slide.src}
              alt={slide.label}
              className={cn(
                "absolute inset-0 size-full object-contain transition-opacity duration-[1400ms] ease-in-out",
                i === index ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </button>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-sm font-semibold ink transition-all duration-500">{current.label}</p>
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
              "h-1.5 rounded-full transition-all duration-700 ease-in-out",
              i === index ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25",
            )}
          />
        ))}
      </div>
    </div>
  );
}
