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
var styles_1 = require("@material-ui/core/styles");
var material_ui_theme_1 = __importDefault(require("../../../styles/material-ui-theme"));
var PriusCard_1 = __importDefault(require("../PriusCard"));
var icons_1 = require("../../../icons");
describe('PriusCard Testing', function () {
    var mockProps = {
        icon: react_1.default.createElement(icons_1.AddCircleIcon, null),
        title: 'Tambah',
        desc: 'Klik disini untuk menambah',
    };
    it('render with required props', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(PriusCard_1.default, __assign({}, mockProps))));
        expect(wrapper.containsMatchingElement(react_1.default.createElement("div", { className: "makeStyles-title-7" }, "Tambah"))).toBeTruthy();
    });
    it('render with label Coming Soon', function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(PriusCard_1.default, __assign({ label: "Coming Soon" }, mockProps))));
        expect(wrapper.find('PriusLabel').first().text()).toStrictEqual('Coming Soon');
    });
    it('render with onClick function', function () {
        var mockFunction = function () { return alert('card clicked'); };
        jest.spyOn(window, 'alert').mockImplementation(function () { });
        var wrapper = enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(PriusCard_1.default, __assign({ onClick: mockFunction }, mockProps))));
        // user simulate click on PriusCard
        wrapper.simulate('click');
        expect(window.alert).toBeCalledWith('card clicked');
    });
});
