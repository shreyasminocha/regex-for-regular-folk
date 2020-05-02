module.exports = {
    siteMetadata: {
        title: "Regular Expressions for Regular Folk",
        titleTemplate: "%s | Regular Expressions for Regular Folk (REFRF)",
        description:
            "REFRF is a visual, example-based introduction to regular expressions in the form of an experimental e-book",
        siteUrl: "https://refrf.shreyasminocha.me",
    },
    pathPrefix: "",
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "chapters",
                path: `${__dirname}/chapters`,
            },
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-smartypants",
                    },
                    {
                        resolve: "gatsby-remark-autolink-headers",
                        options: {
                            icon: false,
                        },
                    },
                ],
                defaultLayouts: {
                    chapters: require.resolve("./src/layouts/chapter.js"),
                    default: require.resolve("./src/layouts/chapter.js"),
                },
            },
        },
        "gatsby-plugin-sitemap",
    ],
};
