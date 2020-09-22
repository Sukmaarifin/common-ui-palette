import React from "react";
import clsx from "clsx";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  InputBase,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

export const styles = makeStyles((theme: Theme) => ({
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
    textAlignLast: "center", // Align <select> on Chrome.
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
}));

type pageInfoProperties = {
  totalItems: number; // total records
  itemPerPage: number; // total records per page
  pageNumber: number;
};

export type TablePaginationProps = {
  // label shown before option rows per page
  labelPerPage: string;
  // label to displayed current page rows from total rows
  pageInfo: pageInfoProperties;
  // options rows per page
  rowsPerPageOptions: Array<number>;
  // function handle change page
  onChangePage: (page: any) => void;
  // function handle change rows per page
  onChangeRowsPerPage: (rows: any) => void;
  //id for data-identity meta attribute
  paginationId?: string;
};

function TablePagination({
  labelPerPage,
  pageInfo,
  rowsPerPageOptions,
  onChangePage,
  onChangeRowsPerPage,
  paginationId,
}: TablePaginationProps) {
  const classes = styles();

  const minRowsPerPage: number = pageInfo.pageNumber * pageInfo.itemPerPage + 1;
  const maxRowsPerPage: number =
    (pageInfo.pageNumber + 1) * pageInfo.itemPerPage;

  const labelToDisplayedRows = (from: any, to: any, numOfRecords: any) =>
    `${from}-${to === -1 ? pageInfo.itemPerPage : to} of ${numOfRecords}`;

  return (
    <Toolbar>
      <div className={classes.spacer} />
      <Typography color="inherit" variant="body2" className={classes.caption}>
        {labelPerPage}
      </Typography>

      <Select
        classes={{
          select: classes.select,
          icon: classes.selectIcon,
        }}
        input={
          <InputBase className={clsx(classes.input, classes.selectRoot)} />
        }
        inputProps={{
          "data-identity": paginationId && `${paginationId}-input-rowsPerPage`,
        }}
        value={pageInfo.itemPerPage}
        onChange={(event) => onChangeRowsPerPage(event)}
      >
        {rowsPerPageOptions.map((value: number, index: number) => {
          return (
            <MenuItem
              className={classes.menuItem}
              key={index}
              value={value}
              data-identity={
                paginationId && `${paginationId}-list-selectPagination${value}`
              }
            >
              {value}
            </MenuItem>
          );
        })}
      </Select>

      <Typography
        color="inherit"
        variant="body2"
        className={classes.caption}
        style={{ marginRight: "1rem" }}
      >
        {labelToDisplayedRows(
          minRowsPerPage,
          maxRowsPerPage > pageInfo.totalItems
            ? pageInfo.totalItems
            : maxRowsPerPage,
          pageInfo.totalItems
        )}
      </Typography>

      <IconButton
        aria-label="delete"
        onClick={() => onChangePage("prev")}
        disabled={minRowsPerPage === 1}
        data-identity={paginationId && `${paginationId}-button-previousPage`}
      >
        <NavigateBeforeIcon />
      </IconButton>

      <IconButton
        aria-label="delete"
        onClick={() => onChangePage("next")}
        disabled={
          (maxRowsPerPage > pageInfo.totalItems
            ? pageInfo.totalItems
            : maxRowsPerPage) === pageInfo.totalItems
        }
        data-identity={paginationId && `${paginationId}-button-nextPage`}
      >
        <NavigateNextIcon />
      </IconButton>
    </Toolbar>
  );
}

export default TablePagination;
