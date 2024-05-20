/* eslint-disable no-undef */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins'],

      },
      colors: {
        main: 'var(--main-color)',
        sec: 'var(--sec-color)',
        p: 'var(--p-color)',
      },

    },
  },
  plugins: [],
};