module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-plusplus': 'off',
  },

  parserOptions: {
    parser: 'babel-eslint',
  },

  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
};
