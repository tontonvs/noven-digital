import type { ReactNode } from "react";
import { DeviceFrame } from "./DeviceFrame";
import { ToolGrid, type Tool } from "./ToolGrid";
import { FeatureSlide } from "./FeatureSlide";

import yoglaitDesktop from "@/assets/work/yoglait-desktop.png";
import yoglaitTablet from "@/assets/work/yoglait-tablet.png";
import yoglaitPhone from "@/assets/work/yoglait-phone.jpg";
import yoglaitLocation from "@/assets/work/yoglait-location.png";
import yoglaitAdmin from "@/assets/work/yoglait-admin.png";
import yoglaitHistory from "@/assets/work/yoglait-history.png";
import labiancaDevices from "@/assets/work/labianca-devices.jpg";
import graceHome from "@/assets/work/grace-home.jpg";
import graceShorts from "@/assets/work/grace-shorts.jpg";
import graceLive from "@/assets/work/grace-live.jpg";
import graceChat from "@/assets/work/grace-chat.jpg";
import graceChats from "@/assets/work/grace-chats.jpg";

import reactIcon from "@/assets/work/tools/react.svg";
import tsIcon from "@/assets/work/tools/typescript.svg";
import tailwindIcon from "@/assets/work/tools/tailwindcss.svg";
import supabaseIcon from "@/assets/work/tools/supabase.svg";
import postgresIcon from "@/assets/work/tools/postgresql.svg";
import cloudflareIcon from "@/assets/work/tools/cloudflareworkers.svg";
import viteIcon from "@/assets/work/tools/vite.svg";
import shadcnIcon from "@/assets/work/tools/shadcnui.svg";
import capacitorIcon from "@/assets/work/tools/capacitor.svg";

const yoglaitTools: Tool[] = [
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Supabase", icon: supabaseIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "Cloudflare Workers", icon: cloudflareIcon },
];

const labiancaTools: Tool[] = [
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Vite", icon: viteIcon },
  { name: "shadcn/ui", icon: shadcnIcon },
  { name: "Cloudflare Workers", icon: cloudflareIcon },
];

const graceTools: Tool[] = [
  { name: "React", icon: reactIcon },
  { name: "TypeScript", icon: tsIcon },
  { name: "Capacitor", icon: capacitorIcon },
  { name: "Supabase", icon: supabaseIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "Vite", icon: viteIcon },
];

const yoglaitSlides = [
  {
    image: yoglaitLocation,
    title: "Live order tracking",
    description: "See exactly where an order is headed and assign the nearest rider in seconds.",
  },
  {
    image: yoglaitAdmin,
    title: "Layered admin access",
    description: "The main admin can bring on sub-admins with their own scoped logins.",
  },
  {
    image: yoglaitHistory,
    title: "A full history log",
    description: "Every confirmed payment and delivery is timestamped and traceable.",
  },
];

function ExhibitLabel({ n, name }: { n: string; name: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="font-display text-sm text-white/40">{n}</span>
      <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">{name}</h3>
    </div>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{children}</p>
  );
}

