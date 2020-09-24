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
var styles_1 = require("@material-ui/core/styles");
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var PriusInputNew_1 = __importDefault(require("../PriusInputNew"));
var icons_1 = require("../../icons");
var clsx_1 = __importDefault(require("clsx"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        select: {
            '& .MuiSelect-icon': {
                marginRight: '0.625rem',
                top: '50%',
                transform: 'translateY(-50%)',
            },
        },
        menuPaper: {
            boxShadow: theme.customShadows[1],
        },
        placeholder: {
            color: theme.colors.placeholder,
            opacity: '1',
            cursor: 'default',
            pointerEvents: 'none',
        },
        error: {
            borderColor: theme.colors.failed,
        },
    });
});
exports.PriusSelect = react_1.default.forwardRef(function (_a, ref) {
    var placeholder = _a.placeholder, id = _a.id, className = _a.className, props = __rest(_a, ["placeholder", "id", "className"]);
    var classes = useStyles();
    return (react_1.default.createElement(Select_1.default, __assign({}, props, { ref: ref, className: clsx_1.default(classes.select, className ? className : ''), input: react_1.default.createElement(PriusInputNew_1.default, { id: id }), IconComponent: icons_1.DropdownIcon, MenuProps: {
            classes: {
                paper: classes.menuPaper,
            },
        } }),
        placeholder && (react_1.default.createElement(MenuItem_1.default, { className: classes.placeholder }, placeholder)),
        props.children));
});
exports.default = exports.PriusSelect;
