/// <reference types="react" />
import { ThumbnailSize } from "../../PriusThumbnail";
import { FieldProps } from "../types";
export interface FieldImageProps extends FieldProps {
    altText: string;
    defaultSource?: string;
    size: ThumbnailSize;
}
export declare function ImageField({ altText, fixedWidth, record, size, source, style, width, }: FieldImageProps): JSX.Element;
export default ImageField;
