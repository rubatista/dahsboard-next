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
        rubbSky:"#C3EBFA",
        rubbSkyLight:"#EDF9FD",
        rubbPurple:"#CFCEFF",
        rubbPurpleLight:"#F1F0FF",
        rubbYellow:"#FAE27C",
        rubbYellowLight:"#FEFCE8"
      },
    },
  },
  plugins: [],
} satisfies Config;
