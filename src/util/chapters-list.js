import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Chapters = () => {
    const data = useStaticQuery(query);
    const chapters = data.allMdx.nodes;

    return chapters.map((chapter) => (
        <li key={chapter.fields.slug}>
            <a href={chapter.fields.slug}>{chapter.frontmatter.title}</a>
        </li>
    ));
};

export default (
    <ol start="0" className="chapter-list">
        <Chapters />
    </ol>
);

const query = graphql`
    query ChapterList {
        allMdx(sort: { fields: fields___chapterNumber }) {
            nodes {
                frontmatter {
                    title
                }
                fields {
                    slug
                }
            }
        }
    }
`;
