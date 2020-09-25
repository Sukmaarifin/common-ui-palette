"use strict";
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
var core_1 = require("@material-ui/core");
var icons_1 = require("../../icons");
var PriusDatePicker_1 = __importDefault(require("../PriusDatePicker"));
var PriusBackdrop_1 = __importDefault(require("../PriusBackdrop"));
var PriusFilterCss_1 = require("./PriusFilterCss");
var PriusFilter = function (_a) {
    var date = _a.date, _b = _a.displayDate, displayDate = _b === void 0 ? false : _b, filterData = _a.filterData, onFilter = _a.onFilter, inputId = _a.inputId;
    var classes = PriusFilterCss_1.FilterCss();
    var _c = react_1.useState([]), filters = _c[0], setFilters = _c[1];
    var _d = react_1.useState([]), activeFilters = _d[0], setActiveFilters = _d[1];
    var _e = react_1.useState(false), displayChipDate = _e[0], setDisplayChipDate = _e[1];
    var _f = react_1.useState(), dateRange = _f[0], setDateRange = _f[1];
    // update `filters` if `filterData` is changed
    react_1.useEffect(function () {
        if (date && displayDate) {
            if ((date === null || date === void 0 ? void 0 : date.from) instanceof Date && (date === null || date === void 0 ? void 0 : date.to) instanceof Date) {
                setDateRange(convertDate(date));
                setDisplayChipDate(true);
            }
            else {
                setDateRange(undefined);
            }
        }
        if (filterData) {
            setFilters(filterData);
            var selectedFilters = filterData.filter(function (filterItem) { return filterItem.active === true; });
            setActiveFilters(selectedFilters);
        }
    }, [filterData, date, displayDate]);
    var handleCheckboxChange = function (event, field) {
        // `checked`: filter item's checked state
        // `value`: filter item's label
        var _a = event.currentTarget, checked = _a.checked, value = _a.value;
        // set `active=true` if filter is checked, otherwise set `active=false`
        var newFilterData = filters.map(function (filterItem) {
            // check selected field
            if (filterItem.field === field) {
                if (filterItem.label === value) {
                    return __assign(__assign({}, filterItem), { active: checked });
                }
                // if `isMulti` is not found or true this wouldn't be called
                if (filterItem.isMulti === false) {
                    return __assign(__assign({}, filterItem), { active: false });
                }
            }
            return filterItem;
        });
        setFilters(newFilterData);
    };
    var handleDateClick = function (from, to) {
        setDateRange(convertDate({ from: from, to: to }));
    };
    var handleActiveFiler = function (currentActiveFilters, currentDateRange) {
        var selectedFilters = currentActiveFilters.filter(function (filterItem) { return filterItem.active === true; });
        setActiveFilters(selectedFilters);
        if (currentDateRange) {
            setDisplayChipDate(true);
            onFilter(filters, currentDateRange);
        }
        else {
            setDisplayChipDate(false);
            onFilter(filters, undefined);
        }
    };
    var handleFilterDelete = function (label) {
        // set `active=false` for the deleted filter item
        var newFilterData = filters.map(function (filterItem) {
            if (filterItem.label === label) {
                filterItem.active = false;
            }
            return filterItem;
        });
        setFilters(newFilterData);
        if (label === 'filtered_date') {
            setDateRange(undefined);
            handleActiveFiler(newFilterData, undefined);
        }
        else {
            handleActiveFiler(newFilterData, dateRange);
        }
    };
    var handleSubmit = function (event) {
        // prevent default form submission that will trigger reload
        event.preventDefault();
        handleActiveFiler(filters, dateRange);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", null, "Filter dengan:"),
        /**
         * render active filter item as Chip
         */
        activeFilters.map(function (item, index) {
            return (react_1.default.createElement(core_1.Chip, { key: "filtered_" + item.field + "_" + index, label: item.label, onDelete: function () { return handleFilterDelete(item.label); }, deleteIcon: react_1.default.createElement(core_1.Icon, { "data-identity": inputId && inputId + "-iconButton-deleteFilter" + item.label }, "clear"), className: classes.chip }));
        }),
        /**
         * render selected date as Chip
         */
        displayChipDate && dateRange ? (react_1.default.createElement(core_1.Chip, { key: "filtered_date", label: dateRange.from.getDate() + "/" + (dateRange.from.getMonth() + 1) + "/" + dateRange.from.getFullYear() + " -\n            " + dateRange.to.getDate() + "/" + (dateRange.to.getMonth() + 1) + "/" + dateRange.to.getFullYear(), onDelete: function () { return handleFilterDelete('filtered_date'); }, deleteIcon: react_1.default.createElement(core_1.Icon, null, "clear"), className: classes.chip })) : null,
        react_1.default.createElement(PriusBackdrop_1.default, { popperId: 'dummy_prius_popper', placement: 'top-start', renderTrigger: function (anchorRef, handleToggle) { return (react_1.default.createElement(core_1.IconButton, { "aria-label": "add", "data-identity": inputId && inputId + "-iconButton-addFilter", size: "small", ref: anchorRef, onClick: handleToggle },
                react_1.default.createElement(icons_1.AddCircleOutlinedIcon, { fontSize: "inherit" }))); }, renderChildren: function (onClose) { return (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("form", { onSubmit: handleSubmit },
                    displayDate && (react_1.default.createElement("div", { className: classes.filterList },
                        react_1.default.createElement("div", { style: { display: 'block' } },
                            react_1.default.createElement("strong", null, "Tanggal")),
                        react_1.default.createElement("div", { style: { display: 'block' } },
                            react_1.default.createElement(PriusDatePicker_1.default, { selectedDays: dateRange, onDayClick: handleDateClick })))),
                    /**
                     * render each filter fields
                     */
                    generateFilterFields(filters).map(function (field, index) { return (react_1.default.createElement("ul", { key: index, className: classes.filterList },
                        react_1.default.createElement("li", { className: classes.filterListItem },
                            react_1.default.createElement("strong", null, field)),
                        /**
                         * render each filter item related to the field
                         */
                        filters
                            .filter(function (item) { return item.field === field; })
                            .map(function (item, itemIndex) { return (react_1.default.createElement("li", { key: itemIndex, className: classes.filterListItem },
                            react_1.default.createElement("div", { className: classes.filterCheckbox },
                                react_1.default.createElement("input", { name: "checkbox_option", value: item.label, "data-identity": inputId &&
                                        inputId + "-input-filter" + item.label, type: "checkbox", checked: item.active, id: "checkbox_" + item.field + "_" + itemIndex, onChange: function (event) { return handleCheckboxChange(event, item.field); } }),
                                react_1.default.createElement("label", { htmlFor: "checkbox_" + item.field + "_" + itemIndex }, item.label)))); }))); }),
                    react_1.default.createElement(core_1.Grid, { container: true, className: classes.filterActions, alignContent: "flex-end" },
                        react_1.default.createElement(core_1.Button, { "data-identity": inputId && inputId + "-button-closeFilter", variant: "contained", type: "button", color: "default", onClick: function (event) {
                                onClose(event);
                            } }, "Tutup"),
                        react_1.default.createElement(core_1.Button, { "data-identity": inputId && inputId + "-button-processFilter", variant: "contained", type: "submit", color: "primary", onClick: onClose }, "Proses"))))); } })));
};
exports.default = PriusFilter;
var generateFilterFields = function (filterItems) {
    return filterItems.reduce(function (fields, filterItem) {
        if (!fields.find(function (field) { return field === filterItem.field; })) {
            fields.push(filterItem.field);
        }
        return fields;
    }, []);
};
var convertDate = function (date) {
    var convertedDate = {
        from: new Date(date.from.setHours(0, 0, 0, 0)),
        to: new Date(date.to.setHours(23, 59, 59, 59)),
    };
    return convertedDate;
};
