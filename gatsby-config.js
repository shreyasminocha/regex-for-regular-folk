module.exports = {
    siteMetadata: {
        title: "Regular Expressions for Regular Folk",
        description:
            "A visual, example-based introduction to regular expressions"
    },
    plugins: [
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "chapters",
                path: `${__dirname}/src/pages/chapters`
            }
        },
        {
            resolve: "gatsby-plugin-mdx",
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: "gatsby-remark-smartypants"
                    },
                    {
                        resolve: "gatsby-remark-autolink-headers",
                        options: {
                            icon: false
                        }
                    }
                ],
                defaultLayouts: {
                    chapters: require.resolve("./src/layouts/chapter.js"),
                    default: require.resolve("./src/layouts/chapter.js")
                }
            }
        }
    ]
};
