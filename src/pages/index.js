import React from "react";
import * as meta from "../../meta.json";
import chaptersList from "../util/chapters-list";

const Index = () => (
    <>
        <h1>{meta.title}</h1>

        <p>
            This is an experimental “book” about regular expressions. It is
            largely <em>visual</em> and <em>example-based</em>, as opposed to
            most regex resources I found while I was learning. I also attempted
            to choose test cases that highlight some common gotchas. I think
            it’ll be worth your time.
        </p>
        <p>
            This book’s intended audience is <em>regex beginners</em>. Some
            programming experience is assumed. It does not go into advanced
            regex concepts like engine backtracking and recursive regexes—at
            least not at the moment.
        </p>
        <p>
            This is also an{" "}
            <a href="https://github.com/shreyasminocha/regex-for-regular-folk">
                open source project
            </a>
            , and contributions are welcome. I’m not quite sure how this part of
            this experiment is going to turn out, but I’m excited to see what
            comes from it.
        </p>

        <h2>Contents</h2>
        {chaptersList}

        <footer>
            Licensed under <code>{meta.rights}</code>.
        </footer>
    </>
);

export default Index;
