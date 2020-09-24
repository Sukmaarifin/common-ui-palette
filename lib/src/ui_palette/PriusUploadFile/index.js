import React, { useState } from "react";
import clsx from "clsx";
import { Grid } from "@material-ui/core";
import uploadIcon from "./UploadIcon.svg";
import PriusIndicatorLabel, { StatusUploadType } from "../PriusIndicatorLabel";
import { PriusUploadFileCss } from "./PriusUploadFileCss";
var PriusUploadFile = function (_a) {
    var onUploadFile = _a.onUploadFile, statusUpload = _a.statusUpload, className = _a.className, id = _a.id;
    var classes = PriusUploadFileCss();
    var greyBorder = "#ececec";
    var redBorder = "#e02020";
    var blueBorder = "#1c9aea";
    var _b = useState(false), isOnDrag = _b[0], setIsOnDrag = _b[1];
    var _c = useState(0), dragCounter = _c[0], setDragCounter = _c[1];
    var _d = useState(uploadIcon), iconFile = _d[0], setIconFile = _d[1];
    var _e = useState(null), file = _e[0], setFile = _e[1];
    var _f = useState(greyBorder), borderBox = _f[0], setBorderBox = _f[1];
    var boxColor = statusUpload === StatusUploadType.FAILED ? redBorder : borderBox;
    var handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    var handleDragIn = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(dragCounter + 1);
        if (e.dataTransfer &&
            e.dataTransfer.items &&
            e.dataTransfer.items.length > 0) {
            setIsOnDrag(true);
        }
    };
    var handleDragOut = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setDragCounter(dragCounter - 1);
        if (dragCounter === 0) {
            setIsOnDrag(false);
        }
    };
    var handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setIsOnDrag(false);
        if (e.dataTransfer && e.dataTransfer.files) {
            //only allow one file
            var fileData = e.dataTransfer.files[0];
            if (fileData) {
                onUploadFile(fileData);
                e.dataTransfer.clearData();
                setDragCounter(0);
                setFile(fileData);
                setIconFile("document");
            }
        }
    };
    var handleInputFile = function (e) {
        if (e.target.files) {
            var fileData = e.target.files[0];
            onUploadFile(fileData);
            setFile(fileData);
            setIconFile("document");
        }
    };
    var reUploadFile = function () {
        onUploadFile(file);
    };
    return (React.createElement(Grid, { container: true, id: "divFile", className: clsx(classes.box, className ? className : ""), draggable: isOnDrag, onDragStart: function (event) { return handleDragIn(event); }, onDragEnd: function (event) { return handleDragOut(event); }, onDragOver: function (event) { return handleDrag(event); }, onDrop: function (event) { return handleDrop(event); }, onMouseEnter: function () { return setBorderBox(blueBorder); }, onMouseLeave: function () { return setBorderBox(greyBorder); }, style: { border: "1px dashed " + boxColor } },
        React.createElement(Grid, { item: true, className: classes.input }, !file ? (React.createElement(React.Fragment, null,
            iconFile && (React.createElement("img", { className: classes.img, alt: "upload file", src: iconFile })),
            React.createElement(Grid, { item: true },
                React.createElement("label", null, "Tarik dan letakkan file disini atau "),
                React.createElement("label", { htmlFor: "files", className: classes.link }, "klik disini"),
                React.createElement("input", { className: classes.inputType, type: "file", id: "files", "data-identity": id && id + "-input-uploadFile", onChange: function (event) { return handleInputFile(event); } }),
                React.createElement("label", null, " untuk memilih file")))) : (React.createElement(PriusIndicatorLabel, { id: id, status: statusUpload, name: file.name, size: file.size, onRetry: reUploadFile, onDelete: function () {
                setIconFile(uploadIcon);
                setFile(null);
                setBorderBox("#ececec");
            } })))));
};
export default PriusUploadFile;
