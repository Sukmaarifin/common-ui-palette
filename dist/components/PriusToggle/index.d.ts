/// <reference types="react" />
import { SwitchProps } from '@material-ui/core';
export declare type ToggleProps = Pick<SwitchProps, 'id' | 'onChange' | 'checked' | 'style' | 'className' | 'disabled' | 'name' | 'value'> & {
    /**
     * label above the toggle, only appear on regular type toggle
     */
    label?: string;
};
declare type PriusToggleProps = ToggleProps & {
    /**
     * toggle appearance type, "regular" or "table"
     */
    type?: 'regular' | 'table';
    checked: boolean;
};
declare const PriusToggle: ({ type, ...props }: PriusToggleProps) => JSX.Element;
export default PriusToggle;
