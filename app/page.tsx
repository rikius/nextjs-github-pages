import './styles/styles.css'; // Import your CSS file

function DocumentationPage() {
    return (
        <div className='container'>
            {/* Top Section with Logo and Search */}
            <header className='top-menu'>
                {/* Logo and Search */}
                <div className='logo-and-search'>
                    {/* Your logo and search input goes here */}
                    <input type='text' placeholder='Search...' />
                    {/* Add your logo */}
                </div>
                {/* Top menu */}
                <nav>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Documentation</a>
                        </li>
                        {/* Add more menu items as needed */}
                    </ul>
                </nav>
            </header>

            {/* Main Content Section */}
            <div className='main-content'>
                {/* Left Side Navigation */}
                <nav className='left-nav'>
                    {/* Your left side navigation content goes here */}
                    <ul>
                        <li>
                            <a href='#introduction'>Introduction</a>
                        </li>
                        <li>
                            <a href='#getting-started'>Getting Started</a>
                        </li>
                        <li>
                            <a href='#components'>Components</a>
                        </li>
                        {/* Add more navigation links as needed */}
                    </ul>
                </nav>

                {/* Page Content */}
                <div className='page-content'>
                    {/* Content of the page goes here */}
                    <section id='introduction'>
                        <h2>Introduction</h2>
                        <p>This is the introduction section.</p>
                    </section>

                    <section id='getting-started'>
                        <h2>Getting Started</h2>
                        <p>This is the getting started section.</p>
                    </section>

                    <section id='components'>
                        <h2>Components</h2>
                        <p>This is the components section.</p>
                    </section>
                    {/* Add more sections as needed */}
                </div>

                {/* Right Side Navigation (Table of Contents) */}
                <nav className='right-nav'>
                    {/* Your right side navigation (table of contents) content goes here */}
                    <h2>Table of Contents</h2>
                    <ul>
                        <li>
                            <a href='#introduction'>Introduction</a>
                        </li>
                        <li>
                            <a href='#getting-started'>Getting Started</a>
                        </li>
                        <li>
                            <a href='#components'>Components</a>
                        </li>
                        {/* Add more table of contents links as needed */}
                    </ul>
                </nav>
            </div>

            {/* Footer Section */}
            <footer>
                {/* Your footer content goes here */}
                <p>Footer content here</p>
            </footer>
        </div>
    );
}

export default DocumentationPage;
