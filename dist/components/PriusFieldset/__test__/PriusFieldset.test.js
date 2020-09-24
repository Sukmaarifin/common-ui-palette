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
var PriusFieldset_1 = __importDefault(require("../PriusFieldset"));
var PriusTooltip_1 = __importDefault(require("../../PriusTooltip"));
var icons_1 = require("../../../icons");
describe('PriusFieldset test', function () {
    var wrapper = enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
        react_1.default.createElement(PriusFieldset_1.default, { label: "Email", inputId: "input-email", tooltipText: "Halo", status: "success", helperText: "Lorem ipsum color dolot" },
            react_1.default.createElement("span", { id: "children" }, "Children"))));
    it('renders without error', function () {
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    it('render InputLabel if `label` is provided', function () {
        expect(wrapper.find(core_1.InputLabel)).toHaveLength(1);
    });
    it('render PriusTooltip if `tooltipText` is provided', function () {
        expect(wrapper.find(PriusTooltip_1.default)).toHaveLength(1);
    });
    it('render FormHelperText if `helperText` is provided', function () {
        expect(wrapper.find(core_1.FormHelperText)).toHaveLength(1);
    });
    it("render correct components if `status` is 'success'", function () {
        // FormControl has className of 'success'
        var className = wrapper.find(core_1.FormControl).prop('className') || '';
        expect(className.indexOf('success')).not.toEqual(-1);
        // HelperText contains CheckCircleOutlinedIcon
        expect(wrapper.find(core_1.FormHelperText).find(icons_1.CheckCircleOutlinedIcon)).toHaveLength(1);
    });
    it("render correct components if `status` is 'error'", function () {
        var wrapper2 = enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(PriusFieldset_1.default, { label: "Email", inputId: "input-email", tooltipText: "Halo", status: "error", helperText: "Lorem ipsum color dolot" },
                react_1.default.createElement("span", { id: "children" }, "Children"))));
        // FormControl has `error` props of `true`
        expect(wrapper2.find(core_1.FormControl).prop('error')).toEqual(true);
        // HelperText contains ExclamationCircleOutlinedIcon
        expect(wrapper2.find(core_1.FormHelperText).find(icons_1.ExclamationCircleOutlinedIcon)).toHaveLength(1);
    });
});
