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
import React, { useRef, useState } from "react";
import clsx from "clsx";
import { ClickAwayListener, Grow, IconButton, ListItemIcon, ListItemText, MenuItem, MenuList, Paper, Popper, } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { MoreHoriz } from "@material-ui/icons";
import PriusTooltip from "../PriusTooltip";
import { OptionIcon } from "../../icons";
var useStyles = makeStyles(function (theme) { return ({
    menuItem: {
        fontWeight: "bold",
    },
    iconLeft: {
        marginRight: "0.625rem",
    },
    iconRight: {
        marginLeft: "0.625rem",
    },
    itemIcon: {
        minWidth: "auto",
    },
    itemInner: {
        display: "flex",
        alignItems: "center",
    },
    itemText: {
        "& > *": {
            fontWeight: "bold",
        },
    },
    paper: {
        boxShadow: theme.customShadows[1],
    },
}); });
function PriusOption(_a) {
    var icon = _a.icon, items = _a.items;
    var classes = useStyles();
    var _b = useState(false), open = _b[0], setOpen = _b[1];
    var anchorRef = useRef(null);
    var handleToggle = function () {
        setOpen(function (prevOpen) { return !prevOpen; });
    };
    var handleClose = function (event) {
        if (anchorRef.current &&
            anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(IconButton, { ref: anchorRef, "aria-controls": open ? "menu-list-grow" : undefined, "aria-haspopup": "true", onClick: handleToggle, "data-identity": "option-button-toggle" }, icon === "vertical" ? React.createElement(OptionIcon, null) : React.createElement(MoreHoriz, null)),
        React.createElement(Popper, { open: open, anchorEl: anchorRef.current, role: undefined, transition: true, placement: "bottom-end" }, function (_a) {
            var TransitionProps = _a.TransitionProps, placement = _a.placement;
            return (React.createElement(Grow, __assign({}, TransitionProps, { style: {
                    transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                } }),
                React.createElement(Paper, { className: classes.paper },
                    React.createElement(ClickAwayListener, { onClickAway: handleClose },
                        React.createElement(MenuList, { autoFocusItem: open, id: "menu-list-grow" }, items.map(function (item, index) { return (React.createElement(Item, { key: index, data: item, classes: classes })); }))))));
        })));
}
function Item(_a) {
    var data = _a.data, classes = _a.classes;
    return (React.createElement(MenuItem, { "data-identity": data.itemId && "option-item-" + data.itemId, disabled: data.disabled, id: data.itemId, onClick: function () { return data.onClick && !data.disabled && data.onClick(); } }, data.tooltipText ? (React.createElement(PriusTooltip, { title: data.tooltipText, placement: "top" },
        React.createElement("div", { className: classes.itemInner },
            data.iconLeft && (React.createElement(ListItemIcon, { className: clsx(classes.itemIcon, classes.iconLeft) }, data.iconLeft)),
            React.createElement(ListItemText, { "data-identity": data.itemId && "option-item-" + data.itemId, primary: data.title, className: classes.itemText }),
            data.iconRight && (React.createElement(ListItemIcon, { className: clsx(classes.itemIcon, classes.iconRight) }, data.iconRight))))) : (React.createElement(React.Fragment, null,
        data.iconLeft && (React.createElement(ListItemIcon, { className: clsx(classes.itemIcon, classes.iconLeft) }, data.iconLeft)),
        React.createElement(ListItemText, { "data-identity": data.itemId && "option-item-" + data.itemId, primary: data.title, className: classes.itemText }),
        data.iconRight && (React.createElement(ListItemIcon, { className: clsx(classes.itemIcon, classes.iconRight) }, data.iconRight))))));
}
export default PriusOption;
