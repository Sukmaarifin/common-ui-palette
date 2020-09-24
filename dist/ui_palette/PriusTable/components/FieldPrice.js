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
var convertToPrice_1 = require("../../../helpers/convertToPrice");
var useStyles = styles_1.makeStyles(function () { return ({
    container: {
        alignSelf: "center",
        padding: "0 0.8rem",
        whiteSpace: "nowrap",
    },
}); });
var FieldPrice = function (_a) {
    var fixedWidth = _a.fixedWidth, record = _a.record, source = _a.source, style = _a.style, width = _a.width, textAlign = _a.textAlign;
    var num = get_1.default(record, source);
    var classes = useStyles();
    return (react_1.default.createElement(core_1.Grid, { item: true, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1, maxWidth: fixedWidth ? fixedWidth : width, textAlign: textAlign }), className: classes.container },
        react_1.default.createElement(core_1.Typography, null, convertToPrice_1.convertToPrice(num === null || num === void 0 ? void 0 : num.value, num === null || num === void 0 ? void 0 : num.code) || "-")));
};
exports.default = FieldPrice;
