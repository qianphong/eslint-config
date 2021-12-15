module.exports = {
  extends: '@antfu',
  rules: {
    // common
    'no-console': 'off',
    'brace-style': ['error', '1tbs'],
    'arrow-parens': ['error', 'as-needed'],
    'space-before-function-paren': ['error', { named: 'never' }],
    // vue
    'vue/html-self-closing': [
      'warn',
      { html: { normal: 'never', void: 'always' } },
    ],
    'vue/singleline-html-element-content-newline': 'off',
  },
}
