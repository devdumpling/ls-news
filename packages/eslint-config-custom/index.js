/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: ["next/core-web-vitals", "turbo", "prettier"],
  ignorePatterns: ["node_modules", "dist"],
  parserOptions: {
    // resolves this - https://github.com/vercel/next.js/issues/40687
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
