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
var get_1 = __importDefault(require("lodash/get"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/styles");
var useStyles = styles_1.makeStyles(function () { return ({
    container: {
        alignSelf: "center",
        padding: "0 0.8rem",
    },
}); });
function FieldNumber(_a) {
    var fixedWidth = _a.fixedWidth, record = _a.record, source = _a.source, style = _a.style, _b = _a.threshold, threshold = _b === void 0 ? 0 : _b, _c = _a.thresholdedColor, thresholdedColor = _c === void 0 ? "#dd3628" : _c, width = _a.width;
    var num = get_1.default(record, source);
    var classes = useStyles();
    return (react_1.default.createElement(core_1.Grid, { item: true, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1 }), className: classes.container },
        react_1.default.createElement("span", { style: { color: num <= threshold ? thresholdedColor : "inherit" } }, num)));
}
exports.default = FieldNumber;
