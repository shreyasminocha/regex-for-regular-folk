import React from "react";
import ThemeToggle from "../components/theme-toggle";

const Header = () => (
    <header>
        <a href="/" className="title">
            Regular Expressions For Regular&nbsp;Folk
        </a>

        <ThemeToggle />
    </header>
);

export default Header;
