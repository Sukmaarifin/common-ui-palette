"use strict";
/**
 * @todo
 * [ ] Unit Test
 * [ ] Storybook
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var PriusConfirmDialog = function (_a) {
    var id = _a.id, isOpen = _a.isOpen, buttonActionTitle = _a.buttonActionTitle, _b = _a.buttonCancelTitle, buttonCancelTitle = _b === void 0 ? "Batal" : _b, title = _a.title, message = _a.message, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.variant, variant = _d === void 0 ? "contained" : _d, onButtonClick = _a.onButtonClick;
    return (react_1.default.createElement(core_1.Dialog, { open: isOpen, maxWidth: "xs", "aria-labelledby": id + "-dialog-title" },
        react_1.default.createElement(core_1.DialogTitle, { id: id + "-dialog-title" }, title),
        react_1.default.createElement(core_1.DialogContent, null,
            react_1.default.createElement(core_1.DialogContentText, { component: "div" }, message)),
        react_1.default.createElement(core_1.DialogActions, null,
            react_1.default.createElement(core_1.Button, { id: id + "-button-cancel", "data-identity": id + "-button-cancel", onClick: function () { return onButtonClick(false); } }, buttonCancelTitle),
            react_1.default.createElement(core_1.Button, { style: { minWidth: "7.5rem", borderRadius: "3px" }, id: id + "-button-action", "data-identity": id + "-button-action", variant: variant, color: color, onClick: function () { return onButtonClick(true); } }, buttonActionTitle))));
};
exports.default = PriusConfirmDialog;
