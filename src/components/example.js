import React from "react";

const Example = props => {
    const { source, flags, children } = props;
    const regex = new RegExp(source, flags);

    const allStrings = children.map(str => {
        const actualString = str.props.children;
        const matches = Array.from(actualString.matchAll(regex));
        const matchesList = matches.map(match => <li>{match}</li>);

        return [
            <li>
                {actualString}
                <ol>{matchesList}</ol>
            </li>
        ];
    });

    return [
        <span>
            /{source}/{flags}
        </span>,

        allStrings
    ];
};

export default Example;
