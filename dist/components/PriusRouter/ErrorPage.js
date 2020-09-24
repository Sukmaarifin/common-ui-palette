"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
function ErrorPage() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Typography, { variant: "h1", gutterBottom: true }, "Page Not Found"),
        react_1.default.createElement(core_1.Typography, { variant: "body1" }, "Sorry, the page you are looking for is not found.")));
}
exports.default = ErrorPage;
