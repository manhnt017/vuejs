/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
// .eslintrc.js
// .eslintrc.js
module.exports = {
  parserOptions: {
    ecmaVersion: 2020, // Hỗ trợ các tính năng mới của ES (ES2020)
    sourceType: 'module' // Sử dụng module thay vì CommonJS
  },
  env: {
    node: true // Đảm bảo môi trường node được hỗ trợ
  }
  // Các thiết lập khác...
}
