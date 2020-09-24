import React, { useRef } from "react";
import clsx from "clsx";
import PriusCircularProgress from "../PriusCircularProgress";
import { TrashBinOutlinedIcon } from "../../icons";
import { useSnackbar } from "../PriusSnackbar";
import PriusThumbnail from "../PriusThumbnail";
import { useStyles } from "./PriusImageUploaderCss";
var PriusImageUploader = function (_a) {
    var altText = _a.altText, defaultSource = _a.defaultSource, source = _a.source, _b = _a.customSize, customSize = _b === void 0 ? "big" : _b, fileContent = _a.fileContent, id = _a.id, isError = _a.isError, onError = _a.onError, onDelete = _a.onDelete, onSubmit = _a.onSubmit, isLoading = _a.isLoading;
    var classes = useStyles();
    var snackbar = useSnackbar();
    var fileInput = useRef(null);
    var uploadProductImage = function (event) {
        var target = event.target;
        var file = target.files[0];
        if ((file === null || file === void 0 ? void 0 : file.type.indexOf("image")) !== -1) {
            try {
                if (fileContent && file.type) {
                    fileContent({
                        file: file,
                        contentType: file.type,
                    });
                }
                if (onSubmit)
                    onSubmit(event);
            }
            catch (e) {
                snackbar.show("Error: " + e.message, "error");
            }
        }
        else if (file.size > 2.5e6) {
            snackbar.show("Unggah Gambar Gagal", "error", true, "Ukuran file gambar yang ingin Anda unggah terlalu besar.");
        }
        else {
            snackbar.show("Invalid data type: limited to image only.", "error");
        }
    };
    var handlerKeyPress = function (event) {
        if (event.key === "Enter" && fileInput.current) {
            fileInput.current.click();
        }
    };
    return (React.createElement("div", null, isLoading ? (React.createElement(PriusCircularProgress, null)) : source ? (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.deleteContainer },
            React.createElement(TrashBinOutlinedIcon, { "data-identity": id && id + "-delete", className: classes.deleteButton, fontSize: "small", onClick: onDelete })),
        React.createElement(PriusThumbnail, { altText: altText, imageSource: source, size: customSize, onError: onError, className: isError ? classes.error : "" }))) : (React.createElement(React.Fragment, null,
        React.createElement("label", { tabIndex: 0, onKeyPress: function (event) {
                handlerKeyPress(event);
            }, htmlFor: id },
            React.createElement(PriusThumbnail, { defaultSource: defaultSource, altText: altText, className: clsx(classes.thumbnail, defaultSource && classes.container, isError ? classes.error : ""), imageSource: "", size: customSize })),
        React.createElement("input", { ref: fileInput, className: classes.uploader, "data-identity": id && id + "-upload", id: id, type: "file", accept: "image/*", onChange: function (event) { return uploadProductImage(event); } })))));
};
export default PriusImageUploader;
