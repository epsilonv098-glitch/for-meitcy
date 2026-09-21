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
        navy: "#1a1f3d",
        midnight: "#2a3560",
        softblue: "#7aa5d6",
        indigo2: "#4a4a8a",
        violet2: "#8a6bc9",
        lavender: "#c5b3e6",
        offwhite: "#faf6f0",
        softpink: "#f4a7b9",
        paper: "#fffbf0",
      },
      fontFamily: {
        pixel: ["var(--font-pixel)", "monospace"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      animation: {
        'blink': 'blink 1s step-start infinite',
        'float': 'float 3s ease-in-out infinite',
        'bounce-soft': 'bounceSoft 0.6s ease-out',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        bounceSoft: {
          '0%': { transform: 'scale(0.9) translateY(10px)', opacity: '0' },
          '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
