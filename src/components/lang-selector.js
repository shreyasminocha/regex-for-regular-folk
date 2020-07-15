import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const LangSelector = ({ chapterNumber, pathName }) => {
    const data = useStaticQuery(query);

    // Get all known languages for a given chapter
    const languages = data.allMdx.nodes.map(node => {
        return (node.fields.chapterNumber === chapterNumber ? {
            name: node.fields.lang
        } : false)
    }).filter(Boolean);

    const pathNameWithoutLanguage = pathName.match(new RegExp("(chapters/.*)"))[0]

    return (
        <ul className="lang-list">
            {languages.map((language) => (
                <li key={language.name}>
                    <a href={`/${language.name}/${pathNameWithoutLanguage}`}>
                        {language.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default LangSelector;

const query = graphql`
    query LangSelector {
        allMdx {
            nodes {
                fields {
                    lang
                    chapterNumber
                }
            }
        }
    }
`;
