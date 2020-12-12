module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "jest", "react", "react-hooks"],
  extends: [
    "plugin:prettier/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier/react",
  ],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
};
