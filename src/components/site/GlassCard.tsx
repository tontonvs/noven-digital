import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Shape = "a" | "b" | "c" | "pill";

const shapes: Record<Shape, string> = {
  a: "blob-a",
  b: "blob-b",
  c: "blob-c",
  pill: "blob-pill",
};

export function GlassCard({
  children,
  className,
  shape = "a",
  strong = false,
  float = false,
}: {
  children: ReactNode;
  className?: string;
  shape?: Shape;
  strong?: boolean;
  float?: boolean;
}) {
  return (
    <div
      className={cn(
        strong ? "glass-panel-strong" : "glass-panel",
        shapes[shape],
        float && "float-slow",
        "p-6 transition-transform duration-500 hover:-translate-y-1",
        className,
      )}
    >
      {children}
    </div>
  );
}
