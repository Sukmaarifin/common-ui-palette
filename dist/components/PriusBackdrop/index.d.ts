import React, { ReactElement } from 'react';
import { PopperProps } from '@material-ui/core/Popper';
export declare type PriusBackdropProps = {
    paperClassName?: string;
    placement: PopperProps['placement'];
    popperId: string;
    onClose?: () => void;
    onOpen?: () => void;
    renderTrigger: (anchorRef: any, handleToggle: () => void, handleClose?: () => void) => ReactElement;
    renderChildren?: (handleClose: (event: React.MouseEvent<Document, MouseEvent>) => void) => ReactElement;
    renderOnHover?: boolean;
};
export declare const PriusBackdropNew: React.FC<PriusBackdropProps>;
export default PriusBackdropNew;
