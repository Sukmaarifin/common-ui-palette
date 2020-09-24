import React from "react";
import { IconButton, LinearProgress } from "@material-ui/core";
import { Refresh } from "@material-ui/icons";
import cslx from "clsx";
import { CloseIcon } from "../../icons";
import { PriusIdicatorLabelCss } from "./PriusIndicatorLabelCss";
export var StatusUploadType;
(function (StatusUploadType) {
    StatusUploadType["UPLOAD"] = "UPLOAD";
    StatusUploadType["FAILED"] = "FAILED";
    StatusUploadType["DONE"] = "DONE";
    StatusUploadType["EMPTY"] = "EMPTY";
})(StatusUploadType || (StatusUploadType = {}));
var PriusIndicatorLabel = function (_a) {
    var status = _a.status, name = _a.name, size = _a.size, onRetry = _a.onRetry, onDelete = _a.onDelete, id = _a.id;
    var classes = PriusIdicatorLabelCss();
    var isError = status === StatusUploadType.FAILED;
    var isUploading = status === StatusUploadType.UPLOAD;
    return (React.createElement("div", { className: cslx(classes.container, isError ? classes.failed : null) },
        React.createElement("div", { className: classes.content },
            name,
            React.createElement("span", { className: isError ? classes.errrorDescription : classes.description }, isError
                ? "Upload Gagal"
                : (size && (size / 1024 / 1024).toPrecision(1)) + " MB"),
            React.createElement("span", { className: classes.icon },
                isError && (React.createElement(Refresh, { onClick: function () { return !!onRetry && onRetry(); }, className: classes.refreshIcon, "data-identity": id && id + "-button-retry}" })),
                React.createElement(IconButton, { onClick: function () { return !!onDelete && onDelete(); }, className: classes.closeIcon, "data-identity": id && id + "-button-delete}" },
                    React.createElement(CloseIcon, { color: "disabled" })))),
        isUploading && (React.createElement("div", { style: { width: "100%" } },
            React.createElement(LinearProgress, { style: { width: "100%" } })))));
};
export default PriusIndicatorLabel;
