import { DeviceFrame } from "./DeviceFrame";
import { MobileCarousel } from "./MobileCarousel";
import { DesignShowcase } from "./DesignShowcase";
import {
  ServerStackIllustration,
  AIWorkflowIllustration,
  UpdateArrows,
} from "./ServiceIllustrations";

import webEngHero from "@/assets/services/web-eng-hero.jpg";
import deviceTrioContent from "@/assets/services/device-trio-content.png";
import mobileHome from "@/assets/services/mobile-home.jpg";
import mobileChat from "@/assets/services/mobile-chat.jpg";
import mobileSettings from "@/assets/services/mobile-settings.jpg";
import design1 from "@/assets/services/design-1-noven.png";
import design2 from "@/assets/services/design-2-yoglait.png";
import design3 from "@/assets/services/design-3-grace.png";
import design4 from "@/assets/services/design-4-labianca.png";
import design5 from "@/assets/services/design-5-grace-profile.png";

const mobileSlides = [
  { src: mobileHome, label: "Home screen" },
  { src: mobileChat, label: "Chat interface" },
  { src: mobileSettings, label: "Settings" },
] as const;

const designImages = [
  { src: design1, label: "Noven" },
  { src: design2, label: "Yoglait" },
  { src: design3, label: "Grace Connect" },
  { src: design4, label: "Labianca Frost" },
  { src: design5, label: "Grace Connect — profile" },
] as const;

