"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
exports.InfoSVG = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.width, width = _c === void 0 ? '16' : _c, _d = _a.height, height = _d === void 0 ? '16' : _d;
    return (react_1.default.createElement("svg", { className: className, width: width, height: height, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        react_1.default.createElement("rect", { width: width, height: height, rx: "2", fill: "#0088FF" }),
        react_1.default.createElement("path", { transform: "translate(5,3)", fillRule: "evenodd", clipRule: "evenodd", d: "M3.00028 2.71443C3.63146 2.71443 4.14314 2.20275 4.14314 1.57157C4.14314 0.940386 3.63146 0.428711 3.00028 0.428711C2.3691 0.428711 1.85742 0.940386 1.85742 1.57157C1.85742 2.20275 2.3691 2.71443 3.00028 2.71443Z", fill: "white" }),
        react_1.default.createElement("path", { transform: "translate(5,3)", fillRule: "evenodd", clipRule: "evenodd", d: "M4.14244 3.85718H0.713867V5.00003H1.85672V8.42861H0.713867V9.57146H5.2853V8.42861H4.14244V3.85718Z", fill: "white" })));
};
