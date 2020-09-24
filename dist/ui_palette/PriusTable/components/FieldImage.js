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
var PriusThumbnail_1 = __importDefault(require("../../PriusThumbnail"));
function ImageField(_a) {
    var altText = _a.altText, fixedWidth = _a.fixedWidth, record = _a.record, size = _a.size, source = _a.source, style = _a.style, width = _a.width;
    var imageSource = get_1.default(record, source);
    return (react_1.default.createElement(core_1.Grid, { item: true, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1 }) },
        react_1.default.createElement(PriusThumbnail_1.default, { imageSource: imageSource, altText: altText, size: size })));
}
exports.ImageField = ImageField;
exports.default = ImageField;
