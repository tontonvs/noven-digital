import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Cloud,
  Heart,
  Palette,
  Share2,
  WifiOff,
} from "lucide-react";
import labiancaLogo from "@/assets/labianca_logo.jpg";
import yoglaitLogo from "@/assets/yoglait_logo.jpg";
import novenLogo from "@/assets/noven_logo.jpg";

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

const projects = [
  { name: "Labianca", url: "https://labianca-gh.lovable.app/", logo: labiancaLogo },
  { name: "Grace Connect", url: "https://grace-connect-streams.lovable.app/", logo: null },
  { name: "Yoglait", url: "https://yoglait.lovable.app/", logo: yoglaitLogo },
];

const offers = [
  { Icon: WifiOff, label: "Offline products" },
  { Icon: Palette, label: "Custom in-organisation software" },
  { Icon: Cloud, label: "Cloud management services" },
  { Icon: Bot, label: "Agentic automation workflows" },
];

function Index() {
  const [liked, setLiked] = useState(false);

  return (
    <main className="relative flex h-screen flex-col px-6 pb-6 pt-24 md:pl-28 md:pr-10">
      {/* Centered hero title */}
      <div className="pop-in mx-auto max-w-5xl shrink-0 text-center">
        <h1 className="font-display font-bold leading-[0.95] text-white [text-shadow:0_10px_40px_rgba(0,0,0,0.35)]">
          <span className="block text-[clamp(2rem,6vw,80px)]">Discovering innovative</span>
          <span className="block text-[clamp(1.9rem,5.6vw,75px)]">solutions &lt;/&gt;</span>
        </h1>
      </div>

      {/* Left supporting copy */}
      <p className="pop-in mt-6 max-w-md text-left text-[14px] font-normal leading-[1.7] text-white/90">
        At noven we build
        <br /> innovative digital solutions
        <br /> designed to tackle your toughest
        <br /> web development problems
        <br /> with creative engineering and
        <br /> modern technical expertise every day.
      </p>

      <div className="mt-auto grid min-h-0 flex-1 items-end gap-6 pt-6 lg:grid-cols-2 lg:grid-rows-[minmax(0,1fr)]">
        {/* Very-rounded card, connected to the bottom bezel — now theme-aware */}
        <section className="pop-in flex max-h-full -mb-6 w-full max-w-md flex-col overflow-hidden rounded-[3.25rem] rounded-br-[6rem] rounded-bl-[3.25rem] bg-card p-6 shadow-[var(--shadow-float)] backdrop-blur-xl">
          <h2 className="text-left font-sans text-[20px] font-semibold text-card-foreground">
            Find The Perfect Answer
          </h2>
          <p className="mt-2.5 text-left text-[14px] leading-[1.7] text-muted-foreground">
            Eliminate digital roadblocks.
            <br /> Our expert craftsmanship delivers
            <br /> fast, effective solutions so you can
            <br /> focus on what matters most.
          </p>

          <div className="mt-5 flex items-end justify-between gap-4">
            <div className="text-left">
              <p className="font-sans text-[clamp(2.2rem,4vw,55px)] font-bold leading-none text-card-foreground">
                5+
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">large projects</p>
            </div>

            {/* Overlapping project avatars (placeholders) */}
            <div className="flex items-center">
              {projects.map((p, i) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  title={p.name}
                  style={{ marginLeft: i === 0 ? 0 : -14, zIndex: 10 - i }}
                  className="bouncy grid size-12 place-items-center overflow-hidden rounded-full border-2 border-card bg-muted text-[9px] font-medium text-muted-foreground hover:-translate-y-1 hover:scale-110"
                >
                  {p.logo ? (
                    <img src={p.logo} alt={p.name} className="size-full object-cover" />
                  ) : (
                    "LOGO"
                  )}
                </a>
              ))}
              <Link
                to="/work"
                aria-label="See our work"
                style={{ marginLeft: -14 }}
                className="bouncy z-20 grid size-12 place-items-center rounded-full border-2 border-card bg-foreground text-background hover:-translate-y-1 hover:scale-110"
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* Bottom-right frosted "We also offer" card */}
        <section className="pop-in relative mb-4 ml-auto flex max-h-full w-full max-w-lg flex-col overflow-hidden rounded-[3rem] glass-frost p-6 shadow-[var(--shadow-float)]">
          {/* noven logo badge */}
          <div className="absolute -top-7 right-8 grid size-16 place-items-center overflow-hidden rounded-full border-4 border-card/40 bg-card/70 backdrop-blur-xl">
            <img src={novenLogo} alt="noven" className="size-full object-cover" />
          </div>

          <h2 className="text-left font-sans text-[20px] font-semibold text-foreground">
            We Also Offer
          </h2>
          <button className="bouncy mt-2 self-start rounded-full bg-card/40 px-3 py-1 text-[12px] font-medium text-muted-foreground hover:scale-105">
            offers
          </button>

          <p className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1 text-left text-[14px] leading-[1.6] text-muted-foreground">
            We also offer offline-first mobile apps building. We modernize business infrastructure
            from the ground up by engineering custom in-organization software, deploying scalable
            cloud services, and structuring high-availability database management systems. To
            maximize operational efficiency, we are a go-to if you want to infuse your businesses
            with advanced AI integrations, routine digital automations, and agentic workflows that
            autonomously handle complex corporate tasks.
          </p>

          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {offers.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-card/60 text-foreground">
                  <Icon size={16} />
                </span>
                <span className="text-[13px] text-muted-foreground">{label}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-center gap-3">
            <button
              onClick={() => setLiked((v) => !v)}
              aria-pressed={liked}
              className="bouncy grid place-items-center rounded-2xl bg-card/60 px-3 py-2 hover:scale-105 active:scale-90"
            >
              <Heart
                size={18}
                className={liked ? "fill-foreground text-foreground" : "text-foreground"}
              />
              <span className="mt-0.5 text-[11px] font-medium text-muted-foreground">
                {liked ? "14.1k" : "14k"}
              </span>
            </button>
            <button className="bouncy grid place-items-center rounded-2xl bg-card/60 px-3 py-2 text-foreground hover:scale-105 active:scale-90">
              <Share2 size={18} />
              <span className="mt-0.5 text-[11px] font-medium text-muted-foreground">share</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
