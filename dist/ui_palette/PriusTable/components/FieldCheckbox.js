"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var PriusCheckbox_1 = __importDefault(require("../../PriusCheckbox"));
var useStyles = styles_1.makeStyles(function () { return ({
    grid: {
        alignSelf: "center",
        margin: "0 auto",
    },
}); });
var FieldCheckbox = function (_a) {
    var handleOnClick = _a.handleOnClick, record = _a.record, source = _a.source, fieldId = _a.fieldId, ID = _a.ID, style = _a.style, fixedWidth = _a.fixedWidth, width = _a.width;
    var classes = useStyles();
    var checkboxID = get_1.default(record, ID);
    var checkboxSource = get_1.default(record, source);
    return (react_1.default.createElement(core_1.Grid, { item: true, className: classes.grid, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1, maxWidth: fixedWidth ? fixedWidth : width }) },
        react_1.default.createElement(PriusCheckbox_1.default, { id: fieldId && "" + fieldId, inputProps: {
                "data-identity": fieldId && "" + fieldId,
            }, checked: checkboxSource, value: checkboxSource, onChange: function (event, isChecked) {
                handleOnClick(checkboxID, isChecked);
            } })));
};
exports.default = FieldCheckbox;
