import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#05070d",
        panel: "#0d1220",
        muted: "#94a3b8",
        line: "rgba(148, 163, 184, 0.18)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 36px rgba(56, 189, 248, 0.22)",
        premium: "0 24px 80px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        "radial-soft": "radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.18), transparent 35%), radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.14), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
