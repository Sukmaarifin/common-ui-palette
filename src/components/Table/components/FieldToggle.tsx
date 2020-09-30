/**
 * @todo
 * [ ] Unit Test
 */

import React from 'react';
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PriusToggle from '../../PriusToggle';

import { FieldProps } from '../types';

type FieldToggleProps = {
  handleOnToggle: (ID: string, value: boolean) => void;
  ID: string;
} & FieldProps;

const useStyles = makeStyles(() => ({
  grid: {
    alignSelf: 'center',
    margin: '0 auto',
  },
}));

const FieldToggle = ({
  handleOnToggle,
  record,
  source,
  fieldId,
  ID,
  style,
  fixedWidth,
  width,
}: FieldToggleProps) => {
  const classes = useStyles();
  const toggleID: string = get(record, ID);
  const isToggled: boolean = get(record, source);

  return (
    <Grid
      item
      className={classes.grid}
      style={{
        ...style,
        flexBasis: fixedWidth ? fixedWidth : width,
        flexShrink: fixedWidth ? 0 : 1,
        maxWidth: fixedWidth ? fixedWidth : width,
      }}
    >
      <PriusToggle
        id={fieldId && `${fieldId}`}
        data-identity={fieldId && `${fieldId}`}
        type="table"
        checked={isToggled}
        onChange={() => handleOnToggle(toggleID, !isToggled)}
      />
    </Grid>
  );
};

export default FieldToggle;
