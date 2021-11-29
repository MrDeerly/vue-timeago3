module.exports = {
    title: '⏳ vue-timeago3',
    description: 'Just playing around.',
    sidebar: "auto",
    base: "/vue-timeago3/",

    themeConfig: {
        repo: 'mrdeerly/vue-timeago3',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Guide', link: '/guide/getting-started', activeMatch: '^/guide/getting-started' },
            {
                text: 'Config Reference',
                link: '/guide/configuration',
                activeMatch: '^/guide/configuration'
            },
            {
                text: 'GitHub',
                link: 'https://github.com/MrDeerly/vue-timeago3'
            }
        ],

        sidebar: {
            '/guide/getting-started': getGuideSidebar(),
            '/': getGuideSidebar()
        }
    },
}

function getGuideSidebar() {
    return [
        {
            text: "Home",
            link: "/"
        },
        {
            text: 'Introduction',
            children: [
                { text: 'Getting Started', link: '/guide/getting-started' },
                { text: 'Basic Usage', link: '/guide/basic-usage' },
                { text: 'Configuration', link: '/guide/configuration' },
            ]
        },
        {
            text: 'Contributing',
            children: [
                { text: 'Dev Environment', link: '/contributing/environment' },
            ]
        },
        {
            text: 'Hall of fame',
            children:  [
                { text: 'Contributors', link: 'hall-of-fame/contributors'}
            ]
        },
    ]
}
