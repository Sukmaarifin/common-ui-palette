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
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { convertToPrice } from "../../../helpers/convertToPrice";
var useStyles = makeStyles(function () { return ({
    container: {
        alignSelf: "center",
        padding: "0 0.8rem",
        whiteSpace: "nowrap",
    },
}); });
var FieldPrice = function (_a) {
    var fixedWidth = _a.fixedWidth, record = _a.record, source = _a.source, style = _a.style, width = _a.width, textAlign = _a.textAlign;
    var num = get(record, source);
    var classes = useStyles();
    return (React.createElement(Grid, { item: true, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1, maxWidth: fixedWidth ? fixedWidth : width, textAlign: textAlign }), className: classes.container },
        React.createElement(Typography, null, convertToPrice(num === null || num === void 0 ? void 0 : num.value, num === null || num === void 0 ? void 0 : num.code) || "-")));
};
export default FieldPrice;
