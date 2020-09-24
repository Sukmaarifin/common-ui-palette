/// <reference types="react" />
import { DateRangeType } from "../../typings";
import "react-day-picker/lib/style.css";
export declare type DatePickerProps = {
    selectedDays?: DateRangeType;
    onDayClick: (from: Date, to: Date) => void;
};
declare function PriusDatePicker({ selectedDays, onDayClick }: DatePickerProps): JSX.Element;
export default PriusDatePicker;
