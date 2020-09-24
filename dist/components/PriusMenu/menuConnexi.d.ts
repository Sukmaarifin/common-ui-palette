/// <reference types="react" />
import { checkSVGProp } from './assets/typeSVG';
export declare const menuConnexi: {
    label: string;
    url: string;
    icon: (props: checkSVGProp) => JSX.Element;
    submenu: {
        label: string;
        url: string;
    }[];
}[];
export declare const menuConnexiBasic: {
    label: string;
    url: string;
    icon: (props: checkSVGProp) => JSX.Element;
    submenu: {
        label: string;
        url: string;
    }[];
}[];
