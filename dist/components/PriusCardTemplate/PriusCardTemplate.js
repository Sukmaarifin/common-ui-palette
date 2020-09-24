"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var PriusThumbnail_1 = __importDefault(require("../PriusThumbnail"));
function PriusCardTemplate(_a) {
    var imageSource = _a.imageSource, title = _a.title, description = _a.description;
    var matchesSmallDisplay = core_1.useMediaQuery('(max-width: 1366px)');
    return (react_1.default.createElement(core_1.ListItem, { component: "div", disableGutters: true, style: { padding: 0 } },
        react_1.default.createElement(core_1.ListItemIcon, null,
            react_1.default.createElement(PriusThumbnail_1.default, { imageSource: imageSource, altText: "Image of product variant", size: "small" })),
        react_1.default.createElement(core_1.ListItemText, { style: {
                display: 'block',
                maxWidth: '13.5rem',
                textOverflow: 'ellipsis',
                overflow: matchesSmallDisplay ? 'visible' : 'hidden',
                whiteSpace: matchesSmallDisplay ? 'normal' : 'nowrap',
            }, primary: title, secondary: description ? description : null })));
}
exports.default = PriusCardTemplate;
