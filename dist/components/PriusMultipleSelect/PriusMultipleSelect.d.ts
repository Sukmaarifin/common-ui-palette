/**
 * TODO:
 *
 * [ ] Unit test
 * [ ] Fix typing for `onChange` value (ref: https://github.com/JedWatson/react-select/issues/2902)
 */
import React from 'react';
import { ActionMeta, InputActionMeta } from 'react-select';
import { OptionType } from './types';
export declare type PriusActionMeta = ActionMeta;
export declare type PriusMultipleSelectProps = {
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
declare function PriusMultipleSelect({ backspaceRemoveValue, blurInputOnSelect, className, closeMenuOnSelect, defaultInputValue, defaultValue, openMenuOnFocus, id, inputValue, inputRef, isClearable, isCreatable, isDeletable, isDisabled, isLoading, isMulti, isSearchable, maxMenuHeight, name, options, placeholder, selectedData, isError, maxChar, onBlur, onChange, onError, onFocus, onInputChange, }: PriusMultipleSelectProps): JSX.Element;
export default PriusMultipleSelect;
