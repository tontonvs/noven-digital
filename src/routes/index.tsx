import { createFileRoute } from "@tanstack/react-router";

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
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Dynamic SVG Frame with Outward Curved Notch Connections */}
      <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full">
        <defs>
          {/* Frosty backdrop filter definition */}
          <filter id="glass-blur">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        {/* Outer Bezel path with 7.4px border (2x of original 3.7px) and smooth outward notch curves */}
        {/* Continuous border + curved notch overlay */}
      </svg>

      {/* Glassmorphic Frame Overlay with Doubled Bezel (7.4px border width) */}
      <div className="pointer-events-none fixed inset-2 z-50 rounded-[2.5rem] border-[7.4px] border-white/92 backdrop-blur-md sm:inset-4">
        {/* Top Notch with Outward Concave Curved Connectors */}
        <div className="absolute -top-[7.4px] left-1/2 -translate-x-1/2">
          <div className="relative flex items-center justify-center">
            {/* Left Outward Curve Connection */}
            <div className="h-6 w-6 overflow-hidden">
              <div className="h-full w-full rounded-tr-2xl border-r-[7.4px] border-t-[7.4px] border-white/92 bg-transparent" />
            </div>

            {/* Main Notch Body */}
            <div className="h-[2.6rem] w-[14.7rem] rounded-b-2xl border-b-[7.4px] border-x-[7.4px] border-white/92 bg-white/92 shadow-lg backdrop-blur-lg sm:h-[3.2rem] sm:w-[18.9rem]" />

            {/* Right Outward Curve Connection */}
            <div className="h-6 w-6 overflow-hidden">
              <div className="h-full w-full rounded-tl-2xl border-l-[7.4px] border-t-[7.4px] border-white/92 bg-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Frosty Blurry Coat over Gradient Background */}
      <div className="pointer-events-none fixed inset-0 z-10 backdrop-blur-[16px] backdrop-saturate-150" />

      {/* Background — Layered blues into sunset-orange gradient */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(150deg, #060b1f 0%, #0e1e4d 18%, #16307d 36%, #1e49ac 52%, #3d78d8 68%, #7fb0e8 80%, #f6a35c 92%, #f3823d 100%)",
        }}
      />
    </div>
  );
}