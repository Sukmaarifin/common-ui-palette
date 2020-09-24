"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var styles_1 = require("@material-ui/core/styles");
var CustomTextbox = styles_1.withStyles(function (theme) {
    return styles_1.createStyles({
        root: {
            width: '100%',
            fontSize: '13px',
            lineHeight: 1.38,
            color: '#d0c9d6',
            backgroundColor: theme.colors.white,
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: theme.colors.grey3,
                },
                '&:hover fieldset': {
                    borderColor: theme.colors.grey3,
                },
                '&.Mui-focused fieldset': {
                    borderColor: theme.colors.grey3,
                    '&:hover fieldset': {
                        borderColor: theme.colors.grey3,
                    },
                },
            },
        },
    });
})(TextField_1.default);
exports.PriusTextbox = function (_a) {
    var id = _a.id, placeholder = _a.placeholder, _b = _a.multiline, multiline = _b === void 0 ? false : _b, name = _a.name, rows = _a.rows, rowsMax = _a.rowsMax, value = _a.value, _c = _a.isError, isError = _c === void 0 ? false : _c, onChange = _a.onChange;
    return (react_1.default.createElement(CustomTextbox, { inputProps: { 'data-identity': id && "" + id }, value: value, id: id, placeholder: placeholder, variant: "outlined", margin: "dense", multiline: multiline, name: name, rows: rows, rowsMax: rowsMax, onChange: onChange, error: isError }));
};
exports.default = exports.PriusTextbox;
