module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'mobile': '350px',
      'tablet': '600px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
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
    },
    width:{
      'screen': '100vw',
      'screen-1/2': '50vw',
      'screen-1/4': '25vw',
      'screen-3/4': '75vw',
      'screen-9/10': '90vw',
      '30': '30%',
      '40': '40%',
      '60': '60%',
      '70': '70%',
      '80': '80%',
      '90': '90%',
      'full': '100%',
    },
    maxWidth: {
      'screen': '100vw',
      'screen-1/2': '50vw',
      'screen-1/4': '25vw',
      'screen-3/4': '75vw',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
