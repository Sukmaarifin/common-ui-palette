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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var InputBase_1 = __importDefault(require("@material-ui/core/InputBase"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            borderRadius: '0.1875rem',
            backgroundColor: theme.colors.white,
            border: "1px solid " + theme.colors.grey3,
        },
        input: {
            padding: '0.75rem 0.9375rem',
            fontSize: '0.8125rem',
            color: theme.colors.text,
            '&::placeholder': {
                color: theme.colors.placeholder + " !important",
                opacity: '1 !important',
            },
        },
        error: {
            '& input': {
                borderColor: theme.colors.failed,
                '&:focus': {
                    borderColor: theme.colors.failed,
                },
            },
        },
        disabled: {
            background: theme.colors.grey2,
            '& input': {
                background: 'hsl(0,0%,95%)',
                color: 'hsl(0,0%,60%)',
                borderColor: theme.colors.failed,
                '&:focus': {
                    borderColor: theme.colors.failed,
                },
            },
        },
        adornedStart: {
            paddingLeft: '0.9375rem',
            fontSize: '1em',
            '& > *:first-child': {
                borderRight: "solid 1.1px " + theme.colors.grey3,
                paddingRight: '1rem',
                color: theme.colors.disabled,
            },
        },
        adornedEnd: {
            paddingRight: '0.9375rem',
            fontSize: '1em',
            '& > *:last-child': {
                borderLeft: "solid 1.1px " + theme.colors.grey3,
                paddingLeft: '1rem',
                color: theme.colors.info,
            },
        },
        // inputAdornedStart: {
        //   paddingLeft: "0"
        // },
        // inputAdornedEnd: {
        //   paddingRight: "0"
        // },
        multiline: {
            padding: '0',
        },
    });
});
exports.PriusInput = react_1.default.forwardRef(function (_a, ref) {
    var props = __rest(_a, []);
    var classes = useStyles();
    return react_1.default.createElement(InputBase_1.default, __assign({ classes: classes, ref: ref }, props));
});
exports.default = exports.PriusInput;
