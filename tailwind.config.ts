import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#f3fcf7",
          100: "#def9eb",
          200: "#baf0d7",
          300: "#84dfb6",
          400: "#4ac68e",
          500: "#24ab72",
          600: "#188a5c",
          700: "#166f4c",
          800: "#145940",
          900: "#124935",
          950: "#062a20",
        },
        night: {
          900: "#020817",
          950: "#010510",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "glow-brand": "0 0 40px rgba(36, 171, 114, 0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
