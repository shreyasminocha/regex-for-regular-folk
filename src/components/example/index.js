import React from "react";
import {Prism} from  "react-syntax-highlighter";
import PropTypes from "prop-types";
import "./index.css";

const Example = (props) => {
    const { regex, children } = props;

    const testCases = children.map(str => {
        const string = str.props.children || "";
        const matches = string.matchAll(regex);

        const matchesListItems = [];
        let runningMatchLength = 0;

        for (const match of matches) {
            const [str] = match;
            const { index } = match;
            const left = index - runningMatchLength;

            matchesListItems.push(
                <li style={{ width: `${str.length}ch`, left: `${left}ch` }}>
                    {str}
                </li>
            );

            runningMatchLength += str.length;
        }

        const numMatches = matchesListItems.length;
        const anyMatches = numMatches !== 0;
        const indicatorColour = anyMatches ? "#73fa79" : "#ff7e79";

        return (
            <li>
                <span
                    className="pass-fail"
                    style={{ backgroundColor: indicatorColour }}
                >
                    {numMatches} match{numMatches !== 1 ? "es" : ""}
                </span>

                {string}
                <ol>{matchesListItems}</ol>
            </li>
        );
    });

    const noop = ({children}) => <>{children}</>;
    const code = ({children}) => <code className="regex-name">{children}</code>;

    return (
        <figure className="example">
            <Prism language="regex" PreTag={noop} CodeTag={code}>
                {regex.toString()}
            </Prism>

            <ul>{testCases}</ul>
        </figure>
    );
};

Example.propTypes = {
    regex: PropTypes.instanceOf(RegExp).isRequired,
    children: PropTypes.element
};

Example.defaultProps = {
    children: [],
    flags: ""
};

export default Example;
