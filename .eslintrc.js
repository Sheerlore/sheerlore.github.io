module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'eslint:recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': ['error', 'never']
  }
}
