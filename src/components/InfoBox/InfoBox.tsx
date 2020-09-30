/**
 * @todo
 * Handle other severity if needed, for now it's unnecessary.
 */

import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core';

import { InfoSVG } from '../PriusSnackbar/assets';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alert: {
      color: theme.palette.text.primary,
      fontSize: '0.8125rem',
      border: '1px solid',
      borderTopWidth: '3px',
    },
    action: {
      alignItems: 'start',
      marginTop: theme.spacing(0.75),
    },
    info: {
      backgroundColor: '#D1F7FD',
      borderColor: '#75D5F8',
      borderTopColor: theme.palette.primary.main,
      marginBottom: theme.spacing(3.5),
    },
    root: {
      fontWeight: 700,
    },
  })
);

export type InfoBoxProps = {
  action?: React.ReactNode;
  message: React.ReactNode;
  title?: string;
};

const InfoBox = ({ action, message, title }: InfoBoxProps) => {
  const classes = useStyles();

  return (
    <Alert
      action={action}
      className={classes.alert}
      classes={{
        standardInfo: classes.info,
        action: classes.action,
      }}
      iconMapping={{
        info: <InfoSVG />,
      }}
      severity="info"
    >
      <AlertTitle
        classes={{
          root: classes.root,
        }}
      >
        {title}
      </AlertTitle>
      {message}
    </Alert>
  );
};

export default InfoBox;
