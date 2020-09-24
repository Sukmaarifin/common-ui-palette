"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
var styles_1 = require("@material-ui/core/styles");
var material_ui_theme_1 = __importDefault(require("../../../styles/material-ui-theme"));
var PriusPaper_1 = __importDefault(require("../PriusPaper"));
describe("PriusPaper Testing", function () {
    var mountComponent = function (props) {
        return enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(PriusPaper_1.default, __assign({}, props), "Hello from PriusPaper!")));
    };
    it("add padding class", function () {
        var wrapper = mountComponent({ padding: "largeSquare" });
        expect(wrapper
            .find("PriusPaper")
            .childAt(0)
            .hasClass(/-(largeSquare)-(\d+)/)).toBe(true);
    });
    it("add rounded class", function () {
        var wrapper = mountComponent({ rounded: true });
        expect(wrapper
            .find("PriusPaper")
            .childAt(0)
            .hasClass(/-(rounded)-(\d+)/)).toBe(true);
    });
    it("render with custom component", function () {
        var wrapper = mountComponent({ component: "section" });
        expect(wrapper.find("PriusPaper").childAt(0).is("section")).toBe(true);
    });
    it("render successfully", function () {
        var wrapper = mountComponent({});
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
