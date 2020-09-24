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
var material_ui_theme_1 = __importDefault(require("../../../../styles/material-ui-theme"));
var FieldStatus_1 = __importDefault(require("../FieldStatus"));
describe('FieldStatus Testing', function () {
    var render = function () {
        // mock data for record
        var mockData = {
            id: '143',
            syncStatus: 'SUCCESS',
        };
        var props = {
            record: mockData,
            source: 'syncStatus',
        };
        return enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(FieldStatus_1.default, __assign({}, props))));
    };
    it('render successfully', function () {
        var wrapper = render();
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
