import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useDrag, useDrop } from "react-dnd";
import PriusThumbnail from "../PriusThumbnail";
import PriusOption from "../PriusOption";
import PriusPaper from "../PriusPaper";
import { camelize } from "../../helpers";
import { useStyles } from "./PriusCardDNDCss";
var dndType = {
    CARD: "card",
};
var PriusCardDND = function (_a) {
    var ID = _a.ID, text = _a.text, thumbnail = _a.thumbnail, index = _a.index, moveCard = _a.moveCard, _b = _a.published, published = _b === void 0 ? true : _b, secondaryText = _a.secondaryText, linkStyle = _a.linkStyle, URLEdit = _a.URLEdit, _c = _a.isSorted, isSorted = _c === void 0 ? false : _c, _d = _a.options, options = _d === void 0 ? [] : _d, handleOption = _a.handleOption, metaId = _a.metaId;
    var ref = useRef(null);
    var classes = useStyles();
    var _e = useDrop({
        accept: dndType.CARD,
        hover: function (item, monitor) {
            // Can't drag item if it is not dragable item
            if (!isSorted) {
                return;
            }
            if (!ref.current) {
                return;
            }
            var dragIndex = item.index;
            var hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            var hoverBoundingRect = ref.current.getBoundingClientRect();
            // Get vertical middle
            var hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            var clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            var hoverClientY = clientOffset
                ? clientOffset.y - hoverBoundingRect.top
                : 0;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    }), drop = _e[1];
    var _f = useDrag({
        item: { type: dndType.CARD, ID: ID, index: index },
        collect: function (monitor) { return ({
            isDragging: monitor.isDragging(),
        }); },
    }), isDragging = _f[0].isDragging, drag = _f[1];
    var opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    var cardOptions = options === null || options === void 0 ? void 0 : options.map(function (option) {
        return {
            itemId: "" + (metaId +
                (camelize(option).charAt(0).toUpperCase() +
                    camelize(option).substr(1)) +
                (camelize(text).charAt(0).toUpperCase() + camelize(text).substr(1))),
            title: option,
            onClick: function () {
                if (handleOption)
                    handleOption(option);
            },
        };
    });
    return (React.createElement(PriusPaper, { component: "li", padding: "noPadding", className: !published ? classes.unpublished : "" },
        React.createElement(Grid, { container: true, justify: "space-between", alignItems: "center", ref: ref, style: { opacity: opacity }, className: clsx(classes.container, isSorted ? classes.dragable : null) },
            thumbnail && (React.createElement(Grid, { item: true },
                React.createElement(PriusThumbnail, { imageSource: thumbnail, altText: text, size: "small" }))),
            React.createElement(Grid, { item: true, className: classes.item },
                React.createElement(Typography, null, URLEdit ? (React.createElement(Link, { className: classes.linkText, style: linkStyle, to: URLEdit, "data-identity": metaId && metaId + "-link-" + camelize(text) }, text)) : (text)),
                React.createElement(Typography, { variant: "body2" }, secondaryText)),
            cardOptions.length > 0 && (React.createElement(Grid, { item: true },
                React.createElement(PriusOption, { icon: "vertical", items: cardOptions }))))));
};
export default PriusCardDND;
