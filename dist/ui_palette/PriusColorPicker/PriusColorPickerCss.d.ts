import { EditableInputStyles } from "react-color/lib/components/common/EditableInput";
export declare const useStyles: (props?: any) => Record<"hue" | "saturation" | "divider" | "hueContainer" | "huepointer" | "colorBox" | "saturationPointer" | "editableInputLabel" | "swatchBox" | "swatchBoxLastChild", string>;
export declare const editableInputStyle: {
    hex: EditableInputStyles;
    rgb: EditableInputStyles;
    rgbLastChild: EditableInputStyles;
};
export declare const presetColors: {
    hex: string;
}[];
