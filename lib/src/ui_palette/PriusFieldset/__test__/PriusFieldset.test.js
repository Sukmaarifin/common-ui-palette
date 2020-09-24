import React from "react";
import { mount } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import { InputLabel, FormControl, FormHelperText } from "@material-ui/core";
import theme from "../../../styles/material-ui-theme";
import PriusFieldset from "../PriusFieldset";
import PriusTooltip from "../../PriusTooltip";
import { CheckCircleOutlinedIcon, ExclamationCircleOutlinedIcon, } from "../../../icons";
describe("PriusFieldset test", function () {
    var wrapper = mount(React.createElement(ThemeProvider, { theme: theme },
        React.createElement(PriusFieldset, { label: "Email", inputId: "input-email", tooltipText: "Halo", status: "success", helperText: "Lorem ipsum color dolot" },
            React.createElement("span", { id: "children" }, "Children"))));
    it("renders without error", function () {
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it("render InputLabel if `label` is provided", function () {
        expect(wrapper.find(InputLabel)).toHaveLength(1);
    });
    it("render PriusTooltip if `tooltipText` is provided", function () {
        expect(wrapper.find(PriusTooltip)).toHaveLength(1);
    });
    it("render FormHelperText if `helperText` is provided", function () {
        expect(wrapper.find(FormHelperText)).toHaveLength(1);
    });
    it("render correct components if `status` is 'success'", function () {
        // FormControl has className of 'success'
        var className = wrapper.find(FormControl).prop("className") || "";
        expect(className.indexOf("success")).not.toEqual(-1);
        // HelperText contains CheckCircleOutlinedIcon
        expect(wrapper.find(FormHelperText).find(CheckCircleOutlinedIcon)).toHaveLength(1);
    });
    it("render correct components if `status` is 'error'", function () {
        var wrapper2 = mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusFieldset, { label: "Email", inputId: "input-email", tooltipText: "Halo", status: "error", helperText: "Lorem ipsum color dolot" },
                React.createElement("span", { id: "children" }, "Children"))));
        // FormControl has `error` props of `true`
        expect(wrapper2.find(FormControl).prop("error")).toEqual(true);
        // HelperText contains ExclamationCircleOutlinedIcon
        expect(wrapper2.find(FormHelperText).find(ExclamationCircleOutlinedIcon)).toHaveLength(1);
    });
});
