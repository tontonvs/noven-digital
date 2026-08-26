import { cn } from "@/lib/utils";

export type Tool = { name: string; icon: string };

/**
 * The same frosted-glass surface used on the homepage's Services teaser
 * card, as a plain rounded rectangle. Tools sit in a fixed-column grid so
 * they fill the whole card evenly (never a lone item stranded on its own
 * row). Greyscale-to-colour only kicks in on devices that actually
 * support hover — touchscreens just show full colour straight away.
 */
export function ToolGrid({ tools, className }: { tools: Tool[]; className?: string }) {
  return (
    <div
      className={cn(
        "glass-frost grid grid-cols-3 gap-x-4 gap-y-6 rounded-3xl p-6 shadow-[var(--shadow-float)]",
        className,
      )}
    >
      {tools.map((tool) => (
        <div key={tool.name} className="group flex flex-col items-center gap-2" title={tool.name}>
          <img
            src={tool.icon}
            alt={tool.name}
            className="h-11 w-11 transition-all duration-300 [@media(hover:hover)]:grayscale [@media(hover:hover)]:group-hover:scale-125 [@media(hover:hover)]:group-hover:grayscale-0 sm:h-14 sm:w-14"
          />
          <span className="text-[10px] font-medium text-white/70 opacity-0 transition-opacity duration-300 [@media(hover:hover)]:group-hover:opacity-100">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
}
