import React from "react";
import { TooltipProps } from "@material-ui/core/Tooltip";
import "./priusTooltip.css";
export declare type PriusTooltipProps = TooltipProps & {
    title: React.ReactNode;
    img?: string;
};
declare const PriusTooltip: ({ img, title, ...props }: PriusTooltipProps) => JSX.Element;
export default PriusTooltip;
