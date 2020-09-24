"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var clsx_1 = __importDefault(require("clsx"));
var react_router_dom_1 = require("react-router-dom");
var helpers_1 = require("../../helpers");
var MainMenuCss_1 = __importDefault(require("./MainMenuCss"));
var SubMenu = function (_a) {
    var getUrl = _a.getUrl, data = _a.data, parentMenu = _a.parentMenu, history = _a.history;
    var classes = MainMenuCss_1.default();
    var pathname = history.location.pathname;
    if (data.length > 0) {
        return (react_1.default.createElement(core_1.Drawer, { variant: "permanent", className: clsx_1.default(classes.drawerSubMenu, classes.drawerOpenSubMenu), classes: {
                paper: clsx_1.default(classes.drawerPaperSubMenu, classes.drawerOpenSubMenu),
            }, anchor: "left" },
            react_1.default.createElement("div", { className: classes.toolbar }),
            react_1.default.createElement(core_1.List, null,
                react_1.default.createElement(core_1.ListItem, { button: true, key: "0", onClick: function () { return getUrl('back'); } },
                    react_1.default.createElement(core_1.Icon, { className: classes.activeIcon }, "keyboard_backspace"),
                    react_1.default.createElement(core_1.ListItemText, { className: classes.activeSubMenu, primary: parentMenu })),
                data.map(function (text, index) { return (react_1.default.createElement(react_router_dom_1.Link, { id: helpers_1.camelize(text.label), "data-identity": "subMenu-anchor-" + helpers_1.camelize(text.label), to: "" + (text === null || text === void 0 ? void 0 : text.url), key: index, className: classes.link },
                    react_1.default.createElement(core_1.ListItem, { button: true, key: index, onClick: function () { return getUrl(text.url ? text.url : ''); } },
                        react_1.default.createElement(core_1.ListItemText, { className: clsx_1.default(classes.drawerListSubMenu, text.url && pathname === text.url
                                ? classes.activeSubMenu
                                : ''), primary: text.label })))); }))));
    }
    return null;
};
exports.default = react_router_dom_1.withRouter(SubMenu);
