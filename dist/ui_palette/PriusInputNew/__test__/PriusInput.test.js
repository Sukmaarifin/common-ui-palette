"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
var styles_1 = require("@material-ui/core/styles");
var material_ui_theme_1 = __importDefault(require("../../../styles/material-ui-theme"));
var PriusInput_1 = __importDefault(require("../PriusInput"));
describe("PriusInput test", function () {
    it("renders without error", function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(PriusInput_1.default, null)));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
