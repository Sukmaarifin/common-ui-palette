/**
 * @todo
 * [ ] Revert to menuConnexi and menuStore
 * [ ] get plan from gql when ready
 * [ ] remove DEFAULT_PLAN when ready
 * [ ] remove onComplete when data used
 */
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
import React, { useState, useContext, useEffect } from "react";
import { Drawer, Icon, List, ListItem, ListItemText, Typography, } from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useLazyQuery } from "@apollo/react-hooks";
import { useSnackbar } from "../PriusSnackbar";
import { menuConnexi } from "./menuConnexi";
import { menuStore } from "./menuStore";
import SubMenu from "./SubMenu";
import { camelize } from "../../helpers";
import { DEFAULT_PLAN, ROUTE_BY_PLAN, DEFAULT_PLAN_STAGING, } from "../PriusRouter/types";
import { TenantContext } from "../PriusSSSO";
import { ENV } from "../../configs";
import { GET_ALLOWED_ACTIONS, } from "../../graphql";
import MainMenuCss from "./MainMenuCss";
var MainMenu = function () {
    var _a, _b, _c;
    var account = useContext(TenantContext).account;
    var classes = MainMenuCss();
    var snackbar = useSnackbar();
    var _d = useState({
        isOpenSubMenu: false,
        subMenu: [],
        activeLabel: "",
    }), menuState = _d[0], setMenuState = _d[1];
    var _e = useLazyQuery(GET_ALLOWED_ACTIONS, {
        fetchPolicy: "cache-and-network",
        // remove when data already used
        onCompleted: function () {
            console.log(data);
        },
        onError: function (error) {
            snackbar.show("" + error, "error");
        },
    }), getAllowedActions = _e[0], data = _e[1].data;
    useEffect(function () {
        // Remove production when ready
        if (ENV !== "development" && ENV !== "staging" && ENV !== "production") {
            getAllowedActions({
                variables: {
                    accountID: account.ID,
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    var iconSubMenu = function (hasSubMenu) {
        if (hasSubMenu && !menuState.isOpenSubMenu) {
            return (React.createElement(Icon, { style: { color: "#ffffff", opacity: 0.4 } }, "keyboard_arrow_right"));
        }
    };
    var onClickMenu = function (text) {
        var submenu = text.submenu;
        if (submenu.length > 0) {
            setMenuState({
                isOpenSubMenu: true,
                subMenu: submenu,
                activeLabel: text.label,
            });
        }
        else {
            setMenuState({
                isOpenSubMenu: false,
                subMenu: [],
                activeLabel: text.label,
            });
        }
    };
    var handlerMenu = function (listMenu) {
        if (ENV === "development")
            return listMenu;
        var defaultPlan = ENV === "staging" ? DEFAULT_PLAN_STAGING : DEFAULT_PLAN;
        var allowedActions = (data === null || data === void 0 ? void 0 : data.actions) && Array.isArray(data.actions) ? data.actions : defaultPlan;
        var urls = allowedActions.map(function (plan) { return ROUTE_BY_PLAN[plan]; });
        var convertedMenu = listMenu.reduce(function (tmpMenu, menu) {
            var _a;
            if ((_a = menu === null || menu === void 0 ? void 0 : menu.submenu) === null || _a === void 0 ? void 0 : _a.length) {
                var submenu = menu.submenu.filter(function (tmpSubMenu) { return urls.includes((tmpSubMenu === null || tmpSubMenu === void 0 ? void 0 : tmpSubMenu.url) || ""); });
                if (submenu === null || submenu === void 0 ? void 0 : submenu.length) {
                    tmpMenu.push(__assign(__assign({}, menu), { submenu: submenu }));
                }
            }
            else {
                if (urls.includes(menu.url)) {
                    tmpMenu.push(__assign(__assign({}, menu), { submenu: [] }));
                }
            }
            return tmpMenu;
        }, []);
        return convertedMenu;
    };
    var drawerListMenu = function (menu) {
        return (React.createElement(List, null, menu.map(function (text, index) { return (React.createElement(Link, { id: camelize(text.label), "data-identity": "menu-anchor-" + camelize(text.label), to: text.url, key: index, className: classes.link },
            React.createElement(ListItem, { button: true, key: index, onClick: function () { return onClickMenu(text); } },
                React.createElement(Icon, { classes: { root: classes.iconRoot } }, text.icon({
                    className: clsx(classes.imageIcon, menuState.activeLabel !== text.label
                        ? classes.imageIconInactive
                        : null),
                    fill: menuState.activeLabel === text.label
                        ? "#1c9aea"
                        : "#FFFFFF",
                })),
                React.createElement(ListItemText, { primary: React.createElement(Typography, { className: classes.menuList, style: {
                            fontWeight: menuState.activeLabel === text.label
                                ? "bold"
                                : "normal",
                            opacity: menuState.activeLabel === text.label ? 1 : 0.4,
                        } }, text.label) }),
                iconSubMenu(text.submenu.length)))); })));
    };
    return (React.createElement("nav", { className: classes.drawer, "aria-label": 'Mailbox folders' },
        React.createElement(Drawer, { variant: 'permanent', className: clsx(classes.drawer, (_a = {},
                _a[classes.drawerOpen] = !menuState.isOpenSubMenu,
                _a[classes.drawerClose] = menuState.isOpenSubMenu,
                _a)), classes: {
                paper: clsx(classes.drawerPaper, (_b = {},
                    _b[classes.drawerOpen] = !menuState.isOpenSubMenu,
                    _b[classes.drawerClose] = menuState.isOpenSubMenu,
                    _b)),
            }, anchor: 'left' },
            React.createElement("div", { className: classes.toolbar }),
            drawerListMenu(handlerMenu(menuConnexi)),
            React.createElement("div", { className: clsx(classes.divider, (_c = {},
                    _c[classes.marginLeftDivider] = !menuState.isOpenSubMenu,
                    _c)) },
                React.createElement("span", { style: {
                        display: menuState.isOpenSubMenu ? "none" : "inline",
                    } }, "Sales Channel")),
            drawerListMenu(handlerMenu(menuStore))),
        React.createElement(SubMenu, { getUrl: function (url) {
                return url === "back" &&
                    setMenuState(__assign(__assign({}, menuState), { isOpenSubMenu: false, subMenu: [] }));
            }, data: menuState.subMenu, parentMenu: menuState.activeLabel })));
};
export default MainMenu;
