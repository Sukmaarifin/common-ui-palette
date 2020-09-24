/**
 * @todo unit testing
 */
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
import { CheckIcon, CloseIcon } from "../../../icons";
var useStyles = makeStyles(function (theme) { return ({
    container: {
        alignSelf: "center",
        padding: "0 1rem",
        alignContent: "center",
        justifyContent: "center",
    },
    check: {
        color: theme.colors.success,
    },
    disabled: {
        color: theme.colors.disabled,
    },
}); });
function FieldItemStatus(_a) {
    var filter = _a.filter, fixedWidth = _a.fixedWidth, record = _a.record, source = _a.source, style = _a.style, width = _a.width;
    var classes = useStyles();
    var status = get(record, source);
    var filterStatus = typeof filter === "string" ? get(record, filter) : filter;
    var icon = null;
    switch (status) {
        case true:
            icon = (React.createElement(CheckIcon, { className: filterStatus ? classes.check : classes.disabled }));
            break;
        case false:
            icon = React.createElement(CloseIcon, { color: filterStatus ? "error" : "disabled" });
            break;
        default:
            break;
    }
    return (React.createElement(Grid, { item: true, className: classes.container, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1 }) }, icon));
}
export default FieldItemStatus;
