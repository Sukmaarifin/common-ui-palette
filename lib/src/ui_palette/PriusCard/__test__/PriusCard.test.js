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
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../styles/material-ui-theme";
import PriusCard from "../index";
import { AddCircleIcon } from "../../../icons";
describe("PriusCard Testing", function () {
    var mockProps = {
        icon: React.createElement(AddCircleIcon, null),
        title: "Tambah",
        desc: "Klik disini untuk menambah",
    };
    it("render with required props", function () {
        var wrapper = mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusCard, __assign({}, mockProps))));
        expect(wrapper.containsMatchingElement(React.createElement("div", { className: "makeStyles-title-7" }, "Tambah"))).toBeTruthy();
    });
    it("render with label Coming Soon", function () {
        var wrapper = mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusCard, __assign({ label: "Coming Soon" }, mockProps))));
        expect(wrapper.find("PriusLabel").first().text()).toStrictEqual("Coming Soon");
    });
    it("render with onClick function", function () {
        var mockFunction = function () { return alert("card clicked"); };
        jest.spyOn(window, "alert").mockImplementation(function () { });
        var wrapper = mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusCard, __assign({ onClick: mockFunction }, mockProps))));
        // user simulate click on PriusCard
        wrapper.simulate("click");
        expect(window.alert).toBeCalledWith("card clicked");
    });
});
