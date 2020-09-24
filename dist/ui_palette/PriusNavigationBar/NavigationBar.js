"use strict";
/**
 * @todo Request mode from gql when ready
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
// import clsx from "clsx";
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var react_router_1 = require("react-router");
var react_router_dom_1 = require("react-router-dom");
// import NotificationList from "./NotificationList/NotificationList";
// import PriusIconImageGenerator from "../PriusIconImageGenerator/PriusIconImageGenerator";
var PriusSSSO_1 = require("../../ui_palette/PriusSSSO");
var route_1 = require("../../route");
var helpers_1 = require("../../helpers");
require("./NavigationBar.css");
var LinkRouter = function (props) { return (React.createElement(core_1.Link, __assign({}, props, { component: react_router_dom_1.Link }))); };
var NavigationBar = function (props) {
    var mode = React.useContext(PriusSSSO_1.TenantContext).mode;
    var name = props.name, userClick = props.userClick, 
    // notifClick,
    // notifStatus,
    // notif,
    toggleDropdown = props.toggleDropdown, toggleStatus = props.toggleStatus;
    // let cards = notif.map((item, id) => {
    //   let date = item.time.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
    //   return(
    //     <Card key={id} style={{ boxShadow: "none" }}>
    //       <CardContent className="prius__card-container">
    //         <div className="prius__card-item">
    //           <PriusIconImageGenerator
    //             className="prius__card-label"
    //             text={item.flagStatus}
    //             type="image"
    //           />
    //           <div className="prius__card-content">
    //             <Typography className="title">
    //               {item.messages}
    //             </Typography>
    //             <Typography className="time">
    //               {date}
    //             </Typography>
    //           </div>
    //         </div>
    //       </CardContent>
    //     </Card>
    //   );
    // });
    return (React.createElement("div", null,
        React.createElement("div", { className: "prius__navbar__container" },
            React.createElement("div", { className: "prius__navbar__left-side" },
                React.createElement(core_1.Breadcrumbs, { "aria-label": "Breadcrumb" },
                    React.createElement(react_router_1.Route, null, function (_a) {
                        var location = _a.location;
                        var pathnames = location.pathname.split("/").filter(function (x) { return x; });
                        var getValidPath = exports.handlerPathname(pathnames);
                        // find URL and check is user has mode to access the URL
                        var isAuthenticated = route_1.route.find(function (item) {
                            return item.url === getValidPath && item.modes.includes(mode);
                        });
                        // if unauthorized, just skip
                        if (!isAuthenticated)
                            return null;
                        var currentPathnames = getValidPath.charAt(0) === "/"
                            ? getValidPath.substring(1).split("/")
                            : getValidPath.split("/");
                        return (React.createElement(core_1.Breadcrumbs, { "aria-label": "breadcrumb" }, currentPathnames.map(function (_, index) {
                            // check is last iteration
                            var last = index === currentPathnames.length - 1;
                            // get URL
                            var to = "/" + currentPathnames
                                .slice(0, index + 1)
                                .join("/");
                            // find route object from given URL
                            var url = route_1.route.find(function (item) { return item.url === to; });
                            // if route object found, get breadcrumbs data
                            var page = url ? url.breadcrumb : null;
                            // if page doesn't exist, just skip
                            if (!page)
                                return null;
                            return last ? (React.createElement(core_1.Typography, { className: "prius__link", key: to }, page)) : (React.createElement(core_1.Typography, { className: "prius__link-disable", key: to },
                                React.createElement(LinkRouter, { to: to, key: to, color: "inherit", "data-identity": "navigation-link-" + helpers_1.camelize(page) }, page)));
                        })));
                    }))),
            React.createElement("div", { className: "prius__navbar__right-side" },
                React.createElement("div", { className: "prius__navbar__user" },
                    React.createElement(core_1.Tooltip, { title: "Keluar", enterDelay: 1000, leaveDelay: 200 },
                        React.createElement("div", { className: "dropdown-container", onClick: toggleDropdown },
                            React.createElement(core_1.Button, { "data-identity": "navigation-button-toggleDropdown", style: {
                                    textTransform: "none",
                                    fontFamily: "Metropolis",
                                    fontSize: 13,
                                    marginTop: 3,
                                    fontWeight: "normal",
                                } },
                                name,
                                React.createElement(icons_1.KeyboardArrowDown, null)),
                            toggleStatus === true ? (React.createElement(core_1.Paper, { style: {
                                    zIndex: 9,
                                    position: "relative",
                                } },
                                React.createElement(core_1.ClickAwayListener, { onClickAway: toggleDropdown },
                                    React.createElement(core_1.MenuList, null,
                                        React.createElement(core_1.MenuItem, { onClick: userClick, "data-identity": "navigation-button-logout" },
                                            React.createElement("span", { style: {
                                                    fontFamily: "Metropolis",
                                                    fontSize: 13,
                                                } }, "Keluar")))))) : null)))))));
};
exports.default = NavigationBar;
exports.handlerPathname = function (pathnames) {
    var initialPaths = (pathnames === null || pathnames === void 0 ? void 0 : pathnames.length) ? pathnames
        : ["product"];
    var similarPath = route_1.route.filter(function (tmpRoute) {
        return tmpRoute.url.includes(initialPaths[0]);
    });
    var tempPaths = initialPaths.reduce(function (items, path, idx) {
        if (idx > 0) {
            if (similarPath.length) {
                var futurePath = similarPath.find(function (tmpPath) {
                    return tmpPath.url.includes("/" + items.join("/") + "/" + path);
                });
                if (futurePath) {
                    items.push(path);
                }
                else {
                    items[idx - 1] === ":id" ? items.push(":subid") : items.push(":id");
                }
            }
        }
        else {
            items.push(path);
        }
        return items;
    }, []);
    return "/" + tempPaths.join("/");
};
