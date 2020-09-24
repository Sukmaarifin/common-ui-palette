import React from 'react';
export declare type PriusTextboxProps = {
    id?: string;
    placeholder?: string;
    multiline?: boolean;
    name?: string;
    rows?: number;
    rowsMax?: number;
    value: string;
    isError?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export declare const PriusTextbox: React.FunctionComponent<PriusTextboxProps>;
export default PriusTextbox;
