import React, { forwardRef } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import { REGEX_DATE } from "../../constants";
import "./PriusDatePickerInput.css";
import "react-day-picker/lib/style.css";
export default forwardRef(function (props, ref) {
    var selectedDate = props.selectedDate, onDayClick = props.onDayClick, inputProps = props.inputProps;
    return (React.createElement(DayPickerInput, { inputProps: inputProps, dayPickerProps: {
            month: new Date(),
            weekdaysShort: ["S", "M", "T", "W", "T", "F", "S"],
        }, format: "dd/MM/yyyy", formatDate: formatDate, parseDate: function (value) {
            /** Convert `dd/mm/yyyy` to `mm/dd/yyy` manually */
            var splitDate = value.split(/\//);
            var formattedDate = [splitDate[1], splitDate[0], splitDate[2]].join("/");
            if (REGEX_DATE.test(value) &&
                DateUtils.isDate(new Date(formattedDate))) {
                return new Date(formattedDate);
            }
            return undefined;
        }, placeholder: "DD/MM/YYYY", ref: ref, value: selectedDate, onDayChange: onDayClick }));
});
var formatDate = function (date) {
    return new Intl.DateTimeFormat(["ban", "id"], {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    }).format(date);
};
