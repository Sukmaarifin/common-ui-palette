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
var PriusAddColumn_1 = __importDefault(require("../PriusAddColumn"));
describe("Prius add column test", function () {
    var render = function () {
        var props = {
            inputElement: react_1.default.createElement("input", { type: "text", placeholder: "masukkan" }),
            removeIcon: react_1.default.createElement("span", null, "delete"),
            onChangeValue: jest.fn(),
        };
        return enzyme_1.mount(react_1.default.createElement(PriusAddColumn_1.default, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    it("input first value", function () {
        var wrapper = render();
        expect(wrapper.find("input").first().props().value).toBe("");
        wrapper
            .find("input")
            .first()
            .simulate("change", { target: { value: "test" } });
        expect(wrapper.find("input").first().props().value).toBe("test");
    });
    it("delete second value", function () {
        var wrapper = render();
        wrapper
            .find("input")
            .first()
            .simulate("change", { target: { value: "test" } });
        wrapper
            .find("input")
            .at(1)
            .simulate("change", { target: { value: "col2" } });
        wrapper.find("a").first().simulate("click");
        expect(wrapper.find("input").at(1).props().value).toBe("");
    });
    var renderMultipleColumn = function () {
        var props = {
            inputElement: (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("select", { name: "carlist", form: "carform" },
                    react_1.default.createElement("option", { value: "" }, "Choose"),
                    react_1.default.createElement("option", { value: "volvo" }, "Volvo"),
                    react_1.default.createElement("option", { value: "saab" }, "Saab"),
                    react_1.default.createElement("option", { value: "opel" }, "Opel"),
                    react_1.default.createElement("option", { value: "audi" }, "Audi")),
                react_1.default.createElement("input", { type: "text", placeholder: "masukkan" }))),
            removeIcon: react_1.default.createElement("span", null, "delete"),
            onChangeValue: jest.fn(),
        };
        return enzyme_1.mount(react_1.default.createElement(PriusAddColumn_1.default, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = renderMultipleColumn();
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    it("input first value", function () {
        var wrapper = renderMultipleColumn();
        expect(wrapper.find("select").first().props().value).toBe("");
        wrapper
            .find("select")
            .first()
            .simulate("change", { target: { value: "volvo" } });
        expect(wrapper.find("select").first().props().value).toBe("volvo");
        expect(wrapper.find("input").first().props().value).toBe("");
        wrapper
            .find("input")
            .first()
            .simulate("change", { target: { value: "test" } });
        expect(wrapper.find("input").first().props().value).toBe("test");
    });
    it("delete second value", function () {
        var wrapper = renderMultipleColumn();
        wrapper
            .find("select")
            .first()
            .simulate("change", { target: { value: "volvo" } });
        wrapper
            .find("input")
            .first()
            .simulate("change", { target: { value: "test" } });
        wrapper
            .find("select")
            .at(1)
            .simulate("change", { target: { value: "saab" } });
        wrapper
            .find("input")
            .at(1)
            .simulate("change", { target: { value: "test saab" } });
        wrapper.find("a").first().simulate("click");
        expect(wrapper.find("select").at(1).props().value).toBe("");
        expect(wrapper.find("input").at(1).props().value).toBe("");
    });
});
