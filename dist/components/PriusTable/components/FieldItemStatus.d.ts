/**
 * @todo unit testing
 */
/// <reference types="react" />
import { FieldProps } from '../../../components/PriusTable/types';
export declare type FieldItemStatusProps = {
    filter: string | boolean;
} & FieldProps;
declare function FieldItemStatus({ filter, fixedWidth, record, source, style, width, }: FieldItemStatusProps): JSX.Element;
export default FieldItemStatus;
