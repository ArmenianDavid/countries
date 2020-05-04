import React from "react";
import "./Header.css";

const Header = (props) => {
    const { title } = props;
    return (
        <div className="header-container">
            <div>
                <h1>{title}</h1>
            </div>
        </div>
    );
};

export default Header;
