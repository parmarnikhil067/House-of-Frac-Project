export type ThemeMode = "light" | "dark";

export interface ThemeConfig {
  colors: {
    light: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
    };
    dark: {
      background: string;
      text: string;
      primary: string;
      secondary: string;
    };
  };
}

export const themeConfig: ThemeConfig = {
  colors: {
    light: {
      background: "#ffffff",
      text: "#000000",
      primary: "#fdc345",
      secondary: "#6d5ae6",
    },
    dark: {
      background: "#0a0708",
      text: "#ffffff",
      primary: "#f9b223",
      secondary: "#1bce93",
    },
  },
};
