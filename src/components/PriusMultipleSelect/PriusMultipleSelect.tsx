/**
 * TODO:
 *
 * [ ] Unit test
 * [ ] Fix typing for `onChange` value (ref: https://github.com/JedWatson/react-select/issues/2902)
 */

import React, { useRef } from 'react';
import Select, { components, ActionMeta, InputActionMeta } from 'react-select';
import clsx from 'clsx';
import { Chip, MenuItem, Paper, Typography } from '@material-ui/core';

import { CloseIcon, DropdownIcon } from '../../icons';
import PriusTooltip from '../PriusTooltip';
import PriusCreatableSelect from './PriusCreatableSelect';

import { OptionType } from './types';
import { priusMultipleSelectCss } from './PriusMultipleSelectCss';

export type PriusActionMeta = ActionMeta;

export type PriusMultipleSelectProps = {
  backspaceRemoveValue?: boolean;
  blurInputOnSelect?: boolean;
  className?: string;
  closeMenuOnSelect?: boolean;
  defaultInputValue?: string;
  defaultValue?: OptionType;
  id?: string;
  inputRef?: React.Ref<HTMLInputElement>;
  inputValue?: string;
  isClearable?: boolean;
  isCreatable?: boolean;
  isDeletable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  isSearchable?: boolean;
  maxMenuHeight?: number;
  name?: string;
  openMenuOnFocus?: boolean;
  options?: OptionType[];
  placeholder: string;
  selectedData?: OptionType[];
  isError?: boolean;
  maxChar?: number;
  onBlur?: (event: React.FocusEvent) => void;
  onChange?: (value: any, type: PriusActionMeta) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onError?: (error: boolean) => void;
  onInputChange?: (value: string, type: InputActionMeta) => void;
};

function PriusMultipleSelect({
  backspaceRemoveValue = true,
  blurInputOnSelect = true,
  className,
  closeMenuOnSelect = true,
  defaultInputValue,
  defaultValue,
  openMenuOnFocus = true,
  id,
  inputValue,
  inputRef,
  isClearable = false,
  isCreatable = false,
  isDeletable = true,
  isDisabled = false,
  isLoading = false,
  isMulti = true,
  isSearchable = false,
  maxMenuHeight = 300,
  name,
  options,
  placeholder,
  selectedData,
  isError,
  maxChar,
  onBlur,
  onChange,
  onError,
  onFocus,
  onInputChange,
}: PriusMultipleSelectProps) {
  const classes = priusMultipleSelectCss();

  if (isCreatable) {
    return (
      <PriusCreatableSelect
        backspaceRemoveValue={backspaceRemoveValue}
        classes={classes}
        components={{
          ClearIndicator: null,
          Control,
          MultiValue,
          Placeholder,
          SelectContainer,
        }}
        isClearable={isClearable}
        isDeletable={isDeletable}
        isDisabled={isDisabled}
        placeholder={placeholder}
        onChange={onChange}
        onError={onError}
        selectedData={selectedData}
        id={id}
        maxChar={maxChar}
      />
    );
  }

  return (
    <Select
      backspaceRemovesValue={backspaceRemoveValue}
      blurInputOnSelect={blurInputOnSelect}
      classes={classes}
      className={clsx(
        classes.container,
        className,
        isError ? classes.error : ''
      )}
      closeMenuOnSelect={closeMenuOnSelect}
      components={{
        Control,
        ClearIndicator,
        DropdownIndicator,
        IndicatorSeparator: null,
        IndicatorsContainer,
        LoadingMessage,
        MultiValue,
        Menu,
        NoOptionsMessage,
        Option,
        Placeholder,
        SelectContainer,
        SingleValue,
        ValueContainer,
      }}
      defaultInputValue={defaultInputValue}
      defaultValue={defaultValue}
      innerRef={inputRef}
      inputId={id}
      inputValue={inputValue}
      isClearable={isClearable}
      isDeletable={isDeletable}
      isDisabled={isDisabled}
      isFocus={true}
      isLoading={isLoading}
      isMulti={isMulti}
      isOpen={true}
      isSearchable={isSearchable}
      maxMenuHeight={maxMenuHeight}
      menuPortalTarget={document.body}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onInputChange={onInputChange}
      openMenuOnFocus={openMenuOnFocus}
      options={options}
      placeholder={placeholder}
      styles={{
        menuPortal: (base) => ({
          ...base,
          zIndex: 1000,
          background: 'white',
          boxShadow: '0 7px 30px 0 rgba(0, 0, 0, 0.2)',
        }),
      }}
      value={selectedData}
    />
  );
}

