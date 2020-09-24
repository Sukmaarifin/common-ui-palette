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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import PriusInput from "../PriusInputNew";
import { DropdownIcon } from "../../icons";
import clsx from "clsx";
var useStyles = makeStyles(function (theme) {
    return createStyles({
        select: {
            "& .MuiSelect-icon": {
                marginRight: "0.625rem",
                top: "50%",
                transform: "translateY(-50%)",
            },
        },
        menuPaper: {
            boxShadow: theme.customShadows[1],
        },
        placeholder: {
            color: theme.colors.placeholder,
            opacity: "1",
            cursor: "default",
            pointerEvents: "none",
        },
        error: {
            borderColor: theme.colors.failed,
        },
    });
});
export var PriusSelect = React.forwardRef(function (_a, ref) {
    var placeholder = _a.placeholder, id = _a.id, className = _a.className, props = __rest(_a, ["placeholder", "id", "className"]);
    var classes = useStyles();
    return (React.createElement(Select, __assign({}, props, { ref: ref, className: clsx(classes.select, className ? className : ""), input: React.createElement(PriusInput, { id: id }), IconComponent: DropdownIcon, MenuProps: {
            classes: {
                paper: classes.menuPaper,
            },
        } }),
        placeholder && (React.createElement(MenuItem, { className: classes.placeholder }, placeholder)),
        props.children));
});
export default PriusSelect;
