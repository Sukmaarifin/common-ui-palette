/**
 * @todo
 * [ ] Handle menuData for burgerFields and its onClick actions
 */

import React from 'react';
import clsx from 'clsx';
import get from 'lodash/get';
import {
  Collapse,
  Grid,
  IconButton,
  Paper,
  Typography,
  Theme,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import Option from '../Option';
import Checkbox from '../Checkbox';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      padding: '1rem 2.5rem',
      alignItems: 'center',
      position: 'relative',
      // zIndex: 2,
      '&:hover, &:active': {
        boxShadow: 'none',
      },
    },
    rowDense: {
      padding: '1rem',
      borderBottom: '1px solid #fafafa',
    },
    rowCard: {
      margin: '1rem 0',
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.04)',
      borderRadius: '0.1875rem', // ~3px
    },
    cell: {
      padding: '1.125rem 0',
    },
    collapse: {
      '& .MuiCollapse-wrapperInner': {
        padding: '0 2.5rem 1.5rem 2.5rem',
      },
    },
    collapsedRow: {
      height: '3.375rem', // ~54px
      borderBottom: `solid 1px ${theme.colors.grey4}`,
      "&:last-child > [class*='lineContainer'] > span:last-child": {
        border: 'none',
      },
    },
    collapsedHeader: {
      padding: '0 0.8rem 0.4rem',
      borderBottom: `solid 1px ${theme.colors.grey4}`,
      '&:last-child': {
        borderBottom: 'solid 1px black',
        flexShrink: 0,
        paddingLeft: '0.8rem',
      },
    },
    lineContainer: {
      '&> span': {
        width: '50%',
        height: '50%',
        display: 'block',
        marginLeft: 'auto',
        borderLeft: '1px solid #ededed',
        '&:first-child': {
          borderBottom: '1px solid #ededed',
        },
      },
    },
    unpublished: {
      position: 'relative',
      // zIndex: 2,
      '&:before': {
        // zIndex: 1,
        position: 'absolute',
        backgroundColor: '#fafafa',
        opacity: '0.6',
        content: '""',
        width: '100%',
        left: '0',
        height: '100%',
        display: 'block',
      },
    },
    toolbar: {
      flex: '2.625rem 0 0',
      display: 'flex',
      zIndex: 99,
      position: 'relative',
      '&.left': {
        justifyContent: 'flex-start',
      },
      '&.right': {
        justifyContent: 'flex-end',
      },
    },
    spacing: {
      margin: '0.75rem 0',
    },
  })
);

export type CollapsedData = {
  data: Array<any>;
  id: number;
};

export type RowData = {
  id: string;
  active: boolean;
  data: Array<any>;
};

export type TableRowProps = {
  // types of field for collapsed data
  collapsedFields: Array<React.ReactNode>;
  // collapsed data for each row
  collapsedRecordsPerRow: any;
  // types of field
  fields: Array<React.ReactElement>;
  // property that applies filter disabled
  filterPublished?: string;
  // if true, rows should be expanded
  isExpanded: boolean;
  // if true, rows should be selected
  isSelected: boolean;
  // if available, render the burger button
  menuData: Array<any>;
  // single data
  record: any;
  // table style
  type: 'dense' | 'card';
  /*
   * Handle expand toggling
   * Forwarded from parent.
   * If defined, render button expand toggling
   */
  handleExpandToggle: () => void;
  /*
   * Handle checkbox toggling
   * Forwarded from parent.
   * If defined, render checkbox
   */
  handleSelectToggle?: (event: any) => void;
  //id for data-identity meta attribute
  rowId?: string;
};

