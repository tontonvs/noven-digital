import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Slide = { image: string; title: string; description: string };

/**
 * Feature slideshow used for the Yoglait staff-dashboard features (location
 * tracking, admin, history log). Each image gets a dark scrim cut into its
 * left edge with the feature name and a line of description sitting on top.
 * Auto-advances, with dots to jump to a specific slide.
 */
export function FeatureSlide({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4200);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] shadow-[0_25px_60px_-25px_rgba(11,18,32,0.3)]">
      <div className="relative aspect-[4/3] w-full sm:aspect-[16/11]">
        {slides.map((slide, i) => (
          <img
            key={slide.title}
            src={slide.image}
            alt={slide.title}
            className={cn(
              "absolute inset-0 size-full object-cover object-top transition-opacity duration-700",
              index === i ? "opacity-100" : "opacity-0",
            )}
          />
        ))}

        {/* cutout scrim — text sits on top of it, at the left */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[62%] bg-gradient-to-r from-[#0b1220]/85 via-[#0b1220]/55 to-transparent sm:w-[52%]" />

        <div className="absolute inset-y-0 left-0 flex w-[62%] flex-col justify-end p-4 sm:w-[52%] sm:p-6">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              className={cn(
                "transition-opacity duration-700",
                index === i ? "opacity-100" : "pointer-events-none absolute opacity-0",
              )}
            >
              <p className="text-base font-bold text-white sm:text-lg">{slide.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-white/80 sm:text-sm">
                {slide.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-3 right-4 flex gap-1.5 sm:bottom-4 sm:right-5">
        {slides.map((slide, i) => (
          <button
            key={slide.title}
            onClick={() => setIndex(i)}
            aria-label={`Show ${slide.title}`}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              i === index ? "w-5 bg-white" : "w-1.5 bg-white/40",
            )}
          />
        ))}
      </div>
    </div>
  );
}
