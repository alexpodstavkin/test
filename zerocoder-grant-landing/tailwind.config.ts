import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heliotrope: "#B15EFF",
        "purple-heart": "#9B51E0",
        "cta-emerald": "#00E48D",
        "cta-emerald-hover": "#00C97A",
        "shark-1": "#222222",
        "shark-2": "#262626",
        "mine-shaft": "#323232",
        seashell: "#F1F1F1",
        alabaster: "#FBFBFB",
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "Arial", "sans-serif"],
      },
      borderRadius: {
        xs: "3px",
        sm: "5px",
        md: "10px",
        lg: "12px",
        xl: "15px",
        "2xl": "20px",
      },
      transitionProperty: {
        opacity: "opacity",
      },
      transitionDuration: { DEFAULT: "200ms" },
      transitionTimingFunction: { DEFAULT: "ease-in-out" },
      fontSize: {
        "h1-fluid": ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", fontWeight: "700" }],
        "h2-fluid": ["clamp(1.125rem, 2vw, 1.5rem)", { lineHeight: "1.15", fontWeight: "700" }],
        "h3-fluid": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.2", fontWeight: "700" }],
      },
    },
  },
  plugins: [],
};
export default config;
