module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    nameof: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: ['plugin:react/recommended', 'airbnb/base', 'plugin:prettier/recommended'],
  plugins: ['import', 'react', '@typescript-eslint', 'eslint-plugin-prettier', 'only-warn'],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      fragment: 'Fragment',
      version: 'detect',
      flowVersion: '0.53',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'no-floating-promises': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
  },
};
