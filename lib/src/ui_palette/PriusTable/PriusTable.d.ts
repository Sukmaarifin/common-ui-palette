import React from "react";
import { WithStyles } from "@material-ui/styles";
import { RowData } from "./TableRow";
import { PriusTableCss } from "./PriusTableCss";
import { SortDataType } from "./types";
/**
 * @DEPRECATED
 * Use PaginationType instead
 */
export declare type PaginationProperties = PaginationType;
export declare type PaginationType = {
    labelPerPage: string;
    rowsPerPageOptions: Array<number>;
    pageInfo: any;
    handlePage: (page: string) => void;
    handleRowsPerPage: (rows: any) => void;
};
export interface TableData extends RowData {
    collapseData?: Array<{
        [key: string]: any;
    }>;
}
export declare type TableType = "card" | "dense";
export declare type PriusTableState = {
    expandedRow: number;
    selectedRows: Array<number>;
    rowsPerPage: number;
    page: number;
};
export declare type PriusTableBaseProps = {
    burgerFields?: Array<any>;
    collapsedFields?: Array<React.ReactNode>;
    collapsedRecords?: Array<Array<{
        [key: string]: any;
    }>>;
    fields: Array<React.ReactElement>;
    filterPublishedRow?: string;
    isSelectable?: boolean;
    pagination?: PaginationProperties;
    records: Array<{
        [key: string]: any;
    }>;
    selectedRows?: Array<number>;
    sortedBy?: SortDataType;
    type: TableType;
    handleSort?: (sortedBy: SortDataType) => void;
    onSelect?: (selectedRows: Array<number>) => void;
    renderActionHeader?: (selectedRows: Array<number>) => React.ReactElement;
    id?: string;
    placeholder?: string;
};
export declare type PriusTableProps = PriusTableBaseProps & WithStyles<typeof PriusTableCss>;
export declare class PriusTable extends React.Component<PriusTableProps, PriusTableState> {
    state: PriusTableState;
    handleExpand: (rowId: number) => void;
    handleSelectToggle: (rowId: number) => void;
    handleSelectAllToggle: (event: React.ChangeEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
declare const _default: React.ComponentType<Pick<PriusTableProps, "id" | "placeholder" | "onSelect" | "innerRef" | "type" | "collapsedFields" | "fields" | "records" | "burgerFields" | "collapsedRecords" | "filterPublishedRow" | "isSelectable" | "pagination" | "selectedRows" | "sortedBy" | "handleSort" | "renderActionHeader"> & import("@material-ui/core").StyledComponentProps<"toolbar" | "header" | "divider" | "headerColumn" | "headerButton" | "actionHeader" | "selectedCount" | "flexRowCard" | "flexRowDense" | "emptyData">>;
export default _default;
