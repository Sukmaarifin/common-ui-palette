import React from 'react';
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { FieldProps } from '../types';

const useStyles = makeStyles(() => ({
  container: {
    alignSelf: 'center',
    padding: '0 0.8rem',
  },
}));

export interface FieldNumberProps extends FieldProps {
  threshold?: number;
  thresholdedColor?: string;
}

function FieldNumber({
  fixedWidth,
  record,
  source,
  style,
  threshold = 0,
  thresholdedColor = '#dd3628',
  width,
}: FieldNumberProps) {
  const num = get(record, source);
  const classes = useStyles();

  return (
    <Grid
      item
      style={{
        ...style,
        flexBasis: fixedWidth ? fixedWidth : width,
        flexShrink: fixedWidth ? 0 : 1,
      }}
      className={classes.container}
    >
      <span style={{ color: num <= threshold ? thresholdedColor : 'inherit' }}>
        {num}
      </span>
    </Grid>
  );
}

export default FieldNumber;
