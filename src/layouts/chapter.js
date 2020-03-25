import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Example from "../components/example";
import Note from "../components/note";
import Warning from "../components/warning";

const shortcodes = { Example, Note, Warning };

export default props => {
    return (
        <main>
            <MDXProvider components={shortcodes}>{props.children}</MDXProvider>
        </main>
    );
};
