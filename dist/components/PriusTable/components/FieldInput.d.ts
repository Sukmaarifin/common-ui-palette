/**
 * @todo
 * [ ] Unit Test
 */
import React from 'react';
import { FieldProps } from '../../../components/PriusTable/types';
declare type FieldInputProps = {
    handleOnChange: (ID: string, input: React.ReactText) => void;
    rowID: string;
    minInput?: number;
    maxInput?: number;
    className?: string;
    isInputPrice?: boolean;
    isInputString?: boolean;
    isRequired?: boolean;
    isDisabled?: boolean;
    leftLabel?: string;
} & FieldProps;
declare const FieldInput: ({ handleOnChange, fieldId, source, record, rowID, className, minInput, maxInput, isInputPrice, isInputString, isRequired, style, fixedWidth, width, title, isDisabled, leftLabel, }: FieldInputProps) => JSX.Element;
export default FieldInput;
