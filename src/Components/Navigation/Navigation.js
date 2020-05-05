import React from "react";
import { Link } from "react-router-dom";
// components
import "./Navigation.css";
// Material ui
import Button from "@material-ui/core/Button";

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
                    return (
                        <div key={title}>
                            <Link style={{ textDecoration: "none" }} to={path}>
                                <Button
                                    color="primary"
                                    aria-label="outlined primary "
                                >
                                    {title}
                                </Button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;
