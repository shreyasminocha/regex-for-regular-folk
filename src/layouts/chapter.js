import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { graphql } from "gatsby";
import Example from "../components/example";
import { Note, Warning, Tip, Support } from "../components/boxes";
import SEO from "../components/seo";
import ThemeToggle from "../components/theme-toggle";
import Footer from "../util/footer";

const shortcodes = { Example, Note, Warning, Tip, Support };

const ChapterTemplate = (props) => {
    const { mdx } = props.data;
    const { title } = mdx.frontmatter;
    const { excerpt } = mdx;

    const { pageContext } = props;
    const { previous, next } = pageContext;

    const prevItem = previous && (
        <li>
            <a href={previous.fields.slug}>Previous</a>
        </li>
    );

    const nextItem = next && (
        <li>
            <a href={next.fields.slug}>Next</a>
        </li>
    );

    return (
        <>
            <SEO title={title} description={excerpt} />

            <header>
                <a href="/" className="title">
                    Regular Expressions For Regular Folk
                </a>

                <ThemeToggle />
            </header>

            <main>
                <article>
                    <h1>{title}</h1>

                    <MDXProvider components={shortcodes}>
                        <MDXRenderer>{mdx.body}</MDXRenderer>
                    </MDXProvider>
                </article>

                <nav>
                    <ul>
                        {prevItem}
                        {nextItem}
                    </ul>
                </nav>
            </main>

            <Footer />
        </>
    );
};

export default ChapterTemplate;

export const query = graphql`
    query($id: String!) {
        mdx(fields: { id: { eq: $id } }) {
            frontmatter {
                title
            }
            excerpt
            body
            id
            fields {
                slug
            }
        }
    }
`;
