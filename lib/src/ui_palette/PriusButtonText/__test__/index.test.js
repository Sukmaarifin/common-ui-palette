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
import PriusButtonText from "../index";
describe("PriusButton Testing", function () {
    var render = function () {
        var props = {
            startIcon: React.createElement("span", null, "Some Icon"),
            endIcon: React.createElement("span", null, "Some Icon"),
            children: "Text",
            onClick: jest.fn(),
        };
        return mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusButtonText, __assign({}, props))));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
