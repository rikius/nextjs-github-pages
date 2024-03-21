import type { ReactNode } from "react";
import styles from "./Layout.module.css"; // Import your CSS file

type LayoutProps = { children?: ReactNode };

function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            {/* Top Section with Logo and Search */}
            <header className={styles.topMenu}>
                {/* Logo and Search */}
                <div className={styles.logoAndSearch}>
                    {/* Your logo and search input goes here */}
                    <input type="text" placeholder="Search..." />
                    {/* Add your logo */}
                </div>
                {/* Top menu */}
                <nav>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Documentation</a>
                        </li>
                        {/* Add more menu items as needed */}
                    </ul>
                </nav>
            </header>

            {/* Main Content Section */}
            <div className={styles.mainContent}>
                {/* Left Side Navigation */}
                <nav className={styles.leftNav}>
                    {/* Your left side navigation content goes here */}
                    <ul>
                        <li>
                            <a href="#introduction">Introduction</a>
                        </li>
                        <li>
                            <a href="#getting-started">Getting Started</a>
                        </li>
                        <li>
                            <a href="#components">Components</a>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>

                {/* Page Content */}
                <div className={styles.pageContent}>
                    {/* Content of the page goes here */}
                    {children}
                    {/* Add more sections as needed */}
                </div>

                {/* Right Side Navigation (Table of Contents) */}
                <nav className={styles.rightNav}>
                    {/* Your right side navigation (table of contents) content goes here */}
                    <h2>Table of Contents</h2>
                    <ul>
                        <li>
                            <a href="#introduction">Introduction</a>
                        </li>
                        <li>
                            <a href="#getting-started">Getting Started</a>
                        </li>
                        <li>
                            <a href="#components">Components</a>
                        </li>
                        {/* Add more table of contents links as needed */}
                    </ul>
                </nav>
            </div>

            {/* Footer Section */}
            <footer className={styles.footer}>
                {/* Your footer content goes here */}
                <p>Footer content here</p>
            </footer>
        </div>
    );
}

export default Layout;
