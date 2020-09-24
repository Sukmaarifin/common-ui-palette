"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
var material_ui_theme_1 = __importDefault(require("../../../styles/material-ui-theme"));
var PriusSelect_1 = __importDefault(require("../PriusSelect"));
describe("PriusSelect test", function () {
    var wrapper = enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
        react_1.default.createElement(PriusSelect_1.default, { name: "currency", id: "input-currency", placeholder: "Lorem ipsum color dolot", value: "usd" },
            react_1.default.createElement(core_1.MenuItem, { value: "usd" }, "United States Dollar"),
            react_1.default.createElement(core_1.MenuItem, { value: "idr" }, "Indonesian Rupiah"),
            react_1.default.createElement(core_1.MenuItem, { value: "jpy", disabled: true }, "Japanese Yen"))));
    it("renders without error", function () {
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
