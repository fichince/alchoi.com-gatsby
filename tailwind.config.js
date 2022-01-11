const colors = require('tailwindcss/colors');

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./content/**/*.md",
    "./content/**/*.mdx",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#D9DCD1',
        secondary: '#CCCBCD',
        accent: '#2A394F',
      },
      fontFamily: {
        display: ['Special Elite', 'serif'],
        body: ['Crimson Pro', 'serif'],
      },
      typography: ({ theme }) => ({
        neutral: {
          css: {
            '--tw-prose-hr': theme('colors.accent'),
            '--tw-prose-quote-borders': theme('colors.accent')
          }
        }
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
