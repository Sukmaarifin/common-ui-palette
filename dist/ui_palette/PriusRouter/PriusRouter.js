"use strict";
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
var react_router_dom_1 = require("react-router-dom");
var react_hooks_1 = require("@apollo/react-hooks");
var ErrorPage_1 = __importDefault(require("./ErrorPage"));
var PriusNavigationBar_1 = require("../PriusNavigationBar");
var PriusSSSO_1 = require("../PriusSSSO");
var graphql_1 = require("../../graphql");
var types_1 = require("./types");
var configs_1 = require("../../configs");
var PriusRouter = function (_a) {
    var Component = _a.component, modes = _a.modes, rest = __rest(_a, ["component", "modes"]);
    var _b = react_1.useContext(PriusSSSO_1.TenantContext), account = _b.account, mode = _b.mode;
    // check which feature has access to by ID
    var _c = react_hooks_1.useLazyQuery(graphql_1.GET_ACCESS_TO, {
        fetchPolicy: "cache-and-network",
        // remove when isAllowed used
        onCompleted: function () {
            console.log(isAllowed);
        },
        onError: function (error) {
            console.log(error.message);
        },
    }), haveAccessTo = _c[0], isAllowed = _c[1].data;
    react_1.useEffect(function () {
        var _a;
        if (configs_1.ENV !== "development" &&
            configs_1.ENV !== "staging" &&
            configs_1.ENV !== "production" && ((_a = rest.location) === null || _a === void 0 ? void 0 : _a.pathname)) {
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
                            action: exports.handlerObjectKey(types_1.ROUTE_BY_PLAN, PriusNavigationBar_1.handlerPathname(currentPath.filter(function (x) { return x; }))) || "/",
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
    var isAuthenticated = configs_1.ENV === "development" || configs_1.ENV === "staging" ? true : modes.includes(mode);
    return (react_1.default.createElement(react_router_dom_1.Route, __assign({}, rest, { render: function (props) {
            return isAuthenticated ? react_1.default.createElement(Component, __assign({}, props)) : react_1.default.createElement(ErrorPage_1.default, null);
        } })));
};
exports.default = PriusRouter;
/**
 * @description convert url path to FeatureTypes
 * @param object
 * @param value
 */
exports.handlerObjectKey = function (object, value) {
    return Object.keys(object).find(function (key) { return object[key] === value; });
};
