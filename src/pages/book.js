import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import Example from "../components/example";
import { Note, Warning, Tip, Support } from "../components/boxes";
import SEO from "../components/seo";
import * as meta from "../../meta.json";

const shortcodes = { Example, Note, Warning, Tip, Support };

const SinglePage = (props) => {
    const nodes = props.data.allMdx.nodes;

    const pages = Object.fromEntries(
        nodes.map((node) => [
            node.fields.slug,
            { title: node.frontmatter.title, body: node.body },
        ])
    );

    const renderChapter = (chapterName) => {
        const chapter = pages[`/chapters/${chapterName}`];

        return (
            <>
                <SEO description="Single-page, print-ready version of Regular Expressions for Regular Folk" />

                <h1>{chapter.title}</h1>

                <MDXProvider components={shortcodes}>
                    <MDXRenderer>{chapter.body}</MDXRenderer>
                </MDXProvider>
            </>
        );
    };

    return (
        <>
            <header>
                <a href="/" className="title">
                    Regular Expressions For Regular Folk
                </a>
            </header>

            {meta.chapters.map(renderChapter)}
        </>
    );
};

export default SinglePage;

export const query = graphql`
    query AllBodies {
        allMdx {
            nodes {
                body
                fields {
                    slug
                }
                frontmatter {
                    title
                }
            }
        }
    }
`;
