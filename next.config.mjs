import nextra from "nextra";

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
    defaultShowCopyCode: true,
    readingTime: true,
});

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    cleanDistDir: true,
    images: {
        loader: "akamai",
        path: "",
    },
};

export default withNextra(nextConfig);
