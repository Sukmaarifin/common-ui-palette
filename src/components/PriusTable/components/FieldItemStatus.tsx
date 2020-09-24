/**
 * @todo unit testing
 */

import React from 'react';
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { CheckIcon, CloseIcon } from '../../../icons';
import { FieldProps } from '../../../components/PriusTable/types';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    alignSelf: 'center',
    padding: '0 1rem',
    alignContent: 'center',
    justifyContent: 'center',
  },
  check: {
    color: theme.colors.success,
  },
  disabled: {
    color: theme.colors.disabled,
  },
}));

export type FieldItemStatusProps = {
  filter: string | boolean;
} & FieldProps;

function FieldItemStatus({
  filter,
  fixedWidth,
  record,
  source,
  style,
  width,
}: FieldItemStatusProps) {
  const classes = useStyles();

  const status: boolean = get(record, source);

  const filterStatus: boolean =
    typeof filter === 'string' ? get(record, filter) : filter;

  let icon: React.ReactElement | null = null;

  switch (status) {
    case true:
      icon = (
        <CheckIcon
          className={filterStatus ? classes.check : classes.disabled}
        />
      );
      break;
    case false:
      icon = <CloseIcon color={filterStatus ? 'error' : 'disabled'} />;
      break;
    default:
      break;
  }

  return (
    <Grid
      item
      className={classes.container}
      style={{
        ...style,
        flexBasis: fixedWidth ? fixedWidth : width,
        flexShrink: fixedWidth ? 0 : 1,
      }}
    >
      {icon}
    </Grid>
  );
}
export default FieldItemStatus;
