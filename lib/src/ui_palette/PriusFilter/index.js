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
import React, { useState, useEffect } from "react";
import { Button, Chip, Grid, Icon, IconButton } from "@material-ui/core";
import { AddCircleOutlinedIcon } from "../../icons";
import DatePicker from "../PriusDatePicker";
import PriusBackdrop from "../PriusBackdrop";
import { FilterCss } from "./FilterCss";
var PriusFilter = function (_a) {
    var date = _a.date, _b = _a.displayDate, displayDate = _b === void 0 ? false : _b, filterData = _a.filterData, onFilter = _a.onFilter, inputId = _a.inputId;
    var classes = FilterCss();
    var _c = useState([]), filters = _c[0], setFilters = _c[1];
    var _d = useState([]), activeFilters = _d[0], setActiveFilters = _d[1];
    var _e = useState(false), displayChipDate = _e[0], setDisplayChipDate = _e[1];
    var _f = useState(), dateRange = _f[0], setDateRange = _f[1];
    // update `filters` if `filterData` is changed
    useEffect(function () {
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
        if (label === "filtered_date") {
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
    return (React.createElement("div", null,
        React.createElement("span", null, "Filter dengan:"),
        /**
         * render active filter item as Chip
         */
        activeFilters.map(function (item, index) {
            return (React.createElement(Chip, { key: "filtered_" + item.field + "_" + index, label: item.label, onDelete: function () { return handleFilterDelete(item.label); }, deleteIcon: React.createElement(Icon, { "data-identity": inputId && inputId + "-iconButton-deleteFilter" + item.label }, "clear"), className: classes.chip }));
        }),
        /**
         * render selected date as Chip
         */
        displayChipDate && dateRange ? (React.createElement(Chip, { key: "filtered_date", label: dateRange.from.getDate() + "/" + (dateRange.from.getMonth() + 1) + "/" + dateRange.from.getFullYear() + " -\n            " + dateRange.to.getDate() + "/" + (dateRange.to.getMonth() + 1) + "/" + dateRange.to.getFullYear(), onDelete: function () { return handleFilterDelete("filtered_date"); }, deleteIcon: React.createElement(Icon, null, "clear"), className: classes.chip })) : null,
        React.createElement(PriusBackdrop, { popperId: "dummy_prius_popper", placement: "top-start", renderTrigger: function (anchorRef, handleToggle) { return (React.createElement(IconButton, { "aria-label": "add", "data-identity": inputId && inputId + "-iconButton-addFilter", size: "small", ref: anchorRef, onClick: handleToggle },
                React.createElement(AddCircleOutlinedIcon, { fontSize: "inherit" }))); }, renderChildren: function (onClose) { return (React.createElement(React.Fragment, null,
                React.createElement("form", { onSubmit: handleSubmit },
                    displayDate && (React.createElement("div", { className: classes.filterList },
                        React.createElement("div", { style: { display: "block" } },
                            React.createElement("strong", null, "Tanggal")),
                        React.createElement("div", { style: { display: "block" } },
                            React.createElement(DatePicker, { selectedDays: dateRange, onDayClick: handleDateClick })))),
                    /**
                     * render each filter fields
                     */
                    generateFilterFields(filters).map(function (field, index) { return (React.createElement("ul", { key: index, className: classes.filterList },
                        React.createElement("li", { className: classes.filterListItem },
                            React.createElement("strong", null, field)),
                        /**
                         * render each filter item related to the field
                         */
                        filters
                            .filter(function (item) { return item.field === field; })
                            .map(function (item, itemIndex) { return (React.createElement("li", { key: itemIndex, className: classes.filterListItem },
                            React.createElement("div", { className: classes.filterCheckbox },
                                React.createElement("input", { name: "checkbox_option", value: item.label, "data-identity": inputId &&
                                        inputId + "-input-filter" + item.label, type: "checkbox", checked: item.active, id: "checkbox_" + item.field + "_" + itemIndex, onChange: function (event) { return handleCheckboxChange(event, item.field); } }),
                                React.createElement("label", { htmlFor: "checkbox_" + item.field + "_" + itemIndex }, item.label)))); }))); }),
                    React.createElement(Grid, { container: true, className: classes.filterActions, alignContent: "flex-end" },
                        React.createElement(Button, { "data-identity": inputId && inputId + "-button-closeFilter", variant: "contained", type: "button", color: "default", onClick: function (event) {
                                onClose(event);
                            } }, "Tutup"),
                        React.createElement(Button, { "data-identity": inputId && inputId + "-button-processFilter", variant: "contained", type: "submit", color: "primary", onClick: onClose }, "Proses"))))); } })));
};
export default PriusFilter;
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
