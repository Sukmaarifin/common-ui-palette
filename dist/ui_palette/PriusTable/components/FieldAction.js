"use strict";
/**
 * @todo
 * [] unit testing
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var PriusButtonText_1 = __importDefault(require("../../PriusButtonText"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    button: {
        borderColor: theme.colors.primary,
        border: "1px solid " + theme.colors.primary,
        padding: "4px 20px",
        borderRadius: "3px",
        "&:hover": {
            backgroundColor: theme.colors.primary,
            color: "white",
        },
    },
    grid: {
        justifySelf: "flex-end",
        alignSelf: "center",
        marginLeft: "auto",
    },
}); });
function FieldAction(_a) {
    var _b = _a.actionText, actionText = _b === void 0 ? "Detail" : _b, icon = _a.icon, record = _a.record, source = _a.source, handleOnClick = _a.handleOnClick, fieldId = _a.fieldId, fixedWidth = _a.fixedWidth, width = _a.width;
    var classes = useStyles();
    var ID = get_1.default(record, source);
    var onClick = function (e) {
        e.stopPropagation();
        handleOnClick(ID);
    };
    return (react_1.default.createElement(core_1.Grid, { item: true, className: classes.grid, style: {
            flexBasis: fixedWidth ? fixedWidth : width,
            flexShrink: fixedWidth ? 0 : 1,
            maxWidth: fixedWidth ? fixedWidth : width,
        } },
        react_1.default.createElement(PriusButtonText_1.default, { className: classes.button, color: "primary", onClick: onClick, inputId: fieldId },
            icon,
            actionText)));
}
exports.default = FieldAction;
