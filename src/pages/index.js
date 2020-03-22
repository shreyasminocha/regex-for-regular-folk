import React from "react";
import * as meta from "../../meta.json";
import toTitleCase from "titlecase";

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
    const title = toTitleCase(chapter.replace("-", " "));

    return (
        <li>
            <a href={link}>{title}</a>
        </li>
    );
});

export default Index;
