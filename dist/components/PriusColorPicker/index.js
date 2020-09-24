"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_color_1 = require("react-color");
var common_1 = require("react-color/lib/components/common");
var core_1 = require("@material-ui/core");
var clsx_1 = __importDefault(require("clsx"));
var PriusColorPickerCss_1 = require("./PriusColorPickerCss");
var HuePointer = function () {
    var classes = PriusColorPickerCss_1.useStyles();
    return react_1.default.createElement(core_1.Grid, { className: classes.huepointer });
};
var SaturationPointer = function () {
    var classes = PriusColorPickerCss_1.useStyles();
    return react_1.default.createElement(core_1.Grid, { className: classes.saturationPointer });
};
var PriusColorPicker = function (props) {
    var _a, _b, _c, _d;
    var classes = PriusColorPickerCss_1.useStyles();
    var handleChange = function (color, type) {
        var _a, _b, _c, _d, _e, _f;
        if (type === 'hex') {
            if (typeof color === 'string') {
                if (/^([0-9A-F]{3}){1,2}$/i.test(color)) {
                    props.onChange({ hex: color, source: 'hex' });
                }
            }
            else {
                props.onChange({ hex: color.hex, source: 'hex' });
            }
        }
        else {
            if (typeof color === 'string') {
                props.onChange({
                    r: type === 'r' ? color : (_a = props.rgb) === null || _a === void 0 ? void 0 : _a.r,
                    g: type === 'g' ? color : (_b = props.rgb) === null || _b === void 0 ? void 0 : _b.g,
                    b: type === 'b' ? color : (_c = props.rgb) === null || _c === void 0 ? void 0 : _c.b,
                    source: 'rgb',
                });
            }
            else {
                props.onChange({
                    r: type === 'r' ? color.rgb.r : (_d = props.rgb) === null || _d === void 0 ? void 0 : _d.r,
                    g: type === 'g' ? color.rgb.g : (_e = props.rgb) === null || _e === void 0 ? void 0 : _e.g,
                    b: type === 'b' ? color.rgb.b : (_f = props.rgb) === null || _f === void 0 ? void 0 : _f.b,
                    source: 'rgb',
                });
            }
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Grid, { className: classes.saturation },
            react_1.default.createElement(common_1.Saturation, __assign({}, props, { pointer: SaturationPointer }))),
        react_1.default.createElement(core_1.Grid, { className: classes.hueContainer, container: true, direction: "row" },
            react_1.default.createElement(core_1.Grid, { item: true, className: classes.hue },
                react_1.default.createElement(common_1.Hue, __assign({}, props, { direction: "horizontal", pointer: HuePointer }))),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Grid, { className: classes.colorBox, style: { backgroundColor: props.hex } }))),
        react_1.default.createElement(core_1.Grid, { container: true },
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, null, "Hex"),
                react_1.default.createElement(common_1.EditableInput, { style: PriusColorPickerCss_1.editableInputStyle.hex, value: (_a = props.hex) === null || _a === void 0 ? void 0 : _a.replace('#', ''), onChange: function (color) { return handleChange(color, 'hex'); } })),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, null, "R"),
                react_1.default.createElement(common_1.EditableInput, { style: PriusColorPickerCss_1.editableInputStyle.rgb, value: (_b = props.rgb) === null || _b === void 0 ? void 0 : _b.r, onChange: function (color) { return handleChange(color, 'r'); } })),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, null, "G"),
                react_1.default.createElement(common_1.EditableInput, { style: PriusColorPickerCss_1.editableInputStyle.rgb, value: (_c = props.rgb) === null || _c === void 0 ? void 0 : _c.g, onChange: function (color) { return handleChange(color, 'g'); } })),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(core_1.Typography, null, "B"),
                react_1.default.createElement(common_1.EditableInput, { style: PriusColorPickerCss_1.editableInputStyle.rgbLastChild, value: (_d = props.rgb) === null || _d === void 0 ? void 0 : _d.b, onChange: function (color) { return handleChange(color, 'b'); } }))),
        react_1.default.createElement(core_1.Grid, { container: true },
            react_1.default.createElement(core_1.Grid, { className: classes.divider })),
        react_1.default.createElement(core_1.Grid, { container: true }, PriusColorPickerCss_1.presetColors.map(function (color, index) { return (react_1.default.createElement(core_1.Grid, { className: clsx_1.default(classes.swatchBox, index === PriusColorPickerCss_1.presetColors.length - 1 && classes.swatchBoxLastChild), style: { backgroundColor: color.hex }, key: index, onClick: function () { return props.onChange(color.hex); } })); }))));
};
exports.default = react_color_1.CustomPicker(PriusColorPicker);
