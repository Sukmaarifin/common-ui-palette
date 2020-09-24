import * as React from "react";
import "./NotificationList.css";
export declare type NotificationListProps = {
    items: any;
    notif: boolean;
};
declare class NotificationList extends React.Component<NotificationListProps> {
    render(): JSX.Element;
}
export default NotificationList;
