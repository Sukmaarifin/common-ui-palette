"use strict";
/**
 * @todo
 * Handle other severity if needed, for now it's unnecessary.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var lab_1 = require("@material-ui/lab");
var styles_1 = require("@material-ui/core/styles");
var assets_1 = require("../PriusSnackbar/assets");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        alert: {
            color: theme.palette.text.primary,
            fontSize: '0.8125rem',
            border: '1px solid',
            borderTopWidth: '3px',
        },
        action: {
            alignItems: 'start',
            marginTop: theme.spacing(0.75),
        },
        info: {
            backgroundColor: '#D1F7FD',
            borderColor: '#75D5F8',
            borderTopColor: theme.palette.primary.main,
            marginBottom: theme.spacing(3.5),
        },
        root: {
            fontWeight: 700,
        },
    });
});
var PriusInfoBox = function (_a) {
    var action = _a.action, message = _a.message, title = _a.title;
    var classes = useStyles();
    return (react_1.default.createElement(lab_1.Alert, { action: action, className: classes.alert, classes: {
            standardInfo: classes.info,
            action: classes.action,
        }, iconMapping: {
            info: react_1.default.createElement(assets_1.InfoSVG, null),
        }, severity: "info" },
        react_1.default.createElement(lab_1.AlertTitle, { classes: {
                root: classes.root,
            } }, title),
        message));
};
exports.default = PriusInfoBox;
