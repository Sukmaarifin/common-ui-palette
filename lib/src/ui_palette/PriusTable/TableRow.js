/**
 * @todo
 * [ ] Handle menuData for burgerFields and its onClick actions
 */
import React from "react";
import clsx from "clsx";
import get from "lodash/get";
import { Collapse, Grid, IconButton, Paper, Typography, } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import PriusOption from "../../ui_palette/PriusOption";
import PriusCheckbox from "../../ui_palette/PriusCheckbox";
export var useStyles = makeStyles(function (theme) {
    return createStyles({
        row: {
            padding: "1rem 2.5rem",
            alignItems: "center",
            position: "relative",
            // zIndex: 2,
            "&:hover, &:active": {
                boxShadow: "none",
            },
        },
        rowDense: {
            padding: "1rem",
            borderBottom: "1px solid #fafafa",
        },
        rowCard: {
            margin: "1rem 0",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.04)",
            borderRadius: "0.1875rem",
        },
        cell: {
            padding: "1.125rem 0",
        },
        collapse: {
            "& .MuiCollapse-wrapperInner": {
                padding: "0 2.5rem 1.5rem 2.5rem",
            },
        },
        collapsedRow: {
            height: "3.375rem",
            borderBottom: "solid 1px " + theme.colors.grey4,
            "&:last-child > [class*='lineContainer'] > span:last-child": {
                border: "none",
            },
        },
        collapsedHeader: {
            padding: "0 0.8rem 0.4rem",
            borderBottom: "solid 1px " + theme.colors.grey4,
            "&:last-child": {
                borderBottom: "solid 1px black",
                flexShrink: 0,
                paddingLeft: "0.8rem",
            },
        },
        lineContainer: {
            "&> span": {
                width: "50%",
                height: "50%",
                display: "block",
                marginLeft: "auto",
                borderLeft: "1px solid #ededed",
                "&:first-child": {
                    borderBottom: "1px solid #ededed",
                },
            },
        },
        unpublished: {
            position: "relative",
            // zIndex: 2,
            "&:before": {
                // zIndex: 1,
                position: "absolute",
                backgroundColor: "#fafafa",
                opacity: "0.6",
                content: '""',
                width: "100%",
                left: "0",
                height: "100%",
                display: "block",
            },
        },
        toolbar: {
            flex: "2.625rem 0 0",
            display: "flex",
            zIndex: 99,
            position: "relative",
            "&.left": {
                justifyContent: "flex-start",
            },
            "&.right": {
                justifyContent: "flex-end",
            },
        },
        spacing: {
            margin: "0.75rem 0",
        },
    });
});
var TableRow = function (_a) {
    var collapsedFields = _a.collapsedFields, collapsedRecordsPerRow = _a.collapsedRecordsPerRow, fields = _a.fields, filterPublished = _a.filterPublished, isExpanded = _a.isExpanded, isSelected = _a.isSelected, menuData = _a.menuData, record = _a.record, type = _a.type, handleExpandToggle = _a.handleExpandToggle, handleSelectToggle = _a.handleSelectToggle, rowId = _a.rowId;
    var classes = useStyles();
    var isExpandable = (collapsedRecordsPerRow === null || collapsedRecordsPerRow === void 0 ? void 0 : collapsedRecordsPerRow.length) > 0 &&
        (collapsedFields === null || collapsedFields === void 0 ? void 0 : collapsedFields.length) > 0 &&
        typeof handleExpandToggle === "function";
    var isSelectable = typeof handleSelectToggle === "function";
    // check data status as if row is disabled or not
    var isRowPublished = true;
    if (filterPublished) {
        isRowPublished = get(record, filterPublished);
    }
    var handleExpandRow = function (e) {
        e.stopPropagation();
        handleExpandToggle();
    };
    return (React.createElement(Paper, { square: true, elevation: 0, className: type === "card" ? classes.rowCard : undefined },
        React.createElement(Grid, { container: true, className: clsx(classes.row, !isRowPublished ? classes.unpublished : null, type === "dense" ? classes.rowDense : null), wrap: "nowrap", onClick: function () { return isExpandable && handleExpandToggle(); }, style: { cursor: "" + (isExpandable ? "pointer" : "default") } },
            /*
             * Render checkbox
             */
            isSelectable && (React.createElement(Grid, { item: true, className: clsx(classes.toolbar, "left") },
                React.createElement(PriusCheckbox, { id: rowId && rowId + "-checkbox-selectRowToggle", checked: isSelected, value: "CHECK_ROW", onChange: handleSelectToggle, onClick: function (e) {
                        return e.stopPropagation();
                    }, inputProps: {
                        "aria-label": "select",
                        "data-identity": rowId && rowId + "-checkbox-selectRowToggle",
                    } }))),
            React.createElement(Grid, { item: true, container: true, wrap: "nowrap" }, 
            /*
             * Render each column
             * map through `fields` props
             * return each field with injected `record` props
             */
            fields.map(function (field, index) {
                return React.isValidElement(field)
                    ? React.cloneElement(field, {
                        key: index,
                        record: record,
                    })
                    : null;
            })),
            /*
             * Render collapse toggle button
             */
            isExpandable && (React.createElement(Grid, { item: true, style: { marginLeft: "auto", zIndex: 99, position: "relative" }, className: clsx(classes.toolbar, "right") },
                React.createElement(IconButton, { "aria-label": "delete", size: "medium", onClick: handleExpandRow, "data-identity": rowId && rowId + "-iconButton-collapseToggle" }, isExpanded ? (React.createElement(KeyboardArrowUpIcon, null)) : (React.createElement(KeyboardArrowDownIcon, null))))),
            /*
             * Render burger button
             */
            !isExpandable && menuData.length > 0 && (React.createElement(Grid, { item: true, style: { marginLeft: "auto" }, className: classes.toolbar },
                React.createElement(PriusOption, { icon: "vertical", items: menuData })))),
        isExpandable && (React.createElement(Collapse, { in: isExpanded, className: clsx(classes.collapse, !isRowPublished ? classes.unpublished : null), mountOnEnter: true },
            React.createElement(Grid, { container: true, wrap: "nowrap" },
                React.createElement(Grid, { item: true, className: classes.toolbar }),
                React.createElement(Grid, { item: true, container: true, className: classes.spacing },
                    /**
                     * Render header in collapsed data
                     */
                    React.createElement(Grid, { container: true, wrap: "nowrap", className: classes.collapsedHeader }, collapsedFields.map(function (field, idx) {
                        var props = field.props;
                        if (!(props === null || props === void 0 ? void 0 : props.icon)) {
                            return (React.createElement(Grid, { item: true, key: idx, style: props },
                                React.createElement(Typography, { variant: "body2", color: "primary" }, props.title)));
                        }
                        return null;
                    })),
                    /*
                     * Render each row in collapsed container
                     */
                    collapsedRecordsPerRow.map(function (dtRecord, index) { return (React.createElement(Grid, { container: true, wrap: "nowrap", key: index, className: classes.collapsedRow }, 
                    /*
                     * Render each column
                     * map through `fields` props
                     * return each field with injected `record` props
                     */
                    collapsedFields.map(function (field, idx) {
                        return React.isValidElement(field)
                            ? React.cloneElement(field, {
                                key: idx,
                                record: dtRecord,
                                isPublished: isRowPublished,
                            })
                            : null;
                    }))); })))))));
};
export default TableRow;
