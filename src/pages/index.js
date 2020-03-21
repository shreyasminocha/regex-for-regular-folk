import React from "react";
import * as meta from "../../meta.json";

const Index = () => (
    <>
        <h1>{meta.title}</h1>

        <h2>Contents</h2>
        <ol>{chaptersList}</ol>

        <footer>
            Licensed under <code>{meta.rights}</code>.
        </footer>
    </>
);

const chaptersList = meta.chapters.map(chapter => {
    const link = `/chapters/${chapter}`;

    return (
        <li>
            <a href={link}>{chapter}</a>
        </li>
    );
});

export default Index;
