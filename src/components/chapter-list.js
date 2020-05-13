import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const ChapterList = () => {
    const data = useStaticQuery(query);
    const chapters = data.allMdx.nodes;

    return (
        <ol start="0" className="chapter-list">
            {chapters.map((chapter) => (
                <li key={chapter.fields.slug}>
                    <a href={chapter.fields.slug}>
                        {chapter.frontmatter.title}
                    </a>
                </li>
            ))}
        </ol>
    );
};

export default ChapterList;

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
