import React from "react";
export declare enum StatusUploadType {
    UPLOAD = "UPLOAD",
    FAILED = "FAILED",
    DONE = "DONE",
    EMPTY = "EMPTY"
}
declare type PriusIndicatorLabelProps = {
    status: StatusUploadType;
    name: string;
    size?: number;
    onRetry?: () => void;
    onDelete?: () => void;
    id?: string;
};
declare const PriusIndicatorLabel: React.FC<PriusIndicatorLabelProps>;
export default PriusIndicatorLabel;
