import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import Example from "../components/example";
import Note from "../components/note";
import Warning from "../components/warning";
import { MDXRenderer } from "gatsby-plugin-mdx";

const shortcodes = { Example, Note, Warning };

export default (props) => {
    const { mdx } = props.data;

    return (
        <main>
            <h1>{mdx.frontmatter.title}</h1>

            <MDXProvider components={shortcodes}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
            </MDXProvider>
        </main>
    );
};

export const query = graphql`
    query($id: String!) {
        mdx(fields: { id: { eq: $id } }) {
            frontmatter {
                title
            }
            body
            id
        }
    }
`;
