module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
  ],
  plugins: ['@typescript-eslint', 'jest'],
  env: {
    'jest/globals': true,
  },
};
