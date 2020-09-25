import React from 'react';
export declare type DataDateType = {
    from: string;
    to: string;
};
export declare type DateType = {
    from: Date;
    to: Date;
};
export declare type PriusDateColumnProps = {
    id?: string;
    data?: DataDateType;
    onChange?: Function;
};
declare const PriusDateColumn: React.FC<PriusDateColumnProps>;
export default PriusDateColumn;
