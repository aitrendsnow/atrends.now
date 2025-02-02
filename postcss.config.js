module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "postcss-purgecss": {
      content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx,html}"],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    },
  },
};
