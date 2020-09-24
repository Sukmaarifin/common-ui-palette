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
import * as React from "react";
// import clsx from "clsx";
import { Button, Breadcrumbs, Link, MenuItem, MenuList, Paper, Tooltip, ClickAwayListener, Typography, } from "@material-ui/core";
import { KeyboardArrowDown, } from "@material-ui/icons";
import { Route } from "react-router";
import { Link as RouterLink } from "react-router-dom";
// import NotificationList from "./NotificationList/NotificationList";
// import PriusIconImageGenerator from "../PriusIconImageGenerator/PriusIconImageGenerator";
import { TenantContext } from "../../ui_palette/PriusSSSO";
import { route } from "../../route";
import { camelize } from "../../helpers";
import "./NavigationBar.css";
var LinkRouter = function (props) { return (React.createElement(Link, __assign({}, props, { component: RouterLink }))); };
var NavigationBar = function (props) {
    var mode = React.useContext(TenantContext).mode;
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
                React.createElement(Breadcrumbs, { "aria-label": "Breadcrumb" },
                    React.createElement(Route, null, function (_a) {
                        var location = _a.location;
                        var pathnames = location.pathname.split("/").filter(function (x) { return x; });
                        var getValidPath = handlerPathname(pathnames);
                        // find URL and check is user has mode to access the URL
                        var isAuthenticated = route.find(function (item) {
                            return item.url === getValidPath && item.modes.includes(mode);
                        });
                        // if unauthorized, just skip
                        if (!isAuthenticated)
                            return null;
                        var currentPathnames = getValidPath.charAt(0) === "/"
                            ? getValidPath.substring(1).split("/")
                            : getValidPath.split("/");
                        return (React.createElement(Breadcrumbs, { "aria-label": "breadcrumb" }, currentPathnames.map(function (_, index) {
                            // check is last iteration
                            var last = index === currentPathnames.length - 1;
                            // get URL
                            var to = "/" + currentPathnames
                                .slice(0, index + 1)
                                .join("/");
                            // find route object from given URL
                            var url = route.find(function (item) { return item.url === to; });
                            // if route object found, get breadcrumbs data
                            var page = url ? url.breadcrumb : null;
                            // if page doesn't exist, just skip
                            if (!page)
                                return null;
                            return last ? (React.createElement(Typography, { className: "prius__link", key: to }, page)) : (React.createElement(Typography, { className: "prius__link-disable", key: to },
                                React.createElement(LinkRouter, { to: to, key: to, color: "inherit", "data-identity": "navigation-link-" + camelize(page) }, page)));
                        })));
                    }))),
            React.createElement("div", { className: "prius__navbar__right-side" },
                React.createElement("div", { className: "prius__navbar__user" },
                    React.createElement(Tooltip, { title: "Keluar", enterDelay: 1000, leaveDelay: 200 },
                        React.createElement("div", { className: "dropdown-container", onClick: toggleDropdown },
                            React.createElement(Button, { "data-identity": "navigation-button-toggleDropdown", style: {
                                    textTransform: "none",
                                    fontFamily: "Metropolis",
                                    fontSize: 13,
                                    marginTop: 3,
                                    fontWeight: "normal",
                                } },
                                name,
                                React.createElement(KeyboardArrowDown, null)),
                            toggleStatus === true ? (React.createElement(Paper, { style: {
                                    zIndex: 9,
                                    position: "relative",
                                } },
                                React.createElement(ClickAwayListener, { onClickAway: toggleDropdown },
                                    React.createElement(MenuList, null,
                                        React.createElement(MenuItem, { onClick: userClick, "data-identity": "navigation-button-logout" },
                                            React.createElement("span", { style: {
                                                    fontFamily: "Metropolis",
                                                    fontSize: 13,
                                                } }, "Keluar")))))) : null)))))));
};
export default NavigationBar;
export var handlerPathname = function (pathnames) {
    var initialPaths = (pathnames === null || pathnames === void 0 ? void 0 : pathnames.length) ? pathnames
        : ["product"];
    var similarPath = route.filter(function (tmpRoute) {
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
