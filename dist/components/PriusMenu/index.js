"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var clsx_1 = __importDefault(require("clsx"));
var react_router_dom_1 = require("react-router-dom");
var react_hooks_1 = require("@apollo/react-hooks");
var PriusSnackbar_1 = require("../PriusSnackbar");
var menuConnexi_1 = require("./menuConnexi");
var menuStore_1 = require("./menuStore");
var SubMenu_1 = __importDefault(require("./SubMenu"));
var helpers_1 = require("../../helpers");
var types_1 = require("../PriusRouter/types");
var PriusSSSO_1 = require("../PriusSSSO");
var configs_1 = require("../../configs");
var graphql_1 = require("../../graphql");
var MainMenuCss_1 = __importDefault(require("./MainMenuCss"));
var MainMenu = function () {
    var _a, _b, _c;
    var account = react_1.useContext(PriusSSSO_1.TenantContext).account;
    var classes = MainMenuCss_1.default();
    var snackbar = PriusSnackbar_1.useSnackbar();
    var _d = react_1.useState({
        isOpenSubMenu: false,
        subMenu: [],
        activeLabel: '',
    }), menuState = _d[0], setMenuState = _d[1];
    var _e = react_hooks_1.useLazyQuery(graphql_1.GET_ALLOWED_ACTIONS, {
        fetchPolicy: 'cache-and-network',
        // remove when data already used
        onCompleted: function () {
            // console.log(data);
        },
        onError: function (error) {
            snackbar.show("" + error, 'error');
        },
    }), getAllowedActions = _e[0], data = _e[1].data;
    react_1.useEffect(function () {
        // Remove production when ready
        if (configs_1.ENV !== 'development' && configs_1.ENV !== 'staging' && configs_1.ENV !== 'production') {
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
            return (react_1.default.createElement(core_1.Icon, { style: { color: '#ffffff', opacity: 0.4 } }, "keyboard_arrow_right"));
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
        if (configs_1.ENV === 'development')
            return listMenu;
        var defaultPlan = configs_1.ENV === 'staging' ? types_1.DEFAULT_PLAN_STAGING : types_1.DEFAULT_PLAN;
        var allowedActions = (data === null || data === void 0 ? void 0 : data.actions) && Array.isArray(data.actions) ? data.actions : defaultPlan;
        var urls = allowedActions.map(function (plan) { return types_1.ROUTE_BY_PLAN[plan]; });
        var convertedMenu = listMenu.reduce(function (tmpMenu, menu) {
            var _a;
            if ((_a = menu === null || menu === void 0 ? void 0 : menu.submenu) === null || _a === void 0 ? void 0 : _a.length) {
                var submenu = menu.submenu.filter(function (tmpSubMenu) { return urls.includes((tmpSubMenu === null || tmpSubMenu === void 0 ? void 0 : tmpSubMenu.url) || ''); });
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
        return (react_1.default.createElement(core_1.List, null, menu.map(function (text, index) { return (react_1.default.createElement(react_router_dom_1.Link, { id: helpers_1.camelize(text.label), "data-identity": "menu-anchor-" + helpers_1.camelize(text.label), to: text.url, key: index, className: classes.link },
            react_1.default.createElement(core_1.ListItem, { button: true, key: index, onClick: function () { return onClickMenu(text); } },
                react_1.default.createElement(core_1.Icon, { classes: { root: classes.iconRoot } }, text.icon({
                    className: clsx_1.default(classes.imageIcon, menuState.activeLabel !== text.label
                        ? classes.imageIconInactive
                        : null),
                    fill: menuState.activeLabel === text.label
                        ? '#1c9aea'
                        : '#FFFFFF',
                })),
                react_1.default.createElement(core_1.ListItemText, { primary: react_1.default.createElement(core_1.Typography, { className: classes.menuList, style: {
                            fontWeight: menuState.activeLabel === text.label
                                ? 'bold'
                                : 'normal',
                            opacity: menuState.activeLabel === text.label ? 1 : 0.4,
                        } }, text.label) }),
                iconSubMenu(text.submenu.length)))); })));
    };
    return (react_1.default.createElement("nav", { className: classes.drawer, "aria-label": "Mailbox folders" },
        react_1.default.createElement(core_1.Drawer, { variant: "permanent", className: clsx_1.default(classes.drawer, (_a = {},
                _a[classes.drawerOpen] = !menuState.isOpenSubMenu,
                _a[classes.drawerClose] = menuState.isOpenSubMenu,
                _a)), classes: {
                paper: clsx_1.default(classes.drawerPaper, (_b = {},
                    _b[classes.drawerOpen] = !menuState.isOpenSubMenu,
                    _b[classes.drawerClose] = menuState.isOpenSubMenu,
                    _b)),
            }, anchor: "left" },
            react_1.default.createElement("div", { className: classes.toolbar }),
            drawerListMenu(handlerMenu(menuConnexi_1.menuConnexi)),
            react_1.default.createElement("div", { className: clsx_1.default(classes.divider, (_c = {},
                    _c[classes.marginLeftDivider] = !menuState.isOpenSubMenu,
                    _c)) },
                react_1.default.createElement("span", { style: {
                        display: menuState.isOpenSubMenu ? 'none' : 'inline',
                    } }, "Sales Channel")),
            drawerListMenu(handlerMenu(menuStore_1.menuStore))),
        react_1.default.createElement(SubMenu_1.default, { getUrl: function (url) {
                return url === 'back' &&
                    setMenuState(__assign(__assign({}, menuState), { isOpenSubMenu: false, subMenu: [] }));
            }, data: menuState.subMenu, parentMenu: menuState.activeLabel })));
};
exports.default = MainMenu;
