/// <reference types="react" />
import { ToggleProps } from "./index";
export declare const useStyles: (props?: any) => Record<"disabled" | "label" | "track" | "root" | "checked" | "focusVisible" | "thumb" | "switchBase" | "trackActive" | "trackNonActive" | "trackDisabled" | "rootHover", string>;
declare const RegularToggle: ({ id, label, onChange, className, checked, style, disabled, value, name, }: ToggleProps) => JSX.Element;
export default RegularToggle;
