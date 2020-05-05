import React from "react";
import { Link } from "react-router-dom";
// material ui
import Button from "@material-ui/core/Button";

const MenuItem = ({ title, path }) => {
    return (
        <div>
            <Link style={{ textDecoration: "none" }} to={path}>
                <Button color="primary" aria-label="outlined primary ">
                    {title}
                </Button>
            </Link>
        </div>
    );
};

export default MenuItem;
