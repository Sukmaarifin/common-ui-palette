"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var createSvgIcon_1 = __importDefault(require("@material-ui/icons/utils/createSvgIcon"));
exports.default = createSvgIcon_1.default(react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("rect", { fill: "inherit", x: "0", y: "0", width: "100%", height: "100%", rx: "2" }),
    react_1.default.createElement("rect", { id: "Rectangle", fill: "#444444", x: "4", y: "9", width: "13", height: "3", rx: "1" })), "CheckboxIndeterminate");
