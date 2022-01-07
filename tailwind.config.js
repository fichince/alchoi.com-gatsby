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
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
