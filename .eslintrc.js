module.exports = {
  env: {
    browser: true,
    es6: true,
    amd: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
    "next",
    "next/core-web-vitals",
  ],
  rules: {
    semi: ["error", "always"],
  },
};
