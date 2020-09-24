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
var react_select_1 = __importDefault(require("react-select"));
var creatable_1 = __importDefault(require("react-select/creatable"));
var material_ui_theme_1 = __importDefault(require("../../../styles/material-ui-theme"));
var PriusMultipleSelect_1 = __importDefault(require("../PriusMultipleSelect"));
var PriusCreatableSelect_1 = __importDefault(require("../PriusCreatableSelect"));
describe('PriusMultipleSelect Testing', function () {
    var customProps = {
        placeholder: 'Pilih salah satu',
        options: [
            { label: 'San Jose Sharks', value: 'SJS', isDisabled: false },
            { label: 'Vancouver Canucks', value: 'VAN', isDisabled: false },
            { label: 'Vegas Golden Knights', value: 'VGK', isDisabled: false },
        ],
        onChange: jest.fn(),
    };
    var render = function (props) {
        return enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(PriusMultipleSelect_1.default, __assign({}, props))));
    };
    it('render successfully', function () {
        var wrapper = render(customProps);
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    it('render `Select` from `react-select`', function () {
        var wrapper = render(customProps);
        expect(wrapper.find(react_select_1.default)).toHaveLength(1);
    });
    it('render `PriusCreatableSelect` that contain `CreatableSelect` from `react-select/creatable`', function () {
        var wrapper = render(__assign(__assign({}, customProps), { isCreatable: true }));
        var priusCreatableSelect = wrapper.find(PriusCreatableSelect_1.default);
        expect(priusCreatableSelect.find(creatable_1.default)).toHaveLength(1);
    });
});
