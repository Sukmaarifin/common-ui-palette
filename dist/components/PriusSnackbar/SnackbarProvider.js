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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Snackbar_1 = __importDefault(require("@material-ui/core/Snackbar"));
var lab_1 = require("@material-ui/lab");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var SnackbarContext_1 = __importDefault(require("./SnackbarContext"));
var icons_1 = require("../../icons");
var assets_1 = require("./assets");
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        alert: {
            color: theme.palette.text.primary,
            fontSize: '0.8125rem',
            border: '1px solid',
            borderTopWidth: '3px',
            maxWidth: '30rem',
        },
        action: {
            alignItems: 'start',
            marginTop: theme.spacing(0.75),
        },
        error: {
            backgroundColor: '#FDE4D3',
            borderColor: '#EA715A',
            borderTopColor: theme.palette.secondary.main,
        },
        warning: {
            backgroundColor: '#FEF7D4',
            borderColor: '#FDE180',
            borderTopColor: '#FBC02D',
        },
        success: {
            backgroundColor: '#C9FBD1',
            borderColor: '#5DEA91',
            borderTopColor: theme.palette.success.main,
        },
        info: {
            backgroundColor: '#D1F7FD',
            borderColor: '#75D5F8',
            borderTopColor: theme.palette.primary.main,
        },
        closeButton: {
            padding: 0,
        },
    });
});
var SnackbarProvider = function (props) {
    var _a = react_1.useState({
        message: undefined,
        open: false,
        severity: undefined,
        closable: false,
        detail: undefined,
    }), snackbar = _a[0], setSnackbar = _a[1];
    var classes = useStyles();
    var message = snackbar.message, severity = snackbar.severity, open = snackbar.open, detail = snackbar.detail, closable = snackbar.closable;
    var children = props.children;
    var show = function (title, level, isClosable, text) {
        setSnackbar({
            open: true,
            message: title,
            severity: level,
            closable: isClosable,
            detail: text,
        });
    };
    var handleClose = function () {
        setSnackbar(function (prevState) { return (__assign(__assign({}, prevState), { open: false })); });
    };
    var context = { show: show };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(SnackbarContext_1.default.Provider, { value: context }, children),
        react_1.default.createElement(Snackbar_1.default, { open: open, autoHideDuration: 4000, onClose: handleClose, style: { top: 64 }, anchorOrigin: { vertical: 'top', horizontal: 'right' } },
            react_1.default.createElement(lab_1.Alert, { className: classes.alert, classes: {
                    standardSuccess: classes.success,
                    standardError: classes.error,
                    standardInfo: classes.info,
                    standardWarning: classes.warning,
                    action: classes.action,
                }, iconMapping: {
                    error: react_1.default.createElement(assets_1.ErrorSVG, null),
                    warning: react_1.default.createElement(assets_1.WarningSVG, null),
                    success: react_1.default.createElement(assets_1.SuccessSVG, null),
                    info: react_1.default.createElement(assets_1.InfoSVG, null),
                }, elevation: 6, action: closable ? (react_1.default.createElement(core_1.IconButton, { className: classes.closeButton, id: "snackbar-button-close", "data-identity": "snackbar-button-close", onClick: handleClose },
                    react_1.default.createElement(icons_1.CloseIcon, null))) : undefined, severity: severity }, detail ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(lab_1.AlertTitle, null, message),
                react_1.default.createElement(core_1.Typography, { variant: "inherit" }, detail))) : (react_1.default.createElement(react_1.default.Fragment, null, message))))));
};
exports.default = SnackbarProvider;
