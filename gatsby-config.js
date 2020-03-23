module.exports = {
    plugins: [
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
                ]
            }
        }
    ]
};
