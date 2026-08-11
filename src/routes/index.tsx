import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

const BEZEL = "rgba(255,255,255,0.92)";
const B = 12; // bezel thickness
const R = 44; // inner corner radius
const NH = 62; // notch height
const NR = 24; // notch bottom corner radius
const SR = 28; // shoulder curve joining notch to bezel

function buildFramePath(w: number, h: number, nw: number) {
  const cx = w / 2;
  const l = B;
  const t = B;
  const r = w - B;
  const b = h - B;
  const nl = cx - nw / 2;
  const nr = cx + nw / 2;
  return [
    `M ${l + R} ${t}`,
    `H ${nl - SR}`,
    `A ${SR} ${SR} 0 0 1 ${nl} ${t + SR}`,
    `V ${t + NH - NR}`,
    `A ${NR} ${NR} 0 0 0 ${nl + NR} ${t + NH}`,
    `H ${nr - NR}`,
    `A ${NR} ${NR} 0 0 0 ${nr} ${t + NH - NR}`,
    `V ${t + SR}`,
    `A ${SR} ${SR} 0 0 1 ${nr + SR} ${t}`,
    `H ${r - R}`,
    `A ${R} ${R} 0 0 1 ${r} ${t + R}`,
    `V ${b - R}`,
    `A ${R} ${R} 0 0 1 ${r - R} ${b}`,
    `H ${l + R}`,
    `A ${R} ${R} 0 0 1 ${l} ${b - R}`,
    `V ${t + R}`,
    `A ${R} ${R} 0 0 1 ${l + R} ${t}`,
    "Z",
  ].join(" ");
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

function Index() {
  const [activeModal, setActiveModal] = useState<"location" | "expertise" | "payment" | null>(null);
  const [size, setSize] = useState({ w: 1280, h: 800 });

  useEffect(() => {
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const NW = Math.max(300, Math.min(size.w * 0.56, 660));
  const framePath = useMemo(() => buildFramePath(size.w, size.h, NW), [size.w, size.h, NW]);



  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-slate-100">
      {/* Frosty Blurry Coat over Gradient Background */}
      <div className="pointer-events-none fixed inset-0 z-10 backdrop-blur-[16px] backdrop-saturate-150" />

      {/* Screen Frame + Notch: one continuous bezel shape */}
      <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full">
        <defs>
          <mask id="bezel-mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={framePath} fill="black" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill={BEZEL} mask="url(#bezel-mask)" />
      </svg>

<<<<<<< Updated upstream
      {/* Top Header: flanking pills + notch content, same bezel styling */}
      <div
        className="pointer-events-none fixed inset-x-0 z-50 flex items-center justify-between px-5 sm:px-10"
        style={{ top: B, height: NH }}
      >
        {/* Left Flanking Pill Button */}
        <button
          onClick={() => setActiveModal("expertise")}
          style={{ background: BEZEL }}
          className="pointer-events-auto group flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-slate-800 shadow-md backdrop-blur-md transition-all hover:shadow-lg active:scale-95 sm:h-[3.25rem] sm:px-8 sm:text-base"
=======
      {/* Top Header Navigation Bar with Flanking Pills & Center Notch */}
      <div className="fixed top-[7.4px] inset-x-0 z-50 flex items-center justify-between px-8 py-3 sm:px-14 pointer-events-none">
        {/* Left Flanking Pill Button */}
        <button
          onClick={() => setActiveModal("expertise")}
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-6 py-2.5 text-xs sm:text-sm font-medium text-slate-100 shadow-xl backdrop-blur-xl transition-all hover:bg-slate-900/80 active:scale-95"
>>>>>>> Stashed changes
        >
          <svg className="h-3.5 w-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
          </svg>
          <span>Services</span>
        </button>

<<<<<<< Updated upstream
        {/* Notch Content Area (sits inside the carved notch) */}
        <div
          className="pointer-events-auto flex items-center justify-center gap-1 overflow-hidden px-2 sm:gap-2"
          style={{ width: NW, height: NH }}
        >
          {/* Location Trigger */}
          <button
            onClick={() => setActiveModal("location")}
            className="flex items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-black/5 sm:px-4 sm:text-sm"
          >
            <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="hidden sm:inline font-normal text-slate-400">Location</span>
            <span className="font-semibold text-slate-800">Accra</span>
            <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="h-5 w-px bg-slate-300/60" />

          {/* Expertise Trigger */}
          <button
            onClick={() => setActiveModal("expertise")}
            className="flex items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-black/5 sm:px-4 sm:text-sm"
          >
            <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="hidden sm:inline font-normal text-slate-400">Expertise</span>
            <span className="font-semibold text-slate-800">Fullstack</span>
            <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className="hidden h-5 w-px bg-slate-300/60 sm:block" />

          {/* Payment Trigger */}
          <button
            onClick={() => setActiveModal("payment")}
            className="hidden items-center gap-1.5 rounded-2xl px-3 py-2 text-xs font-medium text-slate-700 transition-colors hover:bg-black/5 sm:flex sm:px-4 sm:text-sm"
          >
            <svg className="h-4 w-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="hidden sm:inline font-normal text-slate-400">Payment</span>
            <span className="font-semibold text-slate-800">Flexible</span>
            <svg className="h-3.5 w-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
=======
        {/* Center Notch Body with Expanded Breathing Room & Dark Glassy Tint */}
        <div className="pointer-events-auto relative flex items-center justify-center">
          {/* Left Outward Curve Connection */}
          <div
            className="h-8 w-8 -mr-[1px]"
            style={{
              background:
                "radial-gradient(circle at 0% 100%, transparent 32px, rgba(2, 6, 23, 0.70) 32.5px)",
            }}
          />

          {/* Expanded Notch Body */}
          <div className="flex h-[3.6rem] sm:h-[4.2rem] items-center gap-2 sm:gap-6 rounded-b-3xl border-b border-x border-white/20 bg-slate-950/70 px-6 sm:px-10 shadow-2xl backdrop-blur-xl">
            {/* Location Trigger */}
            <button
              onClick={() => setActiveModal("location")}
              className="flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
            >
              <svg className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="hidden sm:inline text-slate-400 font-normal">Location</span>
              <span className="font-semibold text-slate-100">Accra</span>
              <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="h-5 w-[1px] bg-white/20" />

            {/* Expertise Trigger */}
            <button
              onClick={() => setActiveModal("expertise")}
              className="flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
            >
              <svg className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="hidden sm:inline text-slate-400 font-normal">Expertise</span>
              <span className="font-semibold text-slate-100">Fullstack</span>
              <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="h-5 w-[1px] bg-white/20" />

            {/* Payment Trigger */}
            <button
              onClick={() => setActiveModal("payment")}
              className="flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs sm:text-sm font-medium text-slate-200 transition-colors hover:bg-white/10"
            >
              <svg className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="hidden sm:inline text-slate-400 font-normal">Payment</span>
              <span className="font-semibold text-slate-100">Flexible</span>
              <svg className="h-3.5 w-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Right Outward Curve Connection */}
          <div
            className="h-8 w-8 -ml-[1px]"
            style={{
              background:
                "radial-gradient(circle at 100% 100%, transparent 32px, rgba(2, 6, 23, 0.70) 32.5px)",
            }}
          />
>>>>>>> Stashed changes
        </div>

        {/* Right Flanking Pill Button */}
        <button
          onClick={() => setActiveModal("location")}
<<<<<<< Updated upstream
          style={{ background: BEZEL }}
          className="pointer-events-auto group flex h-12 items-center gap-2 rounded-full px-6 text-sm font-semibold text-slate-800 shadow-md backdrop-blur-md transition-all hover:shadow-lg active:scale-95 sm:h-[3.25rem] sm:px-8 sm:text-base"
=======
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/70 px-6 py-2.5 text-xs sm:text-sm font-medium text-slate-100 shadow-xl backdrop-blur-xl transition-all hover:bg-slate-900/80 active:scale-95"
>>>>>>> Stashed changes
        >
          <span>Contact</span>
          <svg className="h-3.5 w-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

<<<<<<< Updated upstream

      {/* Glassmorphic Animated Modals */}
=======
      {/* Glassmorphic Dark Tint Popups */}
>>>>>>> Stashed changes
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <div
            className="absolute inset-0 bg-slate-950/50 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
            onClick={() => setActiveModal(null)}
          />

          {/* Modal Card */}
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-slate-950/80 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl animate-in zoom-in-95 duration-200 text-slate-100">
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10 text-slate-300 transition-all hover:bg-white/20 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Location Content */}
            {activeModal === "location" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-slate-100">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">Location</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  Based in Accra, Ghana. We build offline-first mobile apps, modern websites, and custom digital products for startups and enterprises across Africa and worldwide.
                </p>
                <div className="pt-2">
                  <a
                    href="mailto:mensahkbiz@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-slate-100 shadow-lg transition-transform hover:bg-white/20 hover:scale-105 active:scale-95"
                  >
                    <span>Let's work together</span>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            )}

            {/* Expertise Content */}
            {activeModal === "expertise" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-slate-100">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">Expertise</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  Fullstack & Mobile Development. We specialize in robust modern architecture, offline-first systems, and agentic workflows to deliver high-quality products rapidly.
                </p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "React & TypeScript",
                    "Tailwind CSS",
                    "TanStack Router",
                    "Capacitor Mobile",
                    "Supabase & Postgres",
                    "Agentic AI Workflows",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium text-slate-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Payment Content */}
            {activeModal === "payment" && (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-slate-100">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-100">Payment & Pricing</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  Pricing is flexible and negotiable depending on your project scope, complexity, and target timeline.
                </p>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-3.5 text-xs text-slate-200 leading-relaxed">
                  We prioritize accessibility and affordability to support and accelerate digitizing Africa.
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Background — Layered blues into sunset-orange gradient */}
      <div
        className="fixed inset-0 -z-20"
        style={{
          background:
            "linear-gradient(150deg, #060b1f 0%, #0e1e4d 18%, #16307d 36%, #1e49ac 52%, #3d78d8 68%, #7fb0e8 80%, #f6a35c 92%, #f3823d 100%)",
        }}
      />
    </div>
  );
}