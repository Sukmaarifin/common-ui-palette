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
import PriusThumbnail from "..";
describe("PriusThumbnail test", function () {
    var props = {
        imageSource: "#some-cool-image.jpg",
        altText: "Indonesia",
        size: "small",
    };
    // snapshot
    it("renders correctly", function () {
        var wrapper = mount(React.createElement(PriusThumbnail, __assign({}, props)));
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
});
