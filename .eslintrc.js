module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
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
    indent: ['error', 2],
    'no-trailing-spaces': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'keyword-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'never', prev: 'import', next: 'import' },
      { blankLine: 'never', prev: 'const', next: 'const' }, 
      { blankLine: 'always', prev: 'expression', next: 'expression' }, 
      { blankLine: 'always', prev: '*', next: 'export' },
      { blankLine: 'always', prev: 'export', next: '*' },
      { blankLine: 'any', prev: 'export', next: 'export' }
    ],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
  },
  ignorePatterns: ['node_modules', 'dist'],
};
