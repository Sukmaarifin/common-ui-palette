"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var icons_1 = require("@material-ui/icons");
var clsx_1 = __importDefault(require("clsx"));
var icons_2 = require("../../icons");
var PriusIndicatorLabelCss_1 = require("./PriusIndicatorLabelCss");
var StatusUploadType;
(function (StatusUploadType) {
    StatusUploadType["UPLOAD"] = "UPLOAD";
    StatusUploadType["FAILED"] = "FAILED";
    StatusUploadType["DONE"] = "DONE";
    StatusUploadType["EMPTY"] = "EMPTY";
})(StatusUploadType = exports.StatusUploadType || (exports.StatusUploadType = {}));
var PriusIndicatorLabel = function (_a) {
    var status = _a.status, name = _a.name, size = _a.size, onRetry = _a.onRetry, onDelete = _a.onDelete, id = _a.id;
    var classes = PriusIndicatorLabelCss_1.PriusIdicatorLabelCss();
    var isError = status === StatusUploadType.FAILED;
    var isUploading = status === StatusUploadType.UPLOAD;
    return (react_1.default.createElement("div", { className: clsx_1.default(classes.container, isError ? classes.failed : null) },
        react_1.default.createElement("div", { className: classes.content },
            name,
            react_1.default.createElement("span", { className: isError ? classes.errrorDescription : classes.description }, isError
                ? "Upload Gagal"
                : (size && (size / 1024 / 1024).toPrecision(1)) + " MB"),
            react_1.default.createElement("span", { className: classes.icon },
                isError && (react_1.default.createElement(icons_1.Refresh, { onClick: function () { return !!onRetry && onRetry(); }, className: classes.refreshIcon, "data-identity": id && id + "-button-retry}" })),
                react_1.default.createElement(core_1.IconButton, { onClick: function () { return !!onDelete && onDelete(); }, className: classes.closeIcon, "data-identity": id && id + "-button-delete}" },
                    react_1.default.createElement(icons_2.CloseIcon, { color: "disabled" })))),
        isUploading && (react_1.default.createElement("div", { style: { width: "100%" } },
            react_1.default.createElement(core_1.LinearProgress, { style: { width: "100%" } })))));
};
exports.default = PriusIndicatorLabel;
