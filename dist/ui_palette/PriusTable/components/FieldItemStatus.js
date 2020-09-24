"use strict";
/**
 * @todo unit testing
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
var icons_1 = require("../../../icons");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    container: {
        alignSelf: "center",
        padding: "0 1rem",
        alignContent: "center",
        justifyContent: "center",
    },
    check: {
        color: theme.colors.success,
    },
    disabled: {
        color: theme.colors.disabled,
    },
}); });
function FieldItemStatus(_a) {
    var filter = _a.filter, fixedWidth = _a.fixedWidth, record = _a.record, source = _a.source, style = _a.style, width = _a.width;
    var classes = useStyles();
    var status = get_1.default(record, source);
    var filterStatus = typeof filter === "string" ? get_1.default(record, filter) : filter;
    var icon = null;
    switch (status) {
        case true:
            icon = (react_1.default.createElement(icons_1.CheckIcon, { className: filterStatus ? classes.check : classes.disabled }));
            break;
        case false:
            icon = react_1.default.createElement(icons_1.CloseIcon, { color: filterStatus ? "error" : "disabled" });
            break;
        default:
            break;
    }
    return (react_1.default.createElement(core_1.Grid, { item: true, className: classes.container, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1 }) }, icon));
}
exports.default = FieldItemStatus;
