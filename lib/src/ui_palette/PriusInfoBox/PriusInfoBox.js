/**
 * @todo
 * Handle other severity if needed, for now it's unnecessary.
 */
import React from "react";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { InfoSVG } from "../PriusSnackbar/assets";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        alert: {
            color: theme.palette.text.primary,
            fontSize: "0.8125rem",
            border: "1px solid",
            borderTopWidth: "3px",
        },
        action: {
            alignItems: "start",
            marginTop: theme.spacing(0.75),
        },
        info: {
            backgroundColor: "#D1F7FD",
            borderColor: "#75D5F8",
            borderTopColor: theme.palette.primary.main,
            marginBottom: theme.spacing(3.5),
        },
        root: {
            fontWeight: 700,
        },
    });
});
var PriusInfoBox = function (_a) {
    var action = _a.action, message = _a.message, title = _a.title;
    var classes = useStyles();
    return (React.createElement(Alert, { action: action, className: classes.alert, classes: {
            standardInfo: classes.info,
            action: classes.action,
        }, iconMapping: {
            info: React.createElement(InfoSVG, null),
        }, severity: "info" },
        React.createElement(AlertTitle, { classes: {
                root: classes.root,
            } }, title),
        message));
};
export default PriusInfoBox;
