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
        brand: {
          orange: "#E8722C",
          "orange-dark": "#C85A1E",
          cream: "#FAF5EC",
          charcoal: "#2B1810",
          dark: "#3A1F0F",
          warm: "#8C6A4F",
        },
      },
      fontFamily: {
        display: ["DM Serif Display", "Georgia", "serif"],
        script: ["Caveat", "cursive"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
