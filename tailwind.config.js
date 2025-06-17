/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fcebd7",
        secondary: "#151314",
        tertiary: "#151030",
        navy: "#191970",
        orange: "#f3843b",
        lilac: "#e8d6ea",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 60px -20px #211e35",
      },
      screens: {
        xs: "500px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg3.jpg')",
        "hero-pattern2": "url('/src/assets/hero1.jpg')",
        "hero-pattern3": "url('/src/assets/weather2.png')"
      }
    },
  },
  plugins: [],
};
