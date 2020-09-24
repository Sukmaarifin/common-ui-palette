"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var styles_1 = require("@material-ui/core/styles");
var material_ui_theme_1 = __importDefault(require("../../../styles/material-ui-theme"));
var index_1 = __importDefault(require("../index"));
describe("PriusFooter Testing", function () {
    var buttonClick = jest.fn();
    var wrapper = enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
        react_1.default.createElement(index_1.default, null,
            react_1.default.createElement("button", { onClick: buttonClick }, "Click here"))));
    it("render successfully", function () {
        expect(wrapper.find("PriusFooter")).toBeTruthy();
    });
    it("simulates click children component", function () {
        wrapper.find(index_1.default).find("button").simulate("click");
        expect(wrapper.find(index_1.default).find("button").prop("onClick")).toHaveBeenCalled();
    });
});
