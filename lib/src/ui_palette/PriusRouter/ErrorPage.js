import React from "react";
import { Typography } from "@material-ui/core";
export default function ErrorPage() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Typography, { variant: "h1", gutterBottom: true }, "Page Not Found"),
        React.createElement(Typography, { variant: "body1" }, "Sorry, the page you are looking for is not found.")));
}
