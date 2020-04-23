import React from "react";
import {Prism} from  "react-syntax-highlighter";
import PropTypes from "prop-types";
import "./index.css";

const Example = (props) => {
    const {regex, children} = props;
    const testStrings = children.map((str) => str.props.children || "");

    const multiLineRegex = `${regex.toString()}m`; // works fine even if `regex` is multiline
    const playGroundText = testStrings.join("\n");
    const playGroundUrl = `
        https://regexr.com/?expression=${
            encodeURIComponent(multiLineRegex)
        }&text=${
            encodeURIComponent(playGroundText)
        }
    `.trim();

    const noop = ({children}) => <>{children}</>;
    const code = ({children}) => <code className="regex-name">{children}</code>;

    // Prism language is "javascript" so that we have access to the
    // `regex-delimiter` and `regex-flags` tokens as well
    return (
        <figure className="example">
            <Prism language="javascript" PreTag={noop} CodeTag={code}>
                {regex.toString()}
            </Prism>

            <a href={playGroundUrl} className="regexr-link"
            target="_blank" rel="noopener noreferrer">
                [RegExr]
            </a>

            <ul>
                {testCases(regex, testStrings)}
            </ul>
        </figure>
    );
};

Example.propTypes = {
    regex: PropTypes.instanceOf(RegExp).isRequired,
    children: PropTypes.arrayOf(PropTypes.element)
};

Example.defaultProps = {
    children: [],
    flags: ""
};

const testCases = (regex, strings) => (
    strings.map((string) => {
        const matchesListItems = matchesList(regex, string);

        const numMatches = matchesListItems.length;
        const didMatch = numMatches !== 0;

        const indicator = {
            backgroundColor: didMatch ? "#73fa79" : "#ff7e79"
        };

        return (
            <li>
                <span className="indicator" style={indicator}>
                    {numMatches} match{numMatches !== 1 ? "es" : ""}
                </span>

                {string}

                <ol>{matchesListItems}</ol>
            </li>
        );
    })
);

function matchesList(regex, string) {
    const matches = string.matchAll(regex);

    const items = [];
    let runningMatchLength = 0;

    for (const match of matches) {
        const [str] = match;
        const {index} = match;

        const matchStyling = {
            width: `${str.length}ch`,
            left: `${index - runningMatchLength}ch`
        };

        items.push(
            <li style={matchStyling} key={str}>{str}</li>
        );

        runningMatchLength += str.length;
    }

    return items;
}

export default Example;
