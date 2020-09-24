import React, { ElementType } from "react";
export interface PriusPaperProps {
    children?: React.ReactNode;
    className?: string;
    /**
     * The component used the for root node.
     * Either a string, DOM element, or a component
     */
    component?: ElementType<React.HTMLAttributes<HTMLElement>>;
    /**
     * id attribute that will be passed to the root component
     */
    id?: string;
    /**
     * The padding size
     */
    padding?: "medium" | "mediumSquare" | "large" | "largeSquare" | "noPadding";
    /**
     * If `true`, render PriusPaper with rounded corner
     */
    rounded?: boolean;
    onClick?: () => void;
}
/**
 * `PriusPaper` component provides a simple container with predefined padding, white background, and box-shadow.
 */
export declare function PriusPaper({ className, children, component: Component, id, onClick, padding, rounded, ...props }: PriusPaperProps): JSX.Element;
export default PriusPaper;
