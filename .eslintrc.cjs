module.exports = {
    root: true,
    parserOptions: {
        project: './tsconfig.json',
    },
    ignorePatterns: ['dist', 'coverage', 'node_modules', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',

    extends: ['prettier', 'eslint:recommended', 'next/core-web-vitals'],
    plugins: ['@typescript-eslint'],
    rules: {
        'import/no-unused-modules': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
        ],
        // '@typescript-eslint/consistent-type-exports': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
    },
};
