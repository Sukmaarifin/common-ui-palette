/**
 * @todo
 * [ ] Unit test
 */
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import { IconCheckSVG } from "./IconCheckSVG";
var useStyles = makeStyles(function (theme) { return ({
    root: {
        marginTop: "-3px",
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    checkBox: {
        borderRadius: 2,
        border: "1px solid #E8E8E8",
        background: theme.colors.white,
        "input:disabled ~ &": {
            background: "#DCDCDC",
            border: "1px solid " + theme.colors.disabled,
        },
    },
    icon: {
        width: 14,
        height: 14,
    },
    position: {
        marginLeft: "2px",
    },
}); });
var PriusCheckbox = function (props) {
    var classes = useStyles();
    return (React.createElement(FormControlLabel, { control: React.createElement(Checkbox, { classes: { root: classes.root }, className: classes.position, checked: props.checked, value: props.value, name: props.name, disabled: props.disabled, checkedIcon: React.createElement(IconCheckSVG, { color: props.disabled ? "#BDBDBD" : "#444444", className: classes.checkBox }), icon: React.createElement("span", { className: clsx(classes.icon, classes.checkBox) }), id: props.id, inputProps: props.inputProps, onChange: props.onChange, onClick: props.onClick, onKeyDown: props.onKeyDown }), label: props.label, className: props.className, style: props.style, id: props.id, classes: props.classes }));
};
export default PriusCheckbox;
