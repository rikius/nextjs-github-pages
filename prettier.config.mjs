// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
    trailingComma: 'es5',
    semi: true,
    tabWidth: 4,
    singleQuote: true,
    useTabs: false,
    jsxSingleQuote: true,
    printWidth: 80,
    proseWrap: 'always',
    bracketSpacing: true,
    plugins: [
        '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-organize-imports',
    ],
    importOrder: [
        '^(react/(.*)$)|^(react$)',
        '^(next/(.*)$)|^(next$)',
        '<THIRD_PARTY_MODULES>',
        '',
        '^types$',
        '^@/env(.*)$',
        '^@/types/(.*)$',
        '^@/config/(.*)$',
        '^@/lib/(.*)$',
        '^@/hooks/(.*)$',
        '^@/components/ui/(.*)$',
        '^@/components/(.*)$',
        '^@/styles/(.*)$',
        '^@/app/(.*)$',
        '',
        '^[./]',
    ],
    overrides: [
        {
            files: '*.css',
            options: {
                parser: 'css',
            },
        },
        {
            files: '*.md',
            options: {
                parser: 'mdx',
            },
        },
    ],
};

export default config;
