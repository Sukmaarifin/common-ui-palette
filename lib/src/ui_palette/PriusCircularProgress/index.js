import React from "react";
import { CircularProgress } from "@material-ui/core";
export function PriusCircularProgress(_a) {
    var _b = _a.isWithText, isWithText = _b === void 0 ? true : _b, _c = _a.size, size = _c === void 0 ? 50 : _c, style = _a.style, _d = _a.className, className = _d === void 0 ? "" : _d;
    return (React.createElement("div", { style: { textAlign: "center" } },
        React.createElement(CircularProgress, { size: size, style: style, className: className }),
        isWithText ? React.createElement("div", null, "Memuat . . .") : null));
}
export default PriusCircularProgress;
