const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      ...colors,
      primary: {
        '100': '#cafdd5',
        '200': '#96fbb7',
        '300': '#61f49f',
        '400': '#3ae995',
        '500': '#00db88',
        '600': '#00bc87',
        '700': '#009d81',
        '800': '#007f74',
        '900': '#006769'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      screens: {
        'print': {
          'raw': 'print'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
