const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      inset: {
        full: '100%',
      },
      colors: {
        primary: 'rgb(0, 172, 224)',
        'primary-darker': 'rgb(0, 118, 184)',
      },
      fontFamily: {
        sans: ['Open Sans', defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      sm: '640px',

      md: '768px',

      lg: '1024px',
    },
  },
  variants: {},
  plugins: [],
};
