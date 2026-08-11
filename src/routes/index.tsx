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
    <div className="relative min-h-screen">
      {/* Bezel */}
      <div className="pointer-events-none fixed inset-2 z-50 rounded-[2rem] border-[3.7px] border-white/92 sm:inset-3" />

      {/* Notch — plain, 45% larger, same white/92% as the bezel */}
      <div className="pointer-events-none fixed left-1/2 top-2 z-50 h-[1.8rem] w-[10.15rem] -translate-x-1/2 rounded-b-2xl border-x-[3.7px] border-b-[3.7px] border-white/92 bg-white/92 sm:top-3 sm:h-[2.2rem] sm:w-[13.05rem]" />

      {/* Background — layered blues into a sunset-orange gradient */}
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
