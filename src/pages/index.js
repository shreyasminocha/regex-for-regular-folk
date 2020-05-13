import React from "react";
import SEO from "../components/seo";
import ChapterList from "../components/chapter-list";

const Index = () => (
    <>
        <SEO />

        <h1>Regular Expressions for Regular Folk</h1>

        <p>
            This is an experimental “book” about regular expressions. It is
            largely <em>visual</em> and <em>example-based</em>, as opposed to
            most regex resources I found while I was learning. I also attempted
            to choose test cases that highlight some common gotchas. I think
            it’ll be worth your time.
        </p>

        <img
            src="/images/screenshot.jpg"
            alt="Screenshot from /chapters/escapes"
        />

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
            , and contributions are welcome.
        </p>

        <h2>Contents</h2>
        <ChapterList />

        <h2>Printing</h2>
        <p>
            A <a href="/book">single-page version of the book</a> is available.
            Print it ordinarily. Make sure to enable “Print Background Colors”
            on Firefox and “Background graphics” (under “More settings”) on
            Chrome.
        </p>

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
