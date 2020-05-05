import React from "react";
// components
import "./Navigation.css";
import MenuItem from "./MenuItem";

const NAVIGATION_MENU_ITEMS = [
    {
        title: "countries",
        path: "/",
    },
    {
        title: "material ui",
        path: "/material-ui",
    },
    {
        title: "countries with filter",
        path: "/countries-with-filter",
    },
    {
        title: "with hooks",
        path: "/with-hooks",
    },
];

const Navigation = (props) => {
    return (
        <div className="navigation-container">
            <div className="navigation">
                {NAVIGATION_MENU_ITEMS.map(({ title, path }) => {
                    return <MenuItem key={title} title={title} path={path} />;
                })}
            </div>
        </div>
    );
};

export default Navigation;
