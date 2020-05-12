import React, { Fragment as _ } from "react";
import { Prism } from "react-syntax-highlighter";
import PropTypes from "prop-types";
import "./index.css";

const Example = (props) => {
    const { regex, children } = props;
    const testStrings = React.Children.map(
        children,
        (str) => str.props.children || ""
    );

    const multiLineRegex = `${regex.toString()}m`; // works fine even if `regex` is multiline
    const playGroundText = testStrings.join("\n");
    const playGroundUrl = `
        https://regexr.com/?expression=${encodeURIComponent(
            multiLineRegex
        )}&text=${encodeURIComponent(playGroundText)}
    `.trim();

    const visualizationUrl = `
        https://regexper.com/#${encodeURIComponent(regex.toString())}
    `.trim();

    const demoProps = {
        target: "_blank",
        rel: "noopener noreferrer",
    };

    const noop = ({ children }) => <>{children}</>;
    const code = ({ children }) => (
        <code className="regex-name">{children}</code>
    );

    // Prism language is "javascript" so that we have access to the
    // `regex-delimiter` and `regex-flags` tokens as well
    return (
        <figure className="example">
            <Prism language="javascript" PreTag={noop} CodeTag={code}>
                {regex.toString()}
            </Prism>

            <ul className="demos">
                <li>
                    <a href={playGroundUrl} {...demoProps}>
                        [RegExr]
                    </a>
                </li>
                <li>
                    <a href={visualizationUrl} {...demoProps}>
                        [Visual]
                    </a>
                </li>
            </ul>

            <ul className="cases">{testCases(regex, testStrings)}</ul>
        </figure>
    );
};

Example.propTypes = {
    regex: PropTypes.instanceOf(RegExp).isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
};

Example.defaultProps = {
    children: [],
    flags: "",
};

const testCases = (regex, strings) =>
    strings.map((string) => {
        const matchList = matches(regex, string);

        const numMatches = matchList.length;
        const didMatch = numMatches !== 0;
        const passOrFail = didMatch ? "pass" : "fail";

        return (
            <li key={key(regex, string)}>
                <span className={`indicator ${passOrFail}`}>
                    {`${numMatches} match${numMatches === 1 ? "" : "es"}`}
                </span>

                {highlightedMarkup(regex, string)}
            </li>
        );
    });

const highlightedMarkup = (regex, string) => {
    const elements = [];
    let endOfPrevious = 0;

    for (const match of matches(regex, string)) {
        const [current] = match;
        const { index } = match;

        const beforeCurrent = string.substring(endOfPrevious, index);
        beforeCurrent &&
            elements.push(
                <_ key={key(regex, string, endOfPrevious, beforeCurrent)}>
                    {beforeCurrent}
                </_>
            );

        elements.push(
            <mark
                aria-label={`Match at index ${index}`}
                key={key(regex, string, index, current)}
            >
                {current}
            </mark>
        );

        endOfPrevious = index + current.length;
    }

    const afterLast = string.substring(endOfPrevious);
    afterLast &&
        elements.push(
            <_ key={key(regex, string, endOfPrevious, afterLast)}>
                {afterLast}
            </_>
        );

    return <code>{elements}</code>;
};

const matches = (regex, string) => {
    if (!regex.global) {
        const matches = string.match(regex);

        if (matches === null) {
            return [];
        }

        const reformatted = [];
        reformatted[0] = [matches[0]];
        reformatted[0].index = matches.index;
        reformatted[0].input = matches.input;

        return reformatted;
    }

    return Array.from(string.matchAll(regex));
};

const key = (...params) => params.join();

export default Example;
