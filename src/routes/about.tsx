import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — noven" },
      {
        name: "description",
        content:
          "noven is a fullstack development studio based in Ghana, building for clients worldwide.",
      },
      { property: "og:title", content: "About — noven" },
      { property: "og:description", content: "A fullstack development studio based in Ghana." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell
      eyebrow="Who we are"
      title="About the studio"
      intro="We build software the way we'd want to use it — fast, considered, and built to last past launch day."
    >
      <div className="mt-14 grid gap-5 md:grid-cols-[1fr_1fr]">
        <GlassCard shape="a" strong className="min-h-60">
          <h2 className="text-2xl font-bold">Our approach</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            We work agentically, directing AI coding agents through real feature development,
            debugging and iterative design — while staying the ones reviewing every diff and
            deciding what's actually correct. It's a workflow, not a shortcut: it lets us move
            through more iteration per session without cutting quality.
          </p>
        </GlassCard>
        <div className="grid gap-5">
          <GlassCard shape="b" float>
            <h2 className="text-lg font-bold">Based in Accra</h2>
            <p className="mt-2 text-sm text-muted-foreground">Working worldwide.</p>
          </GlassCard>
          <GlassCard shape="c">
            <h2 className="text-lg font-bold">The stack</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              React, TypeScript, Tailwind, Supabase and Capacitor — for web and mobile alike.
            </p>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}
