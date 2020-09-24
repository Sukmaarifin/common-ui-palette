/// <reference types="react" />
import { FieldProps } from "../types";
export interface StatusFieldProps extends Omit<FieldProps, "sortOption"> {
}
declare function StatusField({ fixedWidth, record, source, style, width, }: StatusFieldProps): JSX.Element;
export default StatusField;
