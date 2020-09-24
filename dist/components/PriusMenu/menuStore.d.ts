/// <reference types="react" />
import { checkSVGProp } from './assets/typeSVG';
export declare const menuStore: {
    label: string;
    url: string;
    icon: (props: checkSVGProp) => JSX.Element;
    submenu: {
        label: string;
        url: string;
    }[];
}[];
export declare const menuStoreBasic: {
    label: string;
    url: string;
    icon: (props: checkSVGProp) => JSX.Element;
    submenu: {
        label: string;
        url: string;
    }[];
}[];
