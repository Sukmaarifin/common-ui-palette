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
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("@material-ui/core");
var clsx_1 = __importDefault(require("clsx"));
var react_dnd_1 = require("react-dnd");
var PriusThumbnail_1 = __importDefault(require("../PriusThumbnail"));
var PriusOption_1 = __importDefault(require("../PriusOption"));
var PriusPaper_1 = __importDefault(require("../PriusPaper"));
var helpers_1 = require("../../helpers");
var PriusCardDNDCss_1 = require("./PriusCardDNDCss");
var dndType = {
    CARD: 'card',
};
var PriusCardDND = function (_a) {
    var ID = _a.ID, text = _a.text, thumbnail = _a.thumbnail, index = _a.index, moveCard = _a.moveCard, _b = _a.published, published = _b === void 0 ? true : _b, secondaryText = _a.secondaryText, linkStyle = _a.linkStyle, URLEdit = _a.URLEdit, _c = _a.isSorted, isSorted = _c === void 0 ? false : _c, _d = _a.options, options = _d === void 0 ? [] : _d, handleOption = _a.handleOption, metaId = _a.metaId;
    var ref = react_1.useRef(null);
    var classes = PriusCardDNDCss_1.useStyles();
    var _e = react_dnd_1.useDrop({
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
    var _f = react_dnd_1.useDrag({
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
                (helpers_1.camelize(option).charAt(0).toUpperCase() +
                    helpers_1.camelize(option).substr(1)) +
                (helpers_1.camelize(text).charAt(0).toUpperCase() + helpers_1.camelize(text).substr(1))),
            title: option,
            onClick: function () {
                if (handleOption)
                    handleOption(option);
            },
        };
    });
    return (react_1.default.createElement(PriusPaper_1.default, { component: "li", padding: "noPadding", className: !published ? classes.unpublished : '' },
        react_1.default.createElement(core_1.Grid, { container: true, justify: "space-between", alignItems: "center", ref: ref, style: { opacity: opacity }, className: clsx_1.default(classes.container, isSorted ? classes.dragable : null) },
            thumbnail && (react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(PriusThumbnail_1.default, { imageSource: thumbnail, altText: text, size: "small" }))),
            react_1.default.createElement(core_1.Grid, { item: true, className: classes.item },
                react_1.default.createElement(core_1.Typography, null, URLEdit ? (react_1.default.createElement(react_router_dom_1.Link, { className: classes.linkText, style: linkStyle, to: URLEdit, "data-identity": metaId && metaId + "-link-" + helpers_1.camelize(text) }, text)) : (text)),
                react_1.default.createElement(core_1.Typography, { variant: "body2" }, secondaryText)),
            cardOptions.length > 0 && (react_1.default.createElement(core_1.Grid, { item: true },
                react_1.default.createElement(PriusOption_1.default, { icon: "vertical", items: cardOptions }))))));
};
exports.default = PriusCardDND;
