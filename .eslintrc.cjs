module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:nuxt/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'parser': '@typescript-eslint/parser',
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'vue'
  ],
  'rules': {
    'no-regex-spaces': 2,// 禁止在正则表达式字面量中使用多个空格 /foo bar/
    'key-spacing': [0, { 'beforeColon': false, 'afterColon': true }], // 对象字面量中冒号的前后空格
    'spaced-comment': 2,// 注释风格要不要有空格什么的
    'space-before-blocks': 2,  // if function等的大括号之前需要有空格
    'space-infix-ops': 2,
    'no-irregular-whitespace': 2, // 不规则的空白不允许
    'no-trailing-spaces': 2, // 一行结束后面有空格就发出警告
    'array-bracket-spacing': [2, 'never'],
    'no-tabs': 'error',
    'semi': [2, 'never'], // 禁止尾部使用分号“ ; ”
    'no-var': 'error', // 禁止使用 var
    'indent': ['error', 2], // 缩进2格
    'no-mixed-spaces-and-tabs': 'error', // 不能空格与tab混用
    'quotes': [2, 'single'], // 使用单引号
    'no-underscore-dangle': 0,
    'guard-for-in': 0,
    'no-restricted-syntax': 0,
    'no-unused-expressions': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'vue/multi-word-component-names': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'no-plusplus': 0,
    'no-constructor-return': 0,
    'no-return-assign': 0,
    'no-multi-assign': 0,
    'func-names': 0,
    'no-use-before-define': 0,
    'no-redeclare': 0,
    'vars-on-top': 0,
    'no-shadow': 0,
    'no-sequences': 0,
    'no-cond-assign': 0,
    'no-self-assign': 0,
    'no-nested-ternary': 0,
    'no-bitwise': 0,
    'block-scoped-var': 0,
    'no-void': 0,
    'consistent-return': 0,
    'import/no-mutable-exports': 0,
    'no-restricted-globals': 0,
    'no-unused-vars': 0,
    'max-classes-per-file': 0,
    'eqeqeq': 0,
    'no-debugger': 0,
    'prefer-destructuring': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'vue/no-multiple-template-root': 0,
    'vue/no-mutating-props': 0,
    'vue/no-v-model-argument': 0,
    'class-methods-use-this': 0,
    'import/extensions': 0,
    'comma-dangle': [2, 'never'],
    'vue/no-v-for-template-key': 0,
    'no-continue': 0
  }
}
