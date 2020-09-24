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
var PriusMultipleSelect_1 = __importDefault(require("./PriusMultipleSelect"));
exports.ControlledComponent = function () {
    var _a = react_1.useState([]), selectedOptions = _a[0], setSelectedOptions = _a[1];
    var handleOnChange = function (selectedOption) {
        setSelectedOptions(selectedOption);
    };
    return (react_1.default.createElement(PriusMultipleSelect_1.default, { placeholder: "Enter to create option", options: [
            { label: 'Option 1', value: '1', isDisabled: false },
            { label: 'Option 2', value: '2', isDisabled: false },
            { label: 'Option 3', value: '3', isDisabled: true },
            { label: 'Option 4', value: '4', isDisabled: false },
        ], selectedData: selectedOptions, onChange: handleOnChange }));
};
