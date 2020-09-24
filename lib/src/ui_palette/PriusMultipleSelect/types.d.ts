/// <reference types="react" />
export declare type OptionType = {
    isDisabled: boolean;
    label: string;
    tooltipText?: string;
    value: string;
    data?: {
        [key: string]: any;
    };
    /**
     * JSX element to be rendered as option
     * If defined, `PriusMultipleSelect` will ignore the `label` props
     * and render `labelElement` instead
     */
    labelElement?: JSX.Element;
    color?: string;
};
