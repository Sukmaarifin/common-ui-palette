/**
 * @todo
 * [ ] adjust storybook
 */
import React, { CSSProperties } from 'react';
export declare type TabsType = 'standard' | 'scrollable';
export declare type TabMenu = {
    text: string;
    icon?: JSX.Element;
    disabled: boolean;
};
export declare type PriusTabProps = {
    activeTab: string | number;
    className?: string;
    style?: CSSProperties;
    tabs: Array<TabMenu>;
    variant?: TabsType;
    onChange: (event: React.ChangeEvent<{}>, value: any) => void;
    id?: string;
};
export declare const PriusTab: ({ activeTab, className, onChange, tabs, id, variant, ...props }: PriusTabProps) => JSX.Element;
export default PriusTab;
