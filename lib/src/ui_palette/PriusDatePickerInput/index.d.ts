import React from "react";
import "./PriusDatePickerInput.css";
import "react-day-picker/lib/style.css";
export declare type DatePickerInputProps = {
    selectedDate: Date | string;
    onDayClick: (day: Date) => void;
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};
declare const _default: React.ForwardRefExoticComponent<DatePickerInputProps & React.RefAttributes<any>>;
export default _default;
