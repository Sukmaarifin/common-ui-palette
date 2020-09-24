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
import FieldImage from "../FieldImage";
describe("FieldImage test", function () {
    var props = {
        record: {
            image: "#some-link-to-image",
        },
        source: "image",
        altText: "Super awesome product image",
        size: "small",
    };
    var passedProps = {
        imageSource: "#some-link-to-image",
        altText: "Super awesome product image",
        size: "small",
    };
    // snapshot
    it("renders correctly", function () {
        var wrapper = mount(React.createElement(FieldImage, __assign({}, props)));
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    // snapshot
    it("renders PriusThumbnail with correct props", function () {
        var wrapper = mount(React.createElement(FieldImage, __assign({}, props)));
        expect(wrapper.find("PriusThumbnail").props()).toEqual(passedProps);
    });
});
