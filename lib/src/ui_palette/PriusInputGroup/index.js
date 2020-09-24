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
import clsx from "clsx";
import { MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PriusSelect from "../PriusSelect";
var useStyles = makeStyles(function (theme) { return ({
    container: {
        borderRadius: "0.1875rem",
        border: "solid 1px #e8e8e8",
        display: "inline-flex",
        flexFlow: "row",
        background: "white",
    },
    dropdown: {
        borderRight: "solid 1px #e8e8e8",
        fontSize: "0.8rem",
        padding: "0.2rem 0.8rem",
        "&:before": {
            borderBottom: "none",
        },
    },
    inputContainer: {
        alignSelf: "center",
        fontSize: "0.8rem",
        padding: "0.2rem 0.8rem",
        display: "flex",
        flexBasis: "100%",
        "& > *": {
            flex: 1,
        },
    },
    disabled: {
        background: theme.colors.grey2,
        "& input": {
            background: "inherit",
        },
    },
    input: {
        border: "none",
        outline: "none",
        fontSize: "0.8125rem",
        fontFamily: "Metropolis",
    },
    leftLabel: {
        borderRight: "solid 1px " + theme.colors.grey3,
        padding: "0.4rem",
        margin: "0.4rem",
    },
    select: {
        border: "none",
        borderRight: "solid 1px " + theme.colors.grey3,
    },
    error: {
        borderColor: theme.colors.failed,
    },
}); });
function PriusInputGroup(_a) {
    var children = _a.children, inputId = _a.inputId, name = _a.name, disabled = _a.disabled, dropdownName = _a.dropdownName, dropdownItem = _a.dropdownItem, dropdownItems = _a.dropdownItems, placeholder = _a.placeholder, required = _a.required, valueDropdown = _a.valueDropdown, valueInput = _a.valueInput, _b = _a.width, width = _b === void 0 ? "-webkit-fill-available" : _b, handleDropdown = _a.handleDropdown, handleInput = _a.handleInput, handleInputBlur = _a.handleInputBlur, handleInputKeyDown = _a.handleInputKeyDown, leftLabel = _a.leftLabel, className = _a.className, isError = _a.isError, props = __rest(_a, ["children", "inputId", "name", "disabled", "dropdownName", "dropdownItem", "dropdownItems", "placeholder", "required", "valueDropdown", "valueInput", "width", "handleDropdown", "handleInput", "handleInputBlur", "handleInputKeyDown", "leftLabel", "className", "isError"]);
    var classes = useStyles();
    return (React.createElement("div", { className: clsx(disabled && classes.disabled, classes.container, className ? className : null, isError ? classes.error : null), style: { width: width } },
        dropdownItem && valueDropdown ? (React.createElement(PriusSelect, __assign({}, props, { id: inputId, inputProps: { "data-identity": inputId }, disabled: disabled, displayEmpty: true, name: dropdownName, value: valueDropdown, onChange: function (event) { return handleDropdown(event); }, className: classes.select }), dropdownItem.map(function (item, index) { return (React.createElement(MenuItem, { key: index, value: item }, item)); }))) : dropdownItems && valueDropdown !== undefined ? (React.createElement(PriusSelect, __assign({}, props, { id: inputId, inputProps: { "data-identity": inputId }, disabled: disabled, displayEmpty: true, name: dropdownName, value: valueDropdown, onChange: handleDropdown, className: classes.select }), dropdownItems.map(function (item, index) { return (React.createElement(MenuItem, { key: index, value: item.value }, item.label)); }))) : leftLabel ? (React.createElement("span", { className: classes.leftLabel },
            " ",
            leftLabel,
            " ")) : null,
        React.createElement("div", { className: classes.inputContainer },
            !children && (dropdownItem || dropdownItems) && handleInput && (React.createElement("input", { id: inputId + "-field", "data-identity": inputId + "-field", disabled: disabled, name: name, "aria-label": "description", style: { width: width }, className: classes.input, placeholder: placeholder, required: required, value: valueInput, onBlur: handleInputBlur, onChange: function (event) { return handleInput(event); }, onKeyDown: handleInputKeyDown })),
            children)));
}
export default PriusInputGroup;
