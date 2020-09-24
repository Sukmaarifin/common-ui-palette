import React from "react";
interface PriusTabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    p?: number;
}
export default function PriusTabPanel({ value, index, children, p, }: PriusTabPanelProps): JSX.Element;
export {};
