/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#00529f',
        'secondary-color': '#ff7f00',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#444444',
            a: {
              color: '#00529f',
              '&:hover': {
                color: '#5faee3',
              },
            },
            h1: {
              fontFamily: '"Raleway", sans-serif',
            },
            h2: {
              fontFamily: '"Raleway", sans-serif',
            },
            h3: {
              fontFamily: '"Raleway", sans-serif',
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