/// <reference types="react" />
import { PriusThumbnailProps } from '../PriusThumbnail';
declare type PriusDraggableImageProps = PriusThumbnailProps & {
    index: number;
    moveImage: (dragIndex: number, hoverIndex: number) => void;
};
declare const PriusDraggableImage: ({ altText, imageSource, size, onError, className, index, moveImage, }: PriusDraggableImageProps) => JSX.Element;
export default PriusDraggableImage;
