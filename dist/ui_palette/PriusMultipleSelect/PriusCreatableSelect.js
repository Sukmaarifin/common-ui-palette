"use strict";
/**
 * @todo:
 * [ ] unit test
 * [x] styling
 * [x] handle controlled component
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var creatable_1 = __importDefault(require("react-select/creatable"));
function PriusCreatableSelect(_a) {
    var _b = _a.backspaceRemoveValue, backspaceRemoveValue = _b === void 0 ? true : _b, classes = _a.classes, className = _a.className, components = _a.components, _c = _a.isClearable, isClearable = _c === void 0 ? true : _c, _d = _a.isDeletable, isDeletable = _d === void 0 ? false : _d, isDisabled = _a.isDisabled, _e = _a.placeholder, placeholder = _e === void 0 ? "Type something and press enter..." : _e, selectedData = _a.selectedData, onChange = _a.onChange, onError = _a.onError, id = _a.id, maxChar = _a.maxChar;
    var _f = react_1.useState(), inputValue = _f[0], setInputValue = _f[1];
    var _g = react_1.useState([]), value = _g[0], setValue = _g[1];
    react_1.useEffect(function () {
        if (selectedData) {
            setValue(selectedData);
        }
    }, [selectedData]);
    var handleChange = function (newValues, actionMeta) {
        setValue(newValues ? newValues : []);
        // Since `onChange` callback will not be automatically invoked in this event,
        // we need to invoked it manually
        if (onChange) {
            onChange(newValues, actionMeta);
        }
    };
    var handleInputChange = function (currentValue) {
        setInputValue(currentValue);
    };
    var handleError = function (error) {
        if (onError) {
            onError(error);
        }
    };
    var handleCreate = function () {
        if (!inputValue)
            return;
        var newValue = __spreadArrays(value, [createOption(inputValue)]);
        setValue(newValue);
        setInputValue("");
        // Since `onChange` callback will not be automatically invoked in this event,
        // we need to invoked it manually
        if (onChange && newValue.length > value.length) {
            onChange(newValue, { action: "create-option" });
        }
    };
    var handleKeyDown = function (event) {
        if (!inputValue)
            return;
        switch (event.key) {
            case "Enter":
            case "Tab":
                // If `inputValue` is not in `value`,
                // create new option from `inputValue`
                if (!value.find(function (option) {
                    return option.value === inputValue.toLowerCase().trim() ||
                        option.label.toLowerCase() === inputValue.toLowerCase().trim();
                })) {
                    if (maxChar) {
                        if (inputValue.length <= maxChar) {
                            handleError(false);
                            handleCreate();
                        }
                        else {
                            handleError(true);
                        }
                    }
                    else {
                        handleCreate();
                    }
                }
                event.preventDefault();
        }
    };
    return (react_1.default.createElement(creatable_1.default, { inputId: id, backspaceRemovesValue: backspaceRemoveValue, classes: classes, className: className, components: __assign(__assign({}, components), { DropdownIndicator: null }), inputValue: inputValue, isClearable: isClearable, isCreatable: true, isDeletable: isDeletable, isDisabled: isDisabled, isMulti: true, menuIsOpen: false, onChange: handleChange, onInputChange: handleInputChange, onKeyDown: handleKeyDown, placeholder: placeholder, selectedData: value, value: value }));
}
exports.default = PriusCreatableSelect;
var createOption = function (label) { return ({
    isDisabled: false,
    label: label,
    value: label,
}); };
