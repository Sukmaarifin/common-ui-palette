"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var ArrowDownward_1 = __importDefault(require("@material-ui/icons/ArrowDownward"));
var ArrowUpward_1 = __importDefault(require("@material-ui/icons/ArrowUpward"));
var TableRow_1 = __importDefault(require("./TableRow"));
var PriusTableCss_1 = require("./PriusTableCss");
var TablePagination_1 = __importDefault(require("./TablePagination"));
var PriusButtonText_1 = __importDefault(require("../PriusButtonText"));
var PriusCheckbox_1 = __importDefault(require("../PriusCheckbox"));
var PriusTable = /** @class */ (function (_super) {
    __extends(PriusTable, _super);
    function PriusTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            expandedRow: -1,
            selectedRows: _this.props.selectedRows || [],
            rowsPerPage: 25,
            page: 0,
        };
        _this.handleExpand = function (rowId) {
            _this.setState({
                expandedRow: _this.state.expandedRow === rowId ? -1 : rowId,
            });
        };
        _this.handleSelectToggle = function (rowId) {
            var selectedRows = _this.state.selectedRows;
            if (selectedRows.indexOf(rowId) >= 0) {
                selectedRows = selectedRows.filter(function (index) { return index !== rowId; });
            }
            else {
                selectedRows.push(rowId);
            }
            _this.setState({ selectedRows: selectedRows });
            if (typeof _this.props.onSelect === "function")
                _this.props.onSelect(selectedRows);
        };
        _this.handleSelectAllToggle = function (event) {
            var selectedRows = event.target.checked
                ? _this.props.records.map(function (record, index) { return index; })
                : [];
            _this.setState({ selectedRows: selectedRows });
            if (typeof _this.props.onSelect === "function")
                _this.props.onSelect(selectedRows);
        };
        return _this;
    }
    PriusTable.prototype.render = function () {
        var _this = this;
        var _a = this.props, burgerFields = _a.burgerFields, classes = _a.classes, collapsedFields = _a.collapsedFields, collapsedRecords = _a.collapsedRecords, fields = _a.fields, filterPublishedRow = _a.filterPublishedRow, isSelectable = _a.isSelectable, pagination = _a.pagination, records = _a.records, sortedBy = _a.sortedBy, type = _a.type, handleSort = _a.handleSort, renderActionHeader = _a.renderActionHeader, id = _a.id, placeholder = _a.placeholder;
        var _b = this.state, expandedRow = _b.expandedRow, selectedRows = _b.selectedRows;
        var hasRightToolbar = (collapsedFields && collapsedRecords) || burgerFields ? true : false;
        // get header data
        var headers = fields.map(function (field) {
            return react_1.default.isValidElement(field)
                ? {
                    fixedWidth: field.props.fixedWidth,
                    sortOption: field.props.sortOption,
                    title: field.props.title,
                    width: field.props.width,
                }
                : {};
        });
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Grid, { container: true, wrap: "nowrap", className: clsx_1.default(type === "card" ? classes.flexRowCard : classes.flexRowDense, classes.header) },
                /*
                 * render select all
                 */
                isSelectable && (react_1.default.createElement(core_1.Grid, { item: true, className: clsx_1.default(classes.toolbar, "left") },
                    react_1.default.createElement(PriusCheckbox_1.default, { id: id && id + "-checkbox-selectAll", checked: selectedRows.length === records.length, value: "SELECT_ALL", inputProps: {
                            "aria-label": "select",
                            "data-identity": id && id + "-checkbox-selectAll",
                        }, onChange: function (event) {
                            return _this.handleSelectAllToggle(event);
                        } }))),
                /*
                 * render header
                 */
                selectedRows.length > 0 && renderActionHeader ? (react_1.default.createElement(core_1.Grid, { item: true, className: classes.actionHeader },
                    react_1.default.createElement("span", { className: classes.selectedCount }, selectedRows.length + " Item Dipilih"),
                    renderActionHeader(selectedRows))) : (headers.map(function (header, index) { return (react_1.default.createElement(core_1.Grid, { item: true, key: index, style: {
                        flexBasis: header.fixedWidth
                            ? header.fixedWidth
                            : header.width,
                        flexShrink: header.fixedWidth ? 0 : 1,
                    }, className: classes.headerColumn }, handleSort && header.sortOption && sortedBy ? (react_1.default.createElement(PriusButtonText_1.default, { className: clsx_1.default(classes.headerButton, header.sortOption.fieldName === sortedBy.fieldName &&
                        "active"), endIcon: header.sortOption.fieldName === sortedBy.fieldName &&
                        (sortedBy.isAscending ? (react_1.default.createElement(ArrowUpward_1.default, null)) : (react_1.default.createElement(ArrowDownward_1.default, null))), onClick: function () {
                        if (header.sortOption) {
                            handleSort(header.sortOption);
                        }
                    }, inputId: id }, header.title)) : (react_1.default.createElement("span", null, header.title)))); })),
                /*
                 * Extra space to align headers
                 */
                hasRightToolbar && react_1.default.createElement(core_1.Grid, { item: true, className: classes.toolbar })),
            react_1.default.createElement("hr", { className: classes.divider }),
            /*
             * render rows
             */
            records && records.length > 0 ? (records.map(function (record, index) { return (react_1.default.createElement(TableRow_1.default, { filterPublished: filterPublishedRow, collapsedFields: collapsedFields ? collapsedFields : [], collapsedRecordsPerRow: collapsedRecords ? collapsedRecords[index] : [], fields: fields, isSelected: selectedRows.indexOf(index) >= 0, isExpanded: expandedRow === index, key: index, menuData: burgerFields ? burgerFields : [], record: record, type: type, handleExpandToggle: function () { return _this.handleExpand(index); }, handleSelectToggle: isSelectable
                    ? function () {
                        _this.handleSelectToggle(index);
                    }
                    : undefined, rowId: id })); })) : (react_1.default.createElement(core_1.Grid, { item: true, className: classes.emptyData }, placeholder
                ? placeholder
                : "Tidak ditemukan data untuk ditampilkan")),
            pagination && (react_1.default.createElement(TablePagination_1.default, { labelPerPage: pagination.labelPerPage, rowsPerPageOptions: pagination.rowsPerPageOptions, pageInfo: pagination.pageInfo, onChangePage: pagination.handlePage, onChangeRowsPerPage: pagination.handleRowsPerPage, paginationId: id }))));
    };
    return PriusTable;
}(react_1.default.Component));
exports.PriusTable = PriusTable;
exports.default = core_1.withStyles(PriusTableCss_1.PriusTableCss)(PriusTable);
