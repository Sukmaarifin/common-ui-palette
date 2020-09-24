import React from 'react';
import { InputLabelProps } from '@material-ui/core/InputLabel';
export declare type PriusFieldsetProps = {
    children: React.ReactNode;
    disabled?: boolean;
    fullWidth?: boolean;
    gutterBottom?: boolean;
    helperText?: string;
    inputId?: string;
    inputLabelProps?: Partial<InputLabelProps>;
    label?: string | React.ReactNode;
    labelId?: string;
    required?: boolean;
    status?: 'normal' | 'error' | 'success';
    toolbar?: React.ReactNode;
    tooltipText?: React.ReactNode;
};
export declare const PriusFieldset: React.FunctionComponent<PriusFieldsetProps>;
export default PriusFieldset;
