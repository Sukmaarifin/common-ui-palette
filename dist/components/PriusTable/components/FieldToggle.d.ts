/**
 * @todo
 * [ ] Unit Test
 */
/// <reference types="react" />
import { FieldProps } from '../types';
declare type FieldToggleProps = {
    handleOnToggle: (ID: string, value: boolean) => void;
    ID: string;
} & FieldProps;
declare const FieldToggle: ({ handleOnToggle, record, source, fieldId, ID, style, fixedWidth, width, }: FieldToggleProps) => JSX.Element;
export default FieldToggle;
