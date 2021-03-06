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
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var styles_1 = require("@material-ui/core/styles");
require("./priusTooltip.css");
function arrowGenerator(color) {
    return {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.95em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: "transparent transparent " + color + " transparent",
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.95em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: color + " transparent transparent transparent",
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.95em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: "transparent " + color + " transparent transparent",
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.95em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: "transparent transparent transparent " + color,
            },
        },
    };
}
var useStylesCustom = styles_1.makeStyles(function () {
    return styles_1.createStyles({
        arrow: {
            position: 'absolute',
            fontSize: 8,
            width: '3em',
            height: '3em',
            '&::before': {
                content: '""',
                margin: 'auto',
                display: 'block',
                width: 0,
                height: 0,
                borderStyle: 'solid',
            },
        },
        popper: arrowGenerator('#333333'),
        tooltip: {
            position: 'relative',
            borderRadius: '3px',
            fontSize: 11,
            fontFamily: 'Metropolis',
            lineHeight: 1.45,
            backgroundColor: '#333333',
            maxWidth: '150px',
        },
        tooltipPlacementLeft: {
            margin: '0 8px',
            padding: '5px',
        },
        tooltipPlacementRight: {
            margin: '0 8px',
            padding: '5px',
        },
        tooltipPlacementTop: {
            margin: '8px 0',
            padding: '5px',
            textAlign: 'center',
        },
        tooltipPlacementBottom: {
            margin: '8px 0',
            padding: ' 5px',
            textAlign: 'center',
        },
    });
});
var PriusTooltip = function (_a) {
    var img = _a.img, title = _a.title, props = __rest(_a, ["img", "title"]);
    var _b = useStylesCustom(), arrow = _b.arrow, classes = __rest(_b, ["arrow"]);
    var _c = react_1.default.useState(null), arrowRef = _c[0], setArrowRef = _c[1];
    return (react_1.default.createElement(Tooltip_1.default, __assign({ classes: classes, disableHoverListener: !Boolean(title), PopperProps: {
            disablePortal: false,
            popperOptions: {
                modifiers: {
                    arrow: {
                        enabled: Boolean(arrowRef),
                        element: arrowRef,
                    },
                },
            },
        } }, props, { title: react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: img ? 'prius-tooltip left' : 'prius-tooltip' },
                title,
                img && react_1.default.createElement("img", { src: img, className: "preview", alt: "preview" })),
            react_1.default.createElement("span", { className: arrow, ref: setArrowRef })) })));
};
exports.default = PriusTooltip;
