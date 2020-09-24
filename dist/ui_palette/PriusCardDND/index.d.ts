import React, { CSSProperties } from "react";
export declare type CardProps = {
    ID: string;
    text: string;
    thumbnail?: string;
    secondaryText?: string;
    published?: boolean;
    index: number;
    isSorted: boolean;
    URLEdit?: string;
    moveCard: (dragIndex: number, hoverIndex: number) => void;
    linkStyle?: CSSProperties;
    /** list of options available */
    options?: Array<string>;
    /** options action handler */
    handleOption?: (option: string) => void;
    metaId?: string;
};
declare const PriusCardDND: React.FC<CardProps>;
export default PriusCardDND;
