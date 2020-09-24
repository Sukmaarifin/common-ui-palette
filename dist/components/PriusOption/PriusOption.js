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
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
var icons_1 = require("@material-ui/icons");
var PriusTooltip_1 = __importDefault(require("../PriusTooltip"));
var icons_2 = require("../../icons");
var useStyles = styles_1.makeStyles(function (theme) { return ({
    menuItem: {
        fontWeight: 'bold',
    },
    iconLeft: {
        marginRight: '0.625rem',
    },
    iconRight: {
        marginLeft: '0.625rem',
    },
    itemIcon: {
        minWidth: 'auto',
    },
    itemInner: {
        display: 'flex',
        alignItems: 'center',
    },
    itemText: {
        '& > *': {
            fontWeight: 'bold',
        },
    },
    paper: {
        boxShadow: theme.customShadows[1],
    },
}); });
function PriusOption(_a) {
    var icon = _a.icon, items = _a.items;
    var classes = useStyles();
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var anchorRef = react_1.useRef(null);
    var handleToggle = function () {
        setOpen(function (prevOpen) { return !prevOpen; });
    };
    var handleClose = function (event) {
        if (anchorRef.current &&
            anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.IconButton, { ref: anchorRef, "aria-controls": open ? 'menu-list-grow' : undefined, "aria-haspopup": "true", onClick: handleToggle, "data-identity": "option-button-toggle" }, icon === 'vertical' ? react_1.default.createElement(icons_2.OptionIcon, null) : react_1.default.createElement(icons_1.MoreHoriz, null)),
        react_1.default.createElement(core_1.Popper, { open: open, anchorEl: anchorRef.current, role: undefined, transition: true, placement: "bottom-end" }, function (_a) {
            var TransitionProps = _a.TransitionProps, placement = _a.placement;
            return (react_1.default.createElement(core_1.Grow, __assign({}, TransitionProps, { style: {
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                } }),
                react_1.default.createElement(core_1.Paper, { className: classes.paper },
                    react_1.default.createElement(core_1.ClickAwayListener, { onClickAway: handleClose },
                        react_1.default.createElement(core_1.MenuList, { autoFocusItem: open, id: "menu-list-grow" }, items.map(function (item, index) { return (react_1.default.createElement(Item, { key: index, data: item, classes: classes })); }))))));
        })));
}
function Item(_a) {
    var data = _a.data, classes = _a.classes;
    return (react_1.default.createElement(core_1.MenuItem, { "data-identity": data.itemId && "option-item-" + data.itemId, disabled: data.disabled, id: data.itemId, onClick: function () { return data.onClick && !data.disabled && data.onClick(); } }, data.tooltipText ? (react_1.default.createElement(PriusTooltip_1.default, { title: data.tooltipText, placement: "top" },
        react_1.default.createElement("div", { className: classes.itemInner },
            data.iconLeft && (react_1.default.createElement(core_1.ListItemIcon, { className: clsx_1.default(classes.itemIcon, classes.iconLeft) }, data.iconLeft)),
            react_1.default.createElement(core_1.ListItemText, { "data-identity": data.itemId && "option-item-" + data.itemId, primary: data.title, className: classes.itemText }),
            data.iconRight && (react_1.default.createElement(core_1.ListItemIcon, { className: clsx_1.default(classes.itemIcon, classes.iconRight) }, data.iconRight))))) : (react_1.default.createElement(react_1.default.Fragment, null,
        data.iconLeft && (react_1.default.createElement(core_1.ListItemIcon, { className: clsx_1.default(classes.itemIcon, classes.iconLeft) }, data.iconLeft)),
        react_1.default.createElement(core_1.ListItemText, { "data-identity": data.itemId && "option-item-" + data.itemId, primary: data.title, className: classes.itemText }),
        data.iconRight && (react_1.default.createElement(core_1.ListItemIcon, { className: clsx_1.default(classes.itemIcon, classes.iconRight) }, data.iconRight))))));
}
exports.default = PriusOption;
