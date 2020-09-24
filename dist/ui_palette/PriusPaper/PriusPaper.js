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
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    large: {
        padding: "1.875rem 3.75rem",
    },
    largeSquare: {
        padding: "1.875rem",
    },
    medium: {
        padding: "1.25rem 2.5rem",
    },
    mediumSquare: {
        padding: "1.25rem",
    },
    noPadding: {
        padding: 0,
    },
    root: {
        background: theme.colors.white,
        boxShadow: theme.customShadows[2],
    },
    rounded: {
        borderRadius: "3px",
    },
}); });
/**
 * `PriusPaper` component provides a simple container with predefined padding, white background, and box-shadow.
 */
function PriusPaper(_a) {
    var className = _a.className, children = _a.children, _b = _a.component, Component = _b === void 0 ? "div" : _b, id = _a.id, onClick = _a.onClick, _c = _a.padding, padding = _c === void 0 ? "medium" : _c, _d = _a.rounded, rounded = _d === void 0 ? false : _d, props = __rest(_a, ["className", "children", "component", "id", "onClick", "padding", "rounded"]);
    var classes = useStyles();
    return (react_1.default.createElement(Component, __assign({ className: clsx_1.default(className, classes.root, rounded && classes.rounded, classes[padding], className), "data-identity": id, onClick: onClick }, props), children));
}
exports.PriusPaper = PriusPaper;
exports.default = PriusPaper;
