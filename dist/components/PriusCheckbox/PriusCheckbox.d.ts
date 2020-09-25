/**
 * @todo
 * [ ] Unit test
 */
/// <reference types="react" />
import { CheckboxProps } from '@material-ui/core/Checkbox';
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
export declare type PriusCheckboxProps = {
    label?: string;
} & Pick<CheckboxProps, 'id' | 'checked' | 'value' | 'disabled' | 'inputProps' | 'onChange' | 'onKeyDown' | 'name' | 'className' | 'style' | 'onClick'> & Pick<FormControlLabelProps, 'classes'>;
declare const PriusCheckbox: (props: PriusCheckboxProps) => JSX.Element;
export default PriusCheckbox;
