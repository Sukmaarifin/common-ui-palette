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
import { shallow, mount } from "enzyme";
import toJSON from "enzyme-to-json";
import PriusBackdrop from "..";
describe("PriusBackdrop test", function () {
    var props = {
        popperId: "dummy_prius_popper",
        placement: "bottom-start",
        renderTrigger: function (anchorRef, handleToggle) { return (React.createElement("button", { ref: anchorRef, onClick: handleToggle, "aria-describedby": "dummy_prius_popper" }, "Toggle Popper")); },
    };
    // snapshot
    it("renders correctly", function () {
        var wrapper = mount(React.createElement(PriusBackdrop, __assign({}, props), "Lorem ipsum, dolor sit amet consectetur"));
        expect(toJSON(wrapper)).toMatchSnapshot();
    });
    it("renders trigger button with its aria atribute", function () {
        var wrapper = shallow(React.createElement(PriusBackdrop, __assign({}, props), "Hello, I am popping up!"));
        expect(wrapper.find('button[aria-describedby="dummy_prius_popper"]').first()).toHaveLength(1);
    });
});
