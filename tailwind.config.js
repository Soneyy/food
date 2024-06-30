const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', ...defaultTheme.fontFamily.sans],
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#ec1c24",
        "primary-dark": "#555",
        "primary-light": "#5B5B66",
        secondary: "#c054583b",
      },
      screens: {
        sm: "576px", // mobile landscape mode
        md: "768px", // tablet
        lg: "1024px", // laptop without side numerical in keypad
        xl: "1280px", // normal desktop 188
        xxl: "1400px", // huge monitor 210
      },
      keyframes: {
        slide: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100vw)', backgroundColor: 'red' },
        },
      },
      animation: {
        slide: 'slide 1s ease-in-out',
      },
    },
    },
  
  plugins: [],
};