import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Card = { src: string; alt: string; title: string; description: string };

/**
 * A fanned stack of screenshots. Whichever card is active always renders
 * at the same canonical top-front spot (so it never dips down into
 * whatever sits below the carousel) — the rest cascade behind and below
 * it, fanned out by their distance from the active card, not their raw
 * position in the array. Picking a card, the arrows, or the auto-advance
 * timer all just change which one is active.
 */
export function CardFanCarousel({
  cards,
  hideCaption = false,
  className,
  cardClassName = "aspect-[9/17] w-[150px] sm:w-[180px]",
  stackHeightClassName = "h-[330px] sm:h-[400px]",
  stackWidthClassName = "max-w-md",
}: {
  cards: Card[];
  hideCaption?: boolean;
  className?: string;
  /** Aspect ratio + width classes for each card — override for landscape screenshots. */
  cardClassName?: string;
  /** Height of the stacking area — should comfortably fit the tallest cascaded card. */
  stackHeightClassName?: string;
  /** Max width of the stacking area — widen for landscape cards with more horizontal spread. */
  stackWidthClassName?: string;
}) {
  const [active, setActive] = useState(cards.length - 1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % cards.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [cards.length]);

  const go = (dir: 1 | -1) => setActive((a) => (a + dir + cards.length) % cards.length);

  return (
    <div className={className}>
      <div className={cn("relative mx-auto w-full", stackHeightClassName, stackWidthClassName)}>
        {cards.map((card, i) => {
          const isActive = i === active;
          // distance from the active card, wrapped the short way round
          let offset = i - active;
          if (offset > cards.length / 2) offset -= cards.length;
          if (offset < -cards.length / 2) offset += cards.length;

          const dx = offset * 34;
          const dy = isActive ? 0 : 14 + Math.abs(offset) * 8;
          const scale = isActive ? 1.06 : 0.92 - Math.abs(offset) * 0.03;

          return (
            <button
              key={card.title}
              onClick={() => setActive(i)}
              aria-label={`Show ${card.title}`}
              className={cn(
                "bouncy absolute left-1/2 top-0 overflow-hidden rounded-2xl shadow-[0_20px_45px_-15px_rgba(0,0,0,0.5)] transition-all duration-700 ease-in-out",
                cardClassName,
                isActive ? "opacity-100" : "opacity-70 hover:opacity-90",
              )}
              style={{
                transform: `translateX(calc(-50% + ${dx}px)) translateY(${dy}px) scale(${scale})`,
                zIndex: isActive ? 30 : 20 - Math.abs(offset),
              }}
            >
              <img src={card.src} alt={card.alt} className="size-full object-cover" />
              {isActive ? null : <div className="absolute inset-0 bg-[#0b1220]/25" />}
            </button>
          );
        })}
      </div>

      {!hideCaption && (
        <div className={cn("relative mx-auto mt-8 text-center", stackWidthClassName)}>
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
      )}

      <div className={cn("flex items-center justify-center gap-3", hideCaption ? "mt-8" : "mt-6")}>
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
