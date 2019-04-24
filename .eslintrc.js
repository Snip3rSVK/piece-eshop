module.exports = {
  root: true,

  env: {
    node: true,
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-plusplus': 'off',
    'vue/array-bracket-spacing': 1,
    'vue/arrow-spacing': 2,
    'vue/block-spacing': 1,
    'vue/brace-style': 1,
    'vue/eqeqeq': 2,
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
