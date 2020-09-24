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
var index_1 = __importDefault(require("../index"));
var PriusIndicatorLabel_1 = require("../../PriusIndicatorLabel");
describe('PriusUploadFile Testing', function () {
    var render = function () {
        var props = {
            statusUpload: PriusIndicatorLabel_1.StatusUploadType.EMPTY,
            onUploadFile: jest.fn(),
        };
        return enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(index_1.default, __assign({}, props))));
    };
    it('render successfully', function () {
        var wrapper = render();
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    it('should call onMouseEnter()', function () {
        var wrapper = render();
        wrapper.find('#divFile').first().simulate('mouseenter');
        expect(wrapper.find('#divFile').first().prop('style')).toEqual({
            border: '1px dashed #1c9aea',
        });
    });
    it('should call onMouseLeave()', function () {
        var wrapper = render();
        wrapper.find('#divFile').first().simulate('mouseleave');
        expect(wrapper.find('#divFile').first().prop('style')).toEqual({
            border: '1px dashed #ececec',
        });
    });
    it('should call onDragStart()', function () {
        var wrapper = render();
        wrapper.find('#divFile').first().simulate('dragstart');
    });
    it('should call onDragOver()', function () {
        var wrapper = render();
        wrapper.find('#divFile').first().simulate('dragover');
    });
    it('should call onDrop()', function () {
        var wrapper = render();
        wrapper.find('#divFile').first().simulate('drop');
    });
    it('should call onDragEnd()', function () {
        var wrapper = render();
        wrapper.find('#divFile').first().simulate('dragend');
    });
});
