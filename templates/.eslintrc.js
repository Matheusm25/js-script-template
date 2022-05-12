module.exports = {
  env: {
    commonjs: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2021,
  },
  globals: {},
  rules: {
    'prettier/prettier': 'error',
    'arrow-parens': 'off',
  },
};
