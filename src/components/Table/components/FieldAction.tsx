/**
 * @todo
 * [] unit testing
 */

import React from 'react';
import get from 'lodash/get';
import { Grid } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

import { FieldProps } from '../types';
import ButtonText from '../../ButtonText';

export type FieldActionProps = {
  actionText?: string;
  icon?: React.ReactNode;
  handleOnClick: (ID: string) => void;
} & FieldProps;

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    borderColor: theme.colors.primary,
    border: `1px solid ${theme.colors.primary}`,
    padding: '4px 20px',
    borderRadius: '3px',
    '&:hover': {
      backgroundColor: theme.colors.primary,
      color: 'white',
    },
  },
  grid: {
    justifySelf: 'flex-end',
    alignSelf: 'center',
    marginLeft: 'auto',
  },
}));

function FieldAction({
  actionText = 'Detail',
  icon,
  record,
  source,
  handleOnClick,
  fieldId,
  fixedWidth,
  width,
}: FieldActionProps) {
  const classes = useStyles();
  const ID = get(record, source);

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleOnClick(ID);
  };

  return (
    <Grid
      item
      className={classes.grid}
      style={{
        flexBasis: fixedWidth ? fixedWidth : width,
        flexShrink: fixedWidth ? 0 : 1,
        maxWidth: fixedWidth ? fixedWidth : width,
      }}
    >
      <ButtonText
        className={classes.button}
        color="primary"
        onClick={onClick}
        inputId={fieldId}
      >
        {icon}

        {actionText}
      </ButtonText>
    </Grid>
  );
}

export default FieldAction;
