import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Bot, Cloud, Palette, WifiOff } from "lucide-react";
import novenLogo from "@/assets/noven_logo.png";
import { PageShell } from "@/components/site/PageShell";
import { GlassCard } from "@/components/site/GlassCard";
import { ThreeUpMockup } from "@/components/site/services/DeviceMockups";
import { Carousel } from "@/components/site/services/Carousel";
import { DesignShowcase } from "@/components/site/services/DesignShowcase";
import { SupportFootnote } from "@/components/site/services/SupportFootnote";
import { ServerDbIllustration, AutomationIllustration } from "@/components/site/services/illustrations";
import labiancaHeroBrowser from "@/assets/work/labianca_hero_browser.jpg";
import labiancaContent from "@/assets/work/labianca_content.jpg";
import labiancaSolar from "@/assets/work/labianca_solar.png";
import graceHome from "@/assets/work/grace_home.jpg";
import graceChat from "@/assets/work/grace_chat.jpg";
import graceSettings from "@/assets/work/grace_settings.jpg";
import yoglaitHome from "@/assets/work/yoglait_home.png";

function useAverageColor(src: string) {
  const [color, setColor] = useState("rgba(255,255,255,0.5)");
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      try {
        const size = 16;
        const canvas = document.createElement("canvas");
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, size, size);
        const { data } = ctx.getImageData(0, 0, size, size);
        let r = 0, g = 0, b = 0, weight = 0;
        for (let i = 0; i < data.length; i += 4) {
          const a = (data[i + 3] ?? 0) / 255;
          r += (data[i] ?? 0) * a;
          g += (data[i + 1] ?? 0) * a;
          b += (data[i + 2] ?? 0) * a;
          weight += a;
        }
        if (weight === 0) return;
        setColor(`rgb(${Math.round(r / weight)}, ${Math.round(g / weight)}, ${Math.round(b / weight)})`);
      } catch {
        // canvas may be tainted if the source isn't same-origin — keep the fallback color
      }
    };
    img.src = src;
  }, [src]);
  return color;
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

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

const homeServices = [
  {
    Icon: WifiOff,
    label: "Offline-first mobile apps",
    detail:
      "Reliable apps that keep working smoothly even when connectivity drops, so your customers never feel the gap.",
  },
  {
    Icon: Palette,
    label: "Custom in-organisation software",
    detail: "Tools built around how your team actually operates, replacing manual processes with software that fits.",
  },
  {
    Icon: Cloud,
    label: "Cloud management services",
    detail: "We set up and maintain your cloud infrastructure so it stays fast, secure and always available.",
  },
  {
    Icon: Bot,
    label: "Agentic automation workflows",
    detail: "AI agents that handle repetitive tasks automatically, freeing your team to focus on real work.",
  },
];


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

const LOGO_SIZE = 86.4;

