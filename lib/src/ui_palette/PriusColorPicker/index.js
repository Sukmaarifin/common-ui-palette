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
import { CustomPicker, } from "react-color";
import { EditableInput, Hue, Saturation, } from "react-color/lib/components/common";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useStyles, editableInputStyle, presetColors, } from "./PriusColorPickerCss";
var HuePointer = function () {
    var classes = useStyles();
    return React.createElement(Grid, { className: classes.huepointer });
};
var SaturationPointer = function () {
    var classes = useStyles();
    return React.createElement(Grid, { className: classes.saturationPointer });
};
var PriusColorPicker = function (props) {
    var _a, _b, _c, _d;
    var classes = useStyles();
    var handleChange = function (color, type) {
        var _a, _b, _c, _d, _e, _f;
        if (type === "hex") {
            if (typeof color === "string") {
                if (/^([0-9A-F]{3}){1,2}$/i.test(color)) {
                    props.onChange({ hex: color, source: "hex" });
                }
            }
            else {
                props.onChange({ hex: color.hex, source: "hex" });
            }
        }
        else {
            if (typeof color === "string") {
                props.onChange({
                    r: type === "r" ? color : (_a = props.rgb) === null || _a === void 0 ? void 0 : _a.r,
                    g: type === "g" ? color : (_b = props.rgb) === null || _b === void 0 ? void 0 : _b.g,
                    b: type === "b" ? color : (_c = props.rgb) === null || _c === void 0 ? void 0 : _c.b,
                    source: "rgb",
                });
            }
            else {
                props.onChange({
                    r: type === "r" ? color.rgb.r : (_d = props.rgb) === null || _d === void 0 ? void 0 : _d.r,
                    g: type === "g" ? color.rgb.g : (_e = props.rgb) === null || _e === void 0 ? void 0 : _e.g,
                    b: type === "b" ? color.rgb.b : (_f = props.rgb) === null || _f === void 0 ? void 0 : _f.b,
                    source: "rgb",
                });
            }
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Grid, { className: classes.saturation },
            React.createElement(Saturation, __assign({}, props, { pointer: SaturationPointer }))),
        React.createElement(Grid, { className: classes.hueContainer, container: true, direction: "row" },
            React.createElement(Grid, { item: true, className: classes.hue },
                React.createElement(Hue, __assign({}, props, { direction: "horizontal", pointer: HuePointer }))),
            React.createElement(Grid, { item: true },
                React.createElement(Grid, { className: classes.colorBox, style: { backgroundColor: props.hex } }))),
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { item: true },
                React.createElement(Typography, null, "Hex"),
                React.createElement(EditableInput, { style: editableInputStyle.hex, value: (_a = props.hex) === null || _a === void 0 ? void 0 : _a.replace("#", ""), onChange: function (color) { return handleChange(color, "hex"); } })),
            React.createElement(Grid, { item: true },
                React.createElement(Typography, null, "R"),
                React.createElement(EditableInput, { style: editableInputStyle.rgb, value: (_b = props.rgb) === null || _b === void 0 ? void 0 : _b.r, onChange: function (color) { return handleChange(color, "r"); } })),
            React.createElement(Grid, { item: true },
                React.createElement(Typography, null, "G"),
                React.createElement(EditableInput, { style: editableInputStyle.rgb, value: (_c = props.rgb) === null || _c === void 0 ? void 0 : _c.g, onChange: function (color) { return handleChange(color, "g"); } })),
            React.createElement(Grid, { item: true },
                React.createElement(Typography, null, "B"),
                React.createElement(EditableInput, { style: editableInputStyle.rgbLastChild, value: (_d = props.rgb) === null || _d === void 0 ? void 0 : _d.b, onChange: function (color) { return handleChange(color, "b"); } }))),
        React.createElement(Grid, { container: true },
            React.createElement(Grid, { className: classes.divider })),
        React.createElement(Grid, { container: true }, presetColors.map(function (color, index) { return (React.createElement(Grid, { className: clsx(classes.swatchBox, index === presetColors.length - 1 && classes.swatchBoxLastChild), style: { backgroundColor: color.hex }, key: index, onClick: function () { return props.onChange(color.hex); } })); }))));
};
export default CustomPicker(PriusColorPicker);
