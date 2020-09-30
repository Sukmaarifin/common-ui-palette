import React from 'react';
import clsx from 'clsx';
import { withStyles, Grid } from '@material-ui/core';
import { WithStyles } from '@material-ui/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import TableRow, { RowData } from './TableRow';
import { PriusTableCss } from './PriusTableCss';
import TablePagination from './TablePagination';
import ButtonText from '../ButtonText';
import { SortDataType } from './types';
import PriusCheckbox from '../PriusCheckbox';

export type TableHeaderData = {
  fixedWidth?: string;
  sortOption?: SortDataType;
  title?: string;
  width?: string;
};

/**
 * @DEPRECATED
 * Use PaginationType instead
 */
export type PaginationProperties = PaginationType;

export type PaginationType = {
  labelPerPage: string;
  rowsPerPageOptions: Array<number>;
  pageInfo: any;
  handlePage: (page: string) => void;
  handleRowsPerPage: (rows: any) => void;
};

export interface TableData extends RowData {
  collapseData?: Array<{ [key: string]: any }>;
}

export type TableType = 'card' | 'dense';

export type PriusTableState = {
  // expanded rows index, -1 means no expanded rows
  expandedRow: number;
  // selected rows index
  selectedRows: Array<number>;
  // selected rows per page
  rowsPerPage: number;
  // selected page
  page: number;
};

export type PriusTableBaseProps = {
  // field inside burger button
  burgerFields?: Array<any>;
  // fields type of collapsed element
  collapsedFields?: Array<React.ReactNode>;
  // all collapsed data
  collapsedRecords?: Array<Array<{ [key: string]: any }>>;
  // fields type of row element
  fields: Array<React.ReactElement>;
  // filter published row by checking its property
  filterPublishedRow?: string;
  // if true, show the select all on header and select row on TableRow
  isSelectable?: boolean;
  // pagination properties that'll be passed to <TablePagination/>
  pagination?: PaginationProperties;
  // all data
  records: Array<{ [key: string]: any }>;
  // selected rows
  selectedRows?: Array<number>;
  // current sort
  sortedBy?: SortDataType;
  // table styling
  type: TableType;
  // sorting callback
  handleSort?: (sortedBy: SortDataType) => void;
  // invoked on row select
  onSelect?: (selectedRows: Array<number>) => void;
  // render props for action header
  renderActionHeader?: (selectedRows: Array<number>) => React.ReactElement;
  //id for data-identity meta attribute
  id?: string;
  //placeholder when data empty
  placeholder?: string;
};

export type PriusTableProps = PriusTableBaseProps &
  WithStyles<typeof PriusTableCss>;

export class PriusTable extends React.Component<
  PriusTableProps,
  PriusTableState
