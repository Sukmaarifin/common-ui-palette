/**
 * @todo:
 * [ ] unit test
 * [x] styling
 * [x] handle controlled component
 */

import React, { useState, useEffect } from "react";
import { ActionMeta } from "react-select";
import CreatableSelect from "react-select/creatable";

import { OptionType } from "./types";

export type PriusCreatableSelectProps = {
  backspaceRemoveValue?: boolean;
  classes?: { [key: string]: string };
  className?: string;
  components?: any;
  isClearable?: boolean;
  isDeletable?: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  selectedData?: Array<OptionType>;
  onChange?: (value: any, actionMeta: ActionMeta) => void;
  onError?: (error: boolean) => void;
  id?: string;
  maxChar?: number;
};

function PriusCreatableSelect({
  backspaceRemoveValue = true,
  classes,
  className,
  components,
  isClearable = true,
  isDeletable = false,
  isDisabled,
  placeholder = "Type something and press enter...",
  selectedData,
  onChange,
  onError,
  id,
  maxChar,
}: PriusCreatableSelectProps) {
  const [inputValue, setInputValue] = useState<string>();
  const [value, setValue] = useState<Array<OptionType>>([]);

  useEffect(() => {
    if (selectedData) {
      setValue(selectedData);
    }
  }, [selectedData]);

  const handleChange = (newValues: any, actionMeta: ActionMeta) => {
    setValue(newValues ? newValues : []);

    // Since `onChange` callback will not be automatically invoked in this event,
    // we need to invoked it manually
    if (onChange) {
      onChange(newValues, actionMeta);
    }
  };

  const handleInputChange = (currentValue: string) => {
    setInputValue(currentValue);
  };

  const handleError = (error: boolean) => {
    if (onError) {
      onError(error);
    }
  };

  const handleCreate = () => {
    if (!inputValue) return;

    const newValue: Array<OptionType> = [...value, createOption(inputValue)];
    setValue(newValue);
    setInputValue("");

    // Since `onChange` callback will not be automatically invoked in this event,
    // we need to invoked it manually
    if (onChange && newValue.length > value.length) {
      onChange(newValue, { action: "create-option" });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (!inputValue) return;

    switch (event.key) {
      case "Enter":
      case "Tab":
        // If `inputValue` is not in `value`,
        // create new option from `inputValue`
        if (
          !value.find(
            (option: OptionType) =>
              option.value === inputValue.toLowerCase().trim() ||
              option.label.toLowerCase() === inputValue.toLowerCase().trim()
          )
        ) {
          if (maxChar) {
            if (inputValue.length <= maxChar) {
              handleError(false);
              handleCreate();
            } else {
              handleError(true);
            }
          } else {
            handleCreate();
          }
        }
        event.preventDefault();
    }
  };

  return (
    <CreatableSelect
      inputId={id}
      backspaceRemovesValue={backspaceRemoveValue}
      classes={classes}
      className={className}
      components={{
        ...components,
        DropdownIndicator: null, // remove dropdown icon
      }}
      inputValue={inputValue}
      isClearable={isClearable}
      isCreatable={true}
      isDeletable={isDeletable}
      isDisabled={isDisabled}
      isMulti
      menuIsOpen={false}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder={placeholder}
      selectedData={value}
      value={value}
    />
  );
}

export default PriusCreatableSelect;

const createOption = (label: string): OptionType => ({
  isDisabled: false,
  label,
  value: label,
});
