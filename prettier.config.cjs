/** @type {import("prettier").Config} */
module.exports = {
  endOfLine: "lf",
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "es5",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
