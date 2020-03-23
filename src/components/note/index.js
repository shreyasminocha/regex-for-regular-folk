import React from "react";
import "./index.css";

const Note = props => {
    return (
        <div className="note">
            <span>Note</span>
            <p>{props.children}</p>
        </div>
    );
};

export default Note;
