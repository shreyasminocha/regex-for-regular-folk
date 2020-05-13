import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import Example from "../components/example";
import { Note, Warning, Tip, Support } from "../components/boxes";
import SEO from "../components/seo";
import Header from "../components/header";

const shortcodes = { Example, Note, Warning, Tip, Support };

const SinglePage = (props) => {
    const chapters = props.data.allMdx.nodes;

    return (
        <>
            <SEO description="Single-page, print-ready version of Regular Expressions for Regular Folk" />

            <Header />

            {chapters.map((chapter) => (
                <>
                    <h1>{chapter.frontmatter.title}</h1>

                    <MDXProvider components={shortcodes}>
                        <MDXRenderer>{chapter.body}</MDXRenderer>
                    </MDXProvider>
                </>
            ))}
        </>
    );
};

export default SinglePage;

export const query = graphql`
    query AllBodies {
        allMdx(sort: { fields: fields___chapterNumber }) {
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
