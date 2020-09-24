import { DateRangeType } from "../../typings";

export type FilterItemType = {
  label: string;
  field: string;
  active: boolean;
  isMulti?: boolean;
};

export type FilterProps = {
  displayDate?: boolean;
  date?: DateRangeType;
  filterData: Array<FilterItemType>;
  onFilter: (
    newFilterData: Array<FilterItemType>,
    dateRange: DateRangeType | undefined
  ) => void;
  inputId?: string;
};
