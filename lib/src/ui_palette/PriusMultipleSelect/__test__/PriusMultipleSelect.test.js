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
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import theme from "../../../styles/material-ui-theme";
import PriusMultipleSelect from "../PriusMultipleSelect";
import PriusCreatableSelect from "../PriusCreatableSelect";
describe("PriusMultipleSelect Testing", function () {
    var customProps = {
        placeholder: "Pilih salah satu",
        options: [
            { label: "San Jose Sharks", value: "SJS", isDisabled: false },
            { label: "Vancouver Canucks", value: "VAN", isDisabled: false },
            { label: "Vegas Golden Knights", value: "VGK", isDisabled: false },
        ],
        onChange: jest.fn(),
    };
    var render = function (props) {
        return mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusMultipleSelect, __assign({}, props))));
    };
    it("render successfully", function () {
        var wrapper = render(customProps);
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it("render `Select` from `react-select`", function () {
        var wrapper = render(customProps);
        expect(wrapper.find(Select)).toHaveLength(1);
    });
    it("render `PriusCreatableSelect` that contain `CreatableSelect` from `react-select/creatable`", function () {
        var wrapper = render(__assign(__assign({}, customProps), { isCreatable: true }));
        var priusCreatableSelect = wrapper.find(PriusCreatableSelect);
        expect(priusCreatableSelect.find(CreatableSelect)).toHaveLength(1);
    });
});
