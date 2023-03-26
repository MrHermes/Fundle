/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Poppins', ...fontFamily.sans],
      },
      colors: {
        primary: {
          100: '#06A371',
          200: '#CFEEE4',
          300: '#E6F8F2',
          400: '#EDFFF9',
          500: '#FFFFFF',
          600: '#23926f',
        },
        secondary: {
          100: '#FFA500',
          200: '#FF7A00',
        },
      },
      keyframes: {
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        shimmer: 'shimmer 1.3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
