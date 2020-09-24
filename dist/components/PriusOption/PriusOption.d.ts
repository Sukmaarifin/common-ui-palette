import React from 'react';
declare type IconPosition = 'default' | 'vertical';
export declare type ItemType = {
    disabled?: boolean;
    iconLeft?: React.ReactElement;
    iconRight?: React.ReactElement;
    itemId?: string;
    title: string;
    tooltipText?: string;
    onClick?: () => void;
};
export declare type PriusOptionProps = {
    icon?: IconPosition;
    items: Array<ItemType>;
};
declare function PriusOption({ icon, items }: PriusOptionProps): JSX.Element;
export default PriusOption;
