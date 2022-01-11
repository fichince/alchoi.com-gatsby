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
        primary: '#C6CAB9',
        secondary: '#CCCBCD',
        tertiary: colors.gray[300],
        accent: '#1C2635',
      },
      fontFamily: {
        display: ['Special Elite', 'serif'],
        body: ['Crimson Pro', 'serif'],
      },
      typography: ({ theme }) => ({
        neutral: {
          css: {
            '--tw-prose-hr': theme('colors.accent'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-bullets': theme('colors.accent'),
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
