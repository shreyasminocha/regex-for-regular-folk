import React from "react";
import "./index.css";

const Example = props => {
    const { source, flags, children } = props;
    const regex = new RegExp(source, flags);

    const allStrings = children.map(str => {
        const actualString = str.props.children;
        const matches = Array.from(actualString.matchAll(regex));
        const matchesList = matches.map(match => <li>{match}</li>);

        const numMatches = matchesList.length;
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

                {actualString}
                <ol>{matchesList}</ol>
            </li>
        );
    });

    return (
        <div class="example">
            <span className="regex-name">
                /{source}/{flags}
            </span>

            <ul>{allStrings}</ul>
        </div>
    );
};

export default Example;
