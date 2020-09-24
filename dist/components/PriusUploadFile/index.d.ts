/// <reference types="react" />
import { StatusUploadType } from '../PriusIndicatorLabel';
export declare type PriusUploadFileProps = {
    onUploadFile: (files: any) => void;
    statusUpload: StatusUploadType;
    className?: string;
    id?: string;
};
declare const PriusUploadFile: ({ onUploadFile, statusUpload, className, id, }: PriusUploadFileProps) => JSX.Element;
export default PriusUploadFile;
