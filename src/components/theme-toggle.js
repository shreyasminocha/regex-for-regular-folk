import React from "react";
import { ThemeToggler } from "gatsby-plugin-dark-mode";

const ThemeToggle = () => (
    <ThemeToggler>
        {({ theme, toggleTheme }) => (
            <label className="theme-toggle">
                <input
                    type="checkbox"
                    onChange={(e) =>
                        toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                />{" "}
                Dark mode
            </label>
        )}
    </ThemeToggler>
);

export default ThemeToggle;
