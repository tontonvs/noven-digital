import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowUpRight, Bot, Cloud, Palette, WifiOff } from "lucide-react";
import novenLogo from "@/assets/noven_logo.jpg";

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
        let r = 0, g = 0, b = 0;
        const count = data.length / 4;
        for (let i = 0; i < data.length; i += 4) {
          r += data[i] ?? 0;
          g += data[i + 1] ?? 0;
          b += data[i + 2] ?? 0;
        }
        setColor(`rgb(${Math.round(r / count)}, ${Math.round(g / count)}, ${Math.round(b / count)})`);
      } catch {
        // canvas may be tainted if the source isn't same-origin — keep the fallback color
      }
    };
    img.src = src;
  }, [src]);
  return color;
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

const services = [
  { Icon: WifiOff, label: "Offline-first mobile apps" },
  { Icon: Palette, label: "Custom in-organisation software" },
  { Icon: Cloud, label: "Cloud management services" },
  { Icon: Bot, label: "Agentic automation workflows" },
];

function Index() {
  const logoRingColor = useAverageColor(novenLogo);

  return (
    <main className="relative flex min-h-screen flex-col px-6 pb-10 pt-24 md:pl-28 md:pr-10">
      {/* Centered hero title */}
      <div className="pop-in mx-auto max-w-5xl shrink-0 text-center">
        <h1 className="font-notch font-bold leading-[0.95] text-white [text-shadow:0_10px_40px_rgba(0,0,0,0.35)]">
          <span className="block text-[clamp(2rem,6vw,80px)]">Discovering innovative</span>
          <span className="block text-[clamp(1.9rem,5.6vw,75px)]">solutions &lt;/&gt;</span>
        </h1>
      </div>

      {/* Left supporting copy */}
      <p className="pop-in mt-6 max-w-md text-left text-[14px] font-normal leading-[1.7] text-white/90">
        Building engineering solutions to tackle your digital problems in the most effective and
        innovative way possible — not only to connect you and your clients (users), but to ensure
        ease and comfort of use through visually stunning design and interface, so you focus on
        what truly matters. — noven
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-start">
        {/* Affordability Rule — floating card, separated from the bezel/dock, gently rounded */}
        <section className="pop-in relative flex min-w-0 w-full max-w-md flex-col rounded-3xl bg-card p-6 shadow-[var(--shadow-float)] backdrop-blur-xl">
          <h2 className="text-left font-sans text-[20px] font-semibold text-card-foreground">
            # Affordability Rule
          </h2>
          <p className="mt-2.5 text-left text-[14px] leading-[1.7] text-muted-foreground">
            Putting our clients first is our foremost priority beside connecting all of Africa and
            beyond, with us eliminate digital roadblocks with swiftness and expert craftmanship —
            worry free of financial drawbacks.
          </p>

          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <div className="min-w-0 text-left">
              <p className="font-sans text-[clamp(2.2rem,4vw,55px)] font-bold leading-none text-card-foreground">
                ₵5,000
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                get your website or app up and running funds as low as ₵630-₵5,000
              </p>
            </div>

            <Link
              to="/work"
              aria-label="See our work"
              className="bouncy z-20 grid size-12 shrink-0 place-items-center rounded-full bg-foreground text-background hover:-translate-y-1 hover:scale-110"
            >
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>

        {/* Services card */}
        <section className="pop-in relative flex min-w-0 w-full max-w-lg flex-col rounded-3xl glass-frost p-6 pb-10 shadow-[var(--shadow-float)] lg:ml-auto">
          <h2 className="text-left font-sans text-[20px] font-semibold text-white">Services</h2>

          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {services.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon size={18} className="shrink-0 text-white" />
                <span className="text-[13px] text-white">{label}</span>
              </li>
            ))}
          </ul>

          {/* noven logo — sampled ring color, 20px fully transparent buffer, sits astride the corner */}
          <div
            className="absolute rounded-full"
            style={{ border: "20px solid transparent", bottom: "-2.85rem", left: "-2.85rem" }}
          >
            <div
              className="grid place-items-center overflow-hidden rounded-full backdrop-blur-xl"
              style={{ width: "5.4rem", height: "5.4rem", border: `2px solid ${logoRingColor}` }}
            >
              <img src={novenLogo} alt="noven" className="size-full object-cover" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
