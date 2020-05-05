import React from "react";
import SEO from "../components/seo";

const FourZeroFour = () => (
    <>
        <SEO title="Page Not Found" />

        <h1>Page Not Found</h1>

        <pre>
            <code>$ tree | grep -E "$path"</code>
            <code>
                <span role="img" aria-label="non-zero exit code">
                    🚫
                </span>{" "}
                $
            </code>
        </pre>

        <a href="/">
            <span role="img" aria-label="Home">
                🏠
            </span>{" "}
            Home?
        </a>
    </>
);

export default FourZeroFour;
