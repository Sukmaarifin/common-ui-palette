import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { camelize } from "../../helpers";
var useStyles = makeStyles(function (theme) { return ({
    button: {
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "inherit",
        "&> .MuiSvgIcon-root": {
            fontSize: "1.5em",
            "&:first-child": {
                marginRight: "0.3125rem",
            },
            "&:last-child": {
                marginLeft: "0.3125rem",
            },
        },
        "&.Mui-disabled": {
            color: theme.colors.disabled,
        },
    },
    colorInherit: {
        color: "inherit",
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.palette.text.secondary,
    },
    fontWeightBold: {
        fontWeight: "bold",
    },
}); });
var PriusButtonText = React.forwardRef(function (_a, _) {
    var _b = _a.bold, bold = _b === void 0 ? false : _b, _c = _a.children, children = _c === void 0 ? "" : _c, className = _a.className, _d = _a.color, color = _d === void 0 ? "inherit" : _d, endIcon = _a.endIcon, startIcon = _a.startIcon, onClick = _a.onClick, disabled = _a.disabled, inputId = _a.inputId;
    var classes = useStyles();
    return (React.createElement(ButtonBase, { className: clsx(classes.button, className, color === "inherit" && classes.colorInherit, color === "primary" && classes.colorPrimary, color === "secondary" && classes.colorSecondary, bold && classes.fontWeightBold), onClick: onClick, disabled: disabled, disableRipple: true, "data-identity": inputId &&
            children &&
            inputId + "-button-" + camelize(children.toString().toLowerCase()) },
        startIcon,
        React.createElement("span", null, children),
        endIcon));
});
export default PriusButtonText;
