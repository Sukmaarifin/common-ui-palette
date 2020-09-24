import React from 'react';
import { SnackbarContextType } from './SnackbarContext';
declare type PropsType = {
    snackbar: SnackbarContextType;
};
declare const withSnackbar: <P extends PropsType>(Component: React.ComponentType<P>) => React.SFC<Pick<P, Exclude<keyof P, "snackbar">>>;
export default withSnackbar;
