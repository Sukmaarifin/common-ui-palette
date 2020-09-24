"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
function PriusCircularProgress(_a) {
    var _b = _a.isWithText, isWithText = _b === void 0 ? true : _b, _c = _a.size, size = _c === void 0 ? 50 : _c, style = _a.style, _d = _a.className, className = _d === void 0 ? '' : _d;
    return (react_1.default.createElement("div", { style: { textAlign: 'center' } },
        react_1.default.createElement(core_1.CircularProgress, { size: size, style: style, className: className }),
        isWithText ? react_1.default.createElement("div", null, "Memuat . . .") : null));
}
exports.PriusCircularProgress = PriusCircularProgress;
exports.default = PriusCircularProgress;
