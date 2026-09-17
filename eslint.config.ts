import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig } from 'eslint/config';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,ts}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      unicorn.configs.recommended,
      eslintConfigPrettier,
    ],
    languageOptions: {
      globals: globals.browser,
    },
    linterOptions: {
      noInlineConfig: true,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
          maxEOF: 0,
          maxBOF: 0,
        },
      ],
    },
  },
  {
    ignores: ['dist/', 'coverage/', 'node_modules/'],
  },
]);
