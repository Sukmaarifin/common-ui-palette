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
var ckeditor4_react_1 = __importDefault(require("ckeditor4-react"));
var core_1 = require("@material-ui/core");
var react_apollo_1 = require("react-apollo");
var PriusCircularProgress_1 = __importDefault(require("../PriusCircularProgress"));
var PriusButtonText_1 = __importDefault(require("../PriusButtonText"));
var PriusSnackbar_1 = require("../PriusSnackbar");
var types_1 = require("./types");
var constants_1 = require("./constants");
var graphql_1 = require("../../graphql");
var useStyle = core_1.makeStyles(function (theme) {
    return core_1.createStyles({
        uploadImageButton: {
            marginTop: 10,
            borderColor: theme.colors.primary,
            border: "1px solid " + theme.colors.primary,
            padding: '4px 20px',
            borderRadius: '3px',
            fontWeight: 'bold',
            '&:hover': {
                backgroundColor: theme.colors.primary,
                color: theme.colors.white,
            },
        },
        imageUploader: {
            display: 'none',
        },
    });
});
var PriusTextEditor = function (_a) {
    var data = _a.data, _b = _a.extraPlugins, extraPlugins = _b === void 0 ? constants_1.DEFAULT_EXTRA_PLUGINS : _b, _c = _a.height, height = _c === void 0 ? constants_1.DEFAULT_HEIGHT : _c, previousText = _a.previousText, _d = _a.readOnly, readOnly = _d === void 0 ? false : _d, setTheme = _a.setTheme, setHeight = _a.setHeight, _e = _a.startupMode, startupMode = _e === void 0 ? types_1.StartupModeTypes.WYSIWYG : _e, _f = _a.title, title = _f === void 0 ? 'Text Editor' : _f, _g = _a.toolbar, toolbar = _g === void 0 ? constants_1.DEFAULT_TOOLBAR : _g, uiColor = _a.uiColor, onBlur = _a.onBlur, onChange = _a.onChange;
    var _h = react_1.useState(), contentState = _h[0], setContentState = _h[1];
    var classes = useStyle();
    react_1.useEffect(function () {
        if (previousText) {
            setContentState(previousText);
        }
        else if (data) {
            setContentState(data);
        }
        else {
            setContentState('');
        }
    }, [previousText, data]);
    var _j = react_apollo_1.useMutation(graphql_1.UPLOAD_IMAGE), uploadImage = _j[0], _k = _j[1], called = _k.called, loading = _k.loading;
    var uploadImageToTextEditor = function (file) {
        uploadImage({
            variables: {
                input: {
                    file: file.file,
                    bucket: 'PRIUS',
                    contentType: file.contentType,
                    uploadType: 'TEXT_EDITOR_IMAGE',
                },
            },
        }).then(function (image) {
            setContentState(function (prevContent) { return prevContent === null || prevContent === void 0 ? void 0 : prevContent.concat("<img src=\"" + image.data.singleUpload.url + "\" width=\"auto\" height=\"auto\" />"); });
        });
    };
    var fileInput = react_1.useRef(null);
    var snackbar = PriusSnackbar_1.useSnackbar();
    var uploadImageInput = function (event) {
        var target = event.target;
        var file = target.files[0];
        if ((file === null || file === void 0 ? void 0 : file.type.indexOf('image')) !== -1) {
            try {
                if (file.type) {
                    uploadImageToTextEditor({
                        file: file,
                        contentType: file.type,
                    });
                }
            }
            catch (e) {
                snackbar.show("Error: " + e.message, 'error');
            }
        }
        else {
            snackbar.show('Invalid data type: limited to image only.', 'error');
        }
    };
    var imageInputClick = function () {
        if (fileInput.current) {
            fileInput.current.click();
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(ckeditor4_react_1.default, { config: {
                extraPlugins: extraPlugins,
                height: setHeight || height,
                removeButtons: 'Subscript, Superscript',
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
                        elements: ckeditor4_react_1.default.dtd,
                        attributes: true,
                        styles: true,
                    },
                },
                //filter script and embed styling
                disallowedContent: 'script; *[on*]; style',
            }, data: contentState, disabled: true, readOnly: readOnly, onBlur: onBlur, onChange: onChange }),
        startupMode === types_1.StartupModeTypes.WYSIWYG && (react_1.default.createElement(core_1.Grid, { item: true },
            react_1.default.createElement(PriusButtonText_1.default, { color: "primary", onClick: imageInputClick, className: classes.uploadImageButton, inputId: "texteditor-input-image" }, loading && called ? (react_1.default.createElement(PriusCircularProgress_1.default, { size: 10, isWithText: false })) : ('Unggah Gambar')),
            !loading && (react_1.default.createElement("input", { ref: fileInput, className: classes.imageUploader, "data-identity": "texteditor-input-image", id: "texteditor-input-image", type: "file", accept: "image/*", onChange: function (event) { return uploadImageInput(event); } }))))));
};
exports.default = PriusTextEditor;
