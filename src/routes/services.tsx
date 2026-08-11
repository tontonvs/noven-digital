import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — to be studios" },
      {
        name: "description",
        content:
          "Fullstack engineering, product design, platform builds and ongoing support from to be studios.",
      },
      { property: "og:title", content: "Services — to be studios" },
      {
        property: "og:description",
        content: "Fullstack engineering, product design and platform builds.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = ["Product design", "Web engineering", "Mobile & PWA", "Cloud & APIs", "AI features", "Support & growth"];

function ServicesPage() {
  return (
    <PageShell
      eyebrow="What we do"
      title="Services"
      intro="Placeholder overview of the studio's capabilities."
    >
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <GlassCard
            key={s}
            shape={(["a", "b", "c", "pill"] as const)[i % 4]}
            className="min-h-44"
          >
            <p className="text-xs text-muted-foreground">0{i + 1}</p>
            <h2 className="mt-3 text-xl font-bold">{s}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Placeholder description.</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
