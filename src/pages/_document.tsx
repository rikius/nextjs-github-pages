import { Head, Html, Main, NextScript } from "next/document";
import { siteConfig } from "../siteConfig";

export default function Document() {
    return (
        <Html
            lang={siteConfig.languageCode}
            dir={siteConfig.isRTL ? "rtl" : "ltr"}
        >
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
