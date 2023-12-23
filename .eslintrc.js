/** @type {import('eslint').Config} */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^', '^@'], ['^(~)(/.*|$)'], ['^\\.']],
      },
    ],
  },
}
