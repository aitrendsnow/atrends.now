// postcss.config.cjs
const purgecss = require("@fullhuman/postcss-purgecss").default;

module.exports = {
  plugins: [
    purgecss({
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      safelist: {
        standard: ["show", "fade", "collapsing"],
        deep: [/^modal/, /^tooltip/, /^popover/],
      },
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
