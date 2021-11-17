module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-card": "#fdf4ff",
        "light-mode": "#fae8ff ",
        "dark-mode": "#121721",
        "dark-card": "#19202d",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
