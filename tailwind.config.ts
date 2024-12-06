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
      spacing: {
        px: "1px",
        "0.5": "2px", // 0.125rem
        "1": "4px", // 0.25rem
        "1.5": "6px", // 0.375rem
        "2": "8px", // 0.5rem
        "2.5": "10px", // 0.625rem
        "3": "12px", // 0.75rem
        "3.5": "14px", // 0.875rem
        "4": "16px", // 1rem
        "5": "20px", // 1.25rem
        "6": "24px", // 1.5rem
        "7": "28px", // 1.75rem
        "8": "32px", // 2rem
        "9": "36px", // 2.25rem
        "10": "40px", // 2.5rem
        "11": "44px", // 2.75rem
        "12": "48px", // 3rem
        "14": "56px", // 3.5rem
        "16": "64px", // 4rem
        "20": "80px", // 5rem
        "24": "96px", // 6rem
        "28": "112px", // 7rem
        "32": "128px", // 8rem
        "36": "144px", // 9rem
        "40": "160px", // 10rem
        "44": "176px", // 11rem
        "48": "192px", // 12rem
        "52": "208px", // 13rem
        "56": "224px", // 14rem
        "60": "240px", // 15rem
        "64": "256px", // 16rem
        "72": "288px", // 18rem
        "80": "320px", // 20rem
        "96": "384px", // 24rem
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
