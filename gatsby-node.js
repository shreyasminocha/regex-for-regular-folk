const path = require("path");
const meta = require("./meta.json");

const buildFindSiblingsQuery = (currentChapterNumber, currentChapterLang) => {
    let siblingChapterNumbers = ``;

    if (currentChapterNumber == 0) {
        siblingChapterNumbers = `[${currentChapterNumber + 1}]`;
    } else if (currentChapterNumber == meta.chapters.length) {
        siblingChapterNumbers = `[${currentChapterNumber - 1}]`;
    } else {
        siblingChapterNumbers = `[${currentChapterNumber - 1}, ${
            currentChapterNumber + 1
        }]`;
    }

    let languages = ``;

    if (currentChapterLang !== "en") {
        languages = currentChapterLang;
    }

    languages = `["${languages}", "en"]`;

    return `
            query MDXSibling {
                allMdx(sort: {fields: fields___chapterNumber, order: ASC}, filter: {fields: {chapterNumber: {in: ${siblingChapterNumbers}}, lang: {in: ${languages}}}}) {
                    nodes {
                        fields {
                            slug
                            chapterNumber
                        }
                        parent {
                            ... on File {
                                lang: relativeDirectory
                            }
                        }
                    }
                }
            }
        `;
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const getSiblingPages = (currentChapterNumber, currentChapterLang) => {
        /*
            This finds the siblings chapters (previous and next chapters) of a given one based on its number and language.
            If a sibling cannot be found in the chapter's language, the English one is used as a fallback.
        */

        const findSiblings = buildFindSiblingsQuery(
            currentChapterNumber,
            currentChapterLang
        );

        return new Promise(async (resolve, reject) => {
            resolve(
                graphql(findSiblings).then((result) => {
                    if (result.errors) {
                        console.error(result.errors);
                        reject(result.errors);
                    }

                    let siblings = {
                        previous: undefined,
                        next: undefined,
                    };

                    result.data.allMdx.nodes.forEach((node) => {
                        if (node.fields.chapterNumber < currentChapterNumber) {
                            siblingKind = "previous";
                        } else if (
                            node.fields.chapterNumber > currentChapterNumber
                        ) {
                            siblingKind = "next";
                        }

                        if (
                            siblings[siblingKind] === undefined ||
                            siblings[siblingKind].parent.lang === null
                        ) {
                            siblings[siblingKind] = node;
                        }
                    });

                    return siblings;
                })
            );
        });
    };

    return new Promise(async (resolve, reject) => {
        resolve(
            graphql(query).then((result) => {
                if (result.errors) {
                    console.error(result.errors);
                    reject(result.errors);
                }

                result.data.allMdx.edges.forEach(async ({ node }) => {
                    const { previous, next } = await getSiblingPages(
                        node.fields.chapterNumber,
                        node.parent.lang
                    );

                    createPage({
                        path: node.fields.slug || "/",
                        component: path.resolve("./src/layouts/chapter.js"),
                        context: {
                            id: node.id,
                            lang: node.parent.lang,
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

        const kebabTitle = parent.relativePath
            .replace(parent.ext, "")
            .replace(`${parent.relativeDirectory}/`, "");
        const chapterNumber = meta.chapters.indexOf(kebabTitle);
        const lang = parent.relativeDirectory;

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
            value: `/${lang}/chapters/${kebabTitle}`,
        });

        createNodeField({
            node,
            name: "id",
            value: node.id,
        });

        createNodeField({
            node,
            name: "lang",
            value: lang,
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
                    fields {
                        slug
                        chapterNumber
                    }
                    parent {
                        ... on File {
                            lang: relativeDirectory
                        }
                    }
                }
            }
        }
    }
`;
