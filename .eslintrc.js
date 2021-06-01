module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    'max-len': ['error', { code: 200 }],
  },
}
