import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['src/*.{ts,tsx}'],    
  },
  {
    ignores: ['src/types.ts', 'src/graphql/*', 'src/graphql/**/*'],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  // ...tseslint.configs.strict,
  // ...tseslint.configs.stylistic,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      indent: ['error', 2],
      semi: 'error',
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      'jsx-quotes': ['error', 'prefer-double'],
      'eol-last': ['error', 'always'],
      'quote-props': ['error', 'as-needed'],
      'comma-dangle': ['error', 'always-multiline'],
      'no-sparse-arrays': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/jsx-indent': ['error', 2],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
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
      'react/jsx-indent-props': ['error', 2],
      'space-before-blocks': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'react/jsx-first-prop-new-line': ['error', 'multiline'],
      'react/jsx-max-props-per-line': ['error', { when: 'multiline' }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],      
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens',
          assignment: 'parens',
          condition: 'parens',
          logical: 'parens',
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
      'react/jsx-curly-brace-presence': [
        'error',
        {
          props: 'never',
          children: 'never',
        },
      ],
    },    
  },
];
