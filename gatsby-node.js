const path = require("path");

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    return new Promise(async (resolve, reject) => {
        resolve(
            graphql(query).then((result) => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                }

                result.data.allMdx.edges.forEach(({node}) => {
                    createPage({
                        path: `/chapters/${node.parent.name}` || '/',
                        component: path.resolve('./src/layouts/chapter.js'),
                        context: {
                            id: node.id
                        }
                    })
                });
            })
        )
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
        const parent = getNode(node.parent);

        let value = parent.relativePath.replace(parent.ext, '');

        createNodeField({
            node,
            name: `slug`,
            value: `/${value}`,
        });

        createNodeField({
            node,
            name: 'id',
            value: node.id,
        });

        createNodeField({
            node,
            name: 'title',
            value: node.frontmatter.title
        });
    }
};

const query = `
    {
        allMdx {
            edges {
                node {
                    frontmatter { title }
                    id
                    parent { ... on File { name } }
                }
            }
        }
    }
`;
