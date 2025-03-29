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
        background: "#121212",
        surface: "#1a1a1a",
        primary: {
          DEFAULT: "#7c3aed",
          hover: "#6d28d9",
        },
        secondary: "#2a2a2a",
        border: "#2a2a2a",
      },
    },
  },
  plugins: [],
};

export default config;
