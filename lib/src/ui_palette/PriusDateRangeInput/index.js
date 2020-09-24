import React, { useState, useCallback } from "react";
import PriusInput from "../PriusInputNew";
import PriusDatePicker from "../PriusDatePicker";
import { convertDateUTC } from "../../helpers";
var PriusDateColumn = function (_a) {
    var id = _a.id, data = _a.data, onChange = _a.onChange;
    var initialDateState = {
        from: new Date(new Date(parseInt((data === null || data === void 0 ? void 0 : data.from) ? data.from
            : convertDateUTC(new Date().toString()).toString()) * 1000).setHours(0, 0, 0, 0)),
        to: new Date(new Date(parseInt((data === null || data === void 0 ? void 0 : data.to) ? data.to : convertDateUTC(new Date().toString()).toString()) * 1000).setHours(23, 59, 59, 59)),
    };
    // Generate Date Range to display to Date Input Column
    var generateDateRange = function (dateRange) {
        if (dateRange.from && dateRange.to) {
            var dateFrom = dateRange.from;
            var dateTo = dateRange.to;
            var startDate = dateFrom.getDate() + "/" + (dateFrom.getMonth() + 1) + "/" + dateFrom.getFullYear();
            var endDate = dateTo.getDate() + "/" + (dateTo.getMonth() + 1) + "/" + dateTo.getFullYear();
            return startDate + " - " + endDate;
        }
        return "";
    };
    var _b = useState(generateDateRange(initialDateState)), selectedDateRange = _b[0], setSelectedDateRange = _b[1];
    var _c = useState(false), openCalendar = _c[0], setOpenCalendar = _c[1];
    var _d = useState(initialDateState), date = _d[0], setDate = _d[1];
    var handleDateRangeValue = useCallback(function (from, to) {
        var dateRange = {
            from: new Date(from.setHours(0, 0, 0, 0)),
            to: new Date(to.setHours(23, 59, 59, 59)),
        };
        if (isNaN(convertDateUTC(from.toString())))
            dateRange.to = dateRange.from;
        setDate(dateRange);
        var selectedRange = generateDateRange(dateRange);
        setSelectedDateRange(selectedRange);
        //onChange will pass the value to its parent
        var convertedDate = {
            from: convertDateUTC(dateRange.from.toString()),
            to: convertDateUTC(dateRange.to.toString()),
        };
        if (onChange)
            onChange(convertedDate);
    }, [onChange]);
    var handleCalendarToggle = function () {
        setOpenCalendar(!openCalendar);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(PriusInput, { required: true, name: "date-range", id: id ? id : "input-date-range", inputProps: { "data-identity": id && "" + id }, type: "text", value: selectedDateRange, readOnly: true, placeholder: "DD/MM/YYYY - DD/MM/YYYY", onClick: handleCalendarToggle, onKeyDown: handleCalendarToggle }),
        openCalendar && (React.createElement(PriusDatePicker, { selectedDays: date, onDayClick: handleDateRangeValue }))));
};
export default PriusDateColumn;
