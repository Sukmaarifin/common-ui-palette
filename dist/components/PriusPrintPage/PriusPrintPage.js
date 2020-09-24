"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./priusPrintPage.css");
function PriusPrintPage(props) {
    var children = props.children;
    react_1.useEffect(function () {
        setTimeout(function () { return window.print(); }, 500);
    });
    return (react_1.default.createElement("div", { className: "bg" },
        react_1.default.createElement("div", { className: "page" }, children)));
}
exports.default = PriusPrintPage;
