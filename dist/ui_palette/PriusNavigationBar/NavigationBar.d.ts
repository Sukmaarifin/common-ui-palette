/**
 * @todo Request mode from gql when ready
 */
/// <reference types="react" />
import "./NavigationBar.css";
declare type FlagCardType = "success" | "alert";
declare type NotifType = {
    messages: string;
    flagStatus: FlagCardType;
    time: Date;
};
export declare type NavigationBarProps = {
    name: string;
    userClick: () => void;
    notifClick: () => void;
    notifStatus: boolean;
    notif: Array<NotifType>;
    toggleDropdown: () => void;
    toggleStatus: boolean;
    syncClick: Array<any>;
};
declare const NavigationBar: (props: NavigationBarProps) => JSX.Element;
export default NavigationBar;
export declare const handlerPathname: (pathnames: string[]) => string;
