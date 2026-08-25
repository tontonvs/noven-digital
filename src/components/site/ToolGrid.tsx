import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/utils";

export type Tool = { name: string; icon: string };

/**
 * A single glass card (same component used on the homepage) holding every
 * tool/language logo for a project. Icons sit greyscale by default and pop
 * into full brand colour with a slight enlarge on hover.
 */
export function ToolGrid({ tools, className }: { tools: Tool[]; className?: string }) {
  return (
    <GlassCard
      shape="a"
      className={cn("flex flex-wrap items-center justify-center gap-6 sm:gap-8", className)}
    >
      {tools.map((tool) => (
        <div key={tool.name} className="group flex flex-col items-center gap-2" title={tool.name}>
          <img
            src={tool.icon}
            alt={tool.name}
            className="h-12 w-12 grayscale transition-all duration-300 group-hover:scale-125 group-hover:grayscale-0 sm:h-14 sm:w-14"
          />
          <span className="text-[10px] font-medium ink-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {tool.name}
          </span>
        </div>
      ))}
    </GlassCard>
  );
}
