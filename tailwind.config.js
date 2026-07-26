/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './blog/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#eef2f8',
          100: '#dbe4f0',
          200: '#b6c9e0',
          300: '#8ba9cc',
          400: '#5c82ae',
          500: '#3c6190',
          600: '#1e3a5f',
          700: '#152a45',
          800: '#101f33',
          900: '#0a1522',
        },
        ink: '#101a2c',
      },
    },
  },
  plugins: [],
}
