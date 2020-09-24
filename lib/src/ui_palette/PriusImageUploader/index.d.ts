/// <reference types="react" />
import { PriusThumbnailProps, ThumbnailSize } from "../PriusThumbnail";
export declare type FileType = {
    file: File;
    contentType: string;
};
export declare type ImageUploaderProps = Pick<PriusThumbnailProps, "defaultSource"> & {
    altText: string;
    source: string;
    customSize?: ThumbnailSize;
    id?: string;
    isError?: boolean;
    fileContent?: (file: FileType) => void;
    onError?: () => void;
    onDelete?: () => void;
    onSubmit?: (event: Event) => void;
    isLoading?: boolean;
};
declare const PriusImageUploader: ({ altText, defaultSource, source, customSize, fileContent, id, isError, onError, onDelete, onSubmit, isLoading, }: ImageUploaderProps) => JSX.Element;
export default PriusImageUploader;
