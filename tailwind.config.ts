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
        // Paleta UNME Premium — Del dossier de arquitectura
        forest: {
          DEFAULT: "#3A4F3D",
          50: "#f4f7f4",
          100: "#e3ebe3",
          200: "#c5d8c5",
          300: "#9ebf9e",
          400: "#7ba37b",
          500: "#5a855a",
          600: "#466b46",
          700: "#3A4F3D", // Primary
          800: "#304530",
          900: "#283928",
        },
        taupe: {
          DEFAULT: "#8B7355",
          50: "#faf8f5",
          100: "#f5f0eb",
          200: "#e8e0d6",
          300: "#d4c9ba",
          400: "#b8a894",
          500: "#9e8d76",
          600: "#8B7355", // Secondary
          700: "#6d5a43",
          800: "#5a4a37",
          900: "#4a3d2e",
        },
        amber: {
          DEFAULT: "#C4956A",
          50: "#fdf8f3",
          100: "#f9ede0",
          200: "#f0d4b8",
          300: "#e4b88a",
          400: "#d4a070",
          500: "#C4956A", // Accent
          600: "#a67d55",
          700: "#8a6645",
          800: "#70533a",
          900: "#5c4430",
        },
        linen: {
          DEFAULT: "#F5F0EB",
          50: "#F5F0EB", // Background
          100: "#EDE8E1", // Surface
          200: "#e0d9d0",
          300: "#cdc4b8",
          400: "#b5a994",
          500: "#9e8f78",
          600: "#85755f",
          700: "#6d5f4d",
          800: "#5a4e40",
          900: "#4a4035",
        },
        earth: {
          DEFAULT: "#2C2420",
          50: "#f5f3f2",
          100: "#e8e4e1",
          200: "#d1c9c3",
          300: "#b3a69d",
          400: "#948478",
          500: "#7a6a5e",
          600: "#5e5148",
          700: "#4a3f38",
          800: "#2C2420", // Text
          900: "#1a1613",
        },
        muted: {
          DEFAULT: "#A09890",
        },
      },
      fontFamily: {
        display: ["var(--font-liter)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-quattrocento)", "Quattrocento Sans", "system-ui", "sans-serif"],
        elegant: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
      fontSize: {
        "display-1": ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-2": ["3.5rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-1": ["2.5rem", { lineHeight: "1.2" }],
        "heading-2": ["1.875rem", { lineHeight: "1.3" }],
        "heading-3": ["1.5rem", { lineHeight: "1.4" }],
        body: ["1.125rem", { lineHeight: "1.75" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        caption: ["0.8125rem", { lineHeight: "1.4" }],
        "big-number": ["3.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.04)",
        soft: "0 4px 20px rgba(0,0,0,0.06)",
        elevated: "0 8px 40px rgba(0,0,0,0.08)",
        premium: "0 12px 60px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
        "scale-in": "scaleIn 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
