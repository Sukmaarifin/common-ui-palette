"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var PriusTabCss_1 = require("./PriusTabCss");
exports.PriusTab = function (_a) {
    var activeTab = _a.activeTab, className = _a.className, onChange = _a.onChange, tabs = _a.tabs, id = _a.id, _b = _a.variant, variant = _b === void 0 ? "standard" : _b, props = __rest(_a, ["activeTab", "className", "onChange", "tabs", "id", "variant"]);
    var classes = PriusTabCss_1.useStyles();
    return (react_1.default.createElement(core_1.Tabs, __assign({ id: id && id + "-list-tab", "data-identity": id && id + "-list-tab", value: activeTab, className: clsx_1.default(classes.tabs, className, variant === "scrollable" ? classes.tabsScrollable : classes.tabsStandard), onChange: onChange, variant: variant, scrollButtons: variant === "scrollable" ? "on" : "off" }, props), tabs.map(function (item, index) { return (react_1.default.createElement(core_1.Tab, { id: id && "" + id + index + "-select-tab", "data-identity": id && "" + id + index + "-select-tab", key: index, label: item.text, disabled: item.disabled, icon: item === null || item === void 0 ? void 0 : item.icon })); })));
};
exports.default = exports.PriusTab;
