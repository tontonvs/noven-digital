import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — noven" },
      {
        name: "description",
        content:
          "Fullstack engineering, product design, mobile builds and ongoing support from noven.",
      },
      { property: "og:title", content: "Services — noven" },
      {
        property: "og:description",
        content: "Fullstack engineering, product design and platform builds.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    name: "Product design",
    desc: "Interfaces that feel considered — from wireframes to a polished, on-brand UI.",
  },
  {
    name: "Web engineering",
    desc: "Fast, modern marketing sites and web apps built with React, TypeScript and Tailwind.",
  },
  {
    name: "Mobile & offline-first apps",
    desc: "Cross-platform apps with Capacitor that stay usable even with patchy connectivity.",
  },
  {
    name: "Backend & data",
    desc: "Supabase and PostgreSQL-backed systems with row-level security done right.",
  },
  {
    name: "AI-assisted development",
    desc: "Agentic workflows that speed up iteration without skipping review or QA.",
  },
  {
    name: "Support & growth",
    desc: "Ongoing maintenance, fixes and feature work after launch.",
  },
];

function ServicesPage() {
  return (
    <PageShell
      eyebrow="What we do"
      title="Services"
      intro="End-to-end fullstack development — from first sketch to a live, maintained product."
    >
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <GlassCard
            key={s.name}
            shape={(["a", "b", "c", "pill"] as const)[i % 4]}
            className="min-h-44"
          >
            <p className="text-xs text-muted-foreground">0{i + 1}</p>
            <h2 className="mt-3 text-xl font-bold">{s.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
