import React from "react";
import SEO from "../components/seo";
import chaptersList from "../util/chapters-list";

const Chapters = () => (
    <>
        <SEO title={Chapters} />

        <h2>Contents</h2>
        {chaptersList}
    </>
);

export default Chapters;
