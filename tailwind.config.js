/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "dark-color": "#21243d",
        black: "#000",
        aliceblue: "#edf7fa",
        darkslateblue: "#142850",
        light: "#8695a4",
        year: "#ff7c7c",
        primary: "#ff6464",
        secondry: "#00a8cc",
        palevioletred: "#ff7999",
        moccasin: "#ffeec1",
      },
      fontFamily: {
        heebo: "Heebo",
        "circular-std": "'Circular Std'",
      },
    },
    fontSize: {
      xl: "20px",
      "7xl": "26px",
      lg: "18px",
      base: "16px",
      sm: "14px",
      "11xl": "30px",
      "3xl": "22px",
      "5xl": "24px",
      "25xl": "44px",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
