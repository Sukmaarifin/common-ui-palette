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
import PriusPaper from "../PriusPaper";
describe("PriusPaper Testing", function () {
    var mountComponent = function (props) {
        return mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusPaper, __assign({}, props), "Hello from PriusPaper!")));
    };
    it("add padding class", function () {
        var wrapper = mountComponent({ padding: "largeSquare" });
        expect(wrapper
            .find("PriusPaper")
            .childAt(0)
            .hasClass(/-(largeSquare)-(\d+)/)).toBe(true);
    });
    it("add rounded class", function () {
        var wrapper = mountComponent({ rounded: true });
        expect(wrapper
            .find("PriusPaper")
            .childAt(0)
            .hasClass(/-(rounded)-(\d+)/)).toBe(true);
    });
    it("render with custom component", function () {
        var wrapper = mountComponent({ component: "section" });
        expect(wrapper.find("PriusPaper").childAt(0).is("section")).toBe(true);
    });
    it("render successfully", function () {
        var wrapper = mountComponent({});
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
