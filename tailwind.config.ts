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
          orange: '#F07830',
          'orange-dark': '#D4621A',
          'orange-light': '#F5A060',
          cream: '#FAF6F0',
          'cream-dark': '#E8E2D8',
          charcoal: '#2D2D2D',
          warm: '#8B7355',
        }
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
