import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function DesignShowcase({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + images.length) % images.length);
  const next = () => setActive((i) => (i + 1) % images.length);

  // Gentle auto-advance
  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  const [top, sideA, sideB, bottom] = images;

  return (
    <div className="relative rounded-[2.5rem] border border-border bg-secondary/40 p-5 sm:p-7">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-[1fr_auto_1.2fr]">
        {/* Left stack */}
        <div className="grid grid-rows-[1fr_1fr_1fr] gap-3">
          {top && (
            <button
              onClick={() => setActive(0)}
              className={`overflow-hidden rounded-[1.5rem] border-4 transition-all ${active === 0 ? "border-primary" : "border-transparent"}`}
            >
              <img src={top.src} alt={top.alt} className="h-20 w-full object-cover sm:h-24" />
            </button>
          )}
          <div className="grid grid-cols-2 gap-3">
            {sideA && (
              <button
                onClick={() => setActive(1)}
                className={`overflow-hidden rounded-[1.5rem] border-4 transition-all ${active === 1 ? "border-primary" : "border-transparent"}`}
              >
                <img src={sideA.src} alt={sideA.alt} className="h-20 w-full object-cover sm:h-24" />
              </button>
            )}
            {sideB && (
              <button
                onClick={() => setActive(2)}
                className={`overflow-hidden rounded-[1.5rem] border-4 transition-all ${active === 2 ? "border-primary" : "border-transparent"}`}
              >
                <img src={sideB.src} alt={sideB.alt} className="h-20 w-full object-cover sm:h-24" />
              </button>
            )}
          </div>
          {bottom && (
            <button
              onClick={() => setActive(3)}
              className={`overflow-hidden rounded-[1.5rem] border-4 transition-all ${active === 3 ? "border-primary" : "border-transparent"}`}
            >
              <img src={bottom.src} alt={bottom.alt} className="h-20 w-full object-cover sm:h-24" />
            </button>
          )}
        </div>

        {/* Nav buttons, flanking the stack at mid-height */}
        <div className="hidden flex-col items-center justify-center gap-3 sm:flex">
          <button
            onClick={prev}
            aria-label="Previous design"
            className="bouncy grid size-10 place-items-center rounded-full bg-card shadow-md hover:scale-110"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            aria-label="Next design"
            className="bouncy grid size-10 place-items-center rounded-full bg-card shadow-md hover:scale-110"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Large preview */}
        <div className="overflow-hidden rounded-[1.75rem]">
          <img
            key={active}
            src={images[active]?.src}
            alt={images[active]?.alt ?? ""}
            className="pop-in h-64 w-full object-cover sm:h-full"
          />
        </div>
      </div>
    </div>
  );
}
