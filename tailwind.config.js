/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  important: '#__next',
  theme: {
    extend: {
      keyframes: {
        collide: {
          '0%': {
            transform: 'rotate(0) scale(0.8)'
          },
          '50%': {
            transform: 'rotate(180deg) scale(1.2)'
          },
          '100%': {
            transform: 'rotate(360deg) scale(0.8)'
          }
        }
      }
    }
  },
  plugins: []
};
