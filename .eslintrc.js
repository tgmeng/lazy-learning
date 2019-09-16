module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'airbnb-base'],
  plugins: ['jest'],
  env: {
    'jest/globals': true
  },
  rules: {
    'max-classes-per-file': 0,
    'no-plusplus': 0
  }
};
