import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme";

export function BottomDock() {
  const { mode, setMode } = useTheme();

  return (
    <div
      className="fixed bottom-6 left-6 z-40 hidden flex-col items-center gap-1 rounded-full bg-card/92 p-2 shadow-md backdrop-blur-md md:flex"
      role="group"
      aria-label="Appearance and contact"
    >
      <button
        role="radio"
        aria-checked={mode === "dark"}
        aria-label="Dark mode"
        onClick={() => setMode("dark")}
        className={`bouncy grid size-11 place-items-center rounded-full hover:scale-110 active:scale-95 ${
          mode === "dark"
            ? "bg-foreground/90 text-background shadow-inner backdrop-blur-xl"
            : "text-muted-foreground hover:bg-foreground/5"
        }`}
      >
        <Moon size={19} fill={mode === "dark" ? "currentColor" : "none"} />
      </button>

      <button
        role="radio"
        aria-checked={mode === "light"}
        aria-label="Light mode"
        onClick={() => setMode("light")}
        className={`bouncy grid size-11 place-items-center rounded-full hover:scale-110 active:scale-95 ${
          mode === "light" ? "bg-foreground text-background" : "text-muted-foreground hover:bg-foreground/5"
        }`}
      >
        <Sun size={19} fill={mode === "light" ? "currentColor" : "none"} />
      </button>

      <span className="my-0.5 h-px w-6 bg-border" />

      <a
        href="https://wa.me/233548456600"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp 0548456600"
        className="bouncy group grid size-11 place-items-center rounded-full text-foreground hover:scale-110 hover:bg-foreground/5 active:scale-95"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden>
          <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.16-1.35a9.94 9.94 0 0 0 4.88 1.27h.01c5.5 0 9.96-4.46 9.96-9.96C22 6.46 17.54 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.94 1.35-.5.05-.98.24-3.3-.69-2.78-1.1-4.54-3.94-4.68-4.12-.13-.18-1.11-1.48-1.11-2.82 0-1.34.7-2 .95-2.27.24-.27.53-.34.7-.34.18 0 .35 0 .5.01.16.01.38-.06.59.45.24.57.8 1.97.87 2.11.07.14.11.31.02.49-.09.18-.13.29-.27.45-.13.16-.28.35-.4.47-.13.13-.27.28-.12.55.15.27.66 1.09 1.42 1.77.98.87 1.8 1.14 2.07 1.27.27.13.42.11.58-.07.16-.18.67-.78.85-1.05.18-.27.35-.22.59-.13.24.09 1.53.72 1.8.85.27.13.44.2.51.31.07.11.07.65-.17 1.33Z" />
        </svg>
      </a>
    </div>
  );
}
