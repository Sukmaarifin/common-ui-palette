"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
require("./NotificationList.css");
var NotificationList = /** @class */ (function (_super) {
    __extends(NotificationList, _super);
    function NotificationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationList.prototype.render = function () {
        var _a = this.props, items = _a.items, notif = _a.notif;
        return (React.createElement(core_1.Drawer, { open: notif, anchor: "right" },
            React.createElement(core_1.List, { className: "prius__side-modal" },
                React.createElement(core_1.ListItem, { className: "header-container" },
                    React.createElement(core_1.Typography, { className: "header-text" }, "Notifikasi")),
                items.length !== 0 ? (items) : (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "notification-item" },
                        React.createElement("em", null, "Belum ada notifikasi.")),
                    React.createElement("hr", { className: "no-margin" }))))));
    };
    return NotificationList;
}(React.Component));
exports.default = NotificationList;
