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
import Template from "../PriusCardTemplate";
describe("Template Testing", function () {
    var render = function () {
        var props = {
            imageSource: "https://cdn.shopify.com/s/files/1/1750/7921/products/19_Front.jpg?v=1559243865",
            title: "nama",
        };
        return mount(React.createElement(Template, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(wrapper.exists("PriusThumbnail")).toEqual(true);
        expect(wrapper.find("ForwardRef(Typography)").first().text()).toEqual("nama");
        wrapper.setProps({ description: "sku" });
        expect(wrapper.find("ForwardRef(Typography)").at(1).text()).toEqual("sku");
    });
});
