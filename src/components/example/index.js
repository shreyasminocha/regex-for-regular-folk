import React from "react";
import "./index.css";

const Example = props => {
    const { source, flags, children } = props;
    const regex = new RegExp(source, flags);

    const testCases = children.map(str => {
        const string = str.props.children;
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
        <figure class="example">
            <span className="regex-name">
                /{source}/{flags}
            </span>

            <ul>{testCases}</ul>
        </figure>
    );
};

export default Example;