export function ServicesSection() {
  return (
    <section id="services" className="relative">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#faf7f2] sm:mx-4 sm:rounded-[3rem]">
        <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 md:pl-28 md:pr-10">
          {/* header */}
          <p className="pop-in text-xs uppercase tracking-[0.35em] text-[#4b5565]">What we do</p>
          <h2 className="pop-in mt-4 max-w-3xl font-display text-5xl font-bold leading-[0.95] ink sm:text-6xl md:text-7xl">
            Services
          </h2>
          <p className="pop-in mt-6 max-w-xl text-[14px] leading-[1.7] text-[#4b5565]">
            End-to-end fullstack development from first sketch to a live, maintained product.
          </p>
          <p className="pop-in mt-4 max-w-xl text-[20px] leading-[1.6] font-medium ink">
            We offer the following services, and a few more we haven't listed here — get in touch
            and we'll figure out what fits.
          </p>

          {/* ============ 1. WEB ENGINEERING ============ */}
          <div className="mt-24 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-display text-3xl font-bold ink sm:text-4xl">Web engineering</h3>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#4b5565]">
                We design and build fast, modern websites and web apps in React, TypeScript and
                Tailwind — from a marketing site's first sketch to a fully working product. Every
                layout is planned around real content, not placeholder text, so pages hold up once
                you start adding your own products, pricing or case studies. We pay close attention
                to load speed, accessibility and how a page reads on a small screen, because most
                visitors will meet your site on mobile data first.
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#4b5565]">
                Everything ships on a fast edge network, so a shopper down the road and a client
                abroad both get the same snappy load — no separate "mobile version" bolted on after.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-[0_30px_70px_-30px_rgba(11,18,32,0.25)]">
              <img
                src={webEngHero}
                alt="A website we built, shown in the browser"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* same site, three screens */}
          <div className="mt-10 grid grid-cols-3 items-end gap-4 sm:gap-8 lg:mx-auto lg:max-w-2xl">
            <DeviceFrame type="phone" image={deviceTrioContent} alt="Same site on a phone" />
            <DeviceFrame
              type="laptop"
              image={deviceTrioContent}
              alt="Same site on a laptop"
              className="col-span-1"
            />
            <DeviceFrame type="tablet" image={deviceTrioContent} alt="Same site on a tablet" />
          </div>
          <p className="mt-4 text-center text-xs text-[#4b5565]">
            One build, tuned for every screen it lands on.
          </p>

          {/* ============ 2. MOBILE APPS ============ */}
          <div className="mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="order-2 lg:order-1">
              <MobileCarousel slides={[...mobileSlides]} />
            </div>

            <div className="order-1 lg:order-2">
              <h3 className="font-display text-3xl font-bold ink sm:text-4xl">Mobile apps</h3>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#4b5565]">
                We build cross-platform apps that keep working when the network doesn't — caching
                what matters locally and syncing the moment signal returns, instead of showing a
                blank screen. One recent build handles live chat, a content feed and event listings
                for a community of thousands, all wrapped in a profile people can genuinely make
                their own, down to their avatar and status.
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#4b5565]">
                Under the hood it's one codebase for iOS, Android and the web, so updates ship
                everywhere at once instead of three separate release cycles.
              </p>
            </div>
          </div>

          {/* ============ 3. BACKEND & DATA ============ */}
          <div className="mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-display text-3xl font-bold ink sm:text-4xl">Backend & data</h3>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#4b5565]">
                Every app needs somewhere solid to keep its data, and that's where we spend real
                design time — not just after the interface is done. We build on Postgres and
                Supabase, with row-level security enforced at the database itself, so access rules
                hold even if a request skips the app entirely. Data models are planned around how
                the product will actually grow, not just what today's screens need. Background jobs,
                scheduled tasks and webhooks are wired in from day one, and we keep an eye on query
                performance as real usage builds up.
              </p>
            </div>

            <ServerStackIllustration className="mx-auto w-full max-w-sm" />
          </div>

          {/* ============ 4. PRODUCT DESIGN ============ */}
          <div className="mt-28">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="font-display text-3xl font-bold ink sm:text-4xl">Product design</h3>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#4b5565]">
                Good design starts before any code — with wireframes, a clear layout hierarchy and a
                look that fits the brand it's for, not a generic template. We design in a system:
                consistent spacing, type and colour so new screens feel like they belong, even
                months later. Every screen gets checked against real content and real devices, not
                just a clean design file, so nothing breaks once it's live. The goal is always the
                same — an interface that feels considered, not just functional.
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-2xl">
              <DesignShowcase
                images={[
                  designImages[0],
                  designImages[1],
                  designImages[2],
                  designImages[3],
                  designImages[4],
                ]}
              />
            </div>
          </div>

          {/* ============ 5. AI-ASSISTED DEVELOPMENT ============ */}
          <div className="mt-28 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h3 className="font-display text-3xl font-bold ink sm:text-4xl">
                AI-assisted development
              </h3>
              <p className="mt-5 text-[15px] leading-[1.8] text-[#4b5565]">
                We use AI agents to move faster on the repetitive parts of a build — scaffolding
                components, writing first-draft tests, and catching obvious bugs before a human ever
                reviews the code. That speed never skips review: every AI-assisted change still goes
                through the same QA a hand-written one would. The same thinking extends into what we
                build for clients — automating the parts of a business that eat up staff time
                without needing a human in the loop for every step.
              </p>
              <p className="mt-4 text-[15px] leading-[1.8] text-[#4b5565]">
                In practice that's things like auto-replying to common support questions,
                reconciling payments when a provider like Paystack sends a webhook, qualifying leads
                before they reach a salesperson, or generating a weekly report instead of someone
                compiling it by hand.
              </p>
            </div>

            <AIWorkflowIllustration className="float-slow mx-auto w-full max-w-sm" />
          </div>

          {/* ============ 6. SUPPORT & GROWTH (footnote) ============ */}
          <div className="mt-24 flex flex-col items-start gap-5 border-t border-[#0b1220]/10 pt-10 sm:flex-row sm:items-center">
            <UpdateArrows className="spin-slow pulse-soft size-10 shrink-0 text-[#c9871f]" />
            <p className="text-[13.5px] leading-[1.8] text-[#4b5565]">
              <span className="font-semibold ink">Support & growth. </span>
              Every product we ship gets checked over monthly — dependencies, performance, small
              fixes and feature requests that piled up since the last pass. If something urgent
              breaks — a payment provider changes their API, a login flow stops working — that
              doesn't wait for the monthly cycle; it gets fixed the same day. Not sure what's
              covered? Just ask.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
