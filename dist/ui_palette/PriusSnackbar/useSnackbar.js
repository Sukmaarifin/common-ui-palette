"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SnackbarContext_1 = __importDefault(require("./SnackbarContext"));
var useSnackbar = function () {
    return react_1.useContext(SnackbarContext_1.default);
};
exports.default = useSnackbar;
