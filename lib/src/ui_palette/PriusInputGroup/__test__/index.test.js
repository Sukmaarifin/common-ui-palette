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
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../styles/material-ui-theme";
import PriusInputGroup from "../index";
import { ArrowRightIcon } from "../../../icons";
describe("InputDropdwon Testing", function () {
    var render = function () {
        var props = {
            dropdownIcon: ArrowRightIcon,
            valueDropdown: "JNE",
            valueInput: "90",
            placeholder: "Masukkan no. Resi",
            dropdownItem: ["JNE", "TIKI"],
            handleInput: jest.fn(),
            handleDropdown: jest.fn(),
        };
        return mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusInputGroup, __assign({}, props))));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
