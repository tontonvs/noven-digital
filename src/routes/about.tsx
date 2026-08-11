import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — to be studios" },
      {
        name: "description",
        content:
          "to be studios is a fullstack development studio based in Ghana, building for clients worldwide.",
      },
      { property: "og:title", content: "About — to be studios" },
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
      intro="Placeholder studio story."
    >
      <div className="mt-14 grid gap-5 md:grid-cols-[1fr_1fr]">
        <GlassCard shape="a" strong className="min-h-60">
          <h2 className="text-2xl font-bold">Our approach</h2>
          <p className="mt-3 text-sm text-muted-foreground">Placeholder text.</p>
        </GlassCard>
        <div className="grid gap-5">
          <GlassCard shape="b" float>
            <h2 className="text-lg font-bold">Based in Accra</h2>
            <p className="mt-2 text-sm text-muted-foreground">Working worldwide.</p>
          </GlassCard>
          <GlassCard shape="c">
            <h2 className="text-lg font-bold">The team</h2>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder bios.</p>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}
