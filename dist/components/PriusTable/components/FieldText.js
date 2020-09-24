"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var get_1 = __importDefault(require("lodash/get"));
var clsx_1 = __importDefault(require("clsx"));
var react_router_dom_1 = require("react-router-dom");
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var PriusTooltip_1 = __importDefault(require("../../PriusTooltip/PriusTooltip"));
var PriusBackdrop_1 = __importDefault(require("../../PriusBackdrop"));
var PriusLabel_1 = __importDefault(require("../../PriusLabel"));
var getByMaxHelpers_1 = require("../../../helpers/getByMaxHelpers");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    container: {
        alignSelf: 'center',
        padding: '0 0.8rem',
        '&.publish': {
            zIndex: 1,
        },
    },
    link: {
        color: theme.colors.primary,
        textDecoration: 'underline',
        cursor: 'pointer',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    textWithDescription: {
        display: 'grid',
        textAlign: 'start',
        zIndex: 1,
        position: 'relative',
    },
    description: {
        fontFamily: 'Metropolis',
        fontSize: '10px',
        color: '#898989',
    },
}); });
var TextField = function (_a) {
    var _b = _a.autoCapitalize, autoCapitalize = _b === void 0 ? true : _b, description = _a.description, fixedWidth = _a.fixedWidth, hrefPrefix = _a.hrefPrefix, _c = _a.hrefSource, hrefSource = _c === void 0 ? '' : _c, _d = _a.hrefSourceParent, hrefSourceParent = _d === void 0 ? '' : _d, id = _a.id, notesBadge = _a.notesBadge, record = _a.record, source = _a.source, style = _a.style, tooltipText = _a.tooltipText, width = _a.width, maxIndex = _a.maxIndex;
    var text = get_1.default(record, source);
    var href = get_1.default(record, hrefSource);
    var hrefParent = get_1.default(record, hrefSourceParent);
    var tooltip = tooltipText ? get_1.default(record, tooltipText) : null;
    var descriptionText = description ? get_1.default(record, description) : null;
    var classes = useStyles();
    var isSimpleText = source && !description;
    var isTextWithDescription = source && description;
    /**
     * render component text only
     */
    var convertText = function () {
        var shownText = Array.isArray(text)
            ? getByMaxHelpers_1.getByMaxIndex(text, maxIndex || text.length).text
            : text;
        return hrefPrefix && href ? (react_1.default.createElement(react_router_dom_1.Link, { "data-identity": id && id + "-link-" + href, to: {
                pathname: hrefParent
                    ? hrefPrefix + "/" + hrefParent.toLowerCase() + "/" + href
                    : hrefPrefix + "/" + href,
                state: { record: record },
            }, className: classes.link }, shownText)) : (react_1.default.createElement("span", { style: {
                textTransform: autoCapitalize ? 'capitalize' : 'none',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
            } }, shownText));
    };
    /**
     * render component PriusLabel if only received notesBadge props
     */
    var isNotesBadge = function () {
        if (notesBadge) {
            if (!notesBadge.backdropData)
                return (react_1.default.createElement(PriusLabel_1.default, { text: notesBadge.text, theme: notesBadge.theme ? notesBadge.theme : undefined, type: notesBadge.type ? notesBadge.type : undefined, size: notesBadge.size ? notesBadge.size : undefined }));
            else
                return (react_1.default.createElement(PriusBackdrop_1.default, { placement: "right-start", popperId: "prius-backdrop", renderTrigger: function (anchorRef, handleToggle) { return (react_1.default.createElement("span", { "data-identity": id && id + "-span-openBackdrop", ref: anchorRef, onClick: handleToggle },
                        react_1.default.createElement(PriusLabel_1.default, { text: notesBadge.text, theme: notesBadge.theme ? notesBadge.theme : undefined, type: notesBadge.type ? notesBadge.type : undefined, size: notesBadge.size ? notesBadge.size : undefined, style: { cursor: 'pointer' } }))); } }, notesBadge.backdropData));
        }
    };
    /**
     * render component if only received text and/or notesBadge props
     */
    var renderSimpleText = function () {
        if (isSimpleText && !notesBadge)
            return convertText();
        else if (isSimpleText && notesBadge)
            return (react_1.default.createElement("div", { style: { zIndex: 1 } },
                convertText(),
                isNotesBadge()));
    };
    /**
     * render component if only received text, description, and/or notesBadge props
     */
    var renderTextWithDescription = function () {
        if (isTextWithDescription && !notesBadge)
            return (react_1.default.createElement("div", { className: classes.textWithDescription },
                convertText(),
                react_1.default.createElement("span", { className: classes.description }, descriptionText)));
        else if (isTextWithDescription && notesBadge)
            return (react_1.default.createElement("div", { className: classes.textWithDescription },
                react_1.default.createElement("div", { style: { zIndex: 1 } },
                    convertText(),
                    isNotesBadge()),
                react_1.default.createElement("span", { className: classes.description }, descriptionText)));
    };
    return (react_1.default.createElement(core_1.Grid, { item: true, className: clsx_1.default(classes.container, hrefPrefix && href ? 'publish' : null), style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1, maxWidth: fixedWidth ? fixedWidth : width, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }) }, tooltipText ? (react_1.default.createElement(PriusTooltip_1.default, { placement: "top", title: Array.isArray(tooltip)
            ? getByMaxHelpers_1.getByMaxIndex(tooltip, maxIndex || tooltip.length).tooltipText
            : tooltip },
        react_1.default.createElement("div", { style: { display: 'inline-flex' } },
            renderSimpleText(),
            renderTextWithDescription()))) : (react_1.default.createElement(react_1.default.Fragment, null,
        renderSimpleText(),
        renderTextWithDescription()))));
};
exports.default = TextField;
