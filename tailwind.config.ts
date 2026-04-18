import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        toast: {
          orange: "#F97316",
          "orange-dark": "#EA6C00",
          "orange-light": "#FED7AA",
        },
      },
    },
  },
  plugins: [],
};

export default config;
