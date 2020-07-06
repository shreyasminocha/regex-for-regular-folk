import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const LangSelector = ({ chapterNumber }) => {
    const data = useStaticQuery(query);
    const languages = data.allMdx.nodes.map(node => {
        return (node.fields.chapterNumber === chapterNumber ? {
            name: node.fields.lang
        } : false)
    }).filter(Boolean);

    const pathNameWithoutLanguage = window.location.pathname
        .split("/")
        .slice(2)
        .join("/");

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
