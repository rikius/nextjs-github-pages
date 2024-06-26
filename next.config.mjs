import nextra from 'nextra';

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx',
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    cleanDistDir: true,
};

export default withNextra(nextConfig);
