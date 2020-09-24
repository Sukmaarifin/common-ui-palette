import React, { useState } from "react";
import Snackbar, { SnackbarProps } from "@material-ui/core/Snackbar";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Typography, Theme, IconButton } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";

import SnackbarContext from "./SnackbarContext";

import { AlertType } from "../../typings";

import { CloseIcon } from "../../icons";
import { SuccessSVG, ErrorSVG, WarningSVG, InfoSVG } from "./assets";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    alert: {
      color: theme.palette.text.primary,
      fontSize: "0.8125rem",
      border: "1px solid",
      borderTopWidth: "3px",
      maxWidth: "30rem",
    },
    action: {
      alignItems: "start",
      marginTop: theme.spacing(0.75),
    },
    error: {
      backgroundColor: "#FDE4D3",
      borderColor: "#EA715A",
      borderTopColor: theme.palette.secondary.main,
    },
    warning: {
      backgroundColor: "#FEF7D4",
      borderColor: "#FDE180",
      borderTopColor: "#FBC02D",
    },
    success: {
      backgroundColor: "#C9FBD1",
      borderColor: "#5DEA91",
      borderTopColor: theme.palette.success.main,
    },
    info: {
      backgroundColor: "#D1F7FD",
      borderColor: "#75D5F8",
      borderTopColor: theme.palette.primary.main,
    },
    closeButton: {
      padding: 0,
    },
  })
);

type SnackbarStateType = {
  open: boolean;
  severity?: AlertType["severity"];
  message?: string;
  closable?: boolean;
  detail?: string;
};

const SnackbarProvider = (props: SnackbarProps) => {
  const [snackbar, setSnackbar] = useState<SnackbarStateType>({
    message: undefined,
    open: false,
    severity: undefined,
    closable: false,
    detail: undefined,
  });
  const classes = useStyles();

  const { message, severity, open, detail, closable } = snackbar;

  const { children } = props;

  const show = (
    title: string,
    level?: AlertType["severity"],
    isClosable?: boolean,
    text?: string
  ) => {
    setSnackbar({
      open: true,
      message: title,
      severity: level,
      closable: isClosable,
      detail: text,
    });
  };

  const handleClose = () => {
    setSnackbar((prevState) => ({ ...prevState, open: false }));
  };

  const context = { show };

  return (
    <>
      <SnackbarContext.Provider value={context}>
        {children}
      </SnackbarContext.Provider>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        style={{ top: 64 }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          className={classes.alert}
          classes={{
            standardSuccess: classes.success,
            standardError: classes.error,
            standardInfo: classes.info,
            standardWarning: classes.warning,
            action: classes.action,
          }}
          iconMapping={{
            error: <ErrorSVG />,
            warning: <WarningSVG />,
            success: <SuccessSVG />,
            info: <InfoSVG />,
          }}
          elevation={6}
          action={
            closable ? (
              <IconButton
                className={classes.closeButton}
                id="snackbar-button-close"
                data-identity="snackbar-button-close"
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            ) : undefined
          }
          severity={severity}
        >
          {detail ? (
            <>
              <AlertTitle>{message}</AlertTitle>
              <Typography variant="inherit">{detail}</Typography>
            </>
          ) : (
            <>{message}</>
          )}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackbarProvider;
