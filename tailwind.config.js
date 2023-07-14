/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        bodycolor: "#e7e9ed",
        green: "#4fb291",
        darkgreen: "#1BA89E",
        GreenBlue: "#1B6CA8",
        blackblue: "#243f56",
        purple: "#4338ca",
        headcolor: "#0C2F55",
        lightgrey: "#535b61",
        verylightgray: "#f0f0f0",
        tab: "#8298AF",
        tabchange: "#0071cc",
        uficon: "#546d89",
        greycommon: "#253B33",
        blackbig: "#212529",
      },
      fontFamily: {
        Signika: ["Poppins", "sans-serif"],
        Castoro: ["Castoro Titling", "cursive"],
        Poppins: ["Poppins", "sans-serif"]
      },

    },
  },
  plugins: [],
});
