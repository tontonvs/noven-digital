import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "to be studios — Fullstack Dev Studio in Ghana" },
      {
        name: "description",
        content:
          "to be studios is a Ghana-based fullstack development studio building modern web products, platforms and digital experiences.",
      },
      { property: "og:title", content: "to be studios — Fullstack Dev Studio in Ghana" },
      {
        property: "og:description",
        content: "Modern web products, platforms and digital experiences, built in Accra.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "00+", label: "Projects shipped" },
  { value: "00", label: "Clients worldwide" },
  { value: "00y", label: "Years building" },
];

function Index() {
  return (
    <PageShell
      eyebrow="Accra, Ghana"
      title="We build the software you were meant to be."
      intro="Placeholder intro copy. A fullstack studio crafting products end to end — strategy, design, engineering."
    >
      <div className="mt-10 flex flex-wrap gap-3">
        <button className="blob-pill bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
          Start a project
        </button>
        <button className="glass-panel blob-pill px-7 py-3 text-sm font-semibold transition-transform hover:-translate-y-0.5">
          See our work
        </button>
      </div>

      <div className="mt-16 grid gap-5 sm:grid-cols-3">
        {stats.map((s, i) => (
          <GlassCard
            key={s.label}
            shape={(["a", "b", "c"] as const)[i]}
            float={i === 1}
            className="min-h-36"
          >
            <p className="font-display text-4xl font-bold text-primary">{s.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-[1.4fr_1fr]">
        <GlassCard shape="c" strong className="min-h-56">
          <h2 className="text-2xl font-bold">Featured placeholder</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Content for this panel is coming soon.
          </p>
        </GlassCard>
        <GlassCard shape="b" className="min-h-56">
          <h2 className="text-xl font-bold">Latest note</h2>
          <p className="mt-3 text-sm text-muted-foreground">Placeholder feed item.</p>
        </GlassCard>
      </div>
    </PageShell>
  );
}
