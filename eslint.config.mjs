import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  globalIgnores(['**/dist/', '**/node_modules/']),
  {
    plugins: {
      react: fixupPluginRules(react),
      'react-hooks': fixupPluginRules(reactHooks),
      import: fixupPluginRules(_import),
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      'simple-import-sort': simpleImportSort,
      prettier,
    },

    extends: fixupConfigRules(
      compat.extends(
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
        'prettier'
      )
    ),

    languageOptions: {
      globals: {
        ...globals.browser,
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },

      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],

      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },

      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './',
        },
      },
    },

    rules: {
      ...reactHooks.configs.recommended.rules,
      semi: ['warn', 'always'],
      indent: 'off',
      quotes: 'off',
      'comma-dangle': 'off',
      'linebreak-style': 'off',
      'object-curly-spacing': 'off',

      'import/no-unresolved': 'error',
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,

      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prettier/prettier': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',

      'react/jsx-no-leaked-render': [
        'error',
        {
          validStrategies: ['ternary', 'coerce'],
        },
      ],

      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],

      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],

    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^react'],
            ['shared'],
            ['pages'],
            ['features'],
            ['^\\./*', '^./\\w+$', '^\\.\\./*'],
            ['(.svg|.png)'],
            ['(.css|.scss)'],
          ],
        },
      ],
    },
  },
]);
