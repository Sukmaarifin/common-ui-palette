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
import React from "react";
import get from "lodash/get";
import { Grid } from "@material-ui/core";
import PriusThumbnail from "../../PriusThumbnail";
export function ImageField(_a) {
    var altText = _a.altText, fixedWidth = _a.fixedWidth, record = _a.record, size = _a.size, source = _a.source, style = _a.style, width = _a.width;
    var imageSource = get(record, source);
    return (React.createElement(Grid, { item: true, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1 }) },
        React.createElement(PriusThumbnail, { imageSource: imageSource, altText: altText, size: size })));
}
export default ImageField;
