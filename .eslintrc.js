module.exports = {
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'airbnb-base'],
  plugins: ['jest'],
  env: {
    'jest/globals': true,
  },
  rules: {
    'max-classes-per-file': 0,
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-await-in-loop': 0,
    'import/prefer-default-export': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
