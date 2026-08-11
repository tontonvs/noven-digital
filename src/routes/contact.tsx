import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — noven" },
      {
        name: "description",
        content: "Get in touch with noven to scope your next fullstack project.",
      },
      { property: "og:title", content: "Contact — noven" },
      { property: "og:description", content: "Get in touch to scope your next project." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Say hello"
      title="Contact"
      intro="Tell us about your project and we'll get back to you."
    >
      <div className="mt-14 grid gap-5 md:grid-cols-[1.2fr_1fr]">
        <GlassCard shape="a" strong className="min-h-72">
          <h2 className="text-xl font-bold">Start a conversation</h2>
          <div className="mt-5 grid gap-3">
            <div className="h-11 blob-pill bg-glass-strong" />
            <div className="h-11 blob-pill bg-glass-strong" />
            <div className="h-28 blob-b bg-glass-strong" />
            <button className="blob-pill bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
              Send (form wiring coming next)
            </button>
          </div>
        </GlassCard>
        <div className="grid gap-5">
          <GlassCard shape="c">
            <h2 className="text-lg font-bold">Studio</h2>
            <p className="mt-2 text-sm text-muted-foreground">Accra, Ghana</p>
            <p className="mt-1 text-sm text-muted-foreground">mensahkbiz@gmail.com</p>
            <p className="mt-1 text-sm text-muted-foreground">+233 548 456 600</p>
          </GlassCard>
          <GlassCard shape="b" float>
            <h2 className="text-lg font-bold">Elsewhere</h2>
            <p className="mt-2 text-sm text-muted-foreground">github.com/tontonvs</p>
            <p className="mt-1 text-sm text-muted-foreground">linkedin.com/in/tonton-mensah</p>
          </GlassCard>
        </div>
      </div>
    </PageShell>
  );
}
