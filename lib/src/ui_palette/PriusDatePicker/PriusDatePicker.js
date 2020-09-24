import React from "react";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
function PriusDatePicker(_a) {
    var selectedDays = _a.selectedDays, onDayClick = _a.onDayClick;
    return (React.createElement(React.Fragment, null,
        React.createElement(DayPicker, { numberOfMonths: 1, selectedDays: selectedDays ? [selectedDays.from, selectedDays] : undefined, weekdaysShort: ["S", "M", "T", "W", "T", "F", "S"], onDayClick: function (day) {
                var dateFrom = day;
                var dateTo = addDays(day, 1);
                if (selectedDays) {
                    dateFrom = selectedDays.from;
                    dateTo = selectedDays.to;
                }
                selectedDays = {
                    from: dateFrom,
                    to: dateTo,
                };
                var range = DateUtils.addDayToRange(day, selectedDays);
                var from = range.from, to = range.to;
                if (from && to)
                    onDayClick(from, to);
            }, fixedWeeks: true }),
        React.createElement(Helmet, null,
            React.createElement("style", null, "\n            .DayPicker-Caption {\n              font-size: 13px;\n              text-align: center;\n              margin-bottom: 1rem;\n            }\n            .DayPicker-NavButton--prev {\n              left: 0;\n            }\n            .DayPicker-Weekdays {\n              border-bottom: solid 1px #f3f3f3;\n              border-top: solid 1px #f3f3f3;\n            }\n            .DayPicker-Day {\n              border-radius: 0 !important;\n            }\n            .DayPicker-Day--today {\n              font-weight: normal;\n              color: #000;\n            }\n            .DayPicker-Day--selected {\n              font-weight: 700;\n              color: black !important;\n              background: #f4f4f4 !important;\n              border-radius: 0 !important;\n            }\n            .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n              background-color: #f0f8ff !important;\n              color: #3F4FA2;\n            }\n          "))));
}
export default PriusDatePicker;
var addDays = function (date, days) {
    var dt = new Date();
    dt.setDate(dt.getDate() + days);
    return dt;
};
