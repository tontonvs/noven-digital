import { cn } from "@/lib/utils";

export type Tool = { name: string; icon: string };

/**
 * 3-column grid of tool/language logos. Greyscale by default, full brand
 * colour + a slight lift on hover.
 */
export function ToolGrid({ tools, className }: { tools: Tool[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-3 gap-3", className)}>
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="group flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-card p-3 shadow-sm ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
          title={tool.name}
        >
          <img
            src={tool.icon}
            alt={tool.name}
            className="h-7 w-7 grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0 sm:h-8 sm:w-8"
          />
          <span className="text-[10px] font-medium text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {tool.name}
          </span>
        </div>
      ))}
    </div>
  );
}
