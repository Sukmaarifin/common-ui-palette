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
import React from "react";
import get from "lodash/get";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExclamationCircleIcon, CheckCircleIcon, MinusCircleIcon, SyncCircleSolidIcon, } from "../../../icons";
var useStyles = makeStyles(function (theme) { return ({
    container: {
        alignSelf: "center",
        padding: "0 0.8rem",
        alignContent: "center",
        justifyContent: "center",
    },
    success: {
        width: "0.8rem",
        color: theme.colors.success,
    },
    sync: {
        width: "0.8rem",
        color: theme.colors.warning,
    },
    failed: {
        width: "0.8rem",
        color: theme.colors.failed,
    },
    unpublish: {
        width: "0.8rem",
        color: "#DDDDDD",
    },
}); });
function StatusField(_a) {
    var fixedWidth = _a.fixedWidth, record = _a.record, source = _a.source, style = _a.style, width = _a.width;
    var classes = useStyles();
    var iconSource = get(record, source).toLowerCase();
    var icon = React.createElement("div", null);
    switch (iconSource) {
        case "success":
            icon = React.createElement(CheckCircleIcon, { className: classes.success });
            break;
        case "sync":
            icon = React.createElement(SyncCircleSolidIcon, { className: classes.sync });
            break;
        case "failed":
            icon = React.createElement(ExclamationCircleIcon, { className: classes.failed });
            break;
        case "unpublish":
            icon = React.createElement(MinusCircleIcon, { className: classes.unpublish });
            break;
        default:
            break;
    }
    return (React.createElement(Grid, { item: true, className: classes.container, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1 }) }, icon));
}
export default StatusField;
