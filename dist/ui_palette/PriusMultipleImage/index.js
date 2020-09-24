"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var icons_1 = require("../../icons");
var PriusDraggableImage_1 = __importDefault(require("../PriusDraggableImage"));
var useStyles = core_1.makeStyles(function (theme) { return ({
    image: {
        display: "block",
        objectFit: "cover",
    },
    small: {
        width: "2.5rem",
        height: "2.5rem",
    },
    medium: {
        width: "4rem",
        height: "4rem",
    },
    big: {
        width: "5rem",
        height: "5rem",
    },
    deleteContainer: {
        position: "absolute",
        zIndex: 5,
        transform: "translate(460%, 20%)",
        backgroundColor: theme.colors.white,
        width: "0.92rem",
        borderRadius: "50%",
    },
    deleteButton: {
        cursor: "pointer",
        marginLeft: "0.13rem",
        padding: "0.06rem",
    },
    error: {
        borderColor: theme.colors.failed,
    },
    middle: {
        transition: ".5s ease",
        opacity: 0,
        zIndex: 2,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
    },
    onHover: {
        transform: "translate(0, 60%)",
        zIndex: 999,
        position: "absolute",
        width: "min-content",
        fontWeight: "bold",
        paddingLeft: "1.3rem",
        textAlign: "center",
    },
}); });
var MultipleImage = function (_a) {
    var className = _a.className, _b = _a.isDeletable, isDeletable = _b === void 0 ? false : _b, images = _a.images, onError = _a.onError, handleChange = _a.handleChange, handleDelete = _a.handleDelete, _c = _a.size, size = _c === void 0 ? "medium" : _c, md = _a.md, sm = _a.sm, isError = _a.isError;
    var classes = useStyles();
    var moveImage = function (dragIndex, hoverIndex) {
        var _a;
        if (images) {
            var temp = images;
            _a = [temp[hoverIndex], temp[dragIndex]], temp[dragIndex] = _a[0], temp[hoverIndex] = _a[1];
            handleChange(temp);
        }
    };
    //given any, because the original type is JSX.Element[] and it needs some requirement
    var displayedImages = images.map(function (image, index) { return (react_1.default.createElement(core_1.Grid, { item: true, md: md, sm: sm, style: {
            marginBottom: "1em",
            marginRight: "0.5rem",
        }, key: index },
        isDeletable && (react_1.default.createElement("div", { className: classes.deleteContainer },
            react_1.default.createElement(icons_1.TrashBinOutlinedIcon, { className: classes.deleteButton, fontSize: 'small', onClick: function () {
                    if (handleDelete)
                        handleDelete(image);
                } }))),
        react_1.default.createElement("div", { className: clsx_1.default(classes[size], className && className) },
            react_1.default.createElement(PriusDraggableImage_1.default, { altText: "image of products", imageSource: image, size: size, onError: onError, className: isError ? classes.error : "", index: index, moveImage: moveImage })))); });
    return displayedImages;
};
exports.default = MultipleImage;
