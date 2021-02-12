import React from 'react';
import {
  createStyles,
  Theme,
  Switch,
  makeStyles,
  FormControlLabel,
} from '@material-ui/core';
import clsx from 'clsx';

import Fieldset from '../Fieldset';

import { ToggleProps } from './index';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // Switch classes
    root: {
      width: 90,
      height: 18,
      padding: 0,
      margin: theme.spacing(0.5),
      marginTop: 0,
      borderRadius: 2,
      overflow: 'visible',
    },
    disabled: {
      '&$track': {
        '&:before': {
          color: theme.colors.disabled,
        },
      },
    },
    switchBase: {
      padding: 0,
      '&$checked': {
        transform: 'translateX(80px)',
        color: theme.colors.white,
        '& + $track': {
          backgroundColor: theme.colors.primary,
          opacity: 1,
          borderColor: theme.palette.primary.dark,
        },
      },
      '&$disabled': {
        color: theme.colors.disabled,
        '&$checked': {
          '& + $track': {
            backgroundColor: '#DCDCDC',
            borderColor: theme.colors.disabled,
          },
        },
        '& + $track': {
          opacity: 1,
          backgroundColor: '#DCDCDC',
          borderColor: theme.colors.disabled,
        },
      },
      '&$focusVisible $thumb': {
        color: theme.colors.white,
        border: `1px solid ${theme.colors.primary}`,
        height: 24,
      },
    },
    track: {
      borderRadius: 2,
      border: `1px solid #E8E8E8`,
      transition: theme.transitions.create(['background-color', 'border']),
      textAlign: 'center',
    },
    thumb: {
      width: 10,
      height: 26,
      borderRadius: 2,
    },
    checked: {},
    focusVisible: {},

    // Custom classes
    trackActive: {
      borderColor: theme.palette.primary.dark,
      paddingTop: 6,
      '&:before': {
        content: '"Aktif"',
        color: theme.colors.white,
        fontSize: '0.8125rem',
      },
    },
    trackNonActive: {
      borderColor: `#E8E8E8`,
      backgroundColor: '#EEEEF3',
      opacity: 1,
      paddingTop: 6,
      '&:before': {
        content: '"Tidak Aktif"',
        color: theme.colors.text,
        fontSize: '0.8125rem',
      },
    },
    trackDisabled: {
      '&:before': {
        color: theme.colors.disabled,
      },
    },
    label: {
      marginLeft: 'inherit',
    },
    rootHover: {
      '&:hover $thumb': {
        color: theme.colors.white,
        border: `1px solid ${theme.colors.primary}`,
        height: 24,
      },
    },
  })
);

const RegularToggle = ({
  id,
  label,
  onChange,
  className,
  checked,
  style,
  disabled,
  value,
  name,
}: ToggleProps) => {
  const classes = useStyles();

  return (
    <Fieldset label={label}>
      <FormControlLabel
        style={style}
        className={className}
        control={
          <Switch
            id={id && `${id}`}
            data-identity={id && `${id}`}
            focusVisibleClassName={classes.focusVisible}
            disableRipple
            classes={{
              root: disabled
                ? classes.root
                : clsx(classes.root, classes.rootHover),
              switchBase: classes.switchBase,
              thumb: classes.thumb,
              track: checked
                ? clsx(
                    classes.track,
                    classes.trackActive,
                    disabled && classes.trackDisabled
                  )
                : clsx(
                    classes.track,
                    classes.trackNonActive,
                    disabled && classes.trackDisabled
                  ),
              checked: classes.checked,
              disabled: classes.disabled,
            }}
            onChange={onChange}
            disabled={disabled}
            checked={checked}
            value={value}
            name={name}
          />
        }
        label={null}
        classes={{ root: classes.label }}
      />
    </Fieldset>
  );
};

export default RegularToggle;
