/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    gridTemplateColumns: {
      sidebar: '256px 1fr',
    },
    maxWidth: {
      70: '70rem',
      52: '52rem',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        igniteGreenMid: '#00875F',
        igniteGreenLight: '#00B37E',
      },
    },
    boxShadow: {
      ignite: '0 0 0 3px #00875f',
    },
  },
  plugins: [],
}
