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
import SnackbarContext from "./SnackbarContext";
var withSnackbar = function (Component) { return function (props) {
    return (React.createElement(SnackbarContext.Consumer, null, function (snackbar) { return React.createElement(Component, __assign({ snackbar: snackbar }, props)); }));
}; };
export default withSnackbar;
