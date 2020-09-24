import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase, IconButton, MenuItem, Select, Toolbar, Typography, } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
export var styles = makeStyles(function (theme) { return ({
    /* Styles applied to the root element. */
    root: {
        color: theme.palette.text.primary,
        fontSize: theme.typography.pxToRem(14),
        // Increase the specificity to override TableCell.
        "&:last-child": {
            padding: 0,
        },
    },
    /* Styles applied to the Toolbar component. */
    toolbar: {
        minHeight: 52,
        paddingRight: 2,
    },
    /* Styles applied to the spacer element. */
    spacer: {
        flex: "1 1 100%",
    },
    /* Styles applied to the caption Typography components if `variant="caption"`. */
    caption: {
        flexShrink: 0,
        fontSize: 10,
        fontFamily: "Metropolis",
    },
    /* Styles applied to the Select component root element. */
    selectRoot: {
        // `.selectRoot` should be merged with `.input` in v5.
        marginRight: 15,
        marginLeft: 5,
    },
    /* Styles applied to the Select component `select` class. */
    select: {
        fontSize: 10,
        fontFamily: "Metropolis",
        paddingLeft: 8,
        paddingRight: 18,
        textAlign: "right",
        textAlignLast: "center",
    },
    /* Styles applied to the Select component `icon` class. */
    selectIcon: {
        width: "1rem",
        top: "30%",
    },
    /* Styles applied to the `InputBase` component. */
    input: {
        color: "inherit",
        fontSize: "inherit",
        flexShrink: 0,
    },
    /* Styles applied to the MenuItem component. */
    menuItem: {
        fontSize: 10,
        fontFamily: "Metropolis",
        justifyContent: "center",
    },
    /* Styles applied to the internal `TablePaginationActions` component. */
    actions: {
        flexShrink: 0,
        marginLeft: 20,
    },
}); });
function TablePagination(_a) {
    var labelPerPage = _a.labelPerPage, pageInfo = _a.pageInfo, rowsPerPageOptions = _a.rowsPerPageOptions, onChangePage = _a.onChangePage, onChangeRowsPerPage = _a.onChangeRowsPerPage, paginationId = _a.paginationId;
    var classes = styles();
    var minRowsPerPage = pageInfo.pageNumber * pageInfo.itemPerPage + 1;
    var maxRowsPerPage = (pageInfo.pageNumber + 1) * pageInfo.itemPerPage;
    var labelToDisplayedRows = function (from, to, numOfRecords) {
        return from + "-" + (to === -1 ? pageInfo.itemPerPage : to) + " of " + numOfRecords;
    };
    return (React.createElement(Toolbar, null,
        React.createElement("div", { className: classes.spacer }),
        React.createElement(Typography, { color: "inherit", variant: "body2", className: classes.caption }, labelPerPage),
        React.createElement(Select, { classes: {
                select: classes.select,
                icon: classes.selectIcon,
            }, input: React.createElement(InputBase, { className: clsx(classes.input, classes.selectRoot) }), inputProps: {
                "data-identity": paginationId && paginationId + "-input-rowsPerPage",
            }, value: pageInfo.itemPerPage, onChange: function (event) { return onChangeRowsPerPage(event); } }, rowsPerPageOptions.map(function (value, index) {
            return (React.createElement(MenuItem, { className: classes.menuItem, key: index, value: value, "data-identity": paginationId && paginationId + "-list-selectPagination" + value }, value));
        })),
        React.createElement(Typography, { color: "inherit", variant: "body2", className: classes.caption, style: { marginRight: "1rem" } }, labelToDisplayedRows(minRowsPerPage, maxRowsPerPage > pageInfo.totalItems
            ? pageInfo.totalItems
            : maxRowsPerPage, pageInfo.totalItems)),
        React.createElement(IconButton, { "aria-label": "delete", onClick: function () { return onChangePage("prev"); }, disabled: minRowsPerPage === 1, "data-identity": paginationId && paginationId + "-button-previousPage" },
            React.createElement(NavigateBeforeIcon, null)),
        React.createElement(IconButton, { "aria-label": "delete", onClick: function () { return onChangePage("next"); }, disabled: (maxRowsPerPage > pageInfo.totalItems
                ? pageInfo.totalItems
                : maxRowsPerPage) === pageInfo.totalItems, "data-identity": paginationId && paginationId + "-button-nextPage" },
            React.createElement(NavigateNextIcon, null))));
}
export default TablePagination;
