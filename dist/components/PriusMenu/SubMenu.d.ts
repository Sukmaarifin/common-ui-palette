import React from 'react';
import { RouteComponentProps } from 'react-router';
export declare type fieldSubMenu = {
    label: string;
    url?: string;
};
declare type SubMenuProps = {
    getUrl: (value: string) => void;
    data: fieldSubMenu[];
    parentMenu: string;
} & RouteComponentProps;
declare const _default: React.ComponentClass<Pick<SubMenuProps, "data" | "getUrl" | "parentMenu">, any> & import("react-router").WithRouterStatics<({ getUrl, data, parentMenu, history }: SubMenuProps) => JSX.Element | null>;
export default _default;
