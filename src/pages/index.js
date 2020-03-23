import React from "react";
import * as meta from "../../meta.json";
import chaptersList from "../util/chapters-list";

const Index = () => (
    <>
        <h1>{meta.title}</h1>
        <h2>Contents</h2>
        {chaptersList}
        <footer>
            Licensed under <code>{meta.rights}</code>.
        </footer>
    </>
);

export default Index;
