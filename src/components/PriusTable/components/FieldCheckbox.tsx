/**
 * @todo
 * [ ] Unit Test
 */

import React from 'react';
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import PriusCheckbox from '../../PriusCheckbox';

import { FieldProps } from '../types';

type FieldCheckboxProps = {
  handleOnClick: (ID: string, checked: boolean) => void;
  ID: string;
} & FieldProps;

const useStyles = makeStyles(() => ({
  grid: {
    alignSelf: 'center',
    margin: '0 auto',
  },
}));

const FieldCheckbox = ({
  handleOnClick,
  record,
  source,
  fieldId,
  ID,
  style,
  fixedWidth,
  width,
}: FieldCheckboxProps) => {
  const classes = useStyles();

  const checkboxID = get(record, ID);
  const checkboxSource = get(record, source);

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
      <PriusCheckbox
        id={fieldId && `${fieldId}`}
        inputProps={
          {
            'data-identity': fieldId && `${fieldId}`,
          } as React.InputHTMLAttributes<HTMLInputElement>
        }
        checked={checkboxSource}
        value={checkboxSource}
        onChange={(event: React.ChangeEvent<{}>, isChecked: boolean) => {
          handleOnClick(checkboxID, isChecked);
        }}
      />
    </Grid>
  );
};

export default FieldCheckbox;
