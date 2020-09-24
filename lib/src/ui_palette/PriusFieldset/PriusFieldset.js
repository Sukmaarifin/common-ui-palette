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
import clsx from "clsx";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { FormControl, FormHelperText, Grid } from "@material-ui/core";
import PriusTooltip from "../PriusTooltip";
import { QuestionCircleOutlinedIcon, CheckCircleOutlinedIcon, ExclamationCircleOutlinedIcon, } from "../../icons";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        root: {
            "& > .MuiInputBase-root.Mui-error": {
                borderColor: theme.colors.failed,
            },
            "&.success": {
                "&> .MuiInputBase-root": {
                    borderColor: theme.colors.success,
                },
                "&> .MuiFormLabel-root": {
                    color: theme.colors.success,
                },
                "&> .MuiFormHelperText-root": {
                    color: theme.colors.success,
                },
            },
        },
        select: {
            "& .MuiSelect-icon": {
                marginRight: "0.625rem",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "0.5rem",
            },
        },
        label: {
            color: theme.colors.text,
            fontSize: "0.8125rem",
            position: "relative",
            display: "inline-flex",
            marginBottom: "0.3125rem",
            marginLeft: "0.3125rem",
            transform: "scale(1)",
            "&.Mui-focused": {
                color: "initial",
            },
        },
        tooltipIcon: {
            marginLeft: theme.spacing(0.5),
        },
        helperText: {
            textTransform: "initial",
            display: "inline-flex",
            marginTop: "0.25rem",
            marginLeft: "0.3125rem",
            marginRight: "0.3125rem",
            "& .MuiSvgIcon-root": {
                marginRight: theme.spacing(0.5),
            },
        },
        gutterBottom: {
            marginBottom: theme.spacing(3),
        },
        toolbar: {
            "& > *": {
                marginLeft: theme.spacing(1),
            },
        },
    });
});
export var PriusFieldset = function (_a) {
    var children = _a.children, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? false : _c, _d = _a.gutterBottom, gutterBottom = _d === void 0 ? true : _d, helperText = _a.helperText, inputId = _a.inputId, inputLabelProps = _a.inputLabelProps, label = _a.label, labelId = _a.labelId, _e = _a.required, required = _e === void 0 ? false : _e, _f = _a.status, status = _f === void 0 ? "normal" : _f, toolbar = _a.toolbar, tooltipText = _a.tooltipText;
    var classes = useStyles();
    return (React.createElement(FormControl, { disabled: disabled, error: status === "error", fullWidth: fullWidth, required: required, className: clsx(classes.root, status === "success" ? "success" : undefined, gutterBottom ? classes.gutterBottom : undefined) },
        (label || toolbar) && (React.createElement(Grid, { container: true, justify: "space-between" },
            label && (React.createElement(Grid, { item: true },
                React.createElement(InputLabel, __assign({ shrink: true, htmlFor: inputId, id: labelId, className: classes.label }, inputLabelProps),
                    label,
                    tooltipText && (React.createElement(PriusTooltip, { placement: "top", title: tooltipText },
                        React.createElement(QuestionCircleOutlinedIcon, { fontSize: "small", className: classes.tooltipIcon, tabIndex: 0 })))))),
            toolbar && (React.createElement(Grid, { item: true, className: classes.toolbar }, toolbar)))),
        children,
        helperText && (React.createElement(FormHelperText, { className: classes.helperText },
            status === "error" && (React.createElement(ExclamationCircleOutlinedIcon, { fontSize: "small" })),
            status === "success" && React.createElement(CheckCircleOutlinedIcon, { fontSize: "small" }),
            helperText))));
};
export default PriusFieldset;
