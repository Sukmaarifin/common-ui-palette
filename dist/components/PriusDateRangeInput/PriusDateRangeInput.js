"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var PriusInputNew_1 = __importDefault(require("../PriusInputNew"));
var PriusDatePicker_1 = __importDefault(require("../PriusDatePicker"));
var helpers_1 = require("../../helpers");
var PriusDateColumn = function (_a) {
    var id = _a.id, data = _a.data, onChange = _a.onChange;
    var initialDateState = {
        from: new Date(new Date(parseInt((data === null || data === void 0 ? void 0 : data.from) ? data.from
            : helpers_1.convertDateUTC(new Date().toString()).toString()) * 1000).setHours(0, 0, 0, 0)),
        to: new Date(new Date(parseInt((data === null || data === void 0 ? void 0 : data.to) ? data.to : helpers_1.convertDateUTC(new Date().toString()).toString()) * 1000).setHours(23, 59, 59, 59)),
    };
    // Generate Date Range to display to Date Input Column
    var generateDateRange = function (dateRange) {
        if (dateRange.from && dateRange.to) {
            var dateFrom = dateRange.from;
            var dateTo = dateRange.to;
            var startDate = dateFrom.getDate() + "/" + (dateFrom.getMonth() + 1) + "/" + dateFrom.getFullYear();
            var endDate = dateTo.getDate() + "/" + (dateTo.getMonth() + 1) + "/" + dateTo.getFullYear();
            return startDate + ' - ' + endDate;
        }
        return '';
    };
    var _b = react_1.useState(generateDateRange(initialDateState)), selectedDateRange = _b[0], setSelectedDateRange = _b[1];
    var _c = react_1.useState(false), openCalendar = _c[0], setOpenCalendar = _c[1];
    var _d = react_1.useState(initialDateState), date = _d[0], setDate = _d[1];
    var handleDateRangeValue = react_1.useCallback(function (from, to) {
        var dateRange = {
            from: new Date(from.setHours(0, 0, 0, 0)),
            to: new Date(to.setHours(23, 59, 59, 59)),
        };
        if (isNaN(helpers_1.convertDateUTC(from.toString())))
            dateRange.to = dateRange.from;
        setDate(dateRange);
        var selectedRange = generateDateRange(dateRange);
        setSelectedDateRange(selectedRange);
        //onChange will pass the value to its parent
        var convertedDate = {
            from: helpers_1.convertDateUTC(dateRange.from.toString()),
            to: helpers_1.convertDateUTC(dateRange.to.toString()),
        };
        if (onChange)
            onChange(convertedDate);
    }, [onChange]);
    var handleCalendarToggle = function () {
        setOpenCalendar(!openCalendar);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(PriusInputNew_1.default, { required: true, name: "date-range", id: id ? id : 'input-date-range', inputProps: { 'data-identity': id && "" + id }, type: "text", value: selectedDateRange, readOnly: true, placeholder: "DD/MM/YYYY - DD/MM/YYYY", onClick: handleCalendarToggle, onKeyDown: handleCalendarToggle }),
        openCalendar && (react_1.default.createElement(PriusDatePicker_1.default, { selectedDays: date, onDayClick: handleDateRangeValue }))));
};
exports.default = PriusDateColumn;