export function WorkSection() {
  return (
    <div id="work" className="relative min-h-screen">
      <main className="mx-auto max-w-6xl px-5 pb-24 pt-32 md:pl-28">
        <p className="pop-in text-xs uppercase tracking-[0.35em] text-white/70">
          Selected projects
        </p>
        <h2 className="pop-in mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.95] text-white sm:text-6xl md:text-7xl">
          Work
        </h2>
        <p className="pop-in mt-6 max-w-xl text-[14px] leading-[1.7] text-white/90">
          A few things we've shipped recently.
        </p>
        <p className="pop-in mt-3 max-w-xl text-[14px] leading-[1.7] text-white/70">
          We're always working on something. These three are live and in production right now.
        </p>

        {/* ============ 01. YOGLAIT ============ */}
        <div className="mt-24">
          <ExhibitLabel n="01" name="Yoglait" />

          <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/85">
            We reached out to Yoglait, a probiotic yoghurt brand based in Accra, after noticing how
            much of their ordering process still ran on manual tracking and cash handovers between
            rider and customer. We proposed a proper storefront backed by a staff dashboard their
            small team could run day to day, with Paystack handling payments so customers pay
            upfront instead of on delivery. That means less physical cash moving hands, better
            hygiene, fewer chances of theft, and no one fumbling for change at the door.
          </p>

          <div className="mt-10 grid grid-cols-5 items-end gap-3 sm:gap-6">
            <DeviceFrame
              type="phone"
              image={yoglaitPhone}
              alt="Yoglait home, on a phone"
              className="col-span-1"
            />
            <DeviceFrame
              type="tablet"
              image={yoglaitTablet}
              alt="Yoglait home, on a tablet"
              className="col-span-2"
            />
            <DeviceFrame
              type="desktop"
              image={yoglaitDesktop}
              alt="Yoglait home, on a desktop"
              className="col-span-2"
            />
          </div>

          {/* problem / tools */}
          <div className="mt-14 grid items-center gap-8 sm:grid-cols-2">
            <ToolGrid tools={yoglaitTools} />
            <div>
              <SubHeading>Built with</SubHeading>
              <p className="mt-3 text-[15px] leading-[1.8] text-white/85">
                Under the hood it's React and TypeScript on the frontend, styled with Tailwind, with
                Supabase handling data and authentication on a Postgres database. The whole thing
                deploys to Cloudflare's edge network, so pages load fast whether someone's ordering
                from Accra or checking in from abroad.
              </p>
            </div>
          </div>

          {/* payment / engineering */}
          <div className="mt-14 max-w-2xl">
            <SubHeading>Payments, handled</SubHeading>
            <p className="mt-3 text-[15px] leading-[1.8] text-white/85">
              Paystack sits at the centre of checkout. A customer pays by card or mobile money
              before their order is even confirmed, which cuts out the friction of cash on delivery
              entirely. Every transaction lands directly in the staff dashboard, marked and
              timestamped, so there's no guessing at the end of the day about who paid and who
              didn't.
            </p>

            {/*
              PAYSTACK CLIP GOES HERE.
              Not wired up yet — the video file wasn't present in the repo's src/assets when this
              was built, only referenced. Drop the clip in src/assets/work/paystack-demo.mp4 (or
              .webm) and swap this comment block for:

              <video
                src={paystackDemo}
                className="mt-6 w-full rounded-2xl shadow-lg"
                controls
                muted
                playsInline
              />
            */}
          </div>

          {/* location / admin / history */}
          <div className="mt-14 grid items-center gap-8 lg:grid-cols-[1.1fr_1fr]">
            <FeatureSlide slides={yoglaitSlides} />
            <div>
              <SubHeading>Built for the people running it</SubHeading>
              <p className="mt-3 text-[15px] leading-[1.8] text-white/85">
                Every order shows exactly where it's headed on a live map, so assigning the nearest
                rider takes seconds, not a phone call. Admin access is layered too. The main admin
                can bring on sub-admins with their own logins, and every action, a confirmed
                payment, a delivery marked done, a rider let go, gets logged with a name and a
                timestamp, so nothing gets lost and nothing gets done without a trace.
              </p>
            </div>
          </div>

          <p className="mt-14 max-w-2xl text-[15px] leading-[1.8] text-white/85">
            Yoglait's site and dashboard share one visual language even though they solve very
            different problems, a bright, friendly storefront for customers and a calm, dense tool
            for staff who use it all day. That's the part we care about most, the engineering
            underneath and the design on top being built together, not stitched on after.
          </p>
        </div>

        {/* ============ 02. LABIANCA ============ */}
        <div className="mt-32 border-t border-white/10 pt-16">
          <ExhibitLabel n="02" name="Labianca Frost" />

          <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/85">
            Labianca already had a working site. It just didn't look like Labianca anymore,
            seventeen years in frozen foods, a growing footprint across Ghana, and a homepage that
            undersold all of it. We weren't there to replace or tear anything down. We were there to
            polish something already alive, and bring the design up to match the business it was
            actually representing.
          </p>

          <div className="mt-14 grid items-center gap-8 sm:grid-cols-2">
            <ToolGrid tools={labiancaTools} />
            <div>
              <SubHeading>Built with</SubHeading>
              <p className="mt-3 text-[15px] leading-[1.8] text-white/85">
                We rebuilt the frontend in React and TypeScript, styled with Tailwind and shadcn/ui
                for consistent, accessible components out of the box. Vite keeps the build fast
                during development, and it ships to Cloudflare's edge network the same way Yoglait
                does, so the site loads quickly wherever a customer or supplier happens to be.
              </p>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[1.75rem] shadow-[0_25px_60px_-25px_rgba(0,0,0,0.5)]">
            <img
              src={labiancaDevices}
              alt="The Labianca homepage across desktop, laptop, tablet and phone"
              className="w-full object-cover"
            />
          </div>
          <p className="mt-4 text-center text-xs text-white/50">One homepage, four screens.</p>

          <p className="mt-14 max-w-2xl text-[15px] leading-[1.8] text-white/85">
            The goal with Labianca wasn't to reinvent the brand, it was to let the existing one
            breathe. Cleaner layout, sharper type, faster pages, and a homepage that finally looks
            as established as the company actually is.
          </p>
        </div>

        {/* ============ 03. GRACE CONNECT ============ */}
        <div className="mt-32 border-t border-white/10 pt-16">
          <ExhibitLabel n="03" name="Grace Connect" />

          <p className="mt-6 max-w-2xl text-[15px] leading-[1.8] text-white/85">
            Grace Connect started as a fix for something we kept running into ourselves. Online
            ministration from DCLM, Deeper Life Bible Church, kept buffering during services at
            church and at home, and the experience was cluttered with the kind of ads and irrelevant
            content that pull attention away mid-service, the same problem YouTube has always had
            for this. We built a dedicated app instead, one that adjusts stream quality
            automatically based on connection strength, so a service keeps playing smoothly instead
            of stalling out.
          </p>

          <div className="mt-10">
            <ToolGrid tools={graceTools} className="max-w-md" />
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div>
                <SubHeading>Adaptive live streaming</SubHeading>
                <p className="mt-2 text-[14px] leading-[1.8] text-white/85">
                  Stream quality adjusts to connection strength automatically, and a service picks
                  up right where it left off instead of stalling out.
                </p>
              </div>
              <DeviceFrame
                type="phone"
                image={graceLive}
                alt="Grace Connect live stream screen"
                className="max-w-[200px]"
              />
            </div>

            <div className="flex flex-col gap-4 sm:mt-16">
              <div>
                <SubHeading>Global chat</SubHeading>
                <p className="mt-2 text-[14px] leading-[1.8] text-white/85">
                  A chat system built to connect members globally, so check-ins and encouragement
                  don't stop at the church doors.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <DeviceFrame type="phone" image={graceChats} alt="Grace Connect chat list" />
                <DeviceFrame type="phone" image={graceChat} alt="Grace Connect chat thread" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <SubHeading>A home feed worth checking</SubHeading>
                <p className="mt-2 text-[14px] leading-[1.8] text-white/85">
                  Local and global events, kept in one feed, without any of the noise.
                </p>
              </div>
              <DeviceFrame
                type="phone"
                image={graceHome}
                alt="Grace Connect home feed"
                className="max-w-[200px]"
              />
            </div>

            <div className="flex flex-col gap-4 sm:mt-16">
              <div>
                <SubHeading>Shorts, for the youth</SubHeading>
                <p className="mt-2 text-[14px] leading-[1.8] text-white/85">
                  A short-form feature for sharing ideas, ongoing events, and clips, without leaving
                  the app.
                </p>
              </div>
              <DeviceFrame
                type="phone"
                image={graceShorts}
                alt="Grace Connect shorts feed"
                className="max-w-[200px]"
              />
            </div>
          </div>

          <p className="mt-14 max-w-2xl text-[15px] leading-[1.8] text-white/85">
            Grace Connect wasn't built as a product to sell. It was built to give something back to
            a community we're part of, and it's stayed in daily use since.
          </p>
        </div>
      </main>
    </div>
  );
}