export default PriusMultipleSelect;

const NoOptionsMessage = () => <MenuItem disabled>No Options</MenuItem>;

const LoadingMessage = () => <MenuItem disabled>Loading...</MenuItem>;

const Control = ({ children, selectProps, ...props }: any) => (
  <components.Control {...props} className={selectProps.classes.control}>
    {children}
  </components.Control>
);

const Option = ({ data, isFocused, innerProps, innerRef }: any) => {
  const renderedChildren: string | JSX.Element =
    data.labelElement || data.label;
  const divRef: any = useRef(null);

  if (divRef?.current?.scrollWidth > divRef?.current?.offsetWidth) {
    data.open = true;
  }

  return (
    <MenuItem
      buttonRef={innerRef}
      selected={isFocused}
      disabled={data.isDisabled}
      {...innerProps}
    >
      {data.isDisabled && data.tooltipText ? (
        <PriusTooltip placement="top" title={data.tooltipText}>
          <Typography variant="inherit" noWrap>
            {renderedChildren}
          </Typography>
        </PriusTooltip>
      ) : (
        <PriusTooltip
          placement="top"
          title={data.renderedChildren}
          disableHoverListener={!data.open}
        >
          <Typography variant="inherit" noWrap ref={divRef}>
            {renderedChildren}
          </Typography>
        </PriusTooltip>
      )}
    </MenuItem>
  );
};

const Placeholder = ({ children, innerProps, selectProps, ...props }: any) => (
  <span className={selectProps.classes.placeholder}>
    <components.Placeholder {...innerProps} {...props}>
      {/* TO DO: need further investigation 
      {selectProps.isSearchable && (
        <SearchIcon style={{ color: "black", marginRight: "0.65rem" }} />
      )} */}
      {children}
    </components.Placeholder>
  </span>
);

const ValueContainer = ({ selectProps, ...innerProps }: any) => (
  <components.ValueContainer
    {...innerProps}
    className={selectProps.classes.valueContainer}
  />
);

const Menu = ({ children, innerProps, selectProps }: any) => (
  <Paper elevation={0} className={selectProps.classes.menu} {...innerProps}>
    {children}
  </Paper>
);

const SelectContainer = ({
  children,
  isFocused,
  selectProps,
  ...props
}: any) => (
  <div
    className={clsx(
      selectProps.classes.selectContainer,
      isFocused && !selectProps.isCreatable
        ? selectProps.classes.selectContainerFocused
        : undefined
    )}
  >
    <components.SelectContainer {...props}>
      {children}
    </components.SelectContainer>
  </div>
);

const MultiValue = ({ selectProps, removeProps, data }: any) => {
  const renderedChildren: string | JSX.Element =
    data.labelElement || data.label;
  return (
    <Chip
      tabIndex={-1}
      label={renderedChildren}
      className={selectProps.classes.chip}
      onDelete={selectProps.isDeletable ? removeProps.onClick : undefined}
      deleteIcon={<CloseIcon />}
    />
  );
};

const SingleValue = ({ selectProps, ...innerProps }: any) => (
  <components.SingleValue
    {...innerProps}
    className={selectProps.classes.singleValue}
  />
);

const DropdownIndicator = ({ selectProps, ...innerProps }: any) => (
  <components.DropdownIndicator
    {...innerProps}
    className={selectProps.classes.dropdownIndicator}
  >
    <DropdownIcon className={selectProps.classes.iconIndicator} />
  </components.DropdownIndicator>
);

const ClearIndicator = ({ selectProps, ...innerProps }: any) => (
  <components.ClearIndicator
    {...innerProps}
    className={selectProps.classes.dropdownIndicator}
  >
    <CloseIcon className={selectProps.classes.iconIndicator} />
  </components.ClearIndicator>
);

const IndicatorsContainer = ({ selectProps, ...innerProps }: any) => (
  <components.IndicatorsContainer
    {...innerProps}
    className={selectProps.classes.indicatorsContainer}
  />
);
