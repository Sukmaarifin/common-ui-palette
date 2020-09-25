/// <reference types="react" />
import { StatusUploadType } from '../PriusIndicatorLabel';
export declare type PriusFileUploaderProps = {
    onUploadFile: (files: any) => void;
    statusUpload: StatusUploadType;
    className?: string;
    id?: string;
};
declare const PriusFileUploader: ({ onUploadFile, statusUpload, className, id, }: PriusFileUploaderProps) => JSX.Element;
export default PriusFileUploader;
