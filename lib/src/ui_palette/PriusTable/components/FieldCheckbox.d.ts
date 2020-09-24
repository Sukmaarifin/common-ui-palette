/**
 * @todo
 * [ ] Unit Test
 */
/// <reference types="react" />
import { FieldProps } from "../types";
declare type FieldCheckboxProps = {
    handleOnClick: (ID: string, checked: boolean) => void;
    ID: string;
} & FieldProps;
declare const FieldCheckbox: ({ handleOnClick, record, source, fieldId, ID, style, fixedWidth, width, }: FieldCheckboxProps) => JSX.Element;
export default FieldCheckbox;
