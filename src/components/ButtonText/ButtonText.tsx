import React from 'react';
import ButtonBase, { ButtonBaseProps } from '@material-ui/core/ButtonBase';
import { makeStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';

import { camelize } from '../../helpers';

export type ButtonTextProps = ButtonBaseProps & {
  bold?: boolean;
  children?: React.ReactNode;
  color?: 'default' | 'inherit' | 'primary' | 'secondary';
  endIcon?: React.ReactNode;
  startIcon?: React.ReactNode;
  inputId?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    '&> .MuiSvgIcon-root': {
      fontSize: '1.5em',
      '&:first-child': {
        marginRight: '0.3125rem',
      },
      '&:last-child': {
        marginLeft: '0.3125rem',
      },
    },
    '&.Mui-disabled': {
      color: theme.colors.disabled,
    },
  },
  colorInherit: {
    color: 'inherit',
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorSecondary: {
    color: theme.palette.text.secondary,
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
}));

const ButtonText = React.forwardRef(
  (
    {
      bold = false,
      children = '',
      className,
      color = 'inherit',
      endIcon,
      startIcon,
      onClick,
      disabled,
      inputId,
    }: ButtonTextProps,
    _
  ) => {
    const classes = useStyles();

    return (
      <ButtonBase
        className={clsx(
          classes.button,
          className,
          color === 'inherit' && classes.colorInherit,
          color === 'primary' && classes.colorPrimary,
          color === 'secondary' && classes.colorSecondary,
          bold && classes.fontWeightBold
        )}
        onClick={onClick}
        disabled={disabled}
        disableRipple={true}
        data-identity={
          inputId &&
          children &&
          `${inputId}-button-${camelize(children.toString().toLowerCase())}`
        }
      >
        {startIcon}
        <span>{children}</span>
        {endIcon}
      </ButtonBase>
    );
  }
);

export default ButtonText;
