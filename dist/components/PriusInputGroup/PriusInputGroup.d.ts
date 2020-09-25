import React, { ElementType, ReactElement } from 'react';
import { SelectProps } from '@material-ui/core/Select';
export declare type DropdownItemType = {
    label: string;
    value: string;
};
export interface InputGroupProps extends SelectProps {
    inputId?: string;
    name?: string;
    dropdownName?: string;
    children?: ReactElement;
    dropdownIcon?: ElementType;
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
    handleDropdown: (event: React.ChangeEvent<{
        value: unknown;
    }>) => void;
    handleInput?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    handleInputBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    handleInputKeyDown?: (event: React.KeyboardEvent) => void;
}
declare function PriusInputGroup({ children, inputId, name, disabled, dropdownName, dropdownItem, dropdownItems, placeholder, required, valueDropdown, valueInput, width, handleDropdown, handleInput, handleInputBlur, handleInputKeyDown, leftLabel, className, isError, ...props }: InputGroupProps): JSX.Element;
export default PriusInputGroup;
