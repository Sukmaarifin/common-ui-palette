/**
 * @todo
 * Handle other severity if needed, for now it's unnecessary.
 */
import React from 'react';
export declare type PriusInfoBoxProps = {
    action?: React.ReactNode;
    message: React.ReactNode;
    title?: string;
};
declare const PriusInfoBox: ({ action, message, title }: PriusInfoBoxProps) => JSX.Element;
export default PriusInfoBox;
