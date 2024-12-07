import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['src/*.ts'],    
  },
  {
    ignores: [
      'src/prisma/@generated/*',
      'src/prisma/@generated/**/*',
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // ...tseslint.configs.strict,
  // ...tseslint.configs.stylistic,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      indent: ['error', 2],
      semi: 'error',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'jsx-quotes': ['error', 'prefer-double'],
      'eol-last': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-sparse-arrays': 'error',
      'prefer-template': 'error',
      'object-curly-spacing': ['error', 'always'],
      'space-in-parens': ['error', 'never'],      
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'no-multi-spaces': ['error'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'arrow-parens': ['error', 'always'],
      'arrow-body-style': ['error', 'always'],
      'no-bitwise': 'error',
      'space-infix-ops': ['error'],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],      
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: false,
        },
      ],
    },
  },
];
