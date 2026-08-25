import { cn } from "@/lib/utils";

export type Tool = { name: string; icon: string };

/**
 * The same frosted-glass surface used on the homepage's Services teaser
 * card, as a plain rounded rectangle holding every tool/language logo for
 * a project. Icons sit greyscale by default and pop into full brand
 * colour with a slight enlarge on hover.
 */
export function ToolGrid({ tools, className }: { tools: Tool[]; className?: string }) {
  return (
    <div
      className={cn(
        "glass-frost flex flex-wrap items-center justify-center gap-3 rounded-3xl p-6 shadow-[var(--shadow-float)] sm:gap-4",
        className,
      )}
    >
      {tools.map((tool) => (
        <div key={tool.name} className="group flex flex-col items-center gap-2" title={tool.name}>
          <img
            src={tool.icon}
            alt={tool.name}
            className="h-12 w-12 grayscale transition-all duration-300 group-hover:scale-125 group-hover:grayscale-0 sm:h-14 sm:w-14"
          />
          <span className="text-[10px] font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
}
