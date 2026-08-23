import { cn } from "@/lib/utils";

type DeviceType = "phone" | "laptop" | "tablet";

/**
 * Minimal, CSS-only Apple-style device frames (no external mockup images).
 * Built to hold a single screenshot per device, cropped to the top so the
 * most relevant part of a long page stays visible.
 */
export function DeviceFrame({
  type,
  image,
  alt,
  className,
}: {
  type: DeviceType;
  image: string;
  alt: string;
  className?: string;
}) {
  if (type === "phone") {
    return (
      <div className={cn("relative w-full", className)}>
        <div className="relative aspect-[9/19] w-full overflow-hidden rounded-[2rem] border-[5px] border-[#0b1220] bg-[#0b1220] shadow-[0_25px_50px_-20px_rgba(11,18,32,0.45)]">
          <div className="absolute left-1/2 top-0 z-10 h-4 w-16 -translate-x-1/2 rounded-b-lg bg-[#0b1220]" />
          <img src={image} alt={alt} className="size-full object-cover object-top" />
        </div>
      </div>
    );
  }

  if (type === "tablet") {
    return (
      <div className={cn("relative w-full", className)}>
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[1.4rem] border-[9px] border-[#0b1220] bg-[#0b1220] shadow-[0_25px_50px_-20px_rgba(11,18,32,0.45)]">
          <div className="absolute left-1/2 top-1 z-10 size-1.5 -translate-x-1/2 rounded-full bg-[#3a3f4a]" />
          <img src={image} alt={alt} className="size-full object-cover object-top" />
        </div>
      </div>
    );
  }

  // laptop
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative aspect-[16/10.4] w-full overflow-hidden rounded-t-[0.9rem] rounded-b-sm border-[7px] border-b-2 border-[#0b1220] bg-[#0b1220]">
        <div className="absolute left-1/2 top-0.5 z-10 size-1 -translate-x-1/2 rounded-full bg-[#3a3f4a]" />
        <img src={image} alt={alt} className="size-full object-cover object-top" />
      </div>
      <div className="relative mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-xl bg-gradient-to-b from-[#d7dbe2] to-[#aab1bd] shadow-[0_6px_14px_-6px_rgba(11,18,32,0.4)]">
        <div className="absolute left-1/2 top-0 h-1 w-10 -translate-x-1/2 rounded-b-sm bg-[#9aa1ad]" />
      </div>
    </div>
  );
}
