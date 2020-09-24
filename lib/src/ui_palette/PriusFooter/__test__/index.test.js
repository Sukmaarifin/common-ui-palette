import React from "react";
import { mount } from "enzyme";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../styles/material-ui-theme";
import PriusFooter from "../index";
describe("PriusFooter Testing", function () {
    var buttonClick = jest.fn();
    var wrapper = mount(React.createElement(ThemeProvider, { theme: theme },
        React.createElement(PriusFooter, null,
            React.createElement("button", { onClick: buttonClick }, "Click here"))));
    it("render successfully", function () {
        expect(wrapper.find("PriusFooter")).toBeTruthy();
    });
    it("simulates click children component", function () {
        wrapper.find(PriusFooter).find("button").simulate("click");
        expect(wrapper.find(PriusFooter).find("button").prop("onClick")).toHaveBeenCalled();
    });
});
