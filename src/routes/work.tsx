import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — noven" },
      {
        name: "description",
        content: "Selected projects and case studies from the noven team.",
      },
      { property: "og:title", content: "Work — noven" },
      { property: "og:description", content: "Selected projects and case studies." },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    name: "Grace Connect",
    tag: "Mobile App",
    desc: "An offline-first community app for churches to chat, share and stay connected.",
    shape: "b" as const,
    tall: true,
  },
  {
    name: "Labianca Frost",
    tag: "Marketing Website",
    desc: "A modern marketing site for a Ghanaian frozen foods company, built for clarity and a premium feel.",
    shape: "a" as const,
    tall: false,
  },
  {
    name: "More on the way",
    tag: "In progress",
    desc: "New case studies are being added as they ship — check back soon.",
    shape: "c" as const,
    tall: false,
  },
];

function WorkPage() {
  return (
    <PageShell
      eyebrow="Selected projects"
      title="Work"
      intro="A few things we've shipped recently."
    >
      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        {projects.map((p) => (
          <GlassCard
            key={p.name}
            shape={p.shape}
            className={p.tall ? "min-h-72" : "min-h-52"}
          >
            <div className="mb-4 h-24 blob-a bg-glass-strong" />
            <p className="text-xs text-muted-foreground">{p.tag}</p>
            <h2 className="mt-1 text-lg font-bold">{p.name}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
          </GlassCard>
        ))}
      </div>
    </PageShell>
  );
}
