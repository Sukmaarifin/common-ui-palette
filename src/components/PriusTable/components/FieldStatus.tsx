import React, { ReactElement } from 'react';
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import {
  ExclamationCircleIcon,
  CheckCircleIcon,
  MinusCircleIcon,
  SyncCircleSolidIcon,
} from '../../../icons';

import { FieldProps } from '../types';

export interface StatusFieldProps extends Omit<FieldProps, 'sortOption'> {}

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    alignSelf: 'center',
    padding: '0 0.8rem',
    alignContent: 'center',
    justifyContent: 'center',
  },
  success: {
    width: '0.8rem',
    color: theme.colors.success,
  },
  sync: {
    width: '0.8rem',
    color: theme.colors.warning,
  },
  failed: {
    width: '0.8rem',
    color: theme.colors.failed,
  },
  unpublish: {
    width: '0.8rem',
    color: '#DDDDDD',
  },
}));

function StatusField({
  fixedWidth,
  record,
  source,
  style,
  width,
}: StatusFieldProps) {
  const classes = useStyles();
  const iconSource = get(record, source).toLowerCase();

  let icon: ReactElement = <div />;

  switch (iconSource) {
    case 'success':
      icon = <CheckCircleIcon className={classes.success} />;
      break;
    case 'sync':
      icon = <SyncCircleSolidIcon className={classes.sync} />;
      break;
    case 'failed':
      icon = <ExclamationCircleIcon className={classes.failed} />;
      break;
    case 'unpublish':
      icon = <MinusCircleIcon className={classes.unpublish} />;
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

export default StatusField;
