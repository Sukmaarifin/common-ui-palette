/// <reference types="react" />
import { AlertType } from '../../typings';
export declare type SnackbarContextType = {
    show: (message: string, severity?: AlertType['severity'], closable?: boolean, detail?: string) => void;
};
declare const SnackbarContext: import("react").Context<SnackbarContextType>;
export default SnackbarContext;
