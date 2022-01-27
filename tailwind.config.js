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
        tertiary: '#FBFBF2',
        accent: '#1C2635',
        pop: colors.red[800],
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
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0, scale: '150%' },
          '100%': { opacity: 1, scale: '100%' },
        },
        'blur-in': {
          '0%': { filter: 'grayscale(100%)' },
          '100%': { filter: 'grayscale(0%) blur(4px)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 2s ease-in-out',
        'blur-in': 'blur-in 6s ease-in-out',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
