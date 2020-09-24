import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
var useStyles = makeStyles(function (theme) { return ({
    container: {
        position: "fixed",
        left: 0,
        bottom: 0,
        justifyContent: "flex-end",
        textAlignLast: "right",
        width: "100%",
        padding: "1rem 3rem",
        zIndex: 10,
        backgroundColor: theme.colors.grey,
    },
    content: {
        "& > *:not(:last-child)": {
            marginRight: "1rem",
        },
    },
}); });
function PriusFooter(_a) {
    var children = _a.children;
    var classes = useStyles();
    return (React.createElement(Grid, { container: true, className: classes.container },
        React.createElement(Grid, { item: true, className: classes.content }, children)));
}
export default PriusFooter;