> {
  state: PriusTableState = {
    expandedRow: -1,
    selectedRows: this.props.selectedRows || [],
    rowsPerPage: 25,
    page: 0,
  };

  handleExpand = (rowId: number) => {
    this.setState({
      expandedRow: this.state.expandedRow === rowId ? -1 : rowId,
    });
  };

  handleSelectToggle = (rowId: number) => {
    let selectedRows = this.state.selectedRows;

    if (selectedRows.indexOf(rowId) >= 0) {
      selectedRows = selectedRows.filter((index) => index !== rowId);
    } else {
      selectedRows.push(rowId);
    }

    this.setState({ selectedRows });

    if (typeof this.props.onSelect === 'function')
      this.props.onSelect(selectedRows);
  };

  handleSelectAllToggle = (event: React.ChangeEvent<HTMLInputElement>) => {
    let selectedRows: Array<number> = event.target.checked
      ? this.props.records.map((record, index) => index)
      : [];
    this.setState({ selectedRows });

    if (typeof this.props.onSelect === 'function')
      this.props.onSelect(selectedRows);
  };

  render() {
    const {
      burgerFields,
      classes,
      collapsedFields,
      collapsedRecords,
      fields,
      filterPublishedRow,
      isSelectable,
      pagination,
      records,
      sortedBy,
      type,
      handleSort,
      renderActionHeader,
      id,
      placeholder,
    } = this.props;
    const { expandedRow, selectedRows } = this.state;

    const hasRightToolbar =
      (collapsedFields && collapsedRecords) || burgerFields ? true : false;

    // get header data
    const headers: Array<TableHeaderData> = fields.map(
      (field: React.ReactNode) =>
        React.isValidElement(field)
          ? {
              fixedWidth: field.props.fixedWidth,
              sortOption: field.props.sortOption,
              title: field.props.title,
              width: field.props.width,
            }
          : {}
    );

    return (
      <>
        <Grid
          container
          wrap="nowrap"
          className={clsx(
            type === 'card' ? classes.flexRowCard : classes.flexRowDense,
            classes.header
          )}
        >
          {
            /*
             * render select all
             */
            isSelectable && (
              <Grid item className={clsx(classes.toolbar, 'left')}>
                <PriusCheckbox
                  id={id && `${id}-checkbox-selectAll`}
                  checked={selectedRows.length === records.length}
                  value="SELECT_ALL"
                  inputProps={
                    {
                      'aria-label': 'select',
                      'data-identity': id && `${id}-checkbox-selectAll`,
                    } as React.InputHTMLAttributes<HTMLInputElement>
                  }
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    this.handleSelectAllToggle(event)
                  }
                />
              </Grid>
            )
          }

          {
            /*
             * render header
             */
            selectedRows.length > 0 && renderActionHeader ? (
              <Grid item className={classes.actionHeader}>
                <span
                  className={classes.selectedCount}
                >{`${selectedRows.length} Item Dipilih`}</span>
                {renderActionHeader(selectedRows)}
              </Grid>
            ) : (
              headers.map((header, index) => (
                <Grid
                  item
                  key={index}
                  style={{
                    flexBasis: header.fixedWidth
                      ? header.fixedWidth
                      : header.width,
                    flexShrink: header.fixedWidth ? 0 : 1,
                  }}
                  className={classes.headerColumn}
                >
                  {handleSort && header.sortOption && sortedBy ? (
                    <ButtonText
                      className={clsx(
                        classes.headerButton,
                        header.sortOption.fieldName === sortedBy.fieldName &&
                          'active'
                      )}
                      endIcon={
                        header.sortOption.fieldName === sortedBy.fieldName &&
                        (sortedBy.isAscending ? (
                          <ArrowUpwardIcon />
                        ) : (
                          <ArrowDownwardIcon />
                        ))
                      }
                      onClick={() => {
                        if (header.sortOption) {
                          handleSort(header.sortOption);
                        }
                      }}
                      inputId={id}
                    >
                      {header.title}
                    </ButtonText>
                  ) : (
                    <span>{header.title}</span>
                  )}
                </Grid>
              ))
            )
          }

          {
            /*
             * Extra space to align headers
             */
            hasRightToolbar && <Grid item className={classes.toolbar} />
          }
        </Grid>

        <hr className={classes.divider} />

        {
          /*
           * render rows
           */
          records && records.length > 0 ? (
            records.map((record, index) => (
              <TableRow
                filterPublished={filterPublishedRow}
                collapsedFields={collapsedFields ? collapsedFields : []}
                collapsedRecordsPerRow={
                  collapsedRecords ? collapsedRecords[index] : []
                }
                fields={fields}
                isSelected={selectedRows.indexOf(index) >= 0}
                isExpanded={expandedRow === index}
                key={index}
                menuData={burgerFields ? burgerFields : []}
                record={record}
                type={type}
                handleExpandToggle={() => this.handleExpand(index)}
                handleSelectToggle={
                  isSelectable
                    ? () => {
                        this.handleSelectToggle(index);
                      }
                    : undefined
                }
                rowId={id}
              />
            ))
          ) : (
            <Grid item className={classes.emptyData}>
              {placeholder
                ? placeholder
                : 'Tidak ditemukan data untuk ditampilkan'}
            </Grid>
          )
        }

        {pagination && (
          <TablePagination
            labelPerPage={pagination.labelPerPage}
            rowsPerPageOptions={pagination.rowsPerPageOptions}
            pageInfo={pagination.pageInfo}
            onChangePage={pagination.handlePage}
            onChangeRowsPerPage={pagination.handleRowsPerPage}
            paginationId={id}
          />
        )}
      </>
    );
  }
}

export default withStyles(PriusTableCss)(PriusTable);
