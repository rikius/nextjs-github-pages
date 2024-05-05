import Document, { Head, Html, Main, NextScript } from 'next/document';
import { SkipNavLink } from 'nextra-theme-docs';

import { siteConfig } from '../siteConfig';

class MyDocument extends Document {
    render() {
        return (
            <Html
                lang={siteConfig.languageCode}
                dir={siteConfig.isRTL ? 'rtl' : 'ltr'}
            >
                <Head />
                <body>
                    <SkipNavLink styled />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
