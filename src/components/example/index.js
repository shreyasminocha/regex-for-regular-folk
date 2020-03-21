import React from "react";
import "./index.css";

const Example = props => {
    const { source, flags, children } = props;
    const regex = new RegExp(source, flags);

    const allStrings = children.map(str => {
        const actualString = str.props.children;
        const matches = Array.from(actualString.matchAll(regex));
        const matchesList = matches.map(match => <li>{match}</li>);

        return (
            <li>
                {actualString}
                <ol>{matchesList}</ol>
            </li>
        );
    });

    return (
        <div class="example">
            <span>
                /{source}/{flags}
            </span>

            <ul>{allStrings}</ul>
        </div>
    );
};

export default Example;
