"use strict";
/**
 * TODO:
 *
 * [ ] Unit test
 * [ ] Fix typing for `onChange` value (ref: https://github.com/JedWatson/react-select/issues/2902)
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var react_select_1 = __importStar(require("react-select"));
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var icons_1 = require("../../icons");
var PriusTooltip_1 = __importDefault(require("../PriusTooltip"));
var PriusCreatableSelect_1 = __importDefault(require("./PriusCreatableSelect"));
var PriusMultipleSelectCss_1 = require("./PriusMultipleSelectCss");
function PriusMultipleSelect(_a) {
    var _b = _a.backspaceRemoveValue, backspaceRemoveValue = _b === void 0 ? true : _b, _c = _a.blurInputOnSelect, blurInputOnSelect = _c === void 0 ? true : _c, className = _a.className, _d = _a.closeMenuOnSelect, closeMenuOnSelect = _d === void 0 ? true : _d, defaultInputValue = _a.defaultInputValue, defaultValue = _a.defaultValue, _e = _a.openMenuOnFocus, openMenuOnFocus = _e === void 0 ? true : _e, id = _a.id, inputValue = _a.inputValue, inputRef = _a.inputRef, _f = _a.isClearable, isClearable = _f === void 0 ? false : _f, _g = _a.isCreatable, isCreatable = _g === void 0 ? false : _g, _h = _a.isDeletable, isDeletable = _h === void 0 ? true : _h, _j = _a.isDisabled, isDisabled = _j === void 0 ? false : _j, _k = _a.isLoading, isLoading = _k === void 0 ? false : _k, _l = _a.isMulti, isMulti = _l === void 0 ? true : _l, _m = _a.isSearchable, isSearchable = _m === void 0 ? false : _m, _o = _a.maxMenuHeight, maxMenuHeight = _o === void 0 ? 300 : _o, name = _a.name, options = _a.options, placeholder = _a.placeholder, selectedData = _a.selectedData, isError = _a.isError, maxChar = _a.maxChar, onBlur = _a.onBlur, onChange = _a.onChange, onError = _a.onError, onFocus = _a.onFocus, onInputChange = _a.onInputChange;
    var classes = PriusMultipleSelectCss_1.priusMultipleSelectCss();
    if (isCreatable) {
        return (react_1.default.createElement(PriusCreatableSelect_1.default, { backspaceRemoveValue: backspaceRemoveValue, classes: classes, components: {
                ClearIndicator: null,
                Control: Control,
                MultiValue: MultiValue,
                Placeholder: Placeholder,
                SelectContainer: SelectContainer,
            }, isClearable: isClearable, isDeletable: isDeletable, isDisabled: isDisabled, placeholder: placeholder, onChange: onChange, onError: onError, selectedData: selectedData, id: id, maxChar: maxChar }));
    }
    return (react_1.default.createElement(react_select_1.default, { backspaceRemovesValue: backspaceRemoveValue, blurInputOnSelect: blurInputOnSelect, classes: classes, className: clsx_1.default(classes.container, className, isError ? classes.error : ''), closeMenuOnSelect: closeMenuOnSelect, components: {
            Control: Control,
            ClearIndicator: ClearIndicator,
            DropdownIndicator: DropdownIndicator,
            IndicatorSeparator: null,
            IndicatorsContainer: IndicatorsContainer,
            LoadingMessage: LoadingMessage,
            MultiValue: MultiValue,
            Menu: Menu,
            NoOptionsMessage: NoOptionsMessage,
            Option: Option,
            Placeholder: Placeholder,
            SelectContainer: SelectContainer,
            SingleValue: SingleValue,
            ValueContainer: ValueContainer,
        }, defaultInputValue: defaultInputValue, defaultValue: defaultValue, innerRef: inputRef, inputId: id, inputValue: inputValue, isClearable: isClearable, isDeletable: isDeletable, isDisabled: isDisabled, isFocus: true, isLoading: isLoading, isMulti: isMulti, isOpen: true, isSearchable: isSearchable, maxMenuHeight: maxMenuHeight, menuPortalTarget: document.body, name: name, onBlur: onBlur, onChange: onChange, onFocus: onFocus, onInputChange: onInputChange, openMenuOnFocus: openMenuOnFocus, options: options, placeholder: placeholder, styles: {
            menuPortal: function (base) { return (__assign(__assign({}, base), { zIndex: 1000, background: 'white', boxShadow: '0 7px 30px 0 rgba(0, 0, 0, 0.2)' })); },
        }, value: selectedData }));
}
exports.default = PriusMultipleSelect;
var NoOptionsMessage = function () { return react_1.default.createElement(core_1.MenuItem, { disabled: true }, "No Options"); };
var LoadingMessage = function () { return react_1.default.createElement(core_1.MenuItem, { disabled: true }, "Loading..."); };
var Control = function (_a) {
    var children = _a.children, selectProps = _a.selectProps, props = __rest(_a, ["children", "selectProps"]);
    return (react_1.default.createElement(react_select_1.components.Control, __assign({}, props, { className: selectProps.classes.control }), children));
};
var Option = function (_a) {
    var data = _a.data, isFocused = _a.isFocused, innerProps = _a.innerProps, innerRef = _a.innerRef;
    var _b, _c;
    var renderedChildren = data.labelElement || data.label;
    var divRef = react_1.useRef(null);
    if (((_b = divRef === null || divRef === void 0 ? void 0 : divRef.current) === null || _b === void 0 ? void 0 : _b.scrollWidth) > ((_c = divRef === null || divRef === void 0 ? void 0 : divRef.current) === null || _c === void 0 ? void 0 : _c.offsetWidth)) {
        data.open = true;
    }
    return (react_1.default.createElement(core_1.MenuItem, __assign({ buttonRef: innerRef, selected: isFocused, disabled: data.isDisabled }, innerProps), data.isDisabled && data.tooltipText ? (react_1.default.createElement(PriusTooltip_1.default, { placement: "top", title: data.tooltipText },
        react_1.default.createElement(core_1.Typography, { variant: "inherit", noWrap: true }, renderedChildren))) : (react_1.default.createElement(PriusTooltip_1.default, { placement: "top", title: data.renderedChildren, disableHoverListener: !data.open },
        react_1.default.createElement(core_1.Typography, { variant: "inherit", noWrap: true, ref: divRef }, renderedChildren)))));
};
var Placeholder = function (_a) {
    var children = _a.children, innerProps = _a.innerProps, selectProps = _a.selectProps, props = __rest(_a, ["children", "innerProps", "selectProps"]);
    return (react_1.default.createElement("span", { className: selectProps.classes.placeholder },
        react_1.default.createElement(react_select_1.components.Placeholder, __assign({}, innerProps, props), children)));
};
var ValueContainer = function (_a) {
    var selectProps = _a.selectProps, innerProps = __rest(_a, ["selectProps"]);
    return (react_1.default.createElement(react_select_1.components.ValueContainer, __assign({}, innerProps, { className: selectProps.classes.valueContainer })));
};
var Menu = function (_a) {
    var children = _a.children, innerProps = _a.innerProps, selectProps = _a.selectProps;
    return (react_1.default.createElement(core_1.Paper, __assign({ elevation: 0, className: selectProps.classes.menu }, innerProps), children));
};
var SelectContainer = function (_a) {
    var children = _a.children, isFocused = _a.isFocused, selectProps = _a.selectProps, props = __rest(_a, ["children", "isFocused", "selectProps"]);
    return (react_1.default.createElement("div", { className: clsx_1.default(selectProps.classes.selectContainer, isFocused && !selectProps.isCreatable
            ? selectProps.classes.selectContainerFocused
            : undefined) },
        react_1.default.createElement(react_select_1.components.SelectContainer, __assign({}, props), children)));
};
var MultiValue = function (_a) {
    var selectProps = _a.selectProps, removeProps = _a.removeProps, data = _a.data;
    var renderedChildren = data.labelElement || data.label;
    return (react_1.default.createElement(core_1.Chip, { tabIndex: -1, label: renderedChildren, className: selectProps.classes.chip, onDelete: selectProps.isDeletable ? removeProps.onClick : undefined, deleteIcon: react_1.default.createElement(icons_1.CloseIcon, null) }));
};
var SingleValue = function (_a) {
    var selectProps = _a.selectProps, innerProps = __rest(_a, ["selectProps"]);
    return (react_1.default.createElement(react_select_1.components.SingleValue, __assign({}, innerProps, { className: selectProps.classes.singleValue })));
};
var DropdownIndicator = function (_a) {
    var selectProps = _a.selectProps, innerProps = __rest(_a, ["selectProps"]);
    return (react_1.default.createElement(react_select_1.components.DropdownIndicator, __assign({}, innerProps, { className: selectProps.classes.dropdownIndicator }),
        react_1.default.createElement(icons_1.DropdownIcon, { className: selectProps.classes.iconIndicator })));
};
var ClearIndicator = function (_a) {
    var selectProps = _a.selectProps, innerProps = __rest(_a, ["selectProps"]);
    return (react_1.default.createElement(react_select_1.components.ClearIndicator, __assign({}, innerProps, { className: selectProps.classes.dropdownIndicator }),
        react_1.default.createElement(icons_1.CloseIcon, { className: selectProps.classes.iconIndicator })));
};
var IndicatorsContainer = function (_a) {
    var selectProps = _a.selectProps, innerProps = __rest(_a, ["selectProps"]);
    return (react_1.default.createElement(react_select_1.components.IndicatorsContainer, __assign({}, innerProps, { className: selectProps.classes.indicatorsContainer })));
};
