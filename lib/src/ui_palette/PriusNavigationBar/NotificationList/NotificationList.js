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
import * as React from "react";
import { Drawer, List, ListItem, Typography } from "@material-ui/core";
import "./NotificationList.css";
var NotificationList = /** @class */ (function (_super) {
    __extends(NotificationList, _super);
    function NotificationList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationList.prototype.render = function () {
        var _a = this.props, items = _a.items, notif = _a.notif;
        return (React.createElement(Drawer, { open: notif, anchor: "right" },
            React.createElement(List, { className: "prius__side-modal" },
                React.createElement(ListItem, { className: "header-container" },
                    React.createElement(Typography, { className: "header-text" }, "Notifikasi")),
                items.length !== 0 ? (items) : (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "notification-item" },
                        React.createElement("em", null, "Belum ada notifikasi.")),
                    React.createElement("hr", { className: "no-margin" }))))));
    };
    return NotificationList;
}(React.Component));
export default NotificationList;
