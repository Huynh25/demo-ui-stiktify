import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          background: "#ffffff",
          surface: "#f8f9fa",
          primary: "#7c3aed",
          secondary: "#f3f4f6",
          text: "#111827",
          border: "#e5e7eb",
        },
        // Dark mode colors
        dark: {
          background: "#121212",
          surface: "#1a1a1a",
          primary: "#7c3aed",
          secondary: "#2a2a2a",
          text: "#ffffff",
          border: "#2a2a2a",
        },
      },
    },
  },
  plugins: [],
};

export default config;
