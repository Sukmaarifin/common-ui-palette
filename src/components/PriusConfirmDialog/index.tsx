/**
 * @todo
 * [ ] Unit Test
 * [ ] Storybook
 */

import React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

export type PriusConfirmDialogProps = Pick<ButtonProps, 'color' | 'variant'> & {
  id: string;
  isOpen: boolean;
  buttonActionTitle: string;
  buttonCancelTitle?: string;
  title: string;
  message: string | JSX.Element;
  onButtonClick: (value: boolean) => void;
};

const PriusConfirmDialog = ({
  id,
  isOpen,
  buttonActionTitle,
  buttonCancelTitle = 'Batal',
  title,
  message,
  color = 'primary',
  variant = 'contained',
  onButtonClick,
}: PriusConfirmDialogProps) => {
  return (
    <Dialog open={isOpen} maxWidth="xs" aria-labelledby={`${id}-dialog-title`}>
      <DialogTitle id={`${id}-dialog-title`}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText component="div">{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          id={`${id}-button-cancel`}
          data-identity={`${id}-button-cancel`}
          onClick={() => onButtonClick(false)}
        >
          {buttonCancelTitle}
        </Button>
        <Button
          style={{ minWidth: '7.5rem', borderRadius: '3px' }}
          id={`${id}-button-action`}
          data-identity={`${id}-button-action`}
          variant={variant}
          color={color}
          onClick={() => onButtonClick(true)}
        >
          {buttonActionTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PriusConfirmDialog;
