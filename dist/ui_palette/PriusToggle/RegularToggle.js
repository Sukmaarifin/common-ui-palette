"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var clsx_1 = __importDefault(require("clsx"));
var PriusFieldset_1 = __importDefault(require("../PriusFieldset"));
exports.useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        // Switch classes
        root: {
            width: 90,
            height: 18,
            padding: 0,
            margin: theme.spacing(0.5),
            marginTop: 0,
            borderRadius: 2,
            overflow: "visible",
        },
        disabled: {
            "&$track": {
                "&:before": {
                    color: theme.colors.disabled,
                },
            },
        },
        switchBase: {
            padding: 0,
            "&$checked": {
                transform: "translateX(80px)",
                color: theme.colors.white,
                "& + $track": {
                    backgroundColor: theme.colors.primary,
                    opacity: 1,
                    borderColor: theme.palette.primary.dark,
                },
            },
            "&$disabled": {
                color: theme.colors.disabled,
                "&$checked": {
                    "& + $track": {
                        backgroundColor: "#DCDCDC",
                        borderColor: theme.colors.disabled,
                    },
                },
                "& + $track": {
                    opacity: 1,
                    backgroundColor: "#DCDCDC",
                    borderColor: theme.colors.disabled,
                },
            },
            "&$focusVisible $thumb": {
                color: theme.colors.white,
                border: "1px solid " + theme.colors.primary,
                height: 24,
            },
        },
        track: {
            borderRadius: 2,
            border: "1px solid #E8E8E8",
            transition: theme.transitions.create(["background-color", "border"]),
            textAlign: "center",
        },
        thumb: {
            width: 10,
            height: 26,
            borderRadius: 2,
        },
        checked: {},
        focusVisible: {},
        // Custom classes
        trackActive: {
            borderColor: theme.palette.primary.dark,
            paddingTop: 6,
            "&:before": {
                content: '"Aktif"',
                color: theme.colors.white,
                fontSize: "0.8125rem",
            },
        },
        trackNonActive: {
            borderColor: "#E8E8E8",
            backgroundColor: "#EEEEF3",
            opacity: 1,
            paddingTop: 6,
            "&:before": {
                content: '"Tidak Aktif"',
                color: theme.colors.text,
                fontSize: "0.8125rem",
            },
        },
        trackDisabled: {
            "&:before": {
                color: theme.colors.disabled,
            },
        },
        label: {
            marginLeft: "inherit",
        },
        rootHover: {
            "&:hover $thumb": {
                color: theme.colors.white,
                border: "1px solid " + theme.colors.primary,
                height: 24,
            },
        },
    });
});
var RegularToggle = function (_a) {
    var id = _a.id, label = _a.label, onChange = _a.onChange, className = _a.className, checked = _a.checked, style = _a.style, disabled = _a.disabled, value = _a.value, name = _a.name;
    var classes = exports.useStyles();
    return (react_1.default.createElement(PriusFieldset_1.default, { label: label },
        react_1.default.createElement(core_1.FormControlLabel, { style: style, className: className, control: react_1.default.createElement(core_1.Switch, { id: id && "" + id, "data-identity": id && "" + id, focusVisibleClassName: classes.focusVisible, disableRipple: true, classes: {
                    root: disabled
                        ? classes.root
                        : clsx_1.default(classes.root, classes.rootHover),
                    switchBase: classes.switchBase,
                    thumb: classes.thumb,
                    track: checked
                        ? clsx_1.default(classes.track, classes.trackActive, disabled && classes.trackDisabled)
                        : clsx_1.default(classes.track, classes.trackNonActive, disabled && classes.trackDisabled),
                    checked: classes.checked,
                    disabled: classes.disabled,
                }, onChange: onChange, disabled: disabled, checked: checked, value: value, name: name }), label: null, classes: { root: classes.label } })));
};
exports.default = RegularToggle;
