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
import PriusCircularProgress from "../index";
describe("PriusCircularProgress Testing", function () {
    var customProps = {
        isWithText: true,
        size: 20,
    };
    var render = function (props) {
        return mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusCircularProgress, __assign({}, props))));
    };
    it("render successfully without props", function () {
        var wrapper = render();
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it("render with props", function () {
        var wrapper = render(customProps);
        expect(wrapper.text()).toEqual("Memuat . . .");
    });
});
