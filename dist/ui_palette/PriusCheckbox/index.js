"use strict";
/**
 * @todo
 * [ ] Unit test
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var IconCheckSVG_1 = require("./IconCheckSVG");
var useStyles = styles_1.makeStyles(function (theme) { return ({
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
    return (react_1.default.createElement(core_1.FormControlLabel, { control: react_1.default.createElement(core_1.Checkbox, { classes: { root: classes.root }, className: classes.position, checked: props.checked, value: props.value, name: props.name, disabled: props.disabled, checkedIcon: react_1.default.createElement(IconCheckSVG_1.IconCheckSVG, { color: props.disabled ? "#BDBDBD" : "#444444", className: classes.checkBox }), icon: react_1.default.createElement("span", { className: clsx_1.default(classes.icon, classes.checkBox) }), id: props.id, inputProps: props.inputProps, onChange: props.onChange, onClick: props.onClick, onKeyDown: props.onKeyDown }), label: props.label, className: props.className, style: props.style, id: props.id, classes: props.classes }));
};
exports.default = PriusCheckbox;
