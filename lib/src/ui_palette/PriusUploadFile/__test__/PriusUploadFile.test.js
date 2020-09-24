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
import PriusUploadFile from "../index";
import { StatusUploadType } from "../../PriusIndicatorLabel";
describe("PriusUploadFile Testing", function () {
    var render = function () {
        var props = {
            statusUpload: StatusUploadType.EMPTY,
            onUploadFile: jest.fn(),
        };
        return mount(React.createElement(ThemeProvider, { theme: theme },
            React.createElement(PriusUploadFile, __assign({}, props))));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it("should call onMouseEnter()", function () {
        var wrapper = render();
        wrapper.find("#divFile").first().simulate("mouseenter");
        expect(wrapper.find("#divFile").first().prop("style")).toEqual({
            border: "1px dashed #1c9aea",
        });
    });
    it("should call onMouseLeave()", function () {
        var wrapper = render();
        wrapper.find("#divFile").first().simulate("mouseleave");
        expect(wrapper.find("#divFile").first().prop("style")).toEqual({
            border: "1px dashed #ececec",
        });
    });
    it("should call onDragStart()", function () {
        var wrapper = render();
        wrapper.find("#divFile").first().simulate("dragstart");
    });
    it("should call onDragOver()", function () {
        var wrapper = render();
        wrapper.find("#divFile").first().simulate("dragover");
    });
    it("should call onDrop()", function () {
        var wrapper = render();
        wrapper.find("#divFile").first().simulate("drop");
    });
    it("should call onDragEnd()", function () {
        var wrapper = render();
        wrapper.find("#divFile").first().simulate("dragend");
    });
});
