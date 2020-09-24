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
var enzyme_to_json_1 = __importDefault(require("enzyme-to-json"));
var PriusTooltip_1 = __importDefault(require("../PriusTooltip"));
describe("Prius tooltip test", function () {
    var render = function () {
        var props = {
            children: react_1.default.createElement("button", null, "aku"),
            placement: "top",
            title: "Lorem ipsum",
        };
        return enzyme_1.mount(react_1.default.createElement(PriusTooltip_1.default, __assign({}, props)));
    };
    it("render successfully", function () {
        var wrapper = render();
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    it("render with img props", function () {
        var preview = "default-user-img.jpg";
        var wrapper = enzyme_1.mount(react_1.default.createElement(PriusTooltip_1.default, { children: react_1.default.createElement("button", null), placement: "top", title: "Lorem ipsum", img: preview }));
        expect(wrapper.prop("img")).toEqual(preview);
    });
});
