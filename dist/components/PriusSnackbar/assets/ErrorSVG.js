"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.ErrorSVG = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.width, width = _c === void 0 ? '16' : _c, _d = _a.height, height = _d === void 0 ? '16' : _d;
    return (react_1.default.createElement("svg", { className: className, width: width, height: height, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("rect", { width: width, height: height, rx: "2", fill: "#DD3628" }),
        react_1.default.createElement("path", { d: "M3 8H13", stroke: "white", strokeWidth: "2" })));
};
