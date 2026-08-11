import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — to be studios" },
      {
        name: "description",
        content: "Selected projects and case studies from the to be studios team.",
      },
      { property: "og:title", content: "Work — to be studios" },
      { property: "og:description", content: "Selected projects and case studies." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <PageShell
      eyebrow="Selected projects"
      title="Work"
      intro="Case studies will live here."
    >
      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <GlassCard
            key={i}
            shape={(["b", "a", "c", "pill"] as const)[i % 4]}
            className={i % 3 === 0 ? "min-h-72" : "min-h-52"}
          >
            <div className="mb-4 h-24 blob-a bg-glass-strong" />
            <h2 className="text-lg font-bold">Project {i + 1}</h2>
            <p className="mt-1 text-sm text-muted-foreground">Placeholder case study.</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
