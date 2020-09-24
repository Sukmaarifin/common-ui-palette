import React from "react";
export declare type ThumbnailSize = "small" | "medium" | "big";
export declare type PriusThumbnailProps = {
    defaultSource?: React.ReactNode;
    altText: string;
    className?: string;
    imageSource: string;
    setSize?: string;
    size: ThumbnailSize;
    onError?: () => void;
    onClick?: (event: any) => void;
    id?: string;
};
declare const PriusThumbnail: ({ altText, className, defaultSource, imageSource, setSize, size, onError, onClick, id, }: PriusThumbnailProps) => JSX.Element;
export default PriusThumbnail;
