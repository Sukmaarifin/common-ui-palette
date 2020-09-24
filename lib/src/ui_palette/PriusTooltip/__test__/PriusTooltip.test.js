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
import PriusTooltip from "../PriusTooltip";
describe("Prius tooltip test", function () {
    var render = function () {
        var props = {
            children: React.createElement("button", null, "aku"),
            placement: "top",
            title: "Lorem ipsum",
        };
        return mount(React.createElement(PriusTooltip, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it("render with img props", function () {
        var preview = "default-user-img.jpg";
        var wrapper = mount(React.createElement(PriusTooltip, { children: React.createElement("button", null), placement: "top", title: "Lorem ipsum", img: preview }));
        expect(wrapper.prop("img")).toEqual(preview);
    });
});
