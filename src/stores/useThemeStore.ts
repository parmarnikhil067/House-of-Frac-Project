import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { type ThemeMode } from "../config";
import { applyTheme } from "../utils/theme.utils";

interface ThemeState {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set, get) => ({
        theme: "light",
        setTheme: (theme) => {
          applyTheme(theme);
          set({ theme });
        },
        toggleTheme: () => {
          const newTheme = get().theme === "light" ? "dark" : "light";
          applyTheme(newTheme);
          set({ theme: newTheme });
        },
      }),
      { name: "theme-storage" } // persists in localStorage
    ),
    { name: "ThemeStore" }
  )
);
