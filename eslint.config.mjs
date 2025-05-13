import antfu from '@antfu/eslint-config';

export default antfu({
  // Type of the project. `lib` will enable more strict rules for libraries.
  type: 'app',

  // Disable some opinionated rules
  lessOpinionated: true,

  // Enable formatters support for CSS, HTML, SVG, MD etc.
  formatters: true,

  // Enable TypeScript support
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  // Enable JSX related rules
  jsx: true,

  // Enable linting for **code snippets** in Markdown.
  markdown: true,

  // Disable linting for JSON files
  json: false,

  // Customize the stylistic rules
  // https://eslint.style/packages/default#rules
  stylistic: {
    indent: 4, // Changed to 4 spaces as per old config
    quotes: 'single',
    semi: true,
    braceStyle: 'stroustrup',
    blockSpacing: true,
    quoteProps: 'as-needed',
    commaDangle: {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'never',
    },
    objectCurlySpacing: 'always',
    keywordSpacing: { before: true, after: true },
    spaceInfixOps: true,
    memberDelimiterStyle: {
      multiline: {
        delimiter: 'semi',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    },
    jsxCurlySpacing: {
      when: 'always',
      children: 1,
      attributes: 1,
      allowMultiline: true,
    },
  },

  // Customize rules
  // https://eslint.org/docs/latest/rules
  rules: {
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

    // Solid specific rules
    'solid/reactivity': 'warn',
    'solid/no-destructure': 'warn',
    'solid/jsx-no-undef': 'error',
    'solid/prefer-show': 'off',
    'solid/prefer-classlist': 'off',
    'solid/no-innerhtml': 'off',
  },

  // Ignore files
  ignores: [
    '**/fixtures',
    '**/node_modules',
    '**/dist',
    '**/build',
    '**/coverage',
    '**/public',
    '**/*.min.[tj]s',
  ],
}); 