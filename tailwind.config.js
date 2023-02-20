/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        sx: '0.1rem',
      },
    },
  },
  variants: {
    extend: {
      fontSize: ['responsive'], // Enable responsive variants for font size
    },
  },
  plugins: [
    function ({ addBase, addUtilities }) {
      addBase({
        html: { fontSize: '6px' },
        '@media (min-width: 640px)': {
          html: { fontSize: '8px' },
        },
        '@media (min-width: 1024px)': {
          html: { fontSize: '18px' },
        },
      })

      const textSx = {
        '.text-sx': { fontSize: '0.3rem' },
      }
      addUtilities(textSx, ['responsive'])

      const sx = {
        '.sx': { fontSize: '0.3rem' },
      }
      addUtilities(sx, ['responsive'])
    },
  ],
}
