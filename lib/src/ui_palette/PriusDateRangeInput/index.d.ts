import React from "react";
declare type DataDateType = {
    from: string;
    to: string;
};
export declare type PriusDateColumnProps = {
    id?: string;
    data?: DataDateType;
    onChange?: Function;
};
declare const PriusDateColumn: React.FC<PriusDateColumnProps>;
export default PriusDateColumn;
