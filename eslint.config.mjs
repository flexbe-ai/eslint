import {
  combine,
  comments,
  ignores as ignoresFactory,
  imports,
  javascript,
  jsdoc,
  jsonc,
  markdown,
  node,
  sortPackageJson,
  sortTsconfig,
  stylistic,
  toml,
  typescript,
  unicorn,
  yaml,
  jsx,
  solid,
  react,
  formatters
} from '@antfu/eslint-config';

// Customize rules
// https://eslint.org/docs/latest/rules
export const baseRules = {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-duplicate-imports': 'off',
    'no-unused-private-class-members': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'require-await': 'off',
    'prefer-destructuring': 'off',
    'no-throw-literal': 'off',
    
    'style/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
    'style/no-trailing-spaces': ['warn', { 'ignoreComments': true }],
    'style/space-before-function-paren': ['error', 'never'],
    'style/template-curly-spacing': ['error', 'always'],
    'style/indent': ['error', 4],
    'style/quotes': ['error', 'single'],
    'style/semi': ['error', 'always'],
    'style/brace-style': ['error', 'stroustrup'],
    'style/block-spacing': ['error', 'always'],
    'style/quote-props': ['error', 'as-needed'],
    'style/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'never',
    }],
    'style/object-curly-spacing': ['error', 'always'],
    'style/keyword-spacing': ['error', { before: true, after: true }],
    'style/space-infix-ops': ['error'],
    'style/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
    'style/jsx-curly-spacing': [1, {
      when: 'always',
      allowMultiline: true,
    }],

    // TypeScript specific rules
    'ts/no-this-alias': 'off',
    'ts/ban-ts-comment': 'off',
    'ts/no-unsafe-argument': 'off',
    'ts/no-unsafe-member-access': 'off',
    'ts/no-unsafe-call': 'off',
    'ts/no-unsafe-assignment': 'off',
    'ts/no-unsafe-return': 'off',
    'ts/strict-boolean-expressions': 'off',
    'ts/prefer-nullish-coalescing': 'off',
    'ts/only-throw-error': 'off',
    'ts/consistent-type-definitions': 'off',
    
    'ts/prefer-optional-chain': 'error',
    'ts/no-floating-promises': 'error',
    'ts/await-thenable': 'error',
    'ts/no-misused-promises': ['error', {
      checksVoidReturn: false,
    }],
    'ts/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ],
    'ts/naming-convention': [
      'error',
      {
        selector: ['classMethod', 'typeLike'],
        format: ['snake_case', 'camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'variableLike',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allow',
        filter: {
          regex: '^flexbe_cli$',
          match: false
        }
      },
      {
        selector: 'property',
        format: [],
        leadingUnderscore: 'allowSingleOrDouble',
        trailingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      }
    ],

    // Import rules
    'perfectionist/sort-imports': 'off',
    'perfectionist/sort-named-imports': 'off',
    'perfectionist/sort-objects': 'off',
    'perfectionist/sort-objects-types': 'off',
      
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    
    // Import rules
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/consistent-type-specifier-style': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always-and-inside-groups',
        groups: [
            ['builtin', 'external'],
            ['internal', 'parent', 'sibling', 'index'],
            ['type'],
            ['object', 'unknown'],
        ],
        
        'pathGroups': [
          {
            pattern: '@common_src/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@common/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@admin/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@editor/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@components/**',
            group: 'parent',
            position: 'before',
          },
        ],
        named: { 
          enabled: true,
          import: true,
          export: true,
          require: false,
          cjsExports: false,
          types: 'types-last',
        },

        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        'distinctGroup': false,
        'pathGroupsExcludedImportTypes': ['type'],
        warnOnUnassignedImports: false,
      },
    ],
    'import/no-cycle': 'off',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-packages': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-self-import': 'error',
};

// Solid-specific rules that will only be applied if the plugin is available
export const solidRules = {
  'solid/reactivity': 'warn',
  'solid/no-destructure': 'warn',
  'solid/jsx-no-undef': 'error',
  'solid/prefer-show': 'off',
  'solid/prefer-classlist': 'off',
  'solid/no-innerhtml': 'off',
};

export const reactRules = {
  
};

export const ignores = ignoresFactory([
    '**/fixtures',
    '**/node_modules',
    '**/dist',
    '**/build',
    '**/coverage',
    '**/public',
    '**/*.min.[tj]s',
  ]);

// Base configuration that can be extended
export const baseConfig = combine(
  ignores,
  formatters(true),
  javascript({
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
  }),
  typescript({
    tsconfigPath: './tsconfig.json',
  }),
  stylistic({
    lessOpinionated: true,
  }),
  jsx(),
  node(),
  imports(),
  comments(),
  jsonc(),
  jsdoc(),
  markdown(),
  {
    rules: baseRules,
  },
);

// Solid-specific rules that will only be applied if the plugin is available
export const solidConfig = combine(
  baseConfig,
  solid({
    files: ['**/*.tsx'],
    overrides: solidRules
  }),
)

// React-specific configuration
export const reactConfig = combine(
  baseConfig,
  react({
    files: ['**/*.tsx'],
    overrides: reactRules
  }),
)

// Default export is the base config
export default baseConfig;