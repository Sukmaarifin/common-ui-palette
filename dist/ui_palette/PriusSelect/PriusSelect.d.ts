import React from "react";
import { SelectProps } from "@material-ui/core/Select";
export declare type PriusSelectProps = SelectProps;
export declare const PriusSelect: React.FunctionComponent<PriusSelectProps>;
export default PriusSelect;
/**
 * Universal typing for `option`.
 *
 * Since `PriusSelect` doesn't have mechanism for passing `options` via prop,
 * it is not required to use this typing
 */
export declare type SelectOptionType = {
    isDisabled: boolean;
    label: string | JSX.Element;
    value: string;
};
