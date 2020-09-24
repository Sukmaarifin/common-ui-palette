import React from "react";
import { ListItem, ListItemIcon, ListItemText, useMediaQuery, } from "@material-ui/core";
import PriusThumbnail from "../PriusThumbnail";
function PriusCardTemplate(_a) {
    var imageSource = _a.imageSource, title = _a.title, description = _a.description;
    var matchesSmallDisplay = useMediaQuery("(max-width: 1366px)");
    return (React.createElement(ListItem, { component: "div", disableGutters: true, style: { padding: 0 } },
        React.createElement(ListItemIcon, null,
            React.createElement(PriusThumbnail, { imageSource: imageSource, altText: "Image of product variant", size: "small" })),
        React.createElement(ListItemText, { style: {
                display: "block",
                maxWidth: "13.5rem",
                textOverflow: "ellipsis",
                overflow: matchesSmallDisplay ? "visible" : "hidden",
                whiteSpace: matchesSmallDisplay ? "normal" : "nowrap",
            }, primary: title, secondary: description ? description : null })));
}
export default PriusCardTemplate;
