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
var styles_1 = require("@material-ui/core/styles");
var icons_1 = require("../../../icons");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    container: {
        alignSelf: "center",
        padding: "0 0.8rem",
        alignContent: "center",
        justifyContent: "center",
    },
    success: {
        width: "0.8rem",
        color: theme.colors.success,
    },
    sync: {
        width: "0.8rem",
        color: theme.colors.warning,
    },
    failed: {
        width: "0.8rem",
        color: theme.colors.failed,
    },
    unpublish: {
        width: "0.8rem",
        color: "#DDDDDD",
    },
}); });
function StatusField(_a) {
    var fixedWidth = _a.fixedWidth, record = _a.record, source = _a.source, style = _a.style, width = _a.width;
    var classes = useStyles();
    var iconSource = get_1.default(record, source).toLowerCase();
    var icon = react_1.default.createElement("div", null);
    switch (iconSource) {
        case "success":
            icon = react_1.default.createElement(icons_1.CheckCircleIcon, { className: classes.success });
            break;
        case "sync":
            icon = react_1.default.createElement(icons_1.SyncCircleSolidIcon, { className: classes.sync });
            break;
        case "failed":
            icon = react_1.default.createElement(icons_1.ExclamationCircleIcon, { className: classes.failed });
            break;
        case "unpublish":
            icon = react_1.default.createElement(icons_1.MinusCircleIcon, { className: classes.unpublish });
            break;
        default:
            break;
    }
    return (react_1.default.createElement(core_1.Grid, { item: true, className: classes.container, style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1 }) }, icon));
}
exports.default = StatusField;
