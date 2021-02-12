import React, { ComponentType, SFC } from 'react';
import SnackbarContext, { SnackbarContextType } from './SnackbarContext';

type PropsType = {
  snackbar: SnackbarContextType;
};

const withSnackbar = <P extends PropsType>(
  Component: ComponentType<P>
): SFC<Pick<P, Exclude<keyof P, keyof PropsType>>> => (
  props: Pick<P, Exclude<keyof P, keyof PropsType>>
) => {
  return (
    <SnackbarContext.Consumer>
      {(snackbar) => <Component snackbar={snackbar} {...(props as P)} />}
    </SnackbarContext.Consumer>
  );
};

export default withSnackbar;
