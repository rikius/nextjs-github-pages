import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

import {
    transformerNotationDiff,
    transformerNotationErrorLevel,
    transformerNotationFocus,
    transformerNotationHighlight,
    transformerNotationWordHighlight,
} from '@shikijs/transformers';

/** @type {import('rehype-pretty-code').Options} */
const options = {
    keepBackground: false,
    transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationErrorLevel(),
        transformerNotationFocus(),
    ],
    theme: {
        light: import('themes/shiki.github-light.json'),
        dark: import('themes/shiki.github-dark.json'),
    },
    // optional customizations
    // defaultColor: "light",
    cssVariablePrefix: '--shiki-',
    // defaultColor: false, // <--
};

export async function Code(code: string) {
    const html = await unified()
        .use(remarkParse)
        .use(remarkRehype)
        .use(rehypePrettyCode, options)
        .use(rehypeStringify)
        .process(code);

    return String(html);
}

export default Code;
