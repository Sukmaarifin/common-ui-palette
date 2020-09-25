"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var UploadIcon_svg_1 = __importDefault(require("./UploadIcon.svg"));
var PriusIndicatorLabel_1 = __importStar(require("../PriusIndicatorLabel"));
var PriusFileUploaderCss_1 = require("./PriusFileUploaderCss");
var PriusFileUploader = function (_a) {
    var onUploadFile = _a.onUploadFile, statusUpload = _a.statusUpload, className = _a.className, id = _a.id;
    var classes = PriusFileUploaderCss_1.PriusFileUploaderCss();
    var greyBorder = '#ececec';
    var redBorder = '#e02020';
    var blueBorder = '#1c9aea';
    var _b = react_1.useState(false), isOnDrag = _b[0], setIsOnDrag = _b[1];
    var _c = react_1.useState(0), dragCounter = _c[0], setDragCounter = _c[1];
    var _d = react_1.useState(UploadIcon_svg_1.default), iconFile = _d[0], setIconFile = _d[1];
    var _e = react_1.useState(null), file = _e[0], setFile = _e[1];
    var _f = react_1.useState(greyBorder), borderBox = _f[0], setBorderBox = _f[1];
    var boxColor = statusUpload === PriusIndicatorLabel_1.StatusUploadType.FAILED ? redBorder : borderBox;
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
                setIconFile('document');
            }
        }
    };
    var handleInputFile = function (e) {
        if (e.target.files) {
            var fileData = e.target.files[0];
            onUploadFile(fileData);
            setFile(fileData);
            setIconFile('document');
        }
    };
    var reUploadFile = function () {
        onUploadFile(file);
    };
    return (react_1.default.createElement(core_1.Grid, { container: true, id: "divFile", className: clsx_1.default(classes.box, className ? className : ''), draggable: isOnDrag, onDragStart: function (event) { return handleDragIn(event); }, onDragEnd: function (event) { return handleDragOut(event); }, onDragOver: function (event) { return handleDrag(event); }, onDrop: function (event) { return handleDrop(event); }, onMouseEnter: function () { return setBorderBox(blueBorder); }, onMouseLeave: function () { return setBorderBox(greyBorder); }, style: { border: "1px dashed " + boxColor } },
        react_1.default.createElement(core_1.Grid, { item: true, className: classes.input }, !file ? (react_1.default.createElement(react_1.default.Fragment, null,
            iconFile && (react_1.default.createElement("img", { className: classes.img, alt: "upload file", src: iconFile })),
            react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement("label", null, "Tarik dan letakkan file disini atau "),
                react_1.default.createElement("label", { htmlFor: "files", className: classes.link }, "klik disini"),
                react_1.default.createElement("input", { className: classes.inputType, type: "file", id: "files", "data-identity": id && id + "-input-uploadFile", onChange: function (event) { return handleInputFile(event); } }),
                react_1.default.createElement("label", null, " untuk memilih file")))) : (react_1.default.createElement(PriusIndicatorLabel_1.default, { id: id, status: statusUpload, name: file.name, size: file.size, onRetry: reUploadFile, onDelete: function () {
                setIconFile(UploadIcon_svg_1.default);
                setFile(null);
                setBorderBox('#ececec');
            } })))));
};
exports.default = PriusFileUploader;
