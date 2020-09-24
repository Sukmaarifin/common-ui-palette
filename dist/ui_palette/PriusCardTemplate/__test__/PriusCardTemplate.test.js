"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var enzyme_1 = require("enzyme");
var PriusCardTemplate_1 = __importDefault(require("../PriusCardTemplate"));
describe("Template Testing", function () {
    var render = function () {
        var props = {
            imageSource: "https://cdn.shopify.com/s/files/1/1750/7921/products/19_Front.jpg?v=1559243865",
            title: "nama",
        };
        return enzyme_1.mount(react_1.default.createElement(PriusCardTemplate_1.default, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(wrapper.exists("PriusThumbnail")).toEqual(true);
        expect(wrapper.find("ForwardRef(Typography)").first().text()).toEqual("nama");
        wrapper.setProps({ description: "sku" });
        expect(wrapper.find("ForwardRef(Typography)").at(1).text()).toEqual("sku");
    });
});
