import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Card = { src: string; alt: string; title: string; description: string };

/**
 * A fanned stack of screenshots, cascading left to right like cards dealt
 * across a table. The active card sits rightmost and on top; picking a
 * card (or using the arrows) brings it to the front, and the whole stack
 * re-fans around it. A caption below crossfades to match. Auto-advances
 * slowly when left alone.
 */
export function CardFanCarousel({ cards }: { cards: Card[] }) {
  const [active, setActive] = useState(cards.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + cards.length) % cards.length);

  return (
    <div>
      <div className="relative mx-auto h-[280px] w-full max-w-md sm:h-[340px]">
        {cards.map((card, i) => {
          const isActive = i === active;
          const offset = i - active;
          return (
            <button
              key={card.title}
              onClick={() => setActive(i)}
              aria-label={`Show ${card.title}`}
              className={cn(
                "bouncy absolute left-1/2 top-1/2 aspect-[9/17] w-[150px] overflow-hidden rounded-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out sm:w-[180px]",
                isActive ? "z-30 opacity-100" : "z-10 opacity-70 hover:opacity-90",
              )}
              style={{
                transform: `translate(calc(-50% + ${i * 34}px), calc(-50% + ${i * 10}px)) ${
                  isActive ? "scale(1.08)" : "scale(0.94)"
                }`,
                zIndex: isActive ? 30 : 10 + i,
              }}
            >
              <img src={card.src} alt={card.alt} className="size-full object-cover" />
              {offset !== 0 ? <div className="absolute inset-0 bg-[#0b1220]/25" /> : null}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto mt-8 max-w-md text-center">
        {cards.map((card, i) => (
          <div
            key={card.title}
            className={cn(
              "transition-opacity duration-500",
              i === active ? "opacity-100" : "pointer-events-none absolute inset-0 opacity-0",
            )}
          >
            <p className="text-base font-bold text-white">{card.title}</p>
            <p className="mt-2 text-[13px] leading-[1.8] text-white/70">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button
          onClick={() => go(-1)}
          aria-label="Previous screen"
          className="bouncy grid size-9 place-items-center rounded-full bg-white/10 text-white hover:scale-110 hover:bg-white/20"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="flex gap-1.5">
          {cards.map((card, i) => (
            <button
              key={card.title}
              onClick={() => setActive(i)}
              aria-label={`Show ${card.title}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === active ? "w-5 bg-white" : "w-1.5 bg-white/30",
              )}
            />
          ))}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next screen"
          className="bouncy grid size-9 place-items-center rounded-full bg-white/10 text-white hover:scale-110 hover:bg-white/20"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
