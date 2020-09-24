import React, { useState, useEffect, useRef } from "react";
import CKEditor from "ckeditor4-react";
import { Grid, createStyles, makeStyles } from "@material-ui/core";
import { useMutation } from "react-apollo";
import PriusCircularProgress from "../PriusCircularProgress";
import PriusButtonText from "../PriusButtonText";
import { useSnackbar } from "../PriusSnackbar";
import { StartupModeTypes } from "./types";
import { DEFAULT_EXTRA_PLUGINS, DEFAULT_HEIGHT, DEFAULT_TOOLBAR, } from "./constants";
import { UPLOAD_IMAGE } from "../../graphql";
var useStyle = makeStyles(function (theme) {
    return createStyles({
        uploadImageButton: {
            marginTop: 10,
            borderColor: theme.colors.primary,
            border: "1px solid " + theme.colors.primary,
            padding: "4px 20px",
            borderRadius: "3px",
            fontWeight: "bold",
            "&:hover": {
                backgroundColor: theme.colors.primary,
                color: theme.colors.white,
            },
        },
        imageUploader: {
            display: "none",
        },
    });
});
var PriusTextEditor = function (_a) {
    var data = _a.data, _b = _a.extraPlugins, extraPlugins = _b === void 0 ? DEFAULT_EXTRA_PLUGINS : _b, _c = _a.height, height = _c === void 0 ? DEFAULT_HEIGHT : _c, previousText = _a.previousText, _d = _a.readOnly, readOnly = _d === void 0 ? false : _d, setTheme = _a.setTheme, setHeight = _a.setHeight, _e = _a.startupMode, startupMode = _e === void 0 ? StartupModeTypes.WYSIWYG : _e, _f = _a.title, title = _f === void 0 ? "Text Editor" : _f, _g = _a.toolbar, toolbar = _g === void 0 ? DEFAULT_TOOLBAR : _g, uiColor = _a.uiColor, onBlur = _a.onBlur, onChange = _a.onChange;
    var _h = useState(), contentState = _h[0], setContentState = _h[1];
    var classes = useStyle();
    useEffect(function () {
        if (previousText) {
            setContentState(previousText);
        }
        else if (data) {
            setContentState(data);
        }
        else {
            setContentState("");
        }
    }, [previousText, data]);
    var _j = useMutation(UPLOAD_IMAGE), uploadImage = _j[0], _k = _j[1], called = _k.called, loading = _k.loading;
    var uploadImageToTextEditor = function (file) {
        uploadImage({
            variables: {
                input: {
                    file: file.file,
                    bucket: "PRIUS",
                    contentType: file.contentType,
                    uploadType: "TEXT_EDITOR_IMAGE",
                },
            },
        }).then(function (image) {
            setContentState(function (prevContent) { return prevContent === null || prevContent === void 0 ? void 0 : prevContent.concat("<img src=\"" + image.data.singleUpload.url + "\" width=\"auto\" height=\"auto\" />"); });
        });
    };
    var fileInput = useRef(null);
    var snackbar = useSnackbar();
    var uploadImageInput = function (event) {
        var target = event.target;
        var file = target.files[0];
        if ((file === null || file === void 0 ? void 0 : file.type.indexOf("image")) !== -1) {
            try {
                if (file.type) {
                    uploadImageToTextEditor({
                        file: file,
                        contentType: file.type,
                    });
                }
            }
            catch (e) {
                snackbar.show("Error: " + e.message, "error");
            }
        }
        else {
            snackbar.show("Invalid data type: limited to image only.", "error");
        }
    };
    var imageInputClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(CKEditor, { config: {
                extraPlugins: extraPlugins,
                height: setHeight || height,
                removeButtons: "Subscript, Superscript",
                resize_enabled: false,
                startupMode: startupMode,
                title: title,
                toolbar: toolbar,
                uiColor: setTheme || uiColor,
                enterMode: 2,
                //allow inline styling to pass content filtering
                allowedContent: {
                    //allow all elements to add inline styling
                    $1: {
                        elements: CKEditor.dtd,
                        attributes: true,
                        styles: true,
                    },
                },
                //filter script and embed styling
                disallowedContent: "script; *[on*]; style",
            }, data: contentState, disabled: true, readOnly: readOnly, onBlur: onBlur, onChange: onChange }),
        startupMode === StartupModeTypes.WYSIWYG && (React.createElement(Grid, { item: true },
            React.createElement(PriusButtonText, { color: "primary", onClick: imageInputClick, className: classes.uploadImageButton, inputId: "texteditor-input-image" }, loading && called ? (React.createElement(PriusCircularProgress, { size: 10, isWithText: false })) : ("Unggah Gambar")),
            !loading && (React.createElement("input", { ref: fileInput, className: classes.imageUploader, "data-identity": "texteditor-input-image", id: "texteditor-input-image", type: "file", accept: "image/*", onChange: function (event) { return uploadImageInput(event); } }))))));
};
export default PriusTextEditor;
