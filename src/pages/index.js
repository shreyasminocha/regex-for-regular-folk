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

        <h2>Feedback</h2>
        <blockquote>
            “Learned more in just the first few pages than I have in my many
            years of copy-pasting regex from StackOverflow. Cheers” —
            <a href="https://news.ycombinator.com/user?id=digitalmaster">
                digitalmaster
            </a>
        </blockquote>
        <blockquote>
            “Incredible resource - I liked the structured approach as opposed to
            guess and check regex which is what most tools offer” —
            <a href="https://news.ycombinator.com/user?id=scottfits">
                scottfits
            </a>
        </blockquote>
        <blockquote>
            “This looks like a great resource! Like others, I vastly prefer an
            example-based style, and the examples are really well chosen and
            very illustrative.” —
            <a href="https://news.ycombinator.com/user?id=twicetwice">
                twicetwice
            </a>
        </blockquote>
        <blockquote>
            “I like the example based approach. I learn from examples far
            quicker than I learn from ‘explanations’. If I attempt to learn from
            an example and my brain hits an exception, only then do I start
            reading the supporting text. […]” —
            <a href="https://news.ycombinator.com/user?id=LeonB">LeonB</a>
        </blockquote>

        Read the full discussion at <a href="https://news.ycombinator.com/item?id=23042079">Hacker News</a>.

        <h2>Translations</h2>
        <p>
            Translations are welcome, as long as they adhere to the{" "}
            <a href="#license">license</a>.
        </p>
        <ul>
            <li>
                Chinese
                <ul>
                    <li>
                        External{" "}
                        <a href="https://elsaooo.github.io/regex/regex-you-should-know.html">
                            translation
                        </a>{" "}
                        by <a href="https://github.com/ElsaOOo">@ElsaOOo</a>
                    </li>
                    <li>
                        External{" "}
                        <a href="https://blog.csdn.net/weixin_43466871/article/details/106001050">
                            translation
                        </a>{" "}
                        by <a href="https://github.com/singagain">@singagain</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="https://github.com/shreyasminocha/regex-for-regular-folk/blob/master/contribution.md">
                    <em>Your language?</em>
                </a>
            </li>
        </ul>

        <p>
            You can choose to publish your translation separately, but we
            welcome{" "}
            <a href="https://github.com/shreyasminocha/regex-for-regular-folk/blob/master/contribution.md">
                translations on here
            </a>{" "}
            too!
        </p>

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
