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
var DayPickerInput_1 = __importDefault(require("react-day-picker/DayPickerInput"));
var react_day_picker_1 = require("react-day-picker");
var constants_1 = require("../../constants");
require("./PriusDatePickerInput.css");
require("react-day-picker/lib/style.css");
exports.default = react_1.forwardRef(function (props, ref) {
    var selectedDate = props.selectedDate, onDayClick = props.onDayClick, inputProps = props.inputProps;
    return (react_1.default.createElement(DayPickerInput_1.default, { inputProps: inputProps, dayPickerProps: {
            month: new Date(),
            weekdaysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        }, format: "dd/MM/yyyy", formatDate: formatDate, parseDate: function (value) {
            /** Convert `dd/mm/yyyy` to `mm/dd/yyy` manually */
            var splitDate = value.split(/\//);
            var formattedDate = [splitDate[1], splitDate[0], splitDate[2]].join('/');
            if (constants_1.REGEX_DATE.test(value) &&
                react_day_picker_1.DateUtils.isDate(new Date(formattedDate))) {
                return new Date(formattedDate);
            }
            return undefined;
        }, placeholder: "DD/MM/YYYY", ref: ref, value: selectedDate, onDayChange: onDayClick }));
});
var formatDate = function (date) {
    return new Intl.DateTimeFormat(['ban', 'id'], {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).format(date);
};
