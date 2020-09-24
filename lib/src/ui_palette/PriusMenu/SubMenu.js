import React from "react";
import { Drawer, Icon, List, ListItem, ListItemText } from "@material-ui/core";
import clsx from "clsx";
import { withRouter, Link } from "react-router-dom";
import { camelize } from "../../helpers";
import MainMenuCss from "./MainMenuCss";
var SubMenu = function (_a) {
    var getUrl = _a.getUrl, data = _a.data, parentMenu = _a.parentMenu, history = _a.history;
    var classes = MainMenuCss();
    var pathname = history.location.pathname;
    if (data.length > 0) {
        return (React.createElement(Drawer, { variant: "permanent", className: clsx(classes.drawerSubMenu, classes.drawerOpenSubMenu), classes: {
                paper: clsx(classes.drawerPaperSubMenu, classes.drawerOpenSubMenu),
            }, anchor: "left" },
            React.createElement("div", { className: classes.toolbar }),
            React.createElement(List, null,
                React.createElement(ListItem, { button: true, key: "0", onClick: function () { return getUrl("back"); } },
                    React.createElement(Icon, { className: classes.activeIcon }, "keyboard_backspace"),
                    React.createElement(ListItemText, { className: classes.activeSubMenu, primary: parentMenu })),
                data.map(function (text, index) { return (React.createElement(Link, { id: camelize(text.label), "data-identity": "subMenu-anchor-" + camelize(text.label), to: "" + (text === null || text === void 0 ? void 0 : text.url), key: index, className: classes.link },
                    React.createElement(ListItem, { button: true, key: index, onClick: function () { return getUrl(text.url ? text.url : ""); } },
                        React.createElement(ListItemText, { className: clsx(classes.drawerListSubMenu, text.url && pathname === text.url
                                ? classes.activeSubMenu
                                : ""), primary: text.label })))); }))));
    }
    return null;
};
export default withRouter(SubMenu);
