module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any':'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'no-unused-vars': 'off', //未使用变量
    'no-empty-function': 'off', // 未定义Function
    '@typescript-eslint/no-empty-function': 'off',
    'no-async-promise-executor': 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off', // 禁止使用!.
    'no-extra-boolean-cast': 'off', // 禁止使用 !!
  },
}