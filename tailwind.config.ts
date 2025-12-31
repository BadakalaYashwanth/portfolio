import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        ferrari: {
          red: "#FF2800",
          black: "#050505",
          dark: "#101010",
          silver: "#A0A0A0",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-space-grotesk)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
