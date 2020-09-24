import { DateRangeType } from "../../typings";
export declare type FilterItemType = {
    label: string;
    field: string;
    active: boolean;
    isMulti?: boolean;
};
export declare type FilterProps = {
    displayDate?: boolean;
    date?: DateRangeType;
    filterData: Array<FilterItemType>;
    onFilter: (newFilterData: Array<FilterItemType>, dateRange: DateRangeType | undefined) => void;
    inputId?: string;
};
