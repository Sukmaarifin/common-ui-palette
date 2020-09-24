/**
 * @todo
 * [] unit testing
 */
import React from "react";
import { FieldProps } from "../types";
export declare type FieldActionProps = {
    actionText?: string;
    icon?: React.ReactNode;
    handleOnClick: (ID: string) => void;
} & FieldProps;
declare function FieldAction({ actionText, icon, record, source, handleOnClick, fieldId, fixedWidth, width, }: FieldActionProps): JSX.Element;
export default FieldAction;
