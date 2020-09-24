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
import PriusDatePickerInput from "../index";
describe("PriusDatePickerInput Testing", function () {
    var render = function () {
        var props = {
            selectedDate: new Date(),
            onDayClick: jest.fn(),
        };
        return mount(React.createElement(PriusDatePickerInput, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(wrapper.exists("DayPickerInput")).toEqual(true);
    });
    it("simulates click", function () {
        var wrapper = render();
        wrapper.find("input").simulate("click");
        wrapper.find("Day").at(10).find("div").simulate("click");
        expect(wrapper.props().onDayClick).toHaveBeenCalled();
    });
});
