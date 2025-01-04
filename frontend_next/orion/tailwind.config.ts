import { Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        major: "#FC6A03",
        easy: "#03AC13",
        medium: "#FCAE1E",
        hard: "#D0312D"
      },
      fontFamily : {
        popl : "Poppins-Light",
        popr : "Poppins-Regular",
        popm : "Poppins-Medium",
        popsb : "Poppins-SemiBold",
        popb : "Poppins-Bold",
      },
    },
  },
  plugins: [],
} satisfies Config;
