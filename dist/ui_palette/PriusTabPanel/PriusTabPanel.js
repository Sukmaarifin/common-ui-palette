"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
function PriusTabPanel(_a) {
    var value = _a.value, index = _a.index, children = _a.children, _b = _a.p, p = _b === void 0 ? 3 : _b;
    return (react_1.default.createElement("div", { role: "tabpanel", hidden: value !== index, id: "prius-tabpanel-" + index, "aria-labelledby": "simple-tab-" + index }, value === index && react_1.default.createElement(core_1.Box, { p: p }, children)));
}
exports.default = PriusTabPanel;
