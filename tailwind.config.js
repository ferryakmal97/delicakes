module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#0E4BB7",
        secondary: "#F4B3CB",
      },
      backgroundImage: {
        first: "url('/src/assets/BACKGROUND PERTAMA-01.png')",
      },
      borderRadius: {
        custom: "4rem",
      },
      spacing: {
        custom: "120rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
