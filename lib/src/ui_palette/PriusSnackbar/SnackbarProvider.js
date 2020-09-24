var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Typography, IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import SnackbarContext from "./SnackbarContext";
import { CloseIcon } from "../../icons";
import { SuccessSVG, ErrorSVG, WarningSVG, InfoSVG } from "./assets";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        alert: {
            color: theme.palette.text.primary,
            fontSize: "0.8125rem",
            border: "1px solid",
            borderTopWidth: "3px",
            maxWidth: "30rem",
        },
        action: {
            alignItems: "start",
            marginTop: theme.spacing(0.75),
        },
        error: {
            backgroundColor: "#FDE4D3",
            borderColor: "#EA715A",
            borderTopColor: theme.palette.secondary.main,
        },
        warning: {
            backgroundColor: "#FEF7D4",
            borderColor: "#FDE180",
            borderTopColor: "#FBC02D",
        },
        success: {
            backgroundColor: "#C9FBD1",
            borderColor: "#5DEA91",
            borderTopColor: theme.palette.success.main,
        },
        info: {
            backgroundColor: "#D1F7FD",
            borderColor: "#75D5F8",
            borderTopColor: theme.palette.primary.main,
        },
        closeButton: {
            padding: 0,
        },
    });
});
var SnackbarProvider = function (props) {
    var _a = useState({
        message: undefined,
        open: false,
        severity: undefined,
        closable: false,
        detail: undefined,
    }), snackbar = _a[0], setSnackbar = _a[1];
    var classes = useStyles();
    var message = snackbar.message, severity = snackbar.severity, open = snackbar.open, detail = snackbar.detail, closable = snackbar.closable;
    var children = props.children;
    var show = function (title, level, isClosable, text) {
        setSnackbar({
            open: true,
            message: title,
            severity: level,
            closable: isClosable,
            detail: text,
        });
    };
    var handleClose = function () {
        setSnackbar(function (prevState) { return (__assign(__assign({}, prevState), { open: false })); });
    };
    var context = { show: show };
    return (React.createElement(React.Fragment, null,
        React.createElement(SnackbarContext.Provider, { value: context }, children),
        React.createElement(Snackbar, { open: open, autoHideDuration: 4000, onClose: handleClose, style: { top: 64 }, anchorOrigin: { vertical: "top", horizontal: "right" } },
            React.createElement(Alert, { className: classes.alert, classes: {
                    standardSuccess: classes.success,
                    standardError: classes.error,
                    standardInfo: classes.info,
                    standardWarning: classes.warning,
                    action: classes.action,
                }, iconMapping: {
                    error: React.createElement(ErrorSVG, null),
                    warning: React.createElement(WarningSVG, null),
                    success: React.createElement(SuccessSVG, null),
                    info: React.createElement(InfoSVG, null),
                }, elevation: 6, action: closable ? (React.createElement(IconButton, { className: classes.closeButton, id: "snackbar-button-close", "data-identity": "snackbar-button-close", onClick: handleClose },
                    React.createElement(CloseIcon, null))) : undefined, severity: severity }, detail ? (React.createElement(React.Fragment, null,
                React.createElement(AlertTitle, null, message),
                React.createElement(Typography, { variant: "inherit" }, detail))) : (React.createElement(React.Fragment, null, message))))));
};
export default SnackbarProvider;
