import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
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

function Index() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-2 z-50 rounded-[2rem] border-[3.7px] border-white/30 sm:inset-3" />
      <div className="fixed inset-0 -z-10 bg-background aura" />

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-24 md:pl-24">
        <Hero
          title={
            <>
              We build the
              <br />
              software you were
              <br />
              meant to be.
            </>
          }
          primaryCta="Start a project"
          secondaryCta="See our work"
          statValue="3"
          statLabel="Products shipped"
          noteTitle="A fullstack studio"
          noteBody="Product design, engineering and mobile builds — end to end, from Accra."
        />

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
      </main>
    </div>
  );
}
