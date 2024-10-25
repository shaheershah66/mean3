/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "line": '0px 4px 4px 0px #00000040',
        "box": "0px 0px 20px 0px #00000040"
      },

      keyframes: {
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },

        "middle-open": {
          "0%": { top: "50%", height: "0" },
          "100%": { top: "0", height: "100%" },
        },
      },
      animation: {
        "slide-up": "slide-up 1s ease-in-out",
        "middle-open":"middle-open 0.2s ease-in-out forwards"
      },
    },
  },
  plugins: [],
};
