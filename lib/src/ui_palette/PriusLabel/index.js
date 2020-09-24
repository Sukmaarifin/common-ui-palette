import React from "react";
import clsx from "clsx";
import { createStyles, makeStyles } from "@material-ui/core/styles";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        base: {
            borderRadius: "3px",
            margin: "0 5px",
            whiteSpace: "nowrap",
            alignSelf: "center",
            display: "inline-table",
            textAlign: "center",
            verticalAlign: "middle",
        },
        small: {
            padding: "3px",
            fontFamily: "Metropolis",
            fontSize: "8px",
            fontWeight: "bold",
            color: "#ffffff",
        },
        normal: {
            padding: "5px",
            fontFamily: "Metropolis",
            fontSize: "13px",
            color: "#ffffff",
        },
        default: {
            backgroundColor: "transparent",
            color: theme.colors.text,
            "&.light": {
                backgroundColor: "transparent",
                color: theme.colors.text,
            },
        },
        primary: {
            backgroundColor: "#1c9aea",
            "&.light": {
                backgroundColor: "#c6e6fa",
                color: "#1c9aea",
            },
        },
        error: {
            backgroundColor: "#dd3628",
            "&.light": {
                backgroundColor: "#f6cdc9",
                color: "#dd3628",
            },
        },
        success: {
            backgroundColor: "#00b969",
            "&.light": {
                backgroundColor: "#bfedd9",
                color: "#00b969",
            },
        },
        warning: {
            backgroundColor: "#ffcf5c",
            "&.light": {
                backgroundColor: "#fff8e7",
                color: "#ffcf5c",
            },
        },
    });
});
export function PriusLabel(_a) {
    var leftIcon = _a.leftIcon, _b = _a.theme, theme = _b === void 0 ? "dark" : _b, _c = _a.type, type = _c === void 0 ? "primary" : _c, _d = _a.size, size = _d === void 0 ? "small" : _d, text = _a.text, style = _a.style;
    var classes = useStyles();
    return (React.createElement("span", { className: clsx(classes.base, classes[size], classes[type], theme), style: style },
        leftIcon,
        text));
}
export default PriusLabel;
