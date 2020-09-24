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
var FieldText_1 = __importDefault(require("./FieldText"));
describe('FieldText Testing', function () {
    var render = function () {
        // mock data for record
        var mockData = {
            name: 'contoh nama',
            id: '143',
            images: [
                'https://picsum.photos/id/8/720/480',
                'https://picsum.photos/id/17/720/480',
                'https://picsum.photos/id/26/720/480',
                'https://picsum.photos/id/31/720/480',
                'https://picsum.photos/id/48/720/480',
            ],
            syncStatus: 'SUCCESS',
        };
        var props = {
            record: mockData,
            source: 'name',
        };
        return enzyme_1.mount(react_1.default.createElement(styles_1.ThemeProvider, { theme: material_ui_theme_1.default },
            react_1.default.createElement(FieldText_1.default, __assign({}, props))));
    };
    it('render successfully', function () {
        var wrapper = render();
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    // it("render text with tooltip", () => {
    //   const wrapper = render();
    //   wrapper.setProps({ tooltipText: "Tooltip, Cuy!" });
    //   wrapper.update();
    //   console.log(wrapper.debug())
    //   expect(wrapper.find("PriusTooltip").exists()).toBeTruthy();
    //   expect(wrapper.find("PriusTooltip").prop("title")).toEqual("Tooltip, Cuy!");
    // });
    // it("render text with description props", () => {
    //   const wrapper = render();
    //   wrapper.setProps({ description: "id" });
    //   expect(typeof wrapper.prop("description")).toEqual("string");
    //   expect(
    //     wrapper
    //       .find("span")
    //       .at(1)
    //       .text()
    //   ).toEqual("143");
    // });
    // it("render text with description and notesBadge props", () => {
    //   const wrapper = render();
    //   wrapper.setProps({
    //     description: "id",
    //     notesBadge: { text: "notes", backdropData: "contoh notes" }
    //   });
    //   expect(typeof wrapper.prop("notesBadge")).toEqual("object");
    //   expect(wrapper.find("PriusLabel").exists()).toBeTruthy();
    //   expect(wrapper.find("PriusLabel").prop("text")).toEqual("notes");
    // });
    // it("simulates on click", () => {
    //   const wrapper = render();
    //   wrapper.setProps({
    //     description: "id",
    //     notesBadge: { text: "notes", backdropData: "contoh notes" },
    //     onClick: jest.fn()
    //   });
    //   const titleProduct = wrapper.find("span").first();
    //   titleProduct.simulate("click");
    //   expect(titleProduct.text()).toEqual("contoh nama");
    //   expect(wrapper.prop("onClick")).toBeCalled();
    // });
});
