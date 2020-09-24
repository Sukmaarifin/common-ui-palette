"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var PriusTable_1 = __importDefault(require("../PriusTable"));
function ShadowPriusTable(props) {
    return react_1.default.createElement(PriusTable_1.default, __assign({}, props));
}
exports.default = ShadowPriusTable;
