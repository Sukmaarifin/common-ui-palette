import { createContext } from 'react';

import { AlertType } from '../../typings';

export type SnackbarContextType = {
  show: (
    message: string,
    severity?: AlertType['severity'],
    closable?: boolean,
    detail?: string
  ) => void;
};

const SnackbarContext = createContext<SnackbarContextType>({
  show: () => {},
});

export default SnackbarContext;
