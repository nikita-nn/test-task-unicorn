/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      avenir: ["Avenir Next Cyr", "sans-serif"],
    },
    extend: {
      animation: {
        "fly-in": "flyIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        flyIn: {
          "0%": { transform: "translate(0, 0)", opacity: "0" },
          "100%": { transform: "translate(6rem, -20rem)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
