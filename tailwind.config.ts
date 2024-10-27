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
        gray: "hsl(0, 0%, 98%)",
        mediumGray: "hsl(0, 0%, 41%)",
        black: "hsl(0, 0%, 8%)"
      },
    },
  },
  plugins: [],
};
export default config;
