import React from "react";
import { ToolbarType, StartupModeTypes } from "./types";
export declare type TextEditorProps = {
    data?: string;
    extraPlugins?: string;
    height?: number;
    /** @deprecated Use `data` instead */
    previousText?: string;
    readOnly?: boolean;
    /** @deprecated Use `height` instead */
    setHeight?: number;
    /** @deprecated Use `uiColor` instead */
    setTheme?: string;
    startupMode?: StartupModeTypes;
    title?: string;
    toolbar?: Array<ToolbarType>;
    uiColor?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const PriusTextEditor: ({ data, extraPlugins, height, previousText, readOnly, setTheme, setHeight, startupMode, title, toolbar, uiColor, onBlur, onChange, }: TextEditorProps) => JSX.Element;
export default PriusTextEditor;
