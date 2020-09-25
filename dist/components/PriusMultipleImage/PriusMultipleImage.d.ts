import { ThumbnailSize } from '../PriusThumbnail';
export declare type GridSize = boolean | 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
export declare type MultipleImageProps = {
    className?: string;
    images: Array<string>;
    size?: ThumbnailSize;
    md?: GridSize;
    sm?: GridSize;
    isError?: boolean;
    onError?: () => void;
    isDeletable?: boolean;
    handleChange: (imgs: Array<string>) => void;
    handleDelete?: (img: string) => void;
};
declare const MultipleImage: ({ className, isDeletable, images, onError, handleChange, handleDelete, size, md, sm, isError, }: MultipleImageProps) => any;
export default MultipleImage;
