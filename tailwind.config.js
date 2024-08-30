/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '520px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      bg_black: '#0d0d0d',
      txt_white: '#c7c7c7',
    },
    extend: {},
  },
  plugins: [],
};
