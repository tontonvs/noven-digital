import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

const B = 6; // bezel thickness (reduced)
const R = 32; // outer/inner corner radius (reduced to match thinner bezel)
const NH = 20; // notch height — ~70% smaller than before
const NW = 90; // notch width — ~70% smaller than before
const NR = 8; // notch bottom corner radius
const SR = 13; // shoulder curve joining notch to bezel

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

export function AppFrame() {
  const [size, setSize] = useState({ w: 1280, h: 800 });

  useEffect(() => {
    // document.documentElement.clientWidth/Height excludes the scrollbar, matching what a
    // `fixed w-full` element actually renders at. window.innerWidth includes the scrollbar,
    // which was drawing the path a few px wider than the visible canvas — clipping the right edge.
    const update = () =>
      setSize({
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nw = Math.max(60, Math.min(size.w * 0.14, NW));
  const framePath = useMemo(() => buildFramePath(size.w, size.h, nw), [size.w, size.h, nw]);

  return (
    <>
      {/* Continuous bezel + notch — empty cutout, camera-housing style */}
      <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full">
        <defs>
          <mask id="bezel-mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={framePath} fill="black" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="var(--bezel)" mask="url(#bezel-mask)" />
      </svg>

      {/* Wordmark, moved to the top-left corner — plain text, no pill */}
      <div
        className="pointer-events-none fixed inset-x-0 z-50 flex items-center px-6 sm:px-12"
        style={{ top: B, height: NH + 12 }}
      >
        <Link
          to="/"
          className="bouncy pointer-events-auto font-notch text-[21px] ink hover:scale-105 sm:text-[23px]"
        >
          noven
        </Link>
      </div>
    </>
  );
}
