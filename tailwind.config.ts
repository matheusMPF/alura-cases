import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "050": "#EAE2F8",
          "100": "#CFBCF2",
          "200": "#A081D9",
          "300": "#8662C7",
          "400": "#724BB7",
          "500": "#653CAD",
          "600": "#51279B",
          "700": "#421987",
          "800": "#34126F",
          "900": "#240754",
        },
        neutral: {
          "000": "#FFFFFF",
          "050": "#F7F7F7",
          "100": "#E1E1E1",
          "200": "#CFCFCF",
          "300": "#B1B1B1",
          "400": "#9E9E9E",
          "500": "#7E7E7E",
          "600": "#626262",
          "700": "#515151",
          "800": "#3B3B3B",
          "900": "#222222",
          "999": "#111111",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        OpenSansBold: ["OpenSans-bold", "sans-serif"],
        OpenSansRegular: ["OpenSans-Regular", "sans-serif"],
      },
      screens: {
        xs: "0px",
        sm: "480px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
} satisfies Config;
