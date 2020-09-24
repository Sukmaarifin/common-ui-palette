import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import { MenuItem } from "@material-ui/core";
import theme from "../../../styles/material-ui-theme";
import PriusSelect from "../PriusSelect";
describe("PriusSelect test", function () {
    var wrapper = mount(React.createElement(ThemeProvider, { theme: theme },
        React.createElement(PriusSelect, { name: "currency", id: "input-currency", placeholder: "Lorem ipsum color dolot", value: "usd" },
            React.createElement(MenuItem, { value: "usd" }, "United States Dollar"),
            React.createElement(MenuItem, { value: "idr" }, "Indonesian Rupiah"),
            React.createElement(MenuItem, { value: "jpy", disabled: true }, "Japanese Yen"))));
    it("renders without error", function () {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
