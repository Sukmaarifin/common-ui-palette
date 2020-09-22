import React from "react";
import clsx from "clsx";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import InputLabel, { InputLabelProps } from "@material-ui/core/InputLabel";
import { FormControl, FormHelperText, Grid } from "@material-ui/core";

import PriusTooltip from "../PriusTooltip";
import {
  QuestionCircleOutlinedIcon,
  CheckCircleOutlinedIcon,
  ExclamationCircleOutlinedIcon,
} from "../../icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > .MuiInputBase-root.Mui-error": {
        borderColor: theme.colors.failed,
      },
      "&.success": {
        "&> .MuiInputBase-root": {
          borderColor: theme.colors.success,
        },
        "&> .MuiFormLabel-root": {
          color: theme.colors.success,
        },
        "&> .MuiFormHelperText-root": {
          color: theme.colors.success,
        },
      },
    },
    select: {
      "& .MuiSelect-icon": {
        marginRight: "0.625rem",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "0.5rem",
      },
    },
    label: {
      color: theme.colors.text,
      fontSize: "0.8125rem",
      position: "relative",
      display: "inline-flex",
      marginBottom: "0.3125rem",
      marginLeft: "0.3125rem",
      transform: "scale(1)",
      "&.Mui-focused": {
        color: "initial",
      },
    },
    tooltipIcon: {
      marginLeft: theme.spacing(0.5),
    },
    helperText: {
      textTransform: "initial",
      display: "inline-flex",
      marginTop: "0.25rem",
      marginLeft: "0.3125rem",
      marginRight: "0.3125rem",
      "& .MuiSvgIcon-root": {
        marginRight: theme.spacing(0.5),
      },
    },
    gutterBottom: {
      marginBottom: theme.spacing(3),
    },
    toolbar: {
      "& > *": {
        marginLeft: theme.spacing(1),
      },
    },
  })
);

export type PriusFieldsetProps = {
  children: React.ReactNode;
  disabled?: boolean;
  fullWidth?: boolean;
  gutterBottom?: boolean;
  helperText?: string;
  inputId?: string;
  inputLabelProps?: Partial<InputLabelProps>;
  label?: string | React.ReactNode;
  labelId?: string;
  required?: boolean;
  status?: "normal" | "error" | "success";
  toolbar?: React.ReactNode;
  tooltipText?: React.ReactNode;
};

export const PriusFieldset: React.FunctionComponent<PriusFieldsetProps> = ({
  children,
  disabled = false,
  fullWidth = false,
  gutterBottom = true,
  helperText,
  inputId,
  inputLabelProps,
  label,
  labelId,
  required = false,
  status = "normal",
  toolbar,
  tooltipText,
}) => {
  const classes = useStyles();

  return (
    <FormControl
      disabled={disabled}
      error={status === "error"}
      fullWidth={fullWidth}
      required={required}
      className={clsx(
        classes.root,
        status === "success" ? "success" : undefined,
        gutterBottom ? classes.gutterBottom : undefined
      )}
    >
      {(label || toolbar) && (
        <Grid container justify="space-between">
          {label && (
            <Grid item>
              <InputLabel
                shrink
                htmlFor={inputId}
                id={labelId}
                className={classes.label}
                {...inputLabelProps}
              >
                {label}
                {tooltipText && (
                  <PriusTooltip placement="top" title={tooltipText}>
                    <QuestionCircleOutlinedIcon
                      fontSize="small"
                      className={classes.tooltipIcon}
                      tabIndex={0}
                    />
                  </PriusTooltip>
                )}
              </InputLabel>
            </Grid>
          )}
          {toolbar && (
            <Grid item className={classes.toolbar}>
              {toolbar}
            </Grid>
          )}
        </Grid>
      )}

      {children}

      {helperText && (
        <FormHelperText className={classes.helperText}>
          {status === "error" && (
            <ExclamationCircleOutlinedIcon fontSize="small" />
          )}
          {status === "success" && <CheckCircleOutlinedIcon fontSize="small" />}
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default PriusFieldset;
