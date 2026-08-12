import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type Mode = "light" | "dark";

const ThemeCtx = createContext<{ mode: Mode; setMode: (m: Mode) => void }>({
  mode: "light",
  setMode: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("light");

  useEffect(() => {
    const saved = window.localStorage.getItem("noven-theme");
    if (saved === "dark" || saved === "light") setModeState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", mode === "dark");
  }, [mode]);

  const setMode = useCallback((m: Mode) => {
    setModeState(m);
    window.localStorage.setItem("noven-theme", m);
  }, []);

  return <ThemeCtx.Provider value={{ mode, setMode }}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
