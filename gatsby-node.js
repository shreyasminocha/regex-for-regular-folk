const path = require("path");
const meta = require("./meta.json");

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise(async (resolve, reject) => {
        resolve(
            graphql(query).then((result) => {
                if (result.errors) {
                    console.error(result.errors);
                    reject(result.errors);
                }

                result.data.allMdx.edges.forEach(({ node, next, previous }) => {
                    createPage({
                        path: `/chapters/${node.parent.name}` || "/",
                        component: path.resolve("./src/layouts/chapter.js"),
                        context: {
                            id: node.id,
                            next,
                            previous,
                        },
                    });
                });
            })
        );
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === "Mdx") {
        const parent = getNode(node.parent);

        const kebabTitle = parent.relativePath.replace(parent.ext, "");
        const chapterNumber = meta.chapters.indexOf(kebabTitle);

        if (chapterNumber >= 0) {
            createNodeField({
                node,
                name: "chapterNumber",
                value: chapterNumber,
            });
        }

        createNodeField({
            node,
            name: "slug",
            value: `/chapters/${kebabTitle}`,
        });

        createNodeField({
            node,
            name: "id",
            value: node.id,
        });
    }
};

const query = `
    query MDXPages {
        allMdx(sort: { fields: fields___chapterNumber }) {
            edges {
                node {
                    frontmatter { title }
                    id
                    parent { ... on File { name } }
                }
                previous {
                    fields { slug }
                }
                next {
                    fields { slug }
                }
            }
        }
    }
`;
