import React from "react";
import "./index.css";

const Warning = props => {
    return (
        <div className="warning">
            <span>Warning</span>
            <p>{props.children}</p>
        </div>
    );
};

export default Warning;
