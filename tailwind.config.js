module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: {
      'screen': '100vh',
      'screen-1/2': '50vh',
      'screen-1/4': '25vh',
      'screen-3/4': '75vh',
    },
    maxHeight: {
      'screen': '100vh',
      'screen-1/2': '50vh',
      'screen-1/4': '25vh',
      'screen-3/4': '75vh',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
