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
import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import PriusAddColumn from "../PriusAddColumn";
describe("Prius add column test", function () {
    var render = function () {
        var props = {
            inputElement: React.createElement("input", { type: "text", placeholder: "masukkan" }),
            removeIcon: React.createElement("span", null, "delete"),
            onChangeValue: jest.fn(),
        };
        return mount(React.createElement(PriusAddColumn, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(toJSON(wrapper)).toMatchSnapshot();
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
            inputElement: (React.createElement(React.Fragment, null,
                React.createElement("select", { name: "carlist", form: "carform" },
                    React.createElement("option", { value: "" }, "Choose"),
                    React.createElement("option", { value: "volvo" }, "Volvo"),
                    React.createElement("option", { value: "saab" }, "Saab"),
                    React.createElement("option", { value: "opel" }, "Opel"),
                    React.createElement("option", { value: "audi" }, "Audi")),
                React.createElement("input", { type: "text", placeholder: "masukkan" }))),
            removeIcon: React.createElement("span", null, "delete"),
            onChangeValue: jest.fn(),
        };
        return mount(React.createElement(PriusAddColumn, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = renderMultipleColumn();
        expect(toJSON(wrapper)).toMatchSnapshot();
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
