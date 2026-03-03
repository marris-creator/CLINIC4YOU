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
        // Clinic4U brand palette — navy + teal (distinct from herzel's palette)
        navy: {
          50:  "#eef2fb",
          100: "#d5dff5",
          200: "#abc0eb",
          300: "#7a9bde",
          400: "#4d77d0",
          500: "#2d5abf",
          600: "#1e4299",
          700: "#163274",
          800: "#0e2050",
          900: "#080f28",
          950: "#040818",
        },
        teal: {
          50:  "#edfafa",
          100: "#d5f5f6",
          200: "#abe9ed",
          300: "#74d7de",
          400: "#38bdc8",
          500: "#1ea7b5",
          600: "#168797",
          700: "#156b79",
          800: "#145564",
          900: "#124655",
        },
        sand: {
          50:  "#fdfcf8",
          100: "#f9f6ed",
          200: "#f1ebd6",
          300: "#e5d9b6",
          400: "#d4c28e",
          500: "#c4aa6d",
          600: "#a8893e",
          700: "#8a6d2e",
          800: "#6e5426",
          900: "#5a431e",
        },
        offwhite: "#f8f7f4",
        charcoal: "#1c1c2e",
      },
      fontFamily: {
        sans: ["var(--font-sora)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 4px 24px -4px rgba(8,15,40,0.10), 0 1px 4px -1px rgba(8,15,40,0.06)",
        "card-hover": "0 12px 40px -8px rgba(8,15,40,0.18), 0 2px 8px -2px rgba(8,15,40,0.08)",
        glow: "0 0 32px rgba(30,167,181,0.25)",
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #080f28 0%, #0e2050 50%, #145564 100%)",
        "gradient-teal": "linear-gradient(135deg, #1ea7b5 0%, #168797 100%)",
        "gradient-section": "linear-gradient(180deg, #f8f7f4 0%, #edfafa 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
