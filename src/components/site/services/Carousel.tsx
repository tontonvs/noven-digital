import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function Carousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const next = (index + 1) % images.length;

  return (
    <div className="relative aspect-[9/20] w-full max-w-[280px] overflow-hidden rounded-[2rem] shadow-[var(--shadow-float)]">
      <img
        key={index}
        src={images[index]}
        alt={`${alt} — screen ${index + 1}`}
        className="pop-in size-full object-cover"
      />

      {/* Next-image preview peeking from the right edge, under a white fade */}
      <button
        onClick={() => setIndex(next)}
        aria-label="Next screen"
        className="group absolute inset-y-0 right-0 w-20 overflow-hidden"
      >
        <img
          src={images[next]}
          alt=""
          aria-hidden
          className="size-full object-cover"
        />
        {/* Fade: mostly white near the outer edge, softening toward the visible image */}
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/70 to-transparent transition-opacity group-hover:from-white/40 group-hover:via-white/10" />
        <span className="absolute right-2 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full bg-white text-foreground shadow-md">
          <ChevronRight size={16} />
        </span>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to screen ${i + 1}`}
            className={`size-1.5 rounded-full transition-all ${i === index ? "w-4 bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
