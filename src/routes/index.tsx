import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "noven — Fullstack Dev Studio in Ghana" },
      {
        name: "description",
        content:
          "noven is a Ghana-based fullstack development studio building offline-first mobile apps, modern websites and digital products.",
      },
      { property: "og:title", content: "noven — Fullstack Dev Studio in Ghana" },
      {
        property: "og:description",
        content: "Offline-first apps and modern web products, built in Accra.",
      },
    ],
  }),
  component: Index,
});

const stats = [
  { value: "3", label: "Products shipped" },
  { value: "100%", label: "Custom-built" },
  { value: "GH", label: "Based in Accra" },
];

function Index() {
  return (
    <PageShell
      eyebrow="Accra, Ghana"
      title="We build the software you were meant to be."
      intro="noven is a fullstack studio crafting products end to end — offline-first mobile apps, marketing sites and platforms, built with React, TypeScript and Supabase."
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
          <h2 className="text-2xl font-bold">Grace Connect</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            An offline-first community app for churches to chat, share and stay connected —
            built with React, TypeScript, Capacitor and Supabase.
          </p>
        </GlassCard>
        <GlassCard shape="b" className="min-h-56">
          <h2 className="text-xl font-bold">How we build</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            We pair with AI coding agents to move fast without cutting corners — every diff
            reviewed, every decision ours.
          </p>
        </GlassCard>
      </div>
    </PageShell>
  );
}
