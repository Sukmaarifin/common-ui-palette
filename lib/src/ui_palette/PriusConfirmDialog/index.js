/**
 * @todo
 * [ ] Unit Test
 * [ ] Storybook
 */
import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, } from "@material-ui/core";
var PriusConfirmDialog = function (_a) {
    var id = _a.id, isOpen = _a.isOpen, buttonActionTitle = _a.buttonActionTitle, _b = _a.buttonCancelTitle, buttonCancelTitle = _b === void 0 ? "Batal" : _b, title = _a.title, message = _a.message, _c = _a.color, color = _c === void 0 ? "primary" : _c, _d = _a.variant, variant = _d === void 0 ? "contained" : _d, onButtonClick = _a.onButtonClick;
    return (React.createElement(Dialog, { open: isOpen, maxWidth: "xs", "aria-labelledby": id + "-dialog-title" },
        React.createElement(DialogTitle, { id: id + "-dialog-title" }, title),
        React.createElement(DialogContent, null,
            React.createElement(DialogContentText, { component: "div" }, message)),
        React.createElement(DialogActions, null,
            React.createElement(Button, { id: id + "-button-cancel", "data-identity": id + "-button-cancel", onClick: function () { return onButtonClick(false); } }, buttonCancelTitle),
            React.createElement(Button, { style: { minWidth: "7.5rem", borderRadius: "3px" }, id: id + "-button-action", "data-identity": id + "-button-action", variant: variant, color: color, onClick: function () { return onButtonClick(true); } }, buttonActionTitle))));
};
export default PriusConfirmDialog;
