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
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../../styles/material-ui-theme";
import PriusOption from "../PriusOption";
import { DownloadIcon, TrashBinIcon } from "../../../icons";
describe("PriusOption Testing", function () {
    var render = function () {
        var menuData = [
            {
                disabled: true,
                iconLeft: React.createElement(DownloadIcon, null),
                title: "Download",
                tooltipText: "Download feature is not ready yet!",
            },
            {
                disabled: false,
                iconLeft: React.createElement(TrashBinIcon, null),
                title: "Delete",
                onClick: jest.fn(),
            },
        ];
        var props = {
            icon: "vertical",
            items: menuData,
        };
        return shallow(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusOption, __assign({}, props))));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
