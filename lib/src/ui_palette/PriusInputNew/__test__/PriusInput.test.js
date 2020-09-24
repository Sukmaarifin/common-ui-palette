import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../styles/material-ui-theme";
import PriusInput from "../PriusInput";
describe("PriusInput test", function () {
    it("renders without error", function () {
        var wrapper = mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusInput, null)));
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
