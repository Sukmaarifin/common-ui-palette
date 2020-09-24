/**
 * @todo
 * [ ] Delete mode if no longer used
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
import React, { useContext, useEffect } from "react";
import { Route } from "react-router-dom";
import { useLazyQuery } from "@apollo/react-hooks";
import ErrorPage from "./ErrorPage";
import { handlerPathname } from "../PriusNavigationBar";
import { TenantContext } from "../PriusSSSO";
import { GET_ACCESS_TO } from "../../graphql";
import { ROUTE_BY_PLAN } from "./types";
import { ENV } from "../../configs";
var PriusRouter = function (_a) {
    var Component = _a.component, modes = _a.modes, rest = __rest(_a, ["component", "modes"]);
    var _b = useContext(TenantContext), account = _b.account, mode = _b.mode;
    // check which feature has access to by ID
    var _c = useLazyQuery(GET_ACCESS_TO, {
        fetchPolicy: "cache-and-network",
        // remove when isAllowed used
        onCompleted: function () {
            console.log(isAllowed);
        },
        onError: function (error) {
            console.log(error.message);
        },
    }), haveAccessTo = _c[0], isAllowed = _c[1].data;
    useEffect(function () {
        var _a;
        if (ENV !== "development" &&
            ENV !== "staging" &&
            ENV !== "production" && ((_a = rest.location) === null || _a === void 0 ? void 0 : _a.pathname)) {
            var currentPath = rest.location.pathname.split("/");
            var tempResource = undefined;
            if ((currentPath === null || currentPath === void 0 ? void 0 : currentPath.length) >= 3) {
                tempResource = currentPath.pop();
            }
            haveAccessTo({
                variables: {
                    isAdmin: true,
                    IDs: [account.ID],
                    specs: [
                        {
                            action: handlerObjectKey(ROUTE_BY_PLAN, handlerPathname(currentPath.filter(function (x) { return x; }))) || "/",
                            resource: tempResource || "",
                        },
                    ],
                },
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // check current environment
    // uncoment when ready
    // const isAuthenticated: boolean =
    //   ENV === "development" ? true : Boolean(isAllowed);
    // Remove when ready
    var isAuthenticated = ENV === "development" || ENV === "staging" ? true : modes.includes(mode);
    return (React.createElement(Route, __assign({}, rest, { render: function (props) {
            return isAuthenticated ? React.createElement(Component, __assign({}, props)) : React.createElement(ErrorPage, null);
        } })));
};
export default PriusRouter;
/**
 * @description convert url path to FeatureTypes
 * @param object
 * @param value
 */
export var handlerObjectKey = function (object, value) {
    return Object.keys(object).find(function (key) { return object[key] === value; });
};
