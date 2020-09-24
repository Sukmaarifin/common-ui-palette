"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ButtonBase_1 = __importDefault(require("@material-ui/core/ButtonBase"));
var styles_1 = require("@material-ui/core/styles");
var clsx_1 = __importDefault(require("clsx"));
var helpers_1 = require("../../helpers");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    button: {
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'inherit',
        '&> .MuiSvgIcon-root': {
            fontSize: '1.5em',
            '&:first-child': {
                marginRight: '0.3125rem',
            },
            '&:last-child': {
                marginLeft: '0.3125rem',
            },
        },
        '&.Mui-disabled': {
            color: theme.colors.disabled,
        },
    },
    colorInherit: {
        color: 'inherit',
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.palette.text.secondary,
    },
    fontWeightBold: {
        fontWeight: 'bold',
    },
}); });
var PriusButtonText = react_1.default.forwardRef(function (_a, _) {
    var _b = _a.bold, bold = _b === void 0 ? false : _b, _c = _a.children, children = _c === void 0 ? '' : _c, className = _a.className, _d = _a.color, color = _d === void 0 ? 'inherit' : _d, endIcon = _a.endIcon, startIcon = _a.startIcon, onClick = _a.onClick, disabled = _a.disabled, inputId = _a.inputId;
    var classes = useStyles();
    return (react_1.default.createElement(ButtonBase_1.default, { className: clsx_1.default(classes.button, className, color === 'inherit' && classes.colorInherit, color === 'primary' && classes.colorPrimary, color === 'secondary' && classes.colorSecondary, bold && classes.fontWeightBold), onClick: onClick, disabled: disabled, disableRipple: true, "data-identity": inputId &&
            children &&
            inputId + "-button-" + helpers_1.camelize(children.toString().toLowerCase()) },
        startIcon,
        react_1.default.createElement("span", null, children),
        endIcon));
});
exports.default = PriusButtonText;
