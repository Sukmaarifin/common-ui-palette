import React, { ElementType, ReactElement } from 'react';
import clsx from 'clsx';
import { MenuItem } from '@material-ui/core';
import { SelectProps } from '@material-ui/core/Select';
import { makeStyles, Theme } from '@material-ui/core/styles';
import SelectComponent from '../Select';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    borderRadius: '0.1875rem', // ~3px
    border: 'solid 1px #e8e8e8',
    display: 'inline-flex',
    flexFlow: 'row',
    background: 'white',
  },
  dropdown: {
    borderRight: 'solid 1px #e8e8e8',
    fontSize: '0.8rem',
    padding: '0.2rem 0.8rem',
    '&:before': {
      borderBottom: 'none',
    },
  },
  inputContainer: {
    alignSelf: 'center',
    fontSize: '0.8rem',
    padding: '0.2rem 0.8rem',
    display: 'flex',
    flexBasis: '100%',
    '& > *': {
      flex: 1,
    },
  },
  disabled: {
    background: theme.colors.grey2,
    '& input': {
      background: 'inherit',
    },
  },
  input: {
    border: 'none',
    outline: 'none',
    fontSize: '0.8125rem',
    fontFamily: 'Metropolis',
  },
  leftLabel: {
    borderRight: `solid 1px ${theme.colors.grey3}`,
    padding: '0.4rem',
    margin: '0.4rem',
  },
  select: {
    border: 'none',
    borderRight: `solid 1px ${theme.colors.grey3}`,
  },
  error: {
    borderColor: theme.colors.failed,
  },
}));

export type DropdownItemType = {
  label: string;
  value: string;
};

export interface InputGroupProps extends SelectProps {
  inputId?: string;
  name?: string;
  dropdownName?: string;
  children?: ReactElement;
  dropdownIcon?: ElementType;
  // TO DO: omit `dropdownItem`, use `dropdownItems` instead
  dropdownItem?: Array<string>;
  dropdownItems?: Array<DropdownItemType>;
  placeholder?: string;
  required?: boolean;
  valueDropdown?: string;
  valueInput?: string | number;
  width?: string;
  leftLabel?: string;
  className?: string;
  isError?: boolean;
  handleDropdown: (event: React.ChangeEvent<{ value: unknown }>) => void;
  handleInput?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleInputBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleInputKeyDown?: (event: React.KeyboardEvent) => void;
}

function InputGroup({
  children,
  inputId,
  name,
  disabled,
  dropdownName,
  dropdownItem,
  dropdownItems,
  placeholder,
  required,
  valueDropdown,
  valueInput,
  width = '-webkit-fill-available',
  handleDropdown,
  handleInput,
  handleInputBlur,
  handleInputKeyDown,
  leftLabel,
  className,
  isError,
  ...props
}: InputGroupProps) {
  const classes = useStyles();

  return (
    <div
      className={clsx(
        disabled && classes.disabled,
        classes.container,
        className ? className : null,
        isError ? classes.error : null
      )}
      style={{ width: width }}
    >
      {dropdownItem && valueDropdown ? (
        <SelectComponent
          {...props}
          id={inputId}
          inputProps={{ 'data-identity': inputId && `${inputId}-dropdown` }}
          disabled={disabled}
          displayEmpty
          name={dropdownName}
          value={valueDropdown}
          onChange={(event) => handleDropdown(event)}
          className={classes.select}
        >
          {dropdownItem.map((item: string, index: number) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </SelectComponent>
      ) : dropdownItems && valueDropdown !== undefined ? (
        <SelectComponent
          {...props}
          id={inputId}
          inputProps={{ 'data-identity': inputId && `${inputId}-dropdown` }}
          disabled={disabled}
          displayEmpty
          name={dropdownName}
          value={valueDropdown}
          onChange={handleDropdown}
          className={classes.select}
        >
          {dropdownItems.map((item: DropdownItemType, index: number) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </SelectComponent>
      ) : leftLabel ? (
        <span className={classes.leftLabel}> {leftLabel} </span>
      ) : null}

      <div className={classes.inputContainer}>
        {!children && (dropdownItem || dropdownItems) && handleInput && (
          <input
            id={inputId && `${inputId}-field`}
            data-identity={inputId && `${inputId}-field`}
            disabled={disabled}
            name={name}
            aria-label="description"
            style={{ width }}
            className={classes.input}
            placeholder={placeholder}
            required={required}
            value={valueInput}
            onBlur={handleInputBlur}
            onChange={(event) => handleInput(event)}
            onKeyDown={handleInputKeyDown}
          />
        )}

        {children}
      </div>
    </div>
  );
}

export default InputGroup;
