import React, { useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import { Grid, Typography } from "@material-ui/core";
import PriusThumbnail from "../PriusThumbnail";
import { useStyles } from "./PriusDraggableImageCss";
var dndType = {
    IMAGE: "image",
};
var PriusDraggableImage = function (_a) {
    var altText = _a.altText, imageSource = _a.imageSource, size = _a.size, onError = _a.onError, className = _a.className, index = _a.index, moveImage = _a.moveImage;
    var classes = useStyles();
    var ref = useRef(null);
    var _b = useDrop({
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
    var _c = useDrag({
        item: { type: dndType.IMAGE, index: index },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), isDragging = _c[0].isDragging, drag = _c[1];
    var opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (React.createElement(Grid, { ref: ref, style: { opacity: opacity }, className: classes.container },
        React.createElement(Grid, { id: "imageHover" },
            React.createElement(PriusThumbnail, { altText: altText, imageSource: imageSource, size: size, onError: onError, className: className })),
        React.createElement(Typography, { id: "hoverContent", variant: "body2", className: classes.onHover }, "Geser dan Urutkan")));
};
export default PriusDraggableImage;
