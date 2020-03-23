import React from "react";
import PropTypes from "prop-types";
import "./index.css";

const Example = props => {
    const { source, flags } = props;
    const regex = new RegExp(source, flags);

    const children = props.children;

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

    return (
        <figure className="example">
            <span className="regex-name">
                /{source}/{flags}
            </span>

            <ul>{testCases}</ul>
        </figure>
    );
};

Example.propTypes = {
    source: PropTypes.string.isRequired,
    flags: PropTypes.string,
    children: PropTypes.element
};

Example.defaultProps = {
    children: [],
    flags: ""
};

export default Example;
