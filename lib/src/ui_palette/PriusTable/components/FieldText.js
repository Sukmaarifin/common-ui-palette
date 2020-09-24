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
import React from "react";
import get from "lodash/get";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PriusTooltip from "../../PriusTooltip/PriusTooltip";
import PriusBackdrop from "../../PriusBackdrop";
import PriusLabel from "../../PriusLabel";
import { getByMaxIndex } from "../../../helpers/getByMaxHelpers";
var useStyles = makeStyles(function (theme) { return ({
    container: {
        alignSelf: "center",
        padding: "0 0.8rem",
        "&.publish": {
            zIndex: 1,
        },
    },
    link: {
        color: theme.colors.primary,
        textDecoration: "underline",
        cursor: "pointer",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    textWithDescription: {
        display: "grid",
        textAlign: "start",
        zIndex: 1,
        position: "relative",
    },
    description: {
        fontFamily: "Metropolis",
        fontSize: "10px",
        color: "#898989",
    },
}); });
var TextField = function (_a) {
    var _b = _a.autoCapitalize, autoCapitalize = _b === void 0 ? true : _b, description = _a.description, fixedWidth = _a.fixedWidth, hrefPrefix = _a.hrefPrefix, _c = _a.hrefSource, hrefSource = _c === void 0 ? "" : _c, _d = _a.hrefSourceParent, hrefSourceParent = _d === void 0 ? "" : _d, id = _a.id, notesBadge = _a.notesBadge, record = _a.record, source = _a.source, style = _a.style, tooltipText = _a.tooltipText, width = _a.width, maxIndex = _a.maxIndex;
    var text = get(record, source);
    var href = get(record, hrefSource);
    var hrefParent = get(record, hrefSourceParent);
    var tooltip = tooltipText ? get(record, tooltipText) : null;
    var descriptionText = description ? get(record, description) : null;
    var classes = useStyles();
    var isSimpleText = source && !description;
    var isTextWithDescription = source && description;
    /**
     * render component text only
     */
    var convertText = function () {
        var shownText = Array.isArray(text)
            ? getByMaxIndex(text, maxIndex || text.length).text
            : text;
        return hrefPrefix && href ? (React.createElement(Link, { "data-identity": id && id + "-link-" + href, to: {
                pathname: hrefParent
                    ? hrefPrefix + "/" + hrefParent.toLowerCase() + "/" + href
                    : hrefPrefix + "/" + href,
                state: { record: record },
            }, className: classes.link }, shownText)) : (React.createElement("span", { style: {
                textTransform: autoCapitalize ? "capitalize" : "none",
                overflow: "hidden",
                textOverflow: "ellipsis",
            } }, shownText));
    };
    /**
     * render component PriusLabel if only received notesBadge props
     */
    var isNotesBadge = function () {
        if (notesBadge) {
            if (!notesBadge.backdropData)
                return (React.createElement(PriusLabel, { text: notesBadge.text, theme: notesBadge.theme ? notesBadge.theme : undefined, type: notesBadge.type ? notesBadge.type : undefined, size: notesBadge.size ? notesBadge.size : undefined }));
            else
                return (React.createElement(PriusBackdrop, { placement: "right-start", popperId: "prius-backdrop", renderTrigger: function (anchorRef, handleToggle) { return (React.createElement("span", { "data-identity": id && id + "-span-openBackdrop", ref: anchorRef, onClick: handleToggle },
                        React.createElement(PriusLabel, { text: notesBadge.text, theme: notesBadge.theme ? notesBadge.theme : undefined, type: notesBadge.type ? notesBadge.type : undefined, size: notesBadge.size ? notesBadge.size : undefined, style: { cursor: "pointer" } }))); } }, notesBadge.backdropData));
        }
    };
    /**
     * render component if only received text and/or notesBadge props
     */
    var renderSimpleText = function () {
        if (isSimpleText && !notesBadge)
            return convertText();
        else if (isSimpleText && notesBadge)
            return (React.createElement("div", { style: { zIndex: 1 } },
                convertText(),
                isNotesBadge()));
    };
    /**
     * render component if only received text, description, and/or notesBadge props
     */
    var renderTextWithDescription = function () {
        if (isTextWithDescription && !notesBadge)
            return (React.createElement("div", { className: classes.textWithDescription },
                convertText(),
                React.createElement("span", { className: classes.description }, descriptionText)));
        else if (isTextWithDescription && notesBadge)
            return (React.createElement("div", { className: classes.textWithDescription },
                React.createElement("div", { style: { zIndex: 1 } },
                    convertText(),
                    isNotesBadge()),
                React.createElement("span", { className: classes.description }, descriptionText)));
    };
    return (React.createElement(Grid, { item: true, className: clsx(classes.container, hrefPrefix && href ? "publish" : null), style: __assign(__assign({}, style), { flexBasis: fixedWidth ? fixedWidth : width, flexShrink: fixedWidth ? 0 : 1, maxWidth: fixedWidth ? fixedWidth : width, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }) }, tooltipText ? (React.createElement(PriusTooltip, { placement: "top", title: Array.isArray(tooltip)
            ? getByMaxIndex(tooltip, maxIndex || tooltip.length).tooltipText
            : tooltip },
        React.createElement("div", { style: { display: "inline-flex" } },
            renderSimpleText(),
            renderTextWithDescription()))) : (React.createElement(React.Fragment, null,
        renderSimpleText(),
        renderTextWithDescription()))));
};
export default TextField;
