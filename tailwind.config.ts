import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0c",
          elevated: "#101014",
          surface: "#16161a",
          hover: "#1c1c22",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.06)",
          hover: "rgba(255,255,255,0.1)",
        },
        text: {
          DEFAULT: "#f5f5f7",
          secondary: "#8a8a8e",
          tertiary: "#56565a",
        },
        accent: {
          DEFAULT: "#b4a0ff",
          deep: "#8b5cf6",
          glow: "rgba(139,92,246,0.08)",
        },
        cyan: "#67e8f9",
        green: "#4ade80",
        orange: "#fb923c",
        pink: "#f472b6",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      maxWidth: {
        container: "1100px",
      },
      borderRadius: {
        card: "12px",
        pill: "99px",
      },
      letterSpacing: {
        heading: "-0.04em",
      },
      lineHeight: {
        heading: "1.1",
        body: "1.65",
      },
    },
  },
  plugins: [],
};
export default config;
