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
import FieldNumber from "../FieldNumber";
describe("FieldNumber test", function () {
    var THRESHOLDED_COLOR = "red";
    var props = {
        record: {
            stock: 1,
        },
        source: "stock",
        threshold: 2,
        thresholdedColor: THRESHOLDED_COLOR,
    };
    // snapshot
    it("renders correctly", function () {
        var wrapper = mount(React.createElement(FieldNumber, __assign({}, props)));
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    // threshold
    it("render number with the correct color", function () {
        var wrapper = mount(React.createElement(FieldNumber, __assign({}, props)));
        expect(wrapper.find("span").props().style).toEqual({
            color: THRESHOLDED_COLOR,
        });
        wrapper = mount(React.createElement(FieldNumber, __assign({}, props, { threshold: 0 })));
        expect(wrapper.find("span").props().style).toEqual({ color: "inherit" });
    });
});
