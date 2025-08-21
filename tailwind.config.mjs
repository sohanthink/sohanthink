/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
export default {
  darkMode: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        move: "move 5s linear infinite",
      },
      keyframes: {
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      fontFamily: {
        sspro: ["var(--font-enb)", ...fontFamily.sans],
      },
      colors: {
        green: "#00c566",
        themeColor: "#00c566",
        grayColor: "#A0A1A6",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
