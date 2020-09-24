/**
 * According to [this issue](https://github.com/storybookjs/storybook/issues/8428),
 * the current version of @storybook/addon-docs is not supporting class component
 * so the type and docgen description of `PriusTable` wont appear via `Props`.
 *
 * In order to show the type and description of `PriusTable`,
 * we need wrap and reexport it as function component.
 * This hacky implementation still has a limitation which can't shows the docgen description
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import PriusTable from "../PriusTable";
function ShadowPriusTable(props) {
    return React.createElement(PriusTable, __assign({}, props));
}
export default ShadowPriusTable;
