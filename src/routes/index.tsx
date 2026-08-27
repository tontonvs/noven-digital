import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Bot, Cloud, Palette, WifiOff } from "lucide-react";
import novenLogo from "@/assets/noven_logo.png";
import { ServicesSection } from "@/components/site/ServicesSection";
import { WorkSection } from "@/components/site/WorkSection";
import { AboutSection } from "@/components/site/AboutSection";
import { FooterSection } from "@/components/site/FooterSection";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { GmailButton } from "@/components/site/GmailButton";

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
        let r = 0,
          g = 0,
          b = 0,
          weight = 0;
        for (let i = 0; i < data.length; i += 4) {
          const a = (data[i + 3] ?? 0) / 255;
          r += (data[i] ?? 0) * a;
          g += (data[i + 1] ?? 0) * a;
          b += (data[i + 2] ?? 0) * a;
          weight += a;
        }
        if (weight === 0) return;
        setColor(
          `rgb(${Math.round(r / weight)}, ${Math.round(g / weight)}, ${Math.round(b / weight)})`,
        );
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
    detail:
      "Tools built around how your team actually operates, replacing manual processes with software that fits.",
  },
  {
    Icon: Cloud,
    label: "Cloud management services",
    detail:
      "We set up and maintain your cloud infrastructure so it stays fast, secure and always available.",
  },
  {
    Icon: Bot,
    label: "Agentic automation workflows",
    detail:
      "AI agents that handle repetitive tasks automatically, freeing your team to focus on real work.",
  },
];

const LOGO_SIZE = 86.4;

function Index() {
  const logoRingColor = useAverageColor(novenLogo);

  return (
    <>
      {/* ===== HOME ===== */}
      <main
        id="home"
        className="relative flex min-h-screen flex-col px-6 pb-10 pt-24 md:pl-28 md:pr-10"
      >
        {/* Centered hero title */}
        <div className="pop-in mx-auto max-w-5xl shrink-0 text-center">
          <h1 className="font-notch font-bold leading-[0.95] text-white [text-shadow:0_10px_40px_rgba(0,0,0,0.35)]">
            <span className="block text-[clamp(2rem,6vw,80px)]">Discovering innovative</span>
            <span className="block text-[clamp(1.9rem,5.6vw,75px)]">solutions &lt;/&gt;</span>
          </h1>
        </div>

        {/* Left supporting copy */}
        <div className="pop-in mt-6 max-w-md text-left">
          <p className="text-[14px] font-semibold leading-[1.7] text-white">At Noven, we build:</p>
          <ul className="mt-2 space-y-1.5 text-[14px] leading-[1.6] text-white/85">
            <li className="flex gap-2">
              <span className="text-white/50">•</span>
              Info sites for businesses, hotels, and more
            </li>
            <li className="flex gap-2">
              <span className="text-white/50">•</span>
              E-commerce sites and apps for orders, payments and delivery
            </li>
            <li className="flex gap-2">
              <span className="text-white/50">•</span>
              School records, admissions and information systems
            </li>
            <li className="flex gap-2">
              <span className="text-white/50">•</span>
              Portfolios
            </li>
          </ul>

          <p className="mt-3 text-[13px] leading-[1.6] text-white/70">
            Don't see what you need listed? Reach out about your project.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            <WhatsAppButton variant="pill" message="Hi! I'd like to talk about a project." />
            <GmailButton
              subject="Project inquiry"
              body={"Hi Tonton,\n\nI'd like to talk about a project.\n\n"}
            />
          </div>
        </div>

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
                      <p className="mt-1 text-[11px] font-medium leading-[1.5] text-white/70">
                        {detail}
                      </p>
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
      <ServicesSection />

      {/* ===== WORK ===== */}
      <WorkSection />

      {/* ===== ABOUT ===== */}
      <AboutSection />

      {/* ===== CONTACT / FOOTER ===== */}
      <FooterSection />
    </>
  );
}
