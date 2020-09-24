import { ReactElement } from 'react';
import { FieldProps } from '../types';
declare type NotesBadgeProperties = {
    text: string;
    theme?: 'light' | 'dark';
    type?: 'primary' | 'error' | 'success' | 'warning';
    size?: 'small' | 'normal';
    backdropData?: ReactElement | string;
};
export declare type FieldText = {
    autoCapitalize?: boolean;
    description?: string;
    hrefSource?: string;
    hrefSourceParent?: string;
    hrefPrefix?: string;
    id?: string;
    notesBadge?: NotesBadgeProperties;
    tooltipText?: string;
    maxIndex?: number;
} & FieldProps;
declare const TextField: ({ autoCapitalize, description, fixedWidth, hrefPrefix, hrefSource, hrefSourceParent, id, notesBadge, record, source, style, tooltipText, width, maxIndex, }: FieldText) => JSX.Element;
export default TextField;
