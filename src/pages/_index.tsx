import Code from 'components/Code';

function DocumentationPage() {
    return (
        <>
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
            <Code code='`const numbers = [1, 2, 3]{:js}`'></Code>
        </>
    );
}

export default DocumentationPage;
