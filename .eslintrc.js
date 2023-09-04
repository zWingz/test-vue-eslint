module.exports = {
  extends: [
    // add more generic rulesets here, such as:
    'eslint:recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 6,
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
    project: true,
  },
  plugins: ['@typescript-eslint'],
}
