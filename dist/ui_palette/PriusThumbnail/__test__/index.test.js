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
var __1 = __importDefault(require(".."));
describe("PriusThumbnail test", function () {
    var props = {
        imageSource: "#some-cool-image.jpg",
        altText: "Indonesia",
        size: "small",
    };
    // snapshot
    it("renders correctly", function () {
        var wrapper = enzyme_1.mount(react_1.default.createElement(__1.default, __assign({}, props)));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
