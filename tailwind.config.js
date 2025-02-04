/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2F3C7E',
        'secondary': '#FBEAEB',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#FBEAEB',
            p: {
              color: '#FBEAEB',
            },
            h1: {
              color: '#FBEAEB',
            },
            h2: {
              color: '#FBEAEB',
            },
            h3: {
              color: '#FBEAEB',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}