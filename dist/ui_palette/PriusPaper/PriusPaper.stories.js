"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PriusPaper_1 = __importDefault(require("./PriusPaper"));
exports.default = {
    component: PriusPaper_1.default,
    title: "Components|PriusPaper",
};
exports.basic = function () { return (react_1.default.createElement(PriusPaper_1.default, { component: "section", padding: "largeSquare", rounded: true }, "In iaculis nunc sed augue lacus viverra vitae congue eu consequat ac felis donec. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat. Vitae congue eu consequat ac felis donec et odio pellentesque diam volutpat commodo sed. Massa tincidunt dui ut ornare lectus sit amet est placerat in egestas erat imperdiet. Sit amet porttitor eget dolor morbi non arcu risus quis varius quam quisque id.")); };
