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
import { makeStyles } from "@material-ui/styles";
var useStyles = makeStyles(function () { return ({
    container: {
        alignSelf: "center",
        padding: "0 0.8rem",
    },
}); });
function FieldNumber(_a) {
    var fixedWidth = _a.fixedWidth, record = _a.record, source = _a.source, style = _a.style, _b = _a.threshold, threshold = _b === void 0 ? 0 : _b, _c = _a.thresholdedColor, thresholdedColor = _c === void 0 ? "#dd3628" : _c, width = _a.width;
    var num = get(record, source);
    var classes = useStyles();
    return (React.createElement(Grid, { item: true, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1 }), className: classes.container },
        React.createElement("span", { style: { color: num <= threshold ? thresholdedColor : "inherit" } }, num)));
}
export default FieldNumber;
