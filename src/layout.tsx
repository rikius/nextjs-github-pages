import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import "./styles/global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next.js on GitHub Pages",
    description: "A Next.js web application on GitHub Pages",
    viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
