/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xxxs': '331px',

      'xxs': '431px',

      'xs': '481px',

      'sm': '640px',

      'smd': '735px',

      'md': '768px',

      'lg': '992px',

      'sxl': '1081px',

      'xl': '1200px',
    },
    extend: {
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
        'open': ['Open Sans', 'sans-serif'],
        'arial': ['Arial', 'sans-serif']
      },
    
      objectPosition: {
        'center-top': 'center top',
        'center-center': 'center center'
      },

      boxShadow: {
        "line": "0px 4px 4px 0px #00000040",
        "box": "0px 0px 20px 0px #00000040",
        "input-cont": "inset 1px 2px 0 rgba(0,0,0,.06)",
      },

      keyframes: {
        "middle-open": {
          "0%": { top: "50%", height: "0" },
          "100%": { top: "0", height: "100%" },
        },
      },
      
      animation: {
        "middle-open":"middle-open 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [],
  
};
