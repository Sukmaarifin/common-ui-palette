"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var clsx_1 = __importDefault(require("clsx"));
var useStyles = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        // Switch classes
        root: {
            width: 28,
            height: 12,
            padding: 0,
            margin: theme.spacing(1),
            borderRadius: 2,
            overflow: 'visible',
        },
        disabled: {},
        switchBase: {
            padding: 0,
            '&$checked': {
                transform: 'translateX(18px)',
                color: theme.colors.white,
                '& + $track': {
                    backgroundColor: '#1C9AEA',
                    opacity: 1,
                    borderColor: theme.palette.primary.dark,
                },
            },
            '&$disabled': {
                color: theme.colors.disabled,
                '&$checked': {
                    '& + $track': {
                        backgroundColor: '#DCDCDC',
                        borderColor: theme.colors.disabled,
                    },
                },
            },
            '&$focusVisible $thumb': {
                color: theme.colors.white,
                border: "1px solid " + theme.colors.primary,
                height: 12,
            },
        },
        thumb: {
            width: 10,
            height: 14,
            borderRadius: 2,
        },
        track: {
            borderRadius: 2,
            border: "1px solid #E8E8E8",
            backgroundColor: '#EEEEF3',
            opacity: 1,
            transition: theme.transitions.create(['background-color', 'border']),
            '&$disabled': {},
        },
        checked: {},
        focusVisible: {},
        // Custom classes
        rootHover: {
            '&:hover $thumb': {
                color: theme.colors.white,
                border: "1px solid " + theme.colors.primary,
                height: 12,
            },
        },
    });
});
var TableToggle = function (_a) {
    var id = _a.id, onChange = _a.onChange, className = _a.className, checked = _a.checked, style = _a.style, disabled = _a.disabled, value = _a.value, name = _a.name;
    var classes = useStyles();
    return (react_1.default.createElement(core_1.FormControlLabel, { style: style, className: className, control: react_1.default.createElement(core_1.Switch, { id: id && "" + id, "data-identity": id && "" + id, focusVisibleClassName: classes.focusVisible, disableRipple: true, classes: {
                root: disabled
                    ? classes.root
                    : clsx_1.default(classes.root, classes.rootHover),
                switchBase: classes.switchBase,
                thumb: classes.thumb,
                track: classes.track,
                checked: classes.checked,
                disabled: classes.disabled,
            }, onChange: onChange, disabled: disabled, checked: checked, value: value, name: name }), label: null }));
};
exports.default = TableToggle;
