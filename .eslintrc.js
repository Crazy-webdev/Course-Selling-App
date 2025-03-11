module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  env: {
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'indent': ['error', 2],
    'no-trailing-spaces': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', {
      'anonymous': 'always',
      'named': 'never',
      'asyncArrow': 'always'
    }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'keyword-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single',{ 'avoidEscape':true, 'allowTemplateLiterals': true}],
  },
  ignorePatterns: ['node_modules', 'dist']
};