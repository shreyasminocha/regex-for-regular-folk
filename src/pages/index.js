import React from "react";
import SEO from "../components/seo";
import * as meta from "../../meta.json";
import chaptersList from "../util/chapters-list";

const Index = () => (
    <>
        <SEO />

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
            <p>
                Chapter content is licensed under{" "}
                <a href="https://creativecommons.org/licenses/by-sa/4.0">
                    CC BY-SA 4.0
                </a>
            </p>

            <p>
                The source code for the website is licensed under the{" "}
                <a href="https://shreyas.mit-license.org/2019">MIT License</a>
            </p>
        </footer>
    </>
);

export default Index;
