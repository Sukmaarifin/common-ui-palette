/// <reference types="react" />
import { FieldProps } from '../types';
export interface FieldNumberProps extends FieldProps {
    threshold?: number;
    thresholdedColor?: string;
}
declare function FieldNumber({ fixedWidth, record, source, style, threshold, thresholdedColor, width, }: FieldNumberProps): JSX.Element;
export default FieldNumber;