const TableRow = ({
  collapsedFields,
  collapsedRecordsPerRow,
  fields,
  filterPublished,
  isExpanded,
  isSelected,
  menuData,
  record,
  type,
  handleExpandToggle,
  handleSelectToggle,
  rowId,
}: TableRowProps) => {
  const classes = useStyles();

  const isExpandable =
    collapsedRecordsPerRow?.length > 0 &&
    collapsedFields?.length > 0 &&
    typeof handleExpandToggle === 'function';

  const isSelectable = typeof handleSelectToggle === 'function';

  // check data status as if row is disabled or not
  let isRowPublished = true;
  if (filterPublished) {
    isRowPublished = get(record, filterPublished);
  }

  const handleExpandRow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleExpandToggle();
  };

  return (
    <Paper
      square
      elevation={0}
      className={type === 'card' ? classes.rowCard : undefined}
    >
      {/* MAIN ROW CONTAINER */}
      <Grid
        container
        className={clsx(
          classes.row,
          !isRowPublished ? classes.unpublished : null,
          type === 'dense' ? classes.rowDense : null
        )}
        wrap="nowrap"
        onClick={() => isExpandable && handleExpandToggle()}
        style={{ cursor: `${isExpandable ? 'pointer' : 'default'}` }}
      >
        {
          /*
           * Render checkbox
           */
          isSelectable && (
            <Grid item className={clsx(classes.toolbar, 'left')}>
              <Checkbox
                id={rowId && `${rowId}-checkbox-selectRowToggle`}
                checked={isSelected}
                value="CHECK_ROW"
                onChange={handleSelectToggle}
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  e.stopPropagation()
                }
                inputProps={
                  {
                    'aria-label': 'select',
                    'data-identity':
                      rowId && `${rowId}-checkbox-selectRowToggle`,
                  } as React.InputHTMLAttributes<HTMLInputElement>
                }
              />
            </Grid>
          )
        }

        <Grid item container wrap="nowrap">
          {
            /*
             * Render each column
             * map through `fields` props
             * return each field with injected `record` props
             */
            fields.map((field: React.ReactNode, index: number) =>
              React.isValidElement(field)
                ? React.cloneElement(field, {
                    key: index,
                    record,
                  })
                : null
            )
          }
        </Grid>

        {
          /*
           * Render collapse toggle button
           */
          isExpandable && (
            <Grid
              item
              style={{ marginLeft: 'auto', zIndex: 99, position: 'relative' }}
              className={clsx(classes.toolbar, 'right')}
            >
              <IconButton
                aria-label="delete"
                size="medium"
                onClick={handleExpandRow}
                data-identity={rowId && `${rowId}-iconButton-collapseToggle`}
              >
                {isExpanded ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Grid>
          )
        }

        {
          /*
           * Render burger button
           */
          !isExpandable && menuData.length > 0 && (
            <Grid
              item
              style={{ marginLeft: 'auto' }}
              className={classes.toolbar}
            >
              <Option
                icon="vertical"
                items={menuData}
                //TO DO: handle click actions
              />
            </Grid>
          )
        }
      </Grid>
      {/* END: MAIN ROW CONTAINER */}

      {/* COLLAPSE CONTAINTER */}
      {isExpandable && (
        <Collapse
          in={isExpanded}
          className={clsx(
            classes.collapse,
            !isRowPublished ? classes.unpublished : null
          )}
          mountOnEnter
        >
          <Grid container wrap="nowrap">
            <Grid item className={classes.toolbar} />
            <Grid item container className={classes.spacing}>
              {
                /**
                 * Render header in collapsed data
                 */
                <Grid
                  container
                  wrap="nowrap"
                  className={classes.collapsedHeader}
                >
                  {collapsedFields.map(
                    (field: React.ReactNode, idx: number) => {
                      const { props }: any = field;

                      if (!props?.icon) {
                        return (
                          <Grid item key={idx} style={props}>
                            <Typography variant="body2" color="primary">
                              {props.title}
                            </Typography>
                          </Grid>
                        );
                      }
                      return null;
                    }
                  )}
                </Grid>
              }

              {
                /*
                 * Render each row in collapsed container
                 */

                collapsedRecordsPerRow.map((dtRecord: any, index: number) => (
                  <Grid
                    container
                    wrap="nowrap"
                    key={index}
                    className={classes.collapsedRow}
                  >
                    {
                      /*
                       * Render each column
                       * map through `fields` props
                       * return each field with injected `record` props
                       */
                      collapsedFields.map(
                        (field: React.ReactNode, idx: number) =>
                          React.isValidElement(field)
                            ? React.cloneElement(field, {
                                key: idx,
                                record: dtRecord,
                                isPublished: isRowPublished,
                              })
                            : null
                      )
                    }
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Collapse>
      )}
    </Paper>
  );
};

export default TableRow;
