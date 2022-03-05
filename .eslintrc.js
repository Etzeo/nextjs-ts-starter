module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'unicorn/import-index': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/custom-error-definition': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/filename-case': [
      'error',
      { cases: { camelCase: true, pascalCase: true, kebabCase: true } },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      env: {
        browser: true,
        es2021: true,
        node: true,
      },
      extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 12,
        project: './tsconfig.json',
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
      },
    },
    {
      files: ['components/**/*.ts', 'components/**/*.tsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: { pascalCase: true },
          },
        ],
      },
    },
    {
      files: ['pages/**/*.ts', 'pages/**/*.tsx'],
      rules: {
        'unicorn/filename-case': [
          'error',
          {
            cases: { kebabCase: true },
          },
        ],
      },
    },
    {
      files: ['*rc.js', '*.config.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
};
