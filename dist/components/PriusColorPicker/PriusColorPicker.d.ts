import React from 'react';
import { HSLColor, RGBColor, Color } from 'react-color';
export declare type PriusColorPickerType = {
    hex?: string;
    hsl?: HSLColor;
    rgb?: RGBColor;
    /**
     * color code (hex)
     */
    color?: Color;
    /**
     * onChange callback
     */
    onChange: (selectedColor: any) => void;
};
declare const _default: React.ComponentClass<PriusColorPickerType & import("react-color/lib/components/common/ColorWrap").ExportedColorProps, any>;
export default _default;
