import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Select, { SelectProps } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import Input from '../InputNew';
import { DropdownIcon } from '../../icons';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    select: {
      '& .MuiSelect-icon': {
        marginRight: '0.625rem',
        top: '50%',
        transform: 'translateY(-50%)',
      },
    },
    menuPaper: {
      boxShadow: theme.customShadows[1],
    },
    placeholder: {
      color: theme.colors.placeholder,
      opacity: '1',
      cursor: 'default',
      pointerEvents: 'none',
    },
    error: {
      borderColor: theme.colors.failed,
    },
  })
);

export type SelectComponentProps = SelectProps;

export const SelectComponent: React.FunctionComponent<SelectComponentProps> = React.forwardRef(
  ({ placeholder, id, className, ...props }, ref) => {
    const classes = useStyles();

    return (
      <Select
        {...props}
        ref={ref}
        className={clsx(classes.select, className ? className : '')}
        input={<Input id={id} />}
        IconComponent={DropdownIcon}
        MenuProps={{
          classes: {
            paper: classes.menuPaper,
          },
        }}
      >
        {placeholder && (
          <MenuItem className={classes.placeholder}>{placeholder}</MenuItem>
        )}
        {props.children}
      </Select>
    );
  }
);

export default SelectComponent;

/**
 * Universal typing for `option`.
 *
 * Since `SelectComponent` doesn't have mechanism for passing `options` via prop,
 * it is not required to use this typing
 */
export type SelectOptionType = {
  isDisabled: boolean;
  label: string | JSX.Element;
  value: string;
};
