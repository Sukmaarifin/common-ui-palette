"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_helmet_1 = __importDefault(require("react-helmet"));
var react_day_picker_1 = __importStar(require("react-day-picker"));
require("react-day-picker/lib/style.css");
function PriusDatePicker(_a) {
    var selectedDays = _a.selectedDays, onDayClick = _a.onDayClick;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_day_picker_1.default, { numberOfMonths: 1, selectedDays: selectedDays ? [selectedDays.from, selectedDays] : undefined, weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'], onDayClick: function (day) {
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
                var range = react_day_picker_1.DateUtils.addDayToRange(day, selectedDays);
                var from = range.from, to = range.to;
                if (from && to)
                    onDayClick(from, to);
            }, fixedWeeks: true }),
        react_1.default.createElement(react_helmet_1.default, null,
            react_1.default.createElement("style", null, "\n            .DayPicker-Caption {\n              font-size: 13px;\n              text-align: center;\n              margin-bottom: 1rem;\n            }\n            .DayPicker-NavButton--prev {\n              left: 0;\n            }\n            .DayPicker-Weekdays {\n              border-bottom: solid 1px #f3f3f3;\n              border-top: solid 1px #f3f3f3;\n            }\n            .DayPicker-Day {\n              border-radius: 0 !important;\n            }\n            .DayPicker-Day--today {\n              font-weight: normal;\n              color: #000;\n            }\n            .DayPicker-Day--selected {\n              font-weight: 700;\n              color: black !important;\n              background: #f4f4f4 !important;\n              border-radius: 0 !important;\n            }\n            .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {\n              background-color: #f0f8ff !important;\n              color: #3F4FA2;\n            }\n          "))));
}
exports.default = PriusDatePicker;
var addDays = function (date, days) {
    var dt = new Date();
    dt.setDate(dt.getDate() + days);
    return dt;
};
