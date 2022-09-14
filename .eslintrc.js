module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "sourceType": "module"
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    "@typescript-eslint",
    "import",
    "local-rules",
    "simple-import-sort",
    "cypress",
    "chai-friendly",
    "formatjs",
    "react-hooks"
  ],
  rules: {
  },
  "ignorePatterns": ["node_modules/", "**/types/**/*", "type-policies.ts"]
}
