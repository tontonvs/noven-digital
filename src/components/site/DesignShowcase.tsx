import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ShowcaseImage = { src: string; label: string };

/**
 * Product Design showcase: a rounded card with 4 stacked thumbnails on the
 * left (long / two-square / long) and one large preview on the right.
 * Tapping a thumbnail — or the two circular nav buttons — swaps the big
 * preview. Auto-advances on a timer when idle.
 */
export function DesignShowcase({
  images,
}: {
  images: [ShowcaseImage, ShowcaseImage, ShowcaseImage, ShowcaseImage, ShowcaseImage];
}) {
  const [active, setActive] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + images.length) % images.length);

  const thumbClass = (i: number) =>
    cn(
      "group relative overflow-hidden border-4 border-card outline outline-2 -outline-offset-2 transition",
      active === i ? "outline-foreground" : "outline-transparent hover:outline-foreground/30",
    );

  return (
    <div className="relative rounded-[2.25rem] bg-card p-4 shadow-[0_30px_70px_-30px_rgba(11,18,32,0.2)] ring-1 ring-black/5 sm:p-6">
      <div className="grid grid-cols-[1fr_1.15fr] gap-3 sm:gap-5">
        {/* left stack: long / two squares / long */}
        <div className="grid grid-rows-[auto_auto_auto] gap-3">
          <button
            onClick={() => setActive(0)}
            className={cn(thumbClass(0), "h-16 w-full rounded-[1.4rem] sm:h-20")}
          >
            <img src={images[0].src} alt={images[0].label} className="size-full object-cover" />
          </button>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setActive(1)}
              className={cn(thumbClass(1), "aspect-square rounded-[1.2rem]")}
            >
              <img src={images[1].src} alt={images[1].label} className="size-full object-cover" />
            </button>
            <button
              onClick={() => setActive(2)}
              className={cn(thumbClass(2), "aspect-square rounded-[1.2rem]")}
            >
              <img src={images[2].src} alt={images[2].label} className="size-full object-cover" />
            </button>
          </div>

          <button
            onClick={() => setActive(3)}
            className={cn(thumbClass(3), "h-16 w-full rounded-[1.4rem] sm:h-20")}
          >
            <img src={images[3].src} alt={images[3].label} className="size-full object-cover" />
          </button>
        </div>

        {/* right: large active preview */}
        <div className="relative overflow-hidden rounded-[1.6rem] bg-muted">
          {images.map((img, i) => (
            <img
              key={img.label}
              src={img.src}
              alt={img.label}
              className={cn(
                "absolute inset-0 size-full object-cover transition-opacity duration-700",
                active === i ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
        </div>
      </div>

      {/* prev / next hint buttons, sitting on the seam between stack and preview */}
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[calc(46%+1.5rem)] items-center justify-between px-1.5 sm:flex">
        <button
          onClick={() => go(-1)}
          aria-label="Previous design"
          className="bouncy pointer-events-auto grid size-10 -translate-x-1/2 place-items-center rounded-full bg-white text-[#0b1220] shadow-md ring-1 ring-black/10 hover:scale-110"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => go(1)}
          aria-label="Next design"
          className="bouncy pointer-events-auto grid size-10 translate-x-1/2 place-items-center rounded-full bg-white text-[#0b1220] shadow-md ring-1 ring-black/10 hover:scale-110"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between sm:hidden">
        <button
          onClick={() => go(-1)}
          aria-label="Previous design"
          className="bouncy grid size-9 place-items-center rounded-full bg-foreground text-background hover:scale-110"
        >
          <ChevronLeft size={15} />
        </button>
        <p className="text-xs font-medium ink-soft">{images[active]!.label}</p>
        <button
          onClick={() => go(1)}
          aria-label="Next design"
          className="bouncy grid size-9 place-items-center rounded-full bg-foreground text-background hover:scale-110"
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  );
}
