export default {
    '*': {
        type: 'page',
    },
    index: {
        title: 'Home',
        display: 'hidden',
        theme: {
            breadcrumb: false,
            footer: true,
            sidebar: false,
            toc: false,
            pagination: false,
        },
    },
    advanced: 'Advanced',
    open: 'Opening Windows',
    focus: 'Focus Window',
    contact: 'Contact Us',
    github_link: {
        type: 'page',
        title: 'Nextra',
        href: 'https://github.com/shuding/nextra',
        newWindow: true,
    },
};
