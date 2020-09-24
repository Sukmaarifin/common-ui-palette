"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function OrderSVG(_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.fill, fill = _c === void 0 ? "#FFFFFF" : _c, _d = _a.width, width = _d === void 0 ? "21" : _d, _e = _a.height, height = _e === void 0 ? "21" : _e;
    return (react_1.default.createElement("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 21 21", xmlSpace: "preserve", className: className, width: width, height: height },
        react_1.default.createElement("g", { id: "proses-massal" },
            react_1.default.createElement("g", { id: "sidemenu", transform: "translate(-20.000000, -161.000000)" },
                react_1.default.createElement("g", null,
                    react_1.default.createElement("g", { id: "menu", transform: "translate(9.000000, 60.000000)" },
                        react_1.default.createElement("g", { id: "pesanan", transform: "translate(11.000000, 101.000000)" },
                            react_1.default.createElement("g", { id: "inactive_pesanan" },
                                react_1.default.createElement("polygon", { id: "Path", style: { opacity: 0.5, fill: fill }, points: "15.2,9 18.1,4 5,4 7.6,9 \t\t\t\t\t\t" }),
                                react_1.default.createElement("path", { id: "Shape", style: { fill: fill }, d: "M15.3,11.7c0.8,0,1.5-0.4,1.8-1.1l3.8-6.9C21.3,3,20.8,2.1,20,2.1H4.4L3.4,0H0v2.1h2.1\n         l3.8,8.1l-1.4,2.6C3.7,14.3,4.7,16,6.3,16h12.6v-2.1H6.3l1.2-2.1H15.3z M5,4h13l-3,5H7.5L5,4z M6,17c-1.1,0-2,0.9-2,2\n         s0.9,2,2,2s2-0.9,2-2S7.1,17,6,17z M17,17c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S18.1,17,17,17z" })))))))));
}
exports.default = OrderSVG;
