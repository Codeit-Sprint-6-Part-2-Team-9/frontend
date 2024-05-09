module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'mantine',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['node_modules', 'dist'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/disable-type-checked',
        'eslint-config-prettier',
      ],
      files: ['./src/*.js', './*.js'],
    },
  ],
};
