import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

const B = 12; // bezel thickness
const R = 44; // outer/inner corner radius
const NH = 66; // notch height
const NW = 300; // notch width
const NR = 32; // notch bottom corner radius (very curvy)
const SR = 46; // shoulder curve joining notch to bezel

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
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const nw = Math.max(210, Math.min(size.w * 0.34, NW));
  const framePath = useMemo(() => buildFramePath(size.w, size.h, nw), [size.w, size.h, nw]);

  return (
    <>
      {/* Continuous bezel + notch */}
      <svg className="pointer-events-none fixed inset-0 z-50 h-full w-full">
        <defs>
          <mask id="bezel-mask">
            <rect width="100%" height="100%" fill="white" />
            <path d={framePath} fill="black" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="var(--bezel)" mask="url(#bezel-mask)" />
      </svg>

      {/* Notch wordmark + flanking pills */}
      <div
        className="pointer-events-none fixed inset-x-0 z-50 flex items-center justify-between px-6 sm:px-12"
        style={{ top: B, height: NH }}
      >
        <Link
          to="/services"
          style={{ background: "var(--bezel)" }}
          className="drop-in bouncy pointer-events-auto flex h-12 items-center rounded-full px-7 font-ui text-sm font-semibold ink shadow-md backdrop-blur-md hover:-translate-y-0.5 hover:scale-105 active:scale-95 sm:h-[3.25rem] sm:px-9 sm:text-base"
        >
          Services
        </Link>

        <Link
          to="/"
          className="drop-in pointer-events-auto grid place-items-center"
          style={{ width: nw, height: NH }}
          aria-label="noven home"
        >
          <span className="bouncy font-notch text-lg ink hover:scale-105 sm:text-xl">noven</span>
        </Link>

        <Link
          to="/contact"
          style={{ background: "var(--bezel)" }}
          className="drop-in bouncy pointer-events-auto flex h-12 items-center rounded-full px-7 font-ui text-sm font-semibold ink shadow-md backdrop-blur-md hover:-translate-y-0.5 hover:scale-105 active:scale-95 sm:h-[3.25rem] sm:px-9 sm:text-base"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
