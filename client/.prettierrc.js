const config = {
  arrowParens: "always",
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  importOrder: [
    "^utils/*",
    "^components/*",
    "^pages/*",
    "^styles/*",
    "^assets/*",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // https://github.com/prettier/prettier/issues/15388#issuecomment-1717746872
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
};

module.exports = config;
