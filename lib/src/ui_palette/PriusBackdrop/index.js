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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from "react";
import clsx from "clsx";
import { ClickAwayListener, Grow, Paper } from "@material-ui/core";
import Popper from "@material-ui/core/Popper";
import { PriusBackdropCss } from "./PriusBackdropCss";
export var PriusBackdropNew = function (_a) {
    var paperClassName = _a.paperClassName, placement = _a.placement, popperId = _a.popperId, renderTrigger = _a.renderTrigger, renderChildren = _a.renderChildren, onClose = _a.onClose, onOpen = _a.onOpen, renderOnHover = _a.renderOnHover, props = __rest(_a, ["paperClassName", "placement", "popperId", "renderTrigger", "renderChildren", "onClose", "onOpen", "renderOnHover"]);
    var classes = PriusBackdropCss();
    var anchorRef = React.useRef(null);
    var _b = React.useState(null), arrowRef = _b[0], setArrowRef = _b[1];
    var _c = React.useState(false), open = _c[0], setOpen = _c[1];
    var handleClickButton = function () {
        if (open && onClose) {
            onClose();
        }
        else if (!open && onOpen) {
            onOpen();
        }
        setOpen(function (prevOpen) { return !prevOpen; });
    };
    var handleClose = function (event) {
        if (anchorRef.current && anchorRef.current.contains(event.currentTarget)) {
            return;
        }
        handleToggleClose();
    };
    var handleToggleClose = function () {
        if (onClose) {
            onClose();
        }
        setOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        !renderOnHover && renderTrigger(anchorRef, handleClickButton),
        renderOnHover &&
            renderTrigger(anchorRef, handleClickButton, handleToggleClose),
        React.createElement(Popper, { id: popperId, placement: placement, open: open, className: classes.popper, anchorEl: anchorRef.current, modifiers: {
                flip: {
                    enabled: true,
                },
                arrow: {
                    enabled: true,
                    element: arrowRef,
                },
            }, transition: true }, function (_a) {
            var TransitionProps = _a.TransitionProps, position = _a.position;
            return (React.createElement(Grow, __assign({}, TransitionProps, { style: {
                    transformOrigin: position === "bottom" ? "center top" : "center bottom",
                } }),
                React.createElement("div", null,
                    React.createElement("span", { className: classes.arrow, ref: setArrowRef }),
                    React.createElement(ClickAwayListener, { onClickAway: handleClose },
                        React.createElement(Paper, { className: clsx(classes.paper, paperClassName ? paperClassName : null) }, typeof renderChildren === "function"
                            ? renderChildren(handleClose)
                            : props.children
                                ? props.children
                                : null)))));
        })));
};
export default PriusBackdropNew;
