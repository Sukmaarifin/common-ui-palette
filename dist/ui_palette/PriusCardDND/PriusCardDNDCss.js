"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        container: {
            padding: "1.25rem 2.5rem",
        },
        item: {
            marginRight: "auto",
            marginLeft: "2rem",
        },
        unpublished: {
            backgroundColor: theme.colors.grey,
        },
        dragable: {
            cursor: "move",
        },
        linkText: {
            color: theme.colors.primary,
        },
    });
});