function Index() {
  const logoRingColor = useAverageColor(novenLogo);

  return (
    <>
      {/* ===== HOME ===== */}
      <main id="home" className="relative flex min-h-screen flex-col px-6 pb-10 pt-24 md:pl-28 md:pr-10">
        {/* Centered hero title */}
        <div className="pop-in mx-auto max-w-5xl shrink-0 text-center">
          <h1 className="font-notch font-bold leading-[0.95] text-white [text-shadow:0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="block text-[clamp(2rem,6vw,80px)]">Discovering innovative</span>
            <span className="block text-[clamp(1.9rem,5.6vw,75px)]">solutions &lt;/&gt;</span>
          </h1>
        </div>

        {/* Left supporting copy */}
        <p className="pop-in mt-6 max-w-md text-left text-[14px] font-medium leading-[1.7] text-white/90">
          Building engineering solutions to tackle your digital problems in the most effective and
          innovative way possible — not only to connect you and your clients (users), but to ensure
          ease and comfort of use through visually stunning design and interface, so you can focus
          on what truly matters. — noven
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Affordability Rule — floating card, separated from the bezel/dock, gently rounded */}
          <section className="pop-in relative flex min-w-0 w-full max-w-md flex-col rounded-3xl bg-card p-6 shadow-[var(--shadow-float)] backdrop-blur-xl transition-transform duration-300 [transform-style:preserve-3d] hover:[transform:perspective(800px)_rotateX(2deg)_rotateY(-3deg)]">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-left font-sans text-[20px] font-semibold text-card-foreground">
                # Affordability Rule
              </h2>
              <button
                onClick={() => scrollToSection("work")}
                aria-label="See our work"
                className="bouncy z-20 grid size-12 shrink-0 place-items-center rounded-full bg-foreground text-background hover:-translate-y-1 hover:scale-110"
              >
                <ArrowUpRight size={18} />
              </button>
            </div>

            <p className="mt-2.5 text-left text-[14px] leading-[1.7] text-muted-foreground">
              Putting our clients first is our foremost priority. Alongside connecting all of Africa
              and beyond, we eliminate digital roadblocks with swiftness and expert craftsmanship,
              worry-free of financial drawbacks.
            </p>

            <div className="mt-5 text-left">
              <p className="font-sans text-[clamp(2.2rem,4vw,55px)] font-bold leading-none text-card-foreground">
                <span className="glow-once">&lt;</span>₵5,000
              </p>
            </div>

            <p className="mt-1 text-left text-[13px] text-muted-foreground">
              get your website or app up and running for funds as low as{" "}
              <span className="whitespace-nowrap">
                <span className="font-bold text-foreground">₵630</span>–
                <span className="font-bold text-foreground">₵5,000</span>
              </span>
            </p>
          </section>

          {/* Services teaser card */}
          <div className="relative w-full max-w-lg lg:ml-auto">
            <section
              className="pop-in relative flex min-w-0 w-full flex-col glass-frost p-6 pb-16 shadow-[var(--shadow-float)] transition-transform duration-300 [transform-style:preserve-3d] hover:[transform:perspective(800px)_rotateX(2deg)_rotateY(-3deg)]"
              style={{
                borderTopLeftRadius: 24,
                borderTopRightRadius: 24,
                borderBottomRightRadius: 24,
                borderBottomLeftRadius: 96,
              }}
            >
              <h2 className="text-left font-sans text-[28px] font-bold text-white">Services</h2>

              <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                {homeServices.map(({ Icon, label, detail }) => (
                  <li key={label} className="flex items-start gap-2.5">
                    <Icon size={18} className="mt-0.5 shrink-0 text-white/60" />
                    <div>
                      <p className="text-[16px] font-semibold text-white">{label}</p>
                      <p className="mt-1 text-[11px] font-medium leading-[1.5] text-white/70">{detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* noven logo — sits astride the halo corner above */}
            <div
              className="absolute grid place-items-center overflow-hidden rounded-full backdrop-blur-xl"
              style={{
                width: `${LOGO_SIZE}px`,
                height: `${LOGO_SIZE}px`,
                border: `2px solid ${logoRingColor}`,
                bottom: "-20px",
                left: "-20px",
              }}
            >
              <img src={novenLogo} alt="noven" className="size-full object-cover" />
            </div>
          </div>
        </div>
      </main>

      {/* ===== SERVICES ===== */}
      <section id="services" className="relative" style={{ background: "#faf7f1", color: "#1a1a1a" }}>
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-32 md:pl-28">
          <p className="pop-in text-xs uppercase tracking-[0.35em] text-neutral-500">What we do</p>
          <h1 className="pop-in mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.95] text-neutral-900 sm:text-6xl md:text-7xl">
            Services
          </h1>
          <p className="pop-in mt-6 max-w-2xl text-[14px] leading-[1.7] text-neutral-600">
            End-to-end fullstack development from first sketch to a live, maintained product.
          </p>
          <p className="pop-in mt-4 max-w-2xl text-[20px] leading-[1.6] text-neutral-800">
            We offer the following services and a few more besides. Tell us what you're building
            and we'll figure out the right approach for your product and budget together.
          </p>

          {/* 1. Web engineering */}
          <div className="mt-24 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">Web engineering</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-neutral-600">
                We build fast, modern websites and web applications using React, TypeScript and
                Tailwind, engineered for speed, accessibility and a codebase your team can
                actually maintain.
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-neutral-600">
                Every project starts from how real users will move through it, not a template.
              </p>
            </div>
            <img
              src={labiancaHeroBrowser}
              alt="Labianca website, built by noven"
              className="w-full rounded-3xl shadow-[var(--shadow-float)]"
            />
          </div>

          <div className="mt-14">
            <ThreeUpMockup screenshot={labiancaContent} alt="Labianca website across devices" />
          </div>

          {/* 2. Mobile apps */}
          <div className="mt-28 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">Mobile apps</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-neutral-600">
                We build offline-first mobile apps that keep working smoothly even when
                connectivity drops, so your users never feel the gap. For one community app we
                built, members can chat, share updates and stay connected even with patchy data,
                syncing the moment a signal returns so nobody misses a conversation.
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-neutral-600">
                From onboarding to daily use, we design for the phone in someone's hand, not a
                desktop screen shrunk down.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <Carousel images={[graceHome, graceChat, graceSettings]} alt="Community app screens" />
            </div>
          </div>

          {/* 3. Backend & data */}
          <div className="mt-28 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">Backend &amp; data</h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-neutral-600">
                We design and maintain backend systems using Supabase and PostgreSQL, with row
                level security done properly from the start. That means your data stays
                organized, fast to query and genuinely secure as your product grows, without a
                rebuild every time you add a new feature. It is the unglamorous part of the
                stack, and it's where most shortcuts get taken. We don't take them.
              </p>
            </div>
            <div className="flex justify-center text-neutral-800">
              <ServerDbIllustration />
            </div>
          </div>

          {/* 4. Product design */}
          <div className="mt-28">
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">Product design</h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.75] text-neutral-600">
              Good design is not decoration, it is how your product earns trust in the first few
              seconds. We take every project from rough wireframes to a polished, on brand
              interface, testing real flows until it feels obvious rather than clever.
            </p>
            <div className="mt-8 text-neutral-900">
              <DesignShowcase
                images={[
                  { src: labiancaHeroBrowser, alt: "Labianca" },
                  { src: yoglaitHome, alt: "Yoglait" },
                  { src: graceChat, alt: "Community app chat" },
                  { src: labiancaSolar, alt: "Labianca solar energy page" },
                ]}
              />
            </div>
          </div>

          {/* 5. AI-assisted development */}
          <div className="mt-28 grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
                AI-assisted development
              </h2>
              <p className="mt-4 text-[15px] leading-[1.75] text-neutral-600">
                We pair with AI coding agents throughout development, directing real feature
                work, debugging and iterative design, while staying the ones reviewing every diff
                and deciding what is actually correct. It lets us move through more iteration per
                session without cutting quality, and we bring that same speed to automation work
                inside your own business.
              </p>
              <p className="mt-3 text-[15px] leading-[1.75] text-neutral-600">
                Most companies we work with automate customer support replies, data entry between
                systems and routine reporting first, with AI increasingly handling first drafts
                of code reviews, content and internal documentation.
              </p>
            </div>
            <div className="flex justify-center text-neutral-800">
              <AutomationIllustration />
            </div>
          </div>

          {/* 6. Support & growth — footnote, not a numbered point */}
          <SupportFootnote />
        </div>
      </section>

      {/* ===== WORK ===== */}
      <PageShell id="work" eyebrow="Selected projects" title="Work" intro="A few things we've shipped recently.">
        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {projects.map((p) => (
            <GlassCard key={p.name} shape={p.shape} className={p.tall ? "min-h-72" : "min-h-52"}>
              <div className="mb-4 h-24 blob-a bg-glass-strong" />
              <p className="text-xs text-muted-foreground">{p.tag}</p>
              <h2 className="mt-1 text-lg font-bold">{p.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </PageShell>

      {/* ===== ABOUT ===== */}
      <PageShell
        id="about"
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

      {/* ===== CONTACT ===== */}
      <PageShell
        id="contact"
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
    </>
  );
}
