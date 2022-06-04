module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'react-app',
    'react-app/jest',
    'prettier',
  ],
  rules: {
    'no-bitwise': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['acc'],
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['external', 'internal', 'builtin', 'parent', 'sibling', 'index'],
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
};
