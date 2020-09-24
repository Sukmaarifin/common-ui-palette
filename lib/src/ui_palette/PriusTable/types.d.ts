/// <reference types="react" />
export declare const ROWS_PER_PAGE: number[];
/**
 * @DEPRECATED
 * Use SortDataType instead
 */
export declare type SortData = SortDataType;
export declare type SortDataType = {
    isAscending: boolean;
    fieldName: string;
};
export declare type FieldProps = {
    /**
     * Data object
     * forwarded from parent (i.e. `TableRow`)
     */
    record?: {
        [key: string]: any;
    };
    source: string;
    style?: React.CSSProperties;
    /**
     * Title of the table column
     * will be shown in table header
     */
    title?: string;
    /**
     * Column width
     * should be filled with percentages
     */
    width?: string;
    /**
     * Fixed column width
     * will override `width` props
     * column with fixed width will neither grow nor shrink
     */
    fixedWidth?: string;
    /**
     * Sorting fields
     */
    sortOption?: SortData;
    /**
     * Identifier id for data-identity meta attribute
     */
    fieldId?: string;
    /**
     * text align
     */
    textAlign?: React.CSSProperties["textAlign"];
    /**
     * padding
     */
    padding?: string | number;
    /**
     * isPublihed status
     */
    isPublished?: boolean;
};
