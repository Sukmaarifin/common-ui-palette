/// <reference types="react" />
export declare const styles: (props?: any) => Record<import("@material-ui/core").TablePaginationClassKey, string>;
declare type pageInfoProperties = {
    totalItems: number;
    itemPerPage: number;
    pageNumber: number;
};
export declare type TablePaginationProps = {
    labelPerPage: string;
    pageInfo: pageInfoProperties;
    rowsPerPageOptions: Array<number>;
    onChangePage: (page: any) => void;
    onChangeRowsPerPage: (rows: any) => void;
    paginationId?: string;
};
declare function TablePagination({ labelPerPage, pageInfo, rowsPerPageOptions, onChangePage, onChangeRowsPerPage, paginationId, }: TablePaginationProps): JSX.Element;
export default TablePagination;
