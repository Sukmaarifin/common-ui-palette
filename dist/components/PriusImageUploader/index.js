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
var PriusCircularProgress_1 = __importDefault(require("../PriusCircularProgress"));
var icons_1 = require("../../icons");
var PriusSnackbar_1 = require("../PriusSnackbar");
var PriusThumbnail_1 = __importDefault(require("../PriusThumbnail"));
var PriusImageUploaderCss_1 = require("./PriusImageUploaderCss");
var PriusImageUploader = function (_a) {
    var altText = _a.altText, defaultSource = _a.defaultSource, source = _a.source, _b = _a.customSize, customSize = _b === void 0 ? 'big' : _b, fileContent = _a.fileContent, id = _a.id, isError = _a.isError, onError = _a.onError, onDelete = _a.onDelete, onSubmit = _a.onSubmit, isLoading = _a.isLoading;
    var classes = PriusImageUploaderCss_1.useStyles();
    var snackbar = PriusSnackbar_1.useSnackbar();
    var fileInput = react_1.useRef(null);
    var uploadProductImage = function (event) {
        var target = event.target;
        var file = target.files[0];
        if ((file === null || file === void 0 ? void 0 : file.type.indexOf('image')) !== -1) {
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
                snackbar.show("Error: " + e.message, 'error');
            }
        }
        else if (file.size > 2.5e6) {
            snackbar.show('Unggah Gambar Gagal', 'error', true, 'Ukuran file gambar yang ingin Anda unggah terlalu besar.');
        }
        else {
            snackbar.show('Invalid data type: limited to image only.', 'error');
        }
    };
    var handlerKeyPress = function (event) {
        if (event.key === 'Enter' && fileInput.current) {
            fileInput.current.click();
        }
    };
    return (react_1.default.createElement("div", null, isLoading ? (react_1.default.createElement(PriusCircularProgress_1.default, null)) : source ? (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: classes.deleteContainer },
            react_1.default.createElement(icons_1.TrashBinOutlinedIcon, { "data-identity": id && id + "-delete", className: classes.deleteButton, fontSize: "small", onClick: onDelete })),
        react_1.default.createElement(PriusThumbnail_1.default, { altText: altText, imageSource: source, size: customSize, onError: onError, className: isError ? classes.error : '' }))) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("label", { tabIndex: 0, onKeyPress: function (event) {
                handlerKeyPress(event);
            }, htmlFor: id },
            react_1.default.createElement(PriusThumbnail_1.default, { defaultSource: defaultSource, altText: altText, className: clsx_1.default(classes.thumbnail, defaultSource && classes.container, isError ? classes.error : ''), imageSource: '', size: customSize })),
        react_1.default.createElement("input", { ref: fileInput, className: classes.uploader, "data-identity": id && id + "-upload", id: id, type: "file", accept: "image/*", onChange: function (event) { return uploadProductImage(event); } })))));
};
exports.default = PriusImageUploader;
