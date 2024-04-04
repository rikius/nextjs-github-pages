import nextra from "nextra";
import rehypePrettyCode from "rehype-pretty-code";
import { bundledLanguages, getHighlighter } from "shiki/bundle/web";
import { transformerNotationDiff, transformerNotationHighlight, transformerNotationWordHighlight, transformerNotationErrorLevel, transformerNotationFocus } from '@shikijs/transformers';


import fs from "node:fs";

// /** @type {import('rehype-pretty-code').Options} */
// const options = {
//   // See Options section below.
//   // @ts-expect-error -- TODO: fix type error
//   theme: {
//     dark: "github-dark-dimmed",
//     light: "github-light",
//   },
// };

const light = JSON.parse(fs.readFileSync('./themes/shiki.github-light.json', 'utf8'))
const dark = JSON.parse(fs.readFileSync('./themes/shiki.github-dark.json', 'utf8'))

/** @type {import('rehype-pretty-code').Options} */
const options = {
    keepBackground: false,
    transformers: [transformerNotationDiff(), transformerNotationHighlight(), transformerNotationWordHighlight(), transformerNotationErrorLevel(), transformerNotationFocus()],
    theme: {
        light: light,
        dark: dark,
    },
    // theme: JSON.parse(fs.readFileSync("./themes/shiki.github-light.json", "utf-8")),
    // themes: {
    //     lignt: JSON.parse(
    //         fs.readFileSync("./themes/shiki.github-light.json", "utf-8"),
    //     ),
    //     dark: JSON.parse(
    //         fs.readFileSync("./themes/shiki.github-dark.json", "utf-8"),
    //     ),
    // },
    // theme: "default",
    // {
    //     // JSON.parse(fs.readFileSync("./themes/shiki.github-light.json", "utf-8")),
    //     dark: JSON.parse(
    //         fs.readFileSync("./themes/shiki.github-dark.json", "utf-8"),
    //     ),
    //     light: JSON.parse(
    //         fs.readFileSync("./themes/shiki.github-light.json", "utf-8"),
    //     ),
    // },
    // optional customizations
    // defaultColor: "light",
    cssVariablePrefix: "--shiki-",
    // defaultColor: false, // <--
};

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
    defaultShowCopyCode: true,
    readingTime: true,
    latex: false,
    codeHighlight: false,
    mdxOptions: {
        // rehypePrettyCodeOptions: options,
        rehypePlugins: [([rehypePrettyCode, options])],
    },
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
