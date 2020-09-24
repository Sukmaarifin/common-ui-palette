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
var react_dnd_1 = require("react-dnd");
var core_1 = require("@material-ui/core");
var PriusThumbnail_1 = __importDefault(require("../PriusThumbnail"));
var PriusDraggableImageCss_1 = require("./PriusDraggableImageCss");
var dndType = {
    IMAGE: "image",
};
var PriusDraggableImage = function (_a) {
    var altText = _a.altText, imageSource = _a.imageSource, size = _a.size, onError = _a.onError, className = _a.className, index = _a.index, moveImage = _a.moveImage;
    var classes = PriusDraggableImageCss_1.useStyles();
    var ref = react_1.useRef(null);
    var _b = react_dnd_1.useDrop({
        accept: dndType.IMAGE,
        hover: function (item, monitor) {
            if (!ref.current) {
                return;
            }
            var dragIndex = item.index;
            var hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            var hoverBoundingRect = ref.current.getBoundingClientRect();
            // Get horizontal middle
            var hoverMiddleX = (hoverBoundingRect.right - hoverBoundingRect.left) / 2;
            // Determine mouse position
            var clientOffset = monitor.getClientOffset();
            // Get pixels to the left
            var hoverClientX = clientOffset
                ? clientOffset.x - hoverBoundingRect.left
                : 0;
            // Only perform the move when the mouse has crossed half of the items width
            // dragging to the right
            if (dragIndex < hoverIndex && hoverClientX < hoverMiddleX) {
                return;
            }
            // dragging to the left
            if (dragIndex > hoverIndex && hoverClientX > hoverMiddleX) {
                return;
            }
            // Perform the action
            moveImage(dragIndex, hoverIndex);
            // mutating the monitor item
            item.index = hoverIndex;
        },
    }), drop = _b[1];
    var _c = react_dnd_1.useDrag({
        item: { type: dndType.IMAGE, index: index },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), isDragging = _c[0].isDragging, drag = _c[1];
    var opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (react_1.default.createElement(core_1.Grid, { ref: ref, style: { opacity: opacity }, className: classes.container },
        react_1.default.createElement(core_1.Grid, { id: "imageHover" },
            react_1.default.createElement(PriusThumbnail_1.default, { altText: altText, imageSource: imageSource, size: size, onError: onError, className: className })),
        react_1.default.createElement(core_1.Typography, { id: "hoverContent", variant: "body2", className: classes.onHover }, "Geser dan Urutkan")));
};
exports.default = PriusDraggableImage;
