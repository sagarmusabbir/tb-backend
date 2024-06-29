import flowbite from "flowbite-react/tailwind";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#EDFCF5",
          "100": "#D3F8E6",
          "200": "#AAF0D1",
          "300": "#73E2B8",
          "400": "#3ACD9A",
          "500": "#17B282",
          "600": "#0B9069",
          "700": "#097357",
          "800": "#0A5B45",
          "900": "#094B3B",
          "950": "#042A22",
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
} satisfies Config;
