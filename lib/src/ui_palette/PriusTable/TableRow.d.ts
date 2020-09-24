/**
 * @todo
 * [ ] Handle menuData for burgerFields and its onClick actions
 */
import React from "react";
export declare const useStyles: (props?: any) => Record<"collapse" | "cell" | "row" | "toolbar" | "spacing" | "unpublished" | "rowDense" | "rowCard" | "collapsedRow" | "collapsedHeader" | "lineContainer", string>;
export declare type CollapsedData = {
    data: Array<any>;
    id: number;
};
export declare type RowData = {
    id: string;
    active: boolean;
    data: Array<any>;
};
export declare type TableRowProps = {
    collapsedFields: Array<React.ReactNode>;
    collapsedRecordsPerRow: any;
    fields: Array<React.ReactElement>;
    filterPublished?: string;
    isExpanded: boolean;
    isSelected: boolean;
    menuData: Array<any>;
    record: any;
    type: "dense" | "card";
    handleExpandToggle: () => void;
    handleSelectToggle?: (event: any) => void;
    rowId?: string;
};
declare const TableRow: ({ collapsedFields, collapsedRecordsPerRow, fields, filterPublished, isExpanded, isSelected, menuData, record, type, handleExpandToggle, handleSelectToggle, rowId, }: TableRowProps) => JSX.Element;
export default TableRow;
