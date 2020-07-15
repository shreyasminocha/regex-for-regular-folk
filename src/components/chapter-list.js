import React from "react";
import { useStaticQuery, graphql } from "gatsby";
const meta = require("../../meta.json");

const generateTranslatedChapterList = (allMdx) => {
    /*
        Generate a list of pages in the browser's language and complete untranslated chapters with English ones.
    */
    let browserLanguage = "en";

    if (
        typeof window !== "undefined" &&
        window &&
        window.navigator &&
        window.navigator.language
    ) {
        browserLanguage = window.navigator.language;
    }

    let chapters = allMdx.nodes.filter((chapter) => {
        return browserLanguage.startsWith(chapter.parent.lang);
    });

    // If there are not enough translatedChapters (as expected compared to the meta.json file)
    if (chapters.length !== meta.chapters.length) {
        // Compare slugs between translated chapters and english ones. Add missing chapters from the english ones
        const translatedChaptersSlugs = chapters.map((chapter) => {
            return chapter.fields.slug.split("/").slice(-1)[0];
        });

        const englishChapters = allMdx.nodes.filter((chapter) => {
            return chapter.parent.lang === "en";
        });

        englishChapters.forEach((englishChapter) => {
            if (
                !translatedChaptersSlugs.includes(
                    englishChapter.fields.slug.split("/").slice(-1)[0]
                )
            ) {
                chapters.push(englishChapter);
            }
        });
    }

    return chapters;
};

const ChapterList = () => {
    const data = useStaticQuery(query);
    const chapters = generateTranslatedChapterList(data.allMdx);

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
                parent {
                    ... on File {
                        lang: relativeDirectory
                    }
                }
            }
        }
    }
`;
