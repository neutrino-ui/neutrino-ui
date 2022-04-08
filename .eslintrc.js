const rules = {
  ON: 2,
  OFF: 0,
  WARN: 1,
}
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'simple-import-sort',
    'import',
    'unused-imports',
    'no-only-tests',
    'jsx-a11y',
    'i18n-text',
    'testing-library',
    'jest'
  ],
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:github/recommended',
    'plugin:github/typescript',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['node_modules', '.cache', '.eslintrc.js', 'jest.config.js'],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  rules: {
    '@typescript-eslint/camelcase': rules.OFF,
    '@typescript-eslint/explicit-function-return-type': rules.OFF,
    '@typescript-eslint/explicit-member-accessibility': rules.OFF,
    '@typescript-eslint/no-non-null-assertion': rules.OFF,
    '@typescript-eslint/no-unused-vars': rules.OFF,
    '@typescript-eslint/array-type': rules.OFF,
    '@typescript-eslint/no-explicit-any': rules.OFF,
    '@typescript-eslint/no-empty-interface': rules.OFF,
    '@typescript-eslint/no-empty-function': rules.OFF,
    '@typescript-eslint/no-use-before-define': rules.OFF,
    '@typescript-eslint/no-object-literal-type-assertion': rules.OFF,
    'filenames/match-regex': rules.OFF,
    'react/react-in-jsx-scope': rules.OFF,
    'react/no-deprecated': rules.OFF,
    'react/prop-types': rules.OFF,
    'react-hooks/rules-of-hooks': rules.ON,
    'react-hooks/exhaustive-deps': rules.WARN,
    'prefer-spread': rules.WARN,
  },
  "overrides": [
    // rules which apply only to JS
    {
      "files": ["**/*.spec.{ts,tsx}"],
      "rules": {
        "i18n-text/no-en": 0
      }
    },
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json'
      }
    },
    'import/ignore': [
      'node_modules',
    ]
  },
}
