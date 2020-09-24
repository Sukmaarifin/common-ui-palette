/**
 * @todo
 * [ ] adjust storybook
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
import React from "react";
import clsx from "clsx";
import { Tab, Tabs } from "@material-ui/core";
import { useStyles } from "./PriusTabCss";
export var PriusTab = function (_a) {
    var activeTab = _a.activeTab, className = _a.className, onChange = _a.onChange, tabs = _a.tabs, id = _a.id, _b = _a.variant, variant = _b === void 0 ? "standard" : _b, props = __rest(_a, ["activeTab", "className", "onChange", "tabs", "id", "variant"]);
    var classes = useStyles();
    return (React.createElement(Tabs, __assign({ id: id && id + "-list-tab", "data-identity": id && id + "-list-tab", value: activeTab, className: clsx(classes.tabs, className, variant === "scrollable" ? classes.tabsScrollable : classes.tabsStandard), onChange: onChange, variant: variant, scrollButtons: variant === "scrollable" ? "on" : "off" }, props), tabs.map(function (item, index) { return (React.createElement(Tab, { id: id && "" + id + index + "-select-tab", "data-identity": id && "" + id + index + "-select-tab", key: index, label: item.text, disabled: item.disabled, icon: item === null || item === void 0 ? void 0 : item.icon })); })));
};
export default PriusTab;
