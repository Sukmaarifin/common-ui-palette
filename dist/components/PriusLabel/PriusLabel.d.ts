import React, { ReactElement } from 'react';
export declare type PriusLabelProps = {
    leftIcon?: ReactElement;
    text: string;
    theme?: 'light' | 'dark';
    type?: 'default' | 'primary' | 'error' | 'success' | 'warning';
    size?: 'small' | 'normal';
    style?: React.CSSProperties;
};
export declare function PriusLabel({ leftIcon, theme, type, size, text, style, }: PriusLabelProps): JSX.Element;
export default PriusLabel;
