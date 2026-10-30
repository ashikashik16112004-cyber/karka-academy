import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-space)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        karka: {
          bg: "#05050A",
          surface: "#0D0E17",
          card: "#131524",
          cyan: "#00F0FF",
          purple: "#8B5CF6",
          lime: "#ADFF2F",
          pink: "#EC4899",
          amber: "#F59E0B",
        },
      },
      backgroundImage: {
        "cyber-grid":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "glow-cyan":
          "radial-gradient(circle at center, rgba(0, 240, 255, 0.18) 0%, transparent 70%)",
        "glow-purple":
          "radial-gradient(circle at center, rgba(139, 92, 246, 0.20) 0%, transparent 70%)",
        "glow-lime":
          "radial-gradient(circle at center, rgba(173, 255, 47, 0.15) 0%, transparent 70%)",
      },
      boxShadow: {
        "neon-cyan": "0 0 25px -4px rgba(0, 240, 255, 0.45)",
        "neon-lime": "0 0 25px -4px rgba(173, 255, 47, 0.45)",
        "neon-purple": "0 0 25px -4px rgba(139, 92, 246, 0.45)",
        "glass-inset": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.12)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
