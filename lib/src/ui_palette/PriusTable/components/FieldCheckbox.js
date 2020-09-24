/**
 * @todo
 * [ ] Unit Test
 */
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
import { makeStyles } from "@material-ui/core/styles";
import PriusCheckbox from "../../PriusCheckbox";
var useStyles = makeStyles(function () { return ({
    grid: {
        alignSelf: "center",
        margin: "0 auto",
    },
}); });
var FieldCheckbox = function (_a) {
    var handleOnClick = _a.handleOnClick, record = _a.record, source = _a.source, fieldId = _a.fieldId, ID = _a.ID, style = _a.style, fixedWidth = _a.fixedWidth, width = _a.width;
    var classes = useStyles();
    var checkboxID = get(record, ID);
    var checkboxSource = get(record, source);
    return (React.createElement(Grid, { item: true, className: classes.grid, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1, maxWidth: fixedWidth ? fixedWidth : width }) },
        React.createElement(PriusCheckbox, { id: fieldId && "" + fieldId, inputProps: {
                "data-identity": fieldId && "" + fieldId,
            }, checked: checkboxSource, value: checkboxSource, onChange: function (event, isChecked) {
                handleOnClick(checkboxID, isChecked);
            } })));
};
export default FieldCheckbox;
