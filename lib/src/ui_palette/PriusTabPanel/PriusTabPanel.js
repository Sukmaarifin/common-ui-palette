import React from "react";
import { Box } from "@material-ui/core";
export default function PriusTabPanel(_a) {
    var value = _a.value, index = _a.index, children = _a.children, _b = _a.p, p = _b === void 0 ? 3 : _b;
    return (React.createElement("div", { role: "tabpanel", hidden: value !== index, id: "prius-tabpanel-" + index, "aria-labelledby": "simple-tab-" + index }, value === index && React.createElement(Box, { p: p }, children)));
}
