"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var PriusPaper_1 = __importDefault(require("../PriusPaper"));
var PriusLabel_1 = __importDefault(require("../PriusLabel"));
var PriusCardCss_1 = require("./PriusCardCss");
function PriusCard(_a) {
    var className = _a.className, desc = _a.desc, icon = _a.icon, paperId = _a.paperId, label = _a.label, title = _a.title, onClick = _a.onClick;
    var classes = PriusCardCss_1.useStyles();
    var iconWithClasses = react_1.default.cloneElement(icon, {
        className: classes.iconImg,
    });
    return (react_1.default.createElement(PriusPaper_1.default, { className: clsx_1.default(classes.promotion, onClick ? classes.clickable : null, className ? className : null), onClick: onClick, id: paperId },
        react_1.default.createElement(core_1.Grid, { className: classes.icon }, iconWithClasses),
        react_1.default.createElement(core_1.Grid, { className: classes.info },
            react_1.default.createElement(core_1.Grid, { className: classes.title },
                title,
                label && (react_1.default.createElement(PriusLabel_1.default, { text: label, type: "error", style: {
                        marginLeft: "0.5rem",
                        fontSize: "0.65rem",
                        fontWeight: 300,
                    } }))),
            react_1.default.createElement(core_1.Typography, { className: classes.desc }, desc))));
}
exports.PriusCard = PriusCard;
exports.default = PriusCard;
