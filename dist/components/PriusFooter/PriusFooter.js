"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    container: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        textAlignLast: 'right',
        width: '100%',
        padding: '1rem 3rem',
        zIndex: 10,
        backgroundColor: theme.colors.grey,
    },
    content: {
        '& > *:not(:last-child)': {
            marginRight: '1rem',
        },
    },
}); });
function PriusFooter(_a) {
    var children = _a.children;
    var classes = useStyles();
    return (react_1.default.createElement(core_1.Grid, { container: true, className: classes.container },
        react_1.default.createElement(core_1.Grid, { item: true, className: classes.content }, children)));
}
exports.default = PriusFooter;
